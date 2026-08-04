"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface AttackData {
  id: number;
  start: THREE.Vector3;
  end: THREE.Vector3;
  colorStr: string;
  delay: number;
  speed: number;
}

interface ArcProps extends AttackData {
  onComplete: (id: number) => void;
}

interface ImpactProps {
  position: THREE.Vector3;
  color: THREE.Color;
  materialRef: React.RefObject<THREE.ShaderMaterial | null>;
}

const SPHERE_R = 3;
const TUBE_R   = 0.012; // slightly thinner for elegance

let attackIdCounter = 1000; // robust counter for unique IDs

// Helper to get random point on sphere
function randomPointOnSphere(radius: number) {
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos((Math.random() * 2) - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Generate the points for the curved trajectory
function makeCurve(n1: THREE.Vector3, n2: THREE.Vector3) {
  const points = [];
  const segments = 20;
  const distance = n1.distanceTo(n2);
  const currentLift = Math.max(0.05, distance * 0.12); // Dynamic height based on distance
  
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const currentPoint = new THREE.Vector3().lerpVectors(n1, n2, t).normalize();

    // Add arc lift
    const arcHeight = Math.sin(t * Math.PI) * currentLift;
    currentPoint.multiplyScalar(SPHERE_R + arcHeight);
    
    points.push(currentPoint);
  }
  return new THREE.CatmullRomCurve3(points);
}

// Custom shader for dynamic laser effect moving along the tube
const arcVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const arcFragmentShader = `
  uniform vec3 color;
  uniform float time;
  uniform float tailLength;
  varying vec2 vUv;
  void main() {
    float progress = time;
    // vUv.x represents length along the tube geometry
    float dist = progress - vUv.x;
    
    // Only render the 'tail' portion
    if (dist < 0.0 || dist > tailLength) {
      discard;
    }
    
    // Fade out tail
    float alpha = 1.0 - (dist / tailLength);
    
    // Round the blunt tip of the laser head
    alpha *= smoothstep(0.0, 0.02, dist);

    // Make edges softer based on circumference
    float edgeGlow = sin(vUv.y * 3.14159265);
    
    vec3 finalColor = mix(color, vec3(1.0), 0.3); // Brighten core
    gl_FragColor = vec4(finalColor, alpha * edgeGlow * 1.5);
  }
`;

// Arc component that handles its own animation lifecycle
function DynamicArc({ start, end, colorStr, delay, speed, id, onComplete }: ArcProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const originMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const isComplete = useRef(false);
  
  const { geometry, originGeo } = useMemo(() => {
    const curve = makeCurve(start, end);
    const geo = new THREE.TubeGeometry(curve, 16, TUBE_R, 3, false);
    const origin = new THREE.SphereGeometry(0.04, 5, 5);
    return { geometry: geo, originGeo: origin };
  }, [start, end]);

  // Prevent memory leaks by cleaning up manually created geometries
  useEffect(() => {
    return () => {
      geometry.dispose();
      originGeo.dispose();
    };
  }, [geometry, originGeo]);

  const color = useMemo(() => new THREE.Color(colorStr), [colorStr]);
  const uniforms = useMemo(() => ({
    color: { value: color },
    time: { value: -delay }, // Staggers the initial spawn
    tailLength: { value: 0.3 }
  }), [color, delay]);
  
  useFrame((state, delta) => {
    if (materialRef.current) {
      // Advance time. Progress goes from -delay to 1 + tailLength
      materialRef.current.uniforms.time.value += delta * speed;
      const t = materialRef.current.uniforms.time.value;
      
      // Control origin ping opacity so it doesn't float permanently
      if (originMatRef.current) {
         if (t > -0.2 && t < 0.5) {
           const p = Math.max(0, 1.0 - Math.abs(t - 0.1) * 4.0);
           originMatRef.current.opacity = p * 0.8;
         } else {
           originMatRef.current.opacity = 0;
         }
      }

      // When completely finished, signal parent to spawn a new attack exactly once
      if (t > 1.4 && !isComplete.current) {
        isComplete.current = true;
        onComplete(id);
      }
    }
  });

  return (
    <group>
      {/* Arc Laser */}
      <mesh geometry={geometry}>
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={arcVertexShader}
          fragmentShader={arcFragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Origin Ping */}
      <mesh position={start} geometry={originGeo}>
        <meshBasicMaterial ref={originMatRef} color={color} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Impact Flash - triggered when arc lands */}
      <ImpactNode position={end} color={color} materialRef={materialRef} />
    </group>
  );
}

// Handles the flash and ripple effect when a laser "hits" the globe
function ImpactNode({ position, color, materialRef }: ImpactProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshBasicMaterial>(null);
  
  useFrame(() => {
    if (materialRef.current && matRef.current && meshRef.current) {
      const time = materialRef.current.uniforms.time.value;
      // Trigger flash just before arc reaches the exact destination
      if (time > 0.9 && time < 1.3) {
        const progress = (time - 0.9) / 0.4; // 0 to 1 over explosion duration
        matRef.current.opacity = Math.max(0, (1.0 - progress) * 0.8);
        meshRef.current.scale.setScalar(1.0 + (progress * 7.0));
      } else {
        matRef.current.opacity = 0;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.04, 6, 6]} />
      <meshBasicMaterial ref={matRef} color={color} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

function AttackSphere() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => { 
    if (groupRef.current) {
      // Very slow continuous rotation
      groupRef.current.rotation.y += 0.001; 
    }
  });

  // Factory function to create a randomized attack
  const spawnAttack = (forcedDelay: number = 0): AttackData => {
    const r = Math.random();
    // 60% standard probe, 30% active threat, 10% critical attack
    let color = "#00d2ff"; // Cyan
    if (r > 0.6) color = "#f59e0b"; // Amber 
    if (r > 0.9) color = "#ff3b3b"; // Red

    const start = randomPointOnSphere(SPHERE_R);
    let end = randomPointOnSphere(SPHERE_R);
    
    // Prevent arcs from being impossibly short or crossing almost perfectly through pole
    while (start.distanceTo(end) < SPHERE_R * 0.6 || start.distanceTo(end) > SPHERE_R * 1.85) {
       end = randomPointOnSphere(SPHERE_R);
    }

    return {
      id: attackIdCounter++,
      start,
      end,
      colorStr: color,
      delay: forcedDelay + (Math.random() * 1.5),
      speed: 0.5 + Math.random() * 0.3,
    };
  };

  const [attacks, setAttacks] = useState<AttackData[]>(() => {
    const initial = [];
    for (let i = 0; i < 14; i++) {
      initial.push(spawnAttack(i * 0.2));
    }
    return initial;
  });

  // When an arc finishes playing, replace it with a new one
  const handleComplete = useCallback((id: number) => {
    setAttacks(prev => {
      // Remove finished
      const filtered = prev.filter(a => a.id !== id);
      // Spawn new one and assign a fresh unique ID
      return [...filtered, spawnAttack(0)];
    });
  }, []);

  return (
    <group ref={groupRef}>
      {/* Outer wireframe shell */}
      <Sphere args={[SPHERE_R + 0.015, 20, 20]}>
        <meshBasicMaterial color="#1a3b5c" wireframe transparent opacity={0.15} />
      </Sphere>

      {/* Depth-mask sphere */}
      <Sphere args={[SPHERE_R - 0.02, 20, 20]}>
        <meshBasicMaterial color="#050a10" depthWrite={true} />
      </Sphere>

      {/* Render active threats */}
      {attacks.map(attack => (
        <DynamicArc key={attack.id} {...attack} onComplete={handleComplete} />
      ))}
    </group>
  );
}

export function ThreeGlobe() {
  return (
    <div className="w-full h-full relative z-10 overflow-hidden">
      <div className="absolute inset-[-14%] cursor-move">
        <Canvas camera={{ position: [0, 0, 9], fov: 50 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.9} />
          <AttackSphere />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </div>
  );
}
