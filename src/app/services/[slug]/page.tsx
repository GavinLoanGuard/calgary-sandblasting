import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow={`${BUSINESS_NAME} · ${service.comingSoon ? "Coming Soon" : "Sandblasting Service"}`}
        title={service.name}
        description={service.heroDescription}
      >
        <div className="mt-8">
          <CTAButton href="/contact">Request a Free Quote</CTAButton>
        </div>
      </PageHero>

      <section className="py-12">
        <Container>
          <QuickAnswers title="Quick Answer" items={[service.faqs[0]]} />
        </Container>
      </section>

      {service.keyPoints.length > 0 && (
        <section className="py-4">
          <Container>
            <h2 className="border-b-2 border-ink pb-4 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
              What&apos;s Included
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.keyPoints.map((point, i) => (
                <li key={point} className="rivets clip-plate flex items-start gap-3 border border-ink/15 bg-white p-4">
                  <span className="font-mono text-xs font-bold text-rust">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base text-steel-700">{point}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {service.process.length > 0 && (
        <section className="mt-12 bg-steel-100 py-16">
          <Container>
            <h2 className="border-b-2 border-ink pb-4 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
              How It Works
            </h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, i) => (
                <li key={step} className="clip-plate border-2 border-ink bg-white p-5">
                  <span className="font-heading text-3xl font-black text-rust">{i + 1}</span>
                  <p className="mt-2 text-base text-steel-700">{step}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {service.goodFor.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="border-b-2 border-ink pb-4 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
              Good Fit For
            </h2>
            <ul className="mt-6 space-y-2">
              {service.goodFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-steel-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-hazard" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="bg-steel-100 py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          <PlaceholderPhoto label={`${service.shortName} — Before`} />
          <PlaceholderPhoto label={`${service.shortName} — After`} />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="clip-plate border-2 border-ink bg-white p-8">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-steel-500">
              {service.pricing.label}
            </p>
            <p className="mt-2 font-heading text-3xl font-black uppercase text-rust">{service.pricing.range}</p>
            <p className="mt-2 text-base text-steel-600">{service.pricing.note}</p>
            <CTAButton href="/pricing" variant="secondary" className="mt-6">
              See Full Pricing
            </CTAButton>
          </div>
        </Container>
      </section>

      {service.faqs.length > 0 && (
        <section className="bg-steel-100 py-16">
          <Container>
            <h2 className="border-b-2 border-ink pb-4 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
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
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-ink">
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
