/**
 * Single source of truth for NAP (Name, Address, Phone) and business data.
 * Every page, schema block, and component should pull from here — never
 * hardcode the business name, phone number, or service area elsewhere.
 *
 * Update PHONE_DISPLAY / PHONE_HREF once the real number is confirmed, and
 * the brand colors in tailwind.config.ts once they're finalized. Everything
 * else here (env-driven IDs) is wired to placeholders until real values are
 * supplied via environment variables.
 */

export const BUSINESS_NAME = "Calgary Sandblasting";

// Placeholder — replace with the confirmed business line.
export const PHONE_DISPLAY = "(403) 555-0123";
export const PHONE_HREF = "tel:+14035550123";

// Placeholder — replace once a dedicated inbox exists.
export const EMAIL = "info@calgarysandblasting.ca";

export const DOMAIN = "https://calgarysandblasting.ca";

// Mobile-only operation: no public storefront address. We serve the whole
// metro area from a home base in Calgary, AB, so schema uses areaServed
// rather than a walk-in street address.
export const BASE_CITY = "Calgary";
export const BASE_REGION = "AB";
export const BASE_COUNTRY = "CA";

export type ServiceAreaCity = {
  slug: string;
  name: string;
};

export const SERVICE_AREA_CITIES: ServiceAreaCity[] = [
  { slug: "calgary", name: "Calgary" },
  { slug: "airdrie", name: "Airdrie" },
  { slug: "cochrane", name: "Cochrane" },
  { slug: "okotoks", name: "Okotoks" },
  { slug: "chestermere", name: "Chestermere" },
  { slug: "strathmore", name: "Strathmore" },
];

export const SERVICE_AREA_NAMES = SERVICE_AREA_CITIES.map((c) => c.name);

// Placeholder hours — confirm before launch.
export const BUSINESS_HOURS = [
  { days: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "8:00 AM – 4:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

// schema.org opening hours spec format, kept in sync with BUSINESS_HOURS above.
export const OPENING_HOURS_SPEC = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
  { dayOfWeek: ["Saturday"], opens: "08:00", closes: "16:00" },
];

// Placeholder trust signals — swap in real coverage details once confirmed.
export const TRUST_SIGNALS = [
  "Fully insured mobile operation",
  "WCB coverage in place (confirming final documentation)",
  "185 CFM compressor, full blast rig on every job",
  "Two-person crew, on-site at your location",
];

export const SOCIAL_LINKS = {
  facebook: "", // e.g. "https://facebook.com/calgarysandblasting"
  instagram: "", // e.g. "https://instagram.com/calgarysandblasting"
  googleBusinessProfile: "", // paste the GBP short link once the listing is live
};

// Google Maps embed — replace the placeholder query with the verified
// service-area embed once the Google Business Profile is set up.
export const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_EMBED_API_KEY&q=Calgary,AB";
export const GOOGLE_MAPS_SEARCH_URL = "https://www.google.com/maps/search/?api=1&query=Calgary+Sandblasting";

// Tracking — all optional, all read from env so they can be set per
// environment (Vercel project settings) without touching code.
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "";
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || "";
export const GOOGLE_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "";

// Web3Forms — get a free access key at https://web3forms.com
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

// GBP service categories — keep this list mirroring the categories entered
// in the Google Business Profile so on-site and off-site signals match.
export const GBP_SERVICE_CATEGORIES = [
  "Sandblasting service",
  "Rust removal service",
  "Trailer & equipment cleaning",
  "Fence & deck restoration",
];
