import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          border: "24px solid rgba(0,0,0,0.04)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              border: "1px solid rgba(0,0,0,0.10)",
              background: "rgba(124,58,237,0.08)",
            }}
          />
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.8 }}>OOS</div>
        </div>

        <div>
          <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: -2.0, lineHeight: 1.05 }}>
            Intelligence beyond boundaries
          </div>
          <div style={{ marginTop: 16, fontSize: 22, color: "rgba(0,0,0,0.62)" }}>
            Out of Scope AI Labs — publications, solutions, lab.
          </div>
        </div>

        <div style={{ fontSize: 18, color: "rgba(0,0,0,0.55)" }}>outofscope.ai</div>
      </div>
    ),
    size
  );
}