import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import PhoneLink from "@/components/PhoneLink";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS_HOURS, BUSINESS_NAME, EMAIL, SERVICE_AREA_CITIES } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: `Request a free sandblasting quote from ${BUSINESS_NAME}. Call or fill out the form and we'll follow up with pricing and scheduling.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={BUSINESS_NAME}
        title="Contact & Free Quote"
        description="Tell us what needs blasting and where — we'll follow up with a firm quote and a time we can be on-site."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-ink">Request a Quote</h2>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="clip-plate border-2 border-ink bg-steel-100 p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-wide text-rust">Call or Email</p>
              <p className="mt-3">
                <PhoneLink className="font-heading text-2xl font-bold text-ink hover:text-rust" />
              </p>
              <p className="mt-2 text-sm">
                <a href={`mailto:${EMAIL}`} className="text-steel-600 hover:text-rust">
                  {EMAIL}
                </a>
              </p>

              <p className="mt-6 font-mono text-xs font-bold uppercase tracking-wide text-rust">Hours</p>
              <ul className="mt-2 space-y-1 font-mono text-xs text-steel-600">
                {BUSINESS_HOURS.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-xs font-bold uppercase tracking-wide text-rust">Service Area</p>
              <p className="mt-2 text-sm text-steel-600">{SERVICE_AREA_CITIES.map((c) => c.name).join(", ")}</p>
            </div>

            <GoogleMapEmbed />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
    </>
  );
}
