import type { Metadata } from "next";
import Container from "@/components/Container";
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
      <section className="bg-brand py-14 text-white lg:py-20">
        <Container>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
            Contact {BUSINESS_NAME}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-200">
            Tell us what needs blasting and where — we&apos;ll follow up with a firm quote and a time we can be on-site.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-brand">Request a Quote</h2>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg border border-steel-200 bg-steel-50 p-6">
              <h2 className="font-heading text-lg font-semibold text-brand">Call or Email</h2>
              <p className="mt-3">
                <PhoneLink className="font-heading text-2xl font-bold text-brand hover:text-accent" />
              </p>
              <p className="mt-2 text-sm">
                <a href={`mailto:${EMAIL}`} className="text-steel-600 hover:text-accent">
                  {EMAIL}
                </a>
              </p>

              <h3 className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-brand">Hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-steel-600">
                {BUSINESS_HOURS.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-brand">
                Service Area
              </h3>
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
