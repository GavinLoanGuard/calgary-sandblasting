import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { BUSINESS_NAME } from "@/config/site";
import { SERVICE_AREAS } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `${BUSINESS_NAME} provides mobile sandblasting across Calgary, Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore.`,
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasIndexPage() {
  return (
    <>
      <PageHero
        eyebrow={BUSINESS_NAME}
        title="Service Areas"
        description="A mobile operation based in Calgary, serving the surrounding communities on-site."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="clip-plate group flex flex-col border-2 border-ink bg-white p-6 shadow-[4px_4px_0_0_theme(colors.ink.DEFAULT)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_theme(colors.ink.DEFAULT)]"
              >
                <span className="clip-tag inline-flex w-fit items-center bg-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-hazard">
                  {city.driveTime}
                </span>
                <h2 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-ink group-hover:text-rust">
                  Sandblasting {city.name}
                </h2>
                <p className="mt-2 flex-1 text-base text-steel-600">{city.intro}</p>
                <span className="mt-4 font-mono text-xs font-bold uppercase tracking-wide text-rust">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
