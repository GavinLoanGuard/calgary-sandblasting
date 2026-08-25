import { TRUST_SIGNALS } from "@/config/site";

export default function TrustBadges({ dark = true }: { dark?: boolean }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {TRUST_SIGNALS.map((signal, i) => (
        <li
          key={signal}
          className={`rivets clip-plate flex items-start gap-3 border px-4 py-3 ${
            dark ? "border-white/15 bg-white/5 text-steel-100" : "border-ink/15 bg-white text-steel-700"
          }`}
        >
          <span className={`font-mono text-xs font-bold ${dark ? "text-hazard" : "text-rust"}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-snug">{signal}</span>
        </li>
      ))}
    </ul>
  );
}
