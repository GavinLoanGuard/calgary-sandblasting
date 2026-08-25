import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS_NAME } from "@/config/site";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: `Before and after project photos from ${BUSINESS_NAME} — trailers, equipment, fences, and decks blasted on-site across Calgary and area.`,
  alternates: { canonical: "/gallery" },
};

const PLACEHOLDER_PROJECTS = SERVICES.filter((s) => !s.comingSoon).map((s) => s.shortName);

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand py-14 text-white lg:py-20">
        <Container>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
            Before &amp; After Gallery
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-200">
            Project photos are added as jobs are completed. This gallery will fill in with real before/after shots
            from Calgary-area jobs — check back soon, or ask to see recent work when you request a quote.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDER_PROJECTS.map((name) => (
              <div key={name} className="grid grid-cols-2 gap-2 rounded-lg border border-steel-200 bg-white p-3">
                <PlaceholderPhoto label={`${name} — Before`} />
                <PlaceholderPhoto label={`${name} — After`} />
                <p className="col-span-2 pt-1 text-center text-xs font-medium uppercase tracking-wide text-steel-500">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-steel-600">Have a job you&apos;d like blasted? We&apos;ll add it to the gallery when it&apos;s done.</p>
            <CTAButton href="/contact" className="mt-6">
              Request a Free Quote
            </CTAButton>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
    </>
  );
}
