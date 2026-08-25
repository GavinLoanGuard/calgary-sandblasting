import Script from "next/script";
import { GA4_MEASUREMENT_ID, GOOGLE_ADS_CONVERSION_ID } from "@/config/site";

// Loads GA4 and, if configured, Google Ads' gtag.js — both are optional and
// no-op until NEXT_PUBLIC_GA4_MEASUREMENT_ID / NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
// are set as environment variables in Vercel.
export default function Analytics() {
  const gtagId = GA4_MEASUREMENT_ID || GOOGLE_ADS_CONVERSION_ID;
  if (!gtagId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA4_MEASUREMENT_ID ? `gtag('config', '${GA4_MEASUREMENT_ID}');` : ""}
          ${GOOGLE_ADS_CONVERSION_ID ? `gtag('config', '${GOOGLE_ADS_CONVERSION_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
