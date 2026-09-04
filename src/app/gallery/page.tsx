import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import GalleryPhoto from "@/components/GalleryPhoto";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS_NAME } from "@/config/site";
import { GALLERY_PHOTOS } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Job Site Gallery",
  description: `Real job-site photos from ${BUSINESS_NAME} — trailers, equipment, fences, and decks blasted on-site across Calgary and area.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow={BUSINESS_NAME}
        title="Job Site Gallery"
        description="Photos shot mid-job across Calgary and area — more get added as work wraps up. Ask to see photos from your area when you request a quote."
      />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3">
            {GALLERY_PHOTOS.map((photo) =>
              photo.serviceSlug ? (
                <Link key={photo.src} href={`/services/${photo.serviceSlug}`} className="block">
                  <GalleryPhoto label={photo.label} src={photo.src} />
                </Link>
              ) : (
                <GalleryPhoto key={photo.src} label={photo.label} src={photo.src} />
              )
            )}
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
