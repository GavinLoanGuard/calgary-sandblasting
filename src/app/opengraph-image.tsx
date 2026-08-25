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
          background: "#15171A",
        }}
      >
        <div style={{ display: "flex", height: 14, width: "100%", background: "#F2C230" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "70px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#B8461F",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Mobile Sandblasting
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              color: "#F2C230",
              fontSize: 74,
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            {BUSINESS_NAME}
          </div>
          <div style={{ display: "flex", marginTop: 28, color: "#AEA593", fontSize: 26 }}>
            Calgary · Airdrie · Cochrane · Okotoks · Chestermere · Strathmore
          </div>
        </div>
        <div style={{ display: "flex", height: 14, width: "100%", background: "#F2C230" }} />
      </div>
    ),
    { ...size }
  );
}
