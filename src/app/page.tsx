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
      <section className="bg-brand text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <h1 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {BUSINESS_NAME} — Mobile Sandblasting That Comes To You
            </h1>
            <p className="mt-5 max-w-xl text-lg text-steel-200">
              We bring a 185 CFM compressor and full blast rig to your yard or job site. Two-person crew, on-site
              rust removal and surface prep for commercial equipment, fleets, and residential fences and decks
              across Calgary and area.
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
          <div className="grid grid-cols-2 gap-3">
            <PlaceholderPhoto label="Before / After — Trailer" className="col-span-2" aspect="aspect-[16/9]" />
            <PlaceholderPhoto label="Equipment Blasting" />
            <PlaceholderPhoto label="Fence Restoration" />
          </div>
        </Container>
      </section>

      {/* Quick answers — AEO */}
      <section className="py-12">
        <Container>
          <QuickAnswers items={HOME_FAQS.slice(0, 3)} />
        </Container>
      </section>

      {/* Services overview */}
      <section className="bg-steel-50 py-16">
        <Container>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl">
            What We Blast
          </h2>
          <p className="mt-2 max-w-2xl text-steel-600">
            Commercial and industrial equipment prep is our primary focus, with residential fence, deck, and rust
            removal work rounding out the schedule.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-lg border border-steel-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-brand group-hover:text-accent">
                  {service.shortName}
                  {service.comingSoon && (
                    <span className="ml-2 rounded bg-steel-200 px-2 py-0.5 text-xs font-medium normal-case text-steel-600">
                      Coming Soon
                    </span>
                  )}
                </h3>
                <p className="mt-2 flex-1 text-sm text-steel-600">{service.heroDescription}</p>
                <span className="mt-4 text-sm font-semibold text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Service areas */}
      <section className="py-16">
        <Container>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl">
            Where We Work
          </h2>
          <p className="mt-2 max-w-2xl text-steel-600">
            {BUSINESS_NAME} is based in Calgary and serves the surrounding communities on-site — no need to
            transport equipment into the city.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="rounded-lg border border-steel-200 bg-white px-5 py-4 font-heading font-semibold text-brand transition-colors hover:border-accent hover:text-accent"
              >
                Sandblasting {city.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery teaser */}
      <section className="bg-steel-50 py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl">
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
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl">
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
      <section className="bg-steel-50 py-16">
        <Container>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={HOME_FAQS} />
          </div>
          <div className="mt-6">
            <Link href="/faq" className="text-sm font-semibold text-accent hover:underline">
              See all FAQs →
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-16 text-white">
        <Container className="text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            Ready to get a quote?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-steel-200">
            Tell us what needs blasting and where — we&apos;ll follow up with a firm quote and a time we can be on-site.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">Request a Free Quote</CTAButton>
          </div>
        </Container>
      </section>

      <JsonLd data={faqPageSchema(HOME_FAQS)} />
    </>
  );
}
