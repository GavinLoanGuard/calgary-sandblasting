import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import TrustBadges from "@/components/TrustBadges";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import QuickAnswers from "@/components/QuickAnswers";
import FaqAccordion from "@/components/FaqAccordion";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREA_CITIES } from "@/config/site";
import { SERVICES } from "@/data/services";
import { GENERAL_FAQS } from "@/data/faq";

const HOME_FAQS = GENERAL_FAQS.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <span className="grain" aria-hidden />
        <div className="hazard-band h-1.5 w-full" />
        <Container className="relative grid gap-12 py-14 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-hazard">
              <span className="h-1.5 w-1.5 bg-hazard" />
              185 CFM Rig · Fully Mobile · On-Site
            </p>
            <h1 className="font-heading text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">{BUSINESS_NAME}</span>
              <span className="block text-hazard">Comes To You.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-steel-300">
              We bring the compressor and blast rig to your yard or job site — rust removal and surface prep for
              commercial equipment, fleets, and residential fences and decks across Calgary and area.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/contact">Request a Free Quote</CTAButton>
              <CTAButton href={PHONE_HREF} variant="ghost">
                Call {PHONE_DISPLAY}
              </CTAButton>
            </div>
            <div className="mt-10">
              <TrustBadges />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-6">
            <PlaceholderPhoto label="Before / After — Trailer" className="col-span-2" aspect="aspect-[16/9]" />
            <PlaceholderPhoto label="Equipment Blasting" />
            <PlaceholderPhoto label="Fence Restoration" />
          </div>
        </Container>
        <div className="hazard-band h-1.5 w-full" />
      </section>

      {/* Quick answers — AEO */}
      <section className="py-14">
        <Container>
          <QuickAnswers items={HOME_FAQS.slice(0, 3)} />
        </Container>
      </section>

      {/* Services overview */}
      <section className="bg-steel-100 py-16">
        <Container>
          <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-4">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              What We Blast
            </h2>
            <span className="hidden font-mono text-xs uppercase tracking-widest text-steel-500 sm:block">
              {SERVICES.length} Service Lines
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-steel-600">
            Commercial and industrial equipment prep is our primary focus, with residential fence, deck, and rust
            removal work rounding out the schedule.
          </p>
          <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-ink group-hover:text-rust">
                  {service.shortName}
                </h3>
                <p className="mt-2 flex-1 text-base text-steel-600">{service.heroDescription}</p>
                <span className="mt-4 font-mono text-xs font-bold uppercase tracking-wide text-rust">
                  View Service →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Service areas */}
      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-4">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Where We Work
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-steel-600">
            {BUSINESS_NAME} is based in Calgary and serves the surrounding communities on-site — no need to
            transport equipment into the city.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group flex items-center gap-3 border-2 border-steel-300 bg-white px-4 py-3 transition-colors hover:border-ink"
              >
                <span className="clip-tag flex h-8 w-12 shrink-0 items-center justify-center bg-ink font-mono text-[10px] font-bold text-hazard">
                  {city.slug.slice(0, 3).toUpperCase()}
                </span>
                <span className="font-heading text-base font-semibold uppercase tracking-tight text-ink group-hover:text-rust">
                  Sandblasting {city.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery teaser */}
      <section className="bg-steel-100 py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink pb-4">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
                Before &amp; After
              </h2>
              <p className="mt-2 max-w-2xl text-steel-600">
                Project photos are being added as jobs are completed — check back or ask to see recent work when
                you request a quote.
              </p>
            </div>
            <CTAButton href="/gallery" variant="secondary">
              View Gallery
            </CTAButton>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            <PlaceholderPhoto label="Trailer — Before" />
            <PlaceholderPhoto label="Trailer — After" />
            <PlaceholderPhoto label="Fence — Before" />
            <PlaceholderPhoto label="Fence — After" />
          </div>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Transparent Pricing
            </h2>
            <p className="mt-3 text-steel-600">
              We quote in typical ranges, not vague estimates — see starting-at pricing for every service, then get
              a firm number once we&apos;ve seen the job.
            </p>
            <CTAButton href="/pricing" variant="secondary" className="mt-6">
              See Pricing Ranges
            </CTAButton>
          </div>
          <GoogleMapEmbed />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-steel-100 py-16">
        <Container>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={HOME_FAQS} />
          </div>
          <div className="mt-6">
            <Link href="/faq" className="font-mono text-xs font-bold uppercase tracking-wide text-rust hover:underline">
              See all FAQs →
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-ink py-16 text-white">
        <span className="grain" aria-hidden />
        <div className="hazard-band absolute inset-x-0 top-0 h-1.5" />
        <Container className="relative text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Ready to get a quote?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-steel-300">
            Tell us what needs blasting and where — we&apos;ll follow up with a firm quote and a time we can be on-site.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">Request a Free Quote</CTAButton>
          </div>
        </Container>
        <div className="hazard-band absolute inset-x-0 bottom-0 h-1.5" />
      </section>

      <JsonLd data={faqPageSchema(HOME_FAQS)} />
    </>
  );
}
