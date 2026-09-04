import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS_NAME, SERVICE_AREA_CITIES } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${BUSINESS_NAME} is a dedicated mobile sandblasting operation serving Calgary and area — not a painting or concrete company with blasting bolted on. Here's how we work.`,
  alternates: { canonical: "/about" },
};

const PROCESS = [
  {
    title: "We're a specialist, not a side service",
    body: "A lot of sandblasting in Calgary gets done by painting companies, concrete crews, and trailer shops as one line item among many. Calgary Sandblasting does one thing: mobile abrasive blasting. That's the whole business, not an add-on to a bigger one.",
  },
  {
    title: "The rig comes to you",
    body: "185 CFM compressor, full blast rig, on the truck. We set up at your yard, job site, or property and tear down when we're done — nothing gets trailered across the city to a shop.",
  },
  {
    title: "Media matched to the job",
    body: "Steel and heavy rust get coarser media. Wood decks, fences, and thin panels get a gentler touch. We confirm the media and approach as part of your quote, not after we've already started.",
  },
  {
    title: "Contained on-site, cleaned up after",
    body: "The work area is contained before blasting starts, and the spent media and debris leave with us — not with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={BUSINESS_NAME}
        title="A Mobile Sandblasting Specialist"
        description="Calgary Sandblasting exists to do one job well: bring a real blast rig to your site and strip rust, paint, and old coatings without you having to go anywhere or clean up after."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href="/contact">Request a Free Quote</CTAButton>
        </div>
      </PageHero>

      <section className="py-14">
        <Container>
          <h2 className="border-b-2 border-ink pb-4 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
            How We&apos;re Different
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PROCESS.map((item, i) => (
              <div key={item.title} className="rivets clip-plate flex items-start gap-4 border border-ink/15 bg-white p-5">
                <span className="font-mono text-xs font-bold text-rust">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-heading text-lg font-bold uppercase tracking-tight text-ink">{item.title}</p>
                  <p className="mt-1 text-base text-steel-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-steel-100 py-16">
        <Container>
          <h2 className="border-b-2 border-ink pb-4 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
            What You&apos;re Getting
          </h2>
          <p className="mt-4 max-w-2xl text-steel-600">
            We&apos;re a newer name in Calgary, so we lead with what we can prove on day one instead of years in
            business we don&apos;t have yet.
          </p>
          <div className="mt-8">
            <TrustBadges dark={false} />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="border-b-2 border-ink pb-4 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
            Where We Work
          </h2>
          <p className="mt-4 max-w-2xl text-steel-600">
            Based in Calgary, on-site across the metro area — no shop to drive to, no trailer queue.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {SERVICE_AREA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="border-2 border-steel-300 px-4 py-2 text-sm font-medium text-steel-700 hover:border-ink hover:text-rust"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white">
        <Container className="text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            Have a job that needs blasting?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-steel-300">
            Tell us what it is and where — we&apos;ll follow up with a firm quote and a time we can be on-site.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">Request a Free Quote</CTAButton>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
    </>
  );
}
