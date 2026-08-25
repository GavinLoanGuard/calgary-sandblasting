import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import QuickAnswers from "@/components/QuickAnswers";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS_NAME } from "@/config/site";
import { SERVICES } from "@/data/services";
import { GENERAL_FAQS } from "@/data/faq";

export const metadata: Metadata = {
  title: "Sandblasting Pricing",
  description: `Typical pricing ranges for ${BUSINESS_NAME} services — trailer & equipment blasting, fleet & commercial jobs, rust & paint removal, and fence & deck restoration.`,
  alternates: { canonical: "/pricing" },
};

const PRICING_FAQ = GENERAL_FAQS.find((f) => f.question.includes("cost"));

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow={BUSINESS_NAME}
        title="Sandblasting Pricing"
        description="Every job is different, so we quote typical ranges up front and confirm a firm price once we've seen the scope — no guessing, no hidden fees."
      />

      {PRICING_FAQ && (
        <section className="py-12">
          <Container>
            <QuickAnswers items={[PRICING_FAQ]} />
          </Container>
        </section>
      )}

      <section className="pb-16">
        <Container>
          <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <div key={service.slug} className="rivets clip-plate border border-ink/15 bg-white p-6">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-rust">{String(i + 1).padStart(2, "0")}</span>
                  {service.comingSoon && (
                    <span className="clip-tag bg-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-hazard">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h2 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-ink">
                  {service.shortName}
                </h2>
                <p className="mt-2 font-heading text-2xl font-black uppercase text-rust">{service.pricing.range}</p>
                <p className="mt-2 text-sm text-steel-600">{service.pricing.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 clip-plate border-2 border-ink bg-steel-100 p-6">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wide text-steel-500">
              What Affects Your Quote
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-steel-700">
              <li className="flex gap-2">
                <span className="text-rust">—</span> Surface area and how much material needs to be removed
              </li>
              <li className="flex gap-2">
                <span className="text-rust">—</span> Substrate — wood, steel, aluminum — and its condition
              </li>
              <li className="flex gap-2">
                <span className="text-rust">—</span> Access to the site and setup/teardown time
              </li>
              <li className="flex gap-2">
                <span className="text-rust">—</span> Media type required for the surface
              </li>
              <li className="flex gap-2">
                <span className="text-rust">—</span> Single unit vs. multi-unit fleet or commercial jobs
              </li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <CTAButton href="/contact">Get a Firm Quote</CTAButton>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])} />
    </>
  );
}
