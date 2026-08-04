import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tristarnex — Global Threat Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "32px", height: "2px", background: "#00D2FF" }} />
          <span style={{ color: "#00D2FF", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Global Threat Intelligence
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              color: "#F0F4F8",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            We hunt threats.
          </div>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              color: "#00D2FF",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Before they hunt you.
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#8899AA",
              fontWeight: 300,
              maxWidth: "700px",
              lineHeight: 1.6,
              marginTop: "8px",
            }}
          >
            Enterprise-grade cybersecurity — threat detection, penetration testing,
            and incident response for businesses of every size.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: 900,
              color: "#F0F4F8",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            TRISTAR<span style={{ color: "#00D2FF" }}>NEX</span>
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            {["24/7 Monitoring", "<2s Detect", "AI-Assisted"].map((stat) => (
              <div
                key={stat}
                style={{
                  fontSize: "13px",
                  color: "#8899AA",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
