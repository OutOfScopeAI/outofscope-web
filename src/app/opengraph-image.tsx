import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OOS — Out of Scope AI Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: 64,
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 2,
                opacity: 0.7,
              }}
            >
              OUT OF SCOPE AI LABS
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                letterSpacing: -1,
              }}
            >
              OOS
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ fontSize: 32, opacity: 0.85 }}>
              Intelligence beyond boundaries.
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            opacity: 0.7,
          }}
        >
          <div style={{ display: "flex" }}>outofscope.ai</div>
          <div style={{ display: "flex" }}>hello@outofscope.ai</div>
        </div>
      </div>
    ),
    size
  );
}
