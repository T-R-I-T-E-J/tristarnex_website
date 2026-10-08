import { ImageResponse } from "next/og";
export const alt = "Tristarnex — Security response. Under your control.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraph() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#081722",
        color: "#f4f7f8",
        padding: 70,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 20,
          color: "#6ce4cd",
          letterSpacing: 4,
        }}
      >
        TRISTARNEX / SHIELDMSP
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -4,
          lineHeight: 1.08,
        }}
      >
        <span>Security response.</span>
        <span>Under your</span>
        <span style={{ color: "#6ce4cd" }}>control.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 19,
          color: "#9eb3c0",
        }}
      >
        <span>Rules first. AI assisted. Human controlled.</span>
        <span>MVP in development</span>
      </div>
    </div>,
    size,
  );
}
