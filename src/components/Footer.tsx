import Link from "next/link";
import {
  BASE_CITY,
  BASE_REGION,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  EMAIL,
  SERVICE_AREA_CITIES,
  SOCIAL_LINKS,
} from "@/config/site";
import { SERVICES } from "@/data/services";
import Container from "./Container";
import PhoneLink from "./PhoneLink";
import LogoMark from "./LogoMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-steel-300">
      <div className="hazard-band h-1.5 w-full" />
      <span className="grain" aria-hidden />

      <Container className="relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-heading text-lg font-bold uppercase tracking-tight text-steel-50">
            <LogoMark className="h-7" />
            {BUSINESS_NAME}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-steel-400">
            Mobile sandblasting for commercial equipment, fleets, and residential fences and decks. We come to you
            with a 185 CFM compressor and full blast rig — based in {BASE_CITY}, {BASE_REGION}.
          </p>
          <p className="mt-4">
            <PhoneLink className="font-heading text-lg font-bold text-steel-50 hover:text-hazard" />
          </p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${EMAIL}`} className="text-steel-400 hover:text-hazard">
              {EMAIL}
            </a>
          </p>
          <p className="mt-4 text-sm">
            <Link href="/about" className="text-steel-300 hover:text-hazard">
              About Us
            </Link>
          </p>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-hazard">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-steel-300 hover:text-hazard">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-hazard">Service Areas</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICE_AREA_CITIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="text-steel-300 hover:text-hazard">
                  Sandblasting {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-hazard">Hours</p>
          <ul className="mt-3 space-y-1 font-mono text-xs text-steel-400">
            {BUSINESS_HOURS.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
          {(SOCIAL_LINKS.facebook || SOCIAL_LINKS.instagram || SOCIAL_LINKS.googleBusinessProfile) && (
            <div className="mt-4 flex gap-4 text-sm">
              {SOCIAL_LINKS.googleBusinessProfile && (
                <a href={SOCIAL_LINKS.googleBusinessProfile} className="text-steel-300 hover:text-hazard">
                  Google
                </a>
              )}
              {SOCIAL_LINKS.facebook && (
                <a href={SOCIAL_LINKS.facebook} className="text-steel-300 hover:text-hazard">
                  Facebook
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a href={SOCIAL_LINKS.instagram} className="text-steel-300 hover:text-hazard">
                  Instagram
                </a>
              )}
            </div>
          )}
        </div>
      </Container>

      <div className="relative border-t border-white/10 py-4">
        <Container className="flex flex-col items-center justify-between gap-2 font-mono text-xs text-steel-500 sm:flex-row">
          <p>
            © {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p>Serving {SERVICE_AREA_CITIES.map((c) => c.name).join(" / ")}</p>
        </Container>
      </div>
    </footer>
  );
}
