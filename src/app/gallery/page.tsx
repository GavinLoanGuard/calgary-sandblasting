import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow={BUSINESS_NAME}
        title="Before & After Gallery"
        description="Project photos are added as jobs are completed. This gallery will fill in with real before/after shots from Calgary-area jobs — check back soon, or ask to see recent work when you request a quote."
      />

      <section className="py-16">
        <Container>
          <div className="space-y-14">
            {PLACEHOLDER_PROJECTS.map((name) => (
              <div key={name}>
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-rust">{name}</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:max-w-lg">
                  <PlaceholderPhoto label={`${name} — Before`} />
                  <PlaceholderPhoto label={`${name} — After`} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t-2 border-ink pt-10 text-center">
            <p className="text-steel-600">
              Have a job you&apos;d like blasted? We&apos;ll add it to the gallery when it&apos;s done.
            </p>
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
