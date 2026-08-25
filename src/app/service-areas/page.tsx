import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { BUSINESS_NAME } from "@/config/site";
import { SERVICE_AREAS } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `${BUSINESS_NAME} provides mobile sandblasting across Calgary, Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore.`,
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasIndexPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="font-heading text-3xl font-bold uppercase tracking-tight text-brand">Service Areas</h1>
        <p className="mt-3 max-w-2xl text-steel-600">
          {BUSINESS_NAME} is a mobile operation based in Calgary, serving the surrounding communities on-site.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="group flex flex-col rounded-lg border border-steel-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="font-heading text-lg font-semibold text-brand group-hover:text-accent">
                Sandblasting {city.name}
              </h2>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-steel-400">{city.driveTime}</p>
              <p className="mt-2 flex-1 text-sm text-steel-600">{city.intro}</p>
              <span className="mt-4 text-sm font-semibold text-accent">View details →</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
