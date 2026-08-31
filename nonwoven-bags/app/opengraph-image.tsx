import { ImageResponse } from "next/og";

export const alt =
  "Alorex Packaging LLP — Non Woven Bag Manufacturer, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph / Twitter card image for every route that doesn't
 * define its own — generated at build time rather than shipped as a
 * photo, so it stays in sync with the brand palette in globals.css.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#1c2840",
          color: "#faf8f4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <svg width="54" height="61" viewBox="0 0 60 68">
            <path
              d="M 15 28 Q 30 -10 45 28 L 40 28 Q 30 6 20 28 Z"
              fill="#c89b2e"
            />
            <path
              fillRule="evenodd"
              fill="#a8501d"
              d="M 15 28 L 4 66 L 56 66 L 45 28 Z M 20 28 L 12 60 L 48 60 L 40 28 Z"
            />
            <rect x="7" y="42" width="46" height="5.5" rx="1.5" fill="#a8501d" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 42, fontWeight: 700, letterSpacing: 4 }}>
              ALOREX
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 6,
                color: "#c89b2e",
              }}
            >
              PACKAGING LLP
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 40,
            fontWeight: 600,
            lineHeight: 1.25,
            maxWidth: 920,
          }}
        >
          Non Woven Bag Manufacturer, made in India
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 24,
            color: "#b9c0cf",
          }}
        >
          D-Cut · W-Cut · Loop Handle · Custom Printed · Bulk Supply
        </div>
      </div>
    ),
    { ...size }
  );
}
