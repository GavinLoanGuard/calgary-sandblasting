import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import TrustBadges from "@/components/TrustBadges";
import QuoteForm from "@/components/QuoteForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { SERVICE_AREAS, getServiceAreaBySlug } from "@/data/service-areas";
import { SERVICES } from "@/data/services";
import { BUSINESS_NAME } from "@/config/site";

export function generateStaticParams() {
  return SERVICE_AREAS.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = getServiceAreaBySlug(params.city);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

export default function ServiceAreaPage({ params }: { params: { city: string } }) {
  const city = getServiceAreaBySlug(params.city);
  if (!city) notFound();

  return (
    <>
      <section className="bg-brand text-white">
        <Container className="py-14 lg:py-20">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            {city.driveTime}
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
            Sandblasting {city.name} | {BUSINESS_NAME}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-200">{city.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact">Request a Free Quote</CTAButton>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand">
              Mobile Sandblasting in {city.name}
            </h2>
            <p className="mt-4 leading-relaxed text-steel-700">{city.localContext}</p>

            <h3 className="mt-8 font-heading text-lg font-semibold text-brand">What We Handle in {city.name}</h3>
            <ul className="mt-4 space-y-2">
              {city.focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 text-steel-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-lg font-semibold text-brand">Services Available in {city.name}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {SERVICES.filter((s) => !s.comingSoon).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-md border border-steel-200 bg-white px-4 py-3 text-sm font-medium text-brand hover:border-accent hover:text-accent"
                >
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-steel-200 bg-steel-50 p-6">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand">
                Why {city.name} Chooses {BUSINESS_NAME}
              </p>
              <div className="mt-4">
                <TrustBadges dark={false} />
              </div>
            </div>
            <GoogleMapEmbed />
          </aside>
        </Container>
      </section>

      <section className="bg-steel-50 py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand">
              Get a Quote for {city.name}
            </h2>
            <p className="mt-2 text-steel-600">
              Tell us what needs blasting and where in {city.name} — we&apos;ll follow up with a firm quote.
            </p>
          </div>
          <QuoteForm serviceContext={`Service area: ${city.name}`} />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-heading text-lg font-semibold text-brand">Other Areas We Serve</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {SERVICE_AREAS.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="rounded-md border border-steel-200 px-4 py-2 text-sm font-medium text-steel-700 hover:border-accent hover:text-accent"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <JsonLd
        data={[
          serviceSchema({
            name: `Mobile Sandblasting in ${city.name}`,
            description: city.metaDescription,
            slug: `service-areas/${city.slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: city.name, path: `/service-areas/${city.slug}` },
          ]),
        ]}
      />
    </>
  );
}
