import { Check, Activity } from "lucide-react";
import { Brand } from "./Brand";
export function ControlPlane() {
  return (
    <div className="control-plane">
      <div className="plane-grid" />
      <div className="signal-card">
        <Activity size={18} />
        <div>
          Security signal<small>MICROSOFT DEFENDER</small>
        </div>
        <span className="signal-bars">
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
      <svg
        className="plane-svg"
        viewBox="0 0 650 540"
        fill="none"
        role="img"
        aria-label="Architecture concept: signals pass through rules, a safety gate, and bounded response. AI adds context on a separate branch."
      >
        <defs>
          <linearGradient
            id="plane-surface"
            x1="160"
            y1="150"
            x2="490"
            y2="340"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#174d53" stopOpacity=".7" />
            <stop offset="1" stopColor="#091a28" stopOpacity=".95" />
          </linearGradient>
          <linearGradient id="plane-edge" x1="100" y1="200" x2="490" y2="400">
            <stop stopColor="#71ead4" />
            <stop offset="1" stopColor="#235260" />
          </linearGradient>
        </defs>
        <path
          className="signal-path"
          d="M310 20V100 M100 230H170 M490 310H565V435H375"
          stroke="#73e3d0"
          strokeWidth="1.5"
          strokeDasharray="3 7"
        />
        <path
          d="M110 420L310 315L560 450 M75 355L310 230L575 370 M70 275L310 150L590 290"
          stroke="#183442"
        />
        {[0, 1, 2].map((n) => (
          <g key={n} transform={`translate(0 ${n * 73})`}>
            <path
              d="M157 178L327 87L502 178L327 274L157 178Z"
              fill="url(#plane-surface)"
              stroke="url(#plane-edge)"
              strokeWidth="1.2"
            />
            <path
              d="M157 178V192L327 288L502 192V178 M327 274V288"
              stroke="#386774"
            />
            <path
              d="M177 178L327 100L482 178L327 260L177 178Z"
              stroke="#42746e"
              strokeOpacity=".55"
            />
            <path
              d="M197 178L327 110L462 178L327 245L197 178Z"
              stroke="#38625f"
              strokeOpacity=".4"
            />
          </g>
        ))}
        <path
          d="M327 288V360 M327 182V253"
          stroke="#67dec7"
          strokeDasharray="2 5"
        />
        <circle cx="157" cy="178" r="4" fill="#79e5d4" />
        <circle cx="502" cy="251" r="4" fill="#79e5d4" />
        <circle cx="327" cy="420" r="4" fill="#79e5d4" />
        <path d="M155 250H89V310" stroke="#678493" strokeDasharray="4 5" />
        <text x="35" y="337" fill="#a7bac5" fontSize="12" letterSpacing="1">
          AI CONTEXT
        </text>
        <text x="35" y="356" fill="#647e8e" fontSize="11">
          ASSIST ONLY
        </text>
        <path d="M500 178H538 M500 250H538 M500 324H538" stroke="#5a8e89" />
        <text x="548" y="183" fill="#b8d7da" fontSize="12">
          RULES
        </text>
        <text x="548" y="255" fill="#76e3d0" fontSize="12">
          SAFETY
        </text>
        <text x="548" y="329" fill="#b8d7da" fontSize="12">
          RESPONSE
        </text>
      </svg>
      <div className="core-brand">
        <Brand compact />
      </div>
      <div className="plane-label">
        <span>ShieldMSP</span>
        <small>DECISION & RESPONSE LAYER</small>
      </div>
      <div className="verified-card">
        <span className="verified-icon">
          <Check size={18} />
        </span>
        <div>
          Response verified<small>STATE CONFIRMED · AUDIT RECORDED</small>
        </div>
      </div>
      <div className="visual-label mono">SIGNAL → DECISION → OUTCOME</div>
    </div>
  );
}
