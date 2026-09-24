import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111111" }}>
        <div style={{ position: "relative", width: 100, height: 100, display: "flex" }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: 62, height: 62, border: "8px solid #fbfaf7" }} />
          <div style={{ position: "absolute", left: 38, top: 38, width: 62, height: 62, border: "8px solid #fbfaf7" }} />
          <div style={{ position: "absolute", left: 46, top: 46, width: 8, height: 8, background: "#ff7a45" }} />
        </div>
      </div>
    ),
    size,
  );
}
