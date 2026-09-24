import { ImageResponse } from "next/og";

import { OG_IMAGE, SITE_CONFIG } from "@/constants";

export const alt = OG_IMAGE.alt;
export const size = { width: OG_IMAGE.width, height: OG_IMAGE.height };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0b0b",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, textTransform: "uppercase", fontWeight: 600 }}>{SITE_CONFIG.name}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 700, letterSpacing: -5, lineHeight: 0.95 }}>
          <span>Strategy.</span>
          <span>Creativity.</span>
          <span style={{ color: "#ff7a45" }}>Technology.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1a6" }}>{`Brand · Communication · Software · ${SITE_CONFIG.domain}`}</div>
      </div>
    ),
    size,
  );
}
