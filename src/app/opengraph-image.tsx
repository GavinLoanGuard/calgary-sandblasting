import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { BUSINESS_NAME } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function getLogoDataUri() {
  const buf = readFileSync(join(process.cwd(), "public/images/logo-mark.png"));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

export default function OpengraphImage() {
  const logoSrc = getLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0E0E0E",
        }}
      >
        <div style={{ display: "flex", height: 14, width: "100%", background: "#FEC208" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "60px 80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
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
                color: "#FEC208",
                fontSize: 68,
                fontWeight: 800,
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              {BUSINESS_NAME}
            </div>
            <div style={{ display: "flex", marginTop: 28, color: "#AEA593", fontSize: 24 }}>
              Calgary · Airdrie · Cochrane · Okotoks · Chestermere · Strathmore
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#F6F5F2",
              borderRadius: 12,
              padding: "20px 26px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={280} height={166} alt="" />
          </div>
        </div>
        <div style={{ display: "flex", height: 14, width: "100%", background: "#FEC208" }} />
      </div>
    ),
    { ...size }
  );
}
