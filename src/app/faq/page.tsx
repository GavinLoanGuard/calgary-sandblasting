import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
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
      <section className="bg-brand py-14 text-white lg:py-20">
        <Container>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-200">
            Direct answers about mobile sandblasting with {BUSINESS_NAME} — pricing, process, service area, and
            what we work on.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-steel-500">
            General Questions
          </h2>
          <div className="mt-4">
            <FaqAccordion faqs={GENERAL_FAQS} />
          </div>

          <h2 className="mt-12 font-heading text-lg font-semibold uppercase tracking-wide text-steel-500">
            Service-Specific Questions
          </h2>
          <div className="mt-4">
            <FaqAccordion faqs={SERVICE_FAQS} />
          </div>

          <div className="mt-12 text-center">
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
