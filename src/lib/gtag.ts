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

/**
 * Fires a plain GA4 event — independent of Google Ads conversion tracking,
 * so phone clicks and form submissions still show up in GA4 even before any
 * Ads conversion ID is configured. No-ops until NEXT_PUBLIC_GA4_MEASUREMENT_ID
 * (or an Ads ID) is set, same as the rest of Analytics.tsx.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
