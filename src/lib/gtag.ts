import { GOOGLE_ADS_CONVERSION_ID, GOOGLE_ADS_CONVERSION_LABEL } from "@/config/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires the Google Ads conversion event. Call this on successful quote-form
 * submission once NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID and
 * NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL are set — until then it's a no-op.
 */
export function fireQuoteConversion() {
  if (typeof window === "undefined" || !window.gtag) return;
  if (!GOOGLE_ADS_CONVERSION_ID || !GOOGLE_ADS_CONVERSION_LABEL) return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
  });
}
