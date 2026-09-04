import {
  BASE_CITY,
  BASE_COUNTRY,
  BASE_REGION,
  BUSINESS_NAME,
  DOMAIN,
  EMAIL,
  GBP_SERVICE_CATEGORIES,
  OPENING_HOURS_SPEC,
  PHONE_DISPLAY,
  SERVICE_AREA_NAMES,
  SOCIAL_LINKS,
} from "@/config/site";

const PHONE_E164 = PHONE_DISPLAY.replace(/[^\d+]/g, "");

/**
 * Core LocalBusiness JSON-LD, reused (with an @id) on every page so search
 * engines and AI answer engines resolve every mention back to one entity.
 * Name/phone must exactly match Google Business Profile — see src/config/site.ts.
 */
export function localBusinessSchema() {
  // Only include profile links that actually exist — an empty string would
  // otherwise emit an invalid sameAs URL. Populate SOCIAL_LINKS once the
  // Google Business Profile and social accounts are live and this fills in
  // automatically.
  const sameAs = Object.values(SOCIAL_LINKS).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${DOMAIN}/#business`,
    name: BUSINESS_NAME,
    image: `${DOMAIN}/images/gallery/fleet.png`,
    logo: `${DOMAIN}/images/logo-mark.png`,
    url: DOMAIN,
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BASE_CITY,
      addressRegion: BASE_REGION,
      addressCountry: BASE_COUNTRY,
    },
    areaServed: SERVICE_AREA_NAMES.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: OPENING_HOURS_SPEC.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    makesOffer: GBP_SERVICE_CATEGORIES.map((category) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: category,
      },
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    // Placeholder — replace with real aggregateRating once reviews exist.
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "5.0",
    //   reviewCount: "1",
    // },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${DOMAIN}/services/${opts.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${DOMAIN}/#business`,
      name: BUSINESS_NAME,
      telephone: PHONE_E164,
    },
    areaServed: SERVICE_AREA_NAMES.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${DOMAIN}${item.path}`,
    })),
  };
}
