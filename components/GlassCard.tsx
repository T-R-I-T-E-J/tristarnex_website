"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={cn(
        "group relative flex items-center justify-center bg-brand-bg-card border border-brand-border rounded-sm overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 210, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
      
      {/* cyan bottom border hover effect */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-cyan transition-all duration-500 ease-out group-hover:w-full z-20" />
    </motion.div>
  );
}
