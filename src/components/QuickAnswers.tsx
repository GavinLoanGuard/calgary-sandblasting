import { Faq } from "@/data/faq";

/**
 * Short, self-contained Q&A block for AEO — placed near the top of a page
 * so answer engines can lift a direct answer without scraping the whole page.
 */
export default function QuickAnswers({ items, title = "Quick Answers" }: { items: Faq[]; title?: string }) {
  return (
    <div className="clip-plate border-2 border-ink bg-white p-6">
      <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-rust">
        <span className="h-1.5 w-1.5 bg-rust" />
        {title}
      </p>
      <dl className="mt-4 space-y-5">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-heading text-lg font-semibold uppercase tracking-tight text-ink">
              {item.question}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-steel-600">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
