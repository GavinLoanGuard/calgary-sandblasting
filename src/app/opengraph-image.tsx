import { ImageResponse } from "next/og";
import { BUSINESS_NAME } from "@/config/site";

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
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#1F2933",
          padding: "80px",
        }}
      >
        <div style={{ color: "#E8590C", fontSize: 28, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
          Mobile Sandblasting
        </div>
        <div
          style={{
            marginTop: 16,
            color: "#FFFFFF",
            fontSize: 64,
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          {BUSINESS_NAME}
        </div>
        <div style={{ marginTop: 24, color: "#CBD2D9", fontSize: 28 }}>
          Calgary · Airdrie · Cochrane · Okotoks · Chestermere · Strathmore
        </div>
      </div>
    ),
    { ...size }
  );
}
