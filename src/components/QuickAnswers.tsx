import { Faq } from "@/data/faq";

/**
 * Short, self-contained Q&A block for AEO — placed near the top of a page
 * so answer engines can lift a direct answer without scraping the whole page.
 */
export default function QuickAnswers({ items, title = "Quick Answers" }: { items: Faq[]; title?: string }) {
  return (
    <div className="rounded-lg border border-steel-200 bg-steel-50 p-6">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">{title}</p>
      <dl className="mt-3 space-y-4">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-heading font-semibold text-brand">{item.question}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-steel-700">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
