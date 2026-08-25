import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15171A",
          color: "#F2C230",
          fontSize: 19,
          fontWeight: 800,
        }}
      >
        CS
      </div>
    ),
    { ...size }
  );
}
