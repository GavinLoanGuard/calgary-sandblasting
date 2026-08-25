import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { BUSINESS_NAME } from "@/config/site";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Sandblasting Services",
  description: `Every mobile sandblasting service ${BUSINESS_NAME} offers — trailer & equipment blasting, fleet & commercial prep, rust & paint removal, and fence & deck restoration.`,
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="font-heading text-3xl font-bold uppercase tracking-tight text-brand">
          Sandblasting Services
        </h1>
        <p className="mt-3 max-w-2xl text-steel-600">
          {BUSINESS_NAME} offers mobile sandblasting for commercial equipment, fleets, and residential surfaces
          across Calgary and area.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-lg border border-steel-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="font-heading text-lg font-semibold text-brand group-hover:text-accent">
                {service.shortName}
                {service.comingSoon && (
                  <span className="ml-2 rounded bg-steel-200 px-2 py-0.5 text-xs font-medium normal-case text-steel-600">
                    Coming Soon
                  </span>
                )}
              </h2>
              <p className="mt-2 flex-1 text-sm text-steel-600">{service.heroDescription}</p>
              <span className="mt-4 text-sm font-semibold text-accent">Learn more →</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
