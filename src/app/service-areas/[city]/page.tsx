import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow={`${BUSINESS_NAME} · ${city.driveTime}`}
        title={`Sandblasting ${city.name}`}
        description={city.intro}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href="/contact">Request a Free Quote</CTAButton>
        </div>
      </PageHero>

      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="border-b-2 border-ink pb-4 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
              Mobile Sandblasting in {city.name}
            </h2>
            <p className="mt-4 leading-relaxed text-steel-700">{city.localContext}</p>

            <h3 className="mt-8 font-heading text-lg font-semibold uppercase tracking-tight text-ink">
              What We Handle in {city.name}
            </h3>
            <ul className="mt-4 space-y-2">
              {city.focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 text-steel-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-hazard" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-lg font-semibold uppercase tracking-tight text-ink">
              Services Available in {city.name}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {SERVICES.filter((s) => !s.comingSoon).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="border-2 border-steel-300 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-ink hover:text-rust"
                >
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="clip-plate border-2 border-ink bg-steel-100 p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-wide text-rust">
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

      <section className="bg-steel-100 py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-ink">
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
          <h2 className="font-mono text-xs font-bold uppercase tracking-wide text-steel-500">Other Areas We Serve</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {SERVICE_AREAS.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="border-2 border-steel-300 px-4 py-2 text-sm font-medium text-steel-700 hover:border-ink hover:text-rust"
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
