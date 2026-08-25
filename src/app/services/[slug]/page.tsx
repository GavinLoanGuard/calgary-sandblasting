import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import QuickAnswers from "@/components/QuickAnswers";
import FaqAccordion from "@/components/FaqAccordion";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { BUSINESS_NAME } from "@/config/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-brand text-white">
        <Container className="py-14 lg:py-20">
          {service.comingSoon && (
            <span className="mb-4 inline-block rounded bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Coming Soon
            </span>
          )}
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
            {service.name} | {BUSINESS_NAME}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-200">{service.heroDescription}</p>
          <div className="mt-8">
            <CTAButton href="/contact">Request a Free Quote</CTAButton>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <QuickAnswers title="Quick Answer" items={[service.faqs[0]]} />
        </Container>
      </section>

      {service.keyPoints.length > 0 && (
        <section className="py-4">
          <Container>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand">
              What&apos;s Included
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white p-4">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-accent">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 011.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-steel-700">{point}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {service.process.length > 0 && (
        <section className="mt-12 bg-steel-50 py-16">
          <Container>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand">How It Works</h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, i) => (
                <li key={step} className="rounded-lg border border-steel-200 bg-white p-5">
                  <span className="font-heading text-2xl font-bold text-accent">{i + 1}</span>
                  <p className="mt-2 text-sm text-steel-700">{step}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {service.goodFor.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand">Good Fit For</h2>
            <ul className="mt-6 space-y-2">
              {service.goodFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-steel-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="bg-steel-50 py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          <PlaceholderPhoto label={`${service.shortName} — Before`} />
          <PlaceholderPhoto label={`${service.shortName} — After`} />
        </Container>
      </section>

      <section className="py-16">
        <Container className="rounded-lg border border-steel-200 bg-white p-8">
          <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-brand">
            {service.pricing.label} Pricing
          </h2>
          <p className="mt-2 font-heading text-2xl font-bold text-accent">{service.pricing.range}</p>
          <p className="mt-2 text-sm text-steel-600">{service.pricing.note}</p>
          <CTAButton href="/pricing" variant="secondary" className="mt-6">
            See Full Pricing
          </CTAButton>
        </Container>
      </section>

      {service.faqs.length > 0 && (
        <section className="bg-steel-50 py-16">
          <Container>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand">
              {service.name} FAQ
            </h2>
            <div className="mt-8">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand">
              Get a Quote for {service.shortName}
            </h2>
            <p className="mt-2 text-steel-600">
              Tell us about the job and we&apos;ll follow up with a firm quote and available time.
            </p>
          </div>
          <QuoteForm serviceContext={service.name} />
        </Container>
      </section>

      <JsonLd
        data={[
          serviceSchema({ name: service.name, description: service.metaDescription, slug: service.slug }),
          ...(service.faqs.length > 0 ? [faqPageSchema(service.faqs)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />
    </>
  );
}
