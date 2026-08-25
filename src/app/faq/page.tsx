import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { BUSINESS_NAME } from "@/config/site";
import { GENERAL_FAQS } from "@/data/faq";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers to common questions about ${BUSINESS_NAME} — mobile sandblasting, pricing, service area, and what surfaces we work on.`,
  alternates: { canonical: "/faq" },
};

const SERVICE_FAQS = SERVICES.flatMap((s) => s.faqs);

export default function FaqPage() {
  const allFaqs = [...GENERAL_FAQS, ...SERVICE_FAQS];

  return (
    <>
      <PageHero
        eyebrow={BUSINESS_NAME}
        title="Frequently Asked Questions"
        description="Direct answers about mobile sandblasting — pricing, process, service area, and what we work on."
      />

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="border-b-2 border-ink pb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-steel-500">
            General Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={GENERAL_FAQS} />
          </div>

          <h2 className="mt-14 border-b-2 border-ink pb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-steel-500">
            Service-Specific Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={SERVICE_FAQS} />
          </div>

          <div className="mt-14 border-t-2 border-ink pt-10 text-center">
            <p className="text-steel-600">Still have a question?</p>
            <CTAButton href="/contact" className="mt-4">
              Ask Us
            </CTAButton>
          </div>
        </Container>
      </section>

      <JsonLd
        data={[faqPageSchema(allFaqs), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])]}
      />
    </>
  );
}
