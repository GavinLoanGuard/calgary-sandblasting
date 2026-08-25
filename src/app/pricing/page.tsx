import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
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
      <section className="bg-brand py-14 text-white lg:py-20">
        <Container>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
            Sandblasting Pricing
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-200">
            Every job is different, so we quote typical ranges up front and confirm a firm price once we&apos;ve seen
            the scope — no guessing, no hidden fees.
          </p>
        </Container>
      </section>

      {PRICING_FAQ && (
        <section className="py-12">
          <Container>
            <QuickAnswers items={[PRICING_FAQ]} />
          </Container>
        </section>
      )}

      <section className="pb-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <div key={service.slug} className="rounded-lg border border-steel-200 bg-white p-6">
                <h2 className="font-heading text-lg font-semibold text-brand">
                  {service.shortName}
                  {service.comingSoon && (
                    <span className="ml-2 rounded bg-steel-200 px-2 py-0.5 text-xs font-medium normal-case text-steel-600">
                      Coming Soon
                    </span>
                  )}
                </h2>
                <p className="mt-2 font-heading text-xl font-bold text-accent">{service.pricing.range}</p>
                <p className="mt-2 text-sm text-steel-600">{service.pricing.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-steel-200 bg-steel-50 p-6">
            <h2 className="font-heading text-lg font-semibold text-brand">What Affects Your Quote</h2>
            <ul className="mt-4 space-y-2 text-sm text-steel-700">
              <li>• Surface area and how much material needs to be removed</li>
              <li>• Substrate — wood, steel, aluminum — and its condition</li>
              <li>• Access to the site and setup/teardown time</li>
              <li>• Media type required for the surface</li>
              <li>• Single unit vs. multi-unit fleet or commercial jobs</li>
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
