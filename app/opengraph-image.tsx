import { ImageResponse } from "next/og";

export const alt = "My Train — Know where your train really is.";
export const size = { width: 1200, height: 630 };
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
          padding: "72px",
          backgroundColor: "#0B0C0F",
          backgroundImage:
            "linear-gradient(135deg, rgba(91,95,239,0.22), rgba(11,12,15,0) 45%), linear-gradient(315deg, rgba(139,95,230,0.22), rgba(11,12,15,0) 45%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: brand dot + status pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                backgroundImage: "linear-gradient(135deg, #5B5FEF, #8B5FE6)",
                display: "flex",
              }}
            />
            <div style={{ color: "#9AA0B4", fontSize: "30px", fontWeight: 700 }}>
              My Train
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#F5F6FA",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "999px",
                backgroundColor: "#22C55E",
                display: "flex",
              }}
            />
            In active development
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "92px",
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F5F6FA",
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "1000px",
            }}
          >
            Know where your train{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #5B5FEF, #8B5FE6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                marginLeft: "18px",
              }}
            >
              really is.
            </span>
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#9AA0B4",
              maxWidth: "860px",
              lineHeight: 1.35,
            }}
          >
            Official running status plus privacy-first, crowd-verified
            positioning from fellow passengers.
          </div>
        </div>

        {/* Bottom decorative timeline */}
        <div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", flex: 1 }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "999px",
                  backgroundImage: "linear-gradient(135deg, #5B5FEF, #8B5FE6)",
                  display: "flex",
                }}
              />
              {i < 3 ? (
                <div
                  style={{
                    flex: 1,
                    height: "4px",
                    backgroundImage:
                      "linear-gradient(90deg, #5B5FEF, rgba(139,95,230,0.3))",
                    display: "flex",
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
