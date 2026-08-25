"use client";

import { useState } from "react";
import { Faq } from "@/data/faq";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`border-l-4 bg-white transition-colors ${isOpen ? "border-hazard" : "border-steel-200"}`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-steel-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-heading text-lg font-semibold uppercase tracking-tight text-ink">
                  {faq.question}
                </span>
              </span>
              <span
                className={`shrink-0 font-mono text-[10px] font-bold uppercase tracking-wide ${
                  isOpen ? "text-rust" : "text-steel-400"
                }`}
              >
                {isOpen ? "Close" : "Open"}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pl-11 text-base leading-relaxed text-steel-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
