import { TRUST_SIGNALS } from "@/config/site";

export default function TrustBadges({ dark = true }: { dark?: boolean }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {TRUST_SIGNALS.map((signal) => (
        <li
          key={signal}
          className={`flex items-start gap-2 text-sm ${dark ? "text-steel-100" : "text-steel-700"}`}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-accent">
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 011.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{signal}</span>
        </li>
      ))}
    </ul>
  );
}
