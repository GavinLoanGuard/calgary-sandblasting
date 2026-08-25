import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { BUSINESS_NAME } from "@/config/site";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Sandblasting Services",
  description: `Every mobile sandblasting service ${BUSINESS_NAME} offers — trailer & equipment blasting, fleet & commercial prep, rust & paint removal, and fence & deck restoration.`,
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Lines"
        title="Sandblasting Services"
        description={`${BUSINESS_NAME} offers mobile sandblasting for commercial equipment, fleets, and residential surfaces across Calgary and area.`}
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="clip-plate group flex flex-col border-2 border-ink bg-white p-6 shadow-[4px_4px_0_0_theme(colors.ink.DEFAULT)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_theme(colors.ink.DEFAULT)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-rust">{String(i + 1).padStart(2, "0")}</span>
                  {service.comingSoon && (
                    <span className="clip-tag bg-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-hazard">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h2 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-ink group-hover:text-rust">
                  {service.shortName}
                </h2>
                <p className="mt-2 flex-1 text-base text-steel-600">{service.heroDescription}</p>
                <span className="mt-4 font-mono text-xs font-bold uppercase tracking-wide text-rust">
                  View Service →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
