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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand text-steel-200">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold uppercase tracking-tight text-white">{BUSINESS_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed">
            Mobile sandblasting for commercial equipment, fleets, and residential fences and decks. We come to you
            with a 185 CFM compressor and full blast rig — based in {BASE_CITY}, {BASE_REGION}.
          </p>
          <p className="mt-4">
            <PhoneLink className="font-heading text-lg font-bold text-white hover:text-accent" />
          </p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${EMAIL}`} className="hover:text-accent">
              {EMAIL}
            </a>
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Service Areas</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICE_AREA_CITIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="hover:text-accent">
                  Sandblasting {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Hours</p>
          <ul className="mt-3 space-y-1 text-sm">
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
                <a href={SOCIAL_LINKS.googleBusinessProfile} className="hover:text-accent">
                  Google
                </a>
              )}
              {SOCIAL_LINKS.facebook && (
                <a href={SOCIAL_LINKS.facebook} className="hover:text-accent">
                  Facebook
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a href={SOCIAL_LINKS.instagram} className="hover:text-accent">
                  Instagram
                </a>
              )}
            </div>
          )}
        </div>
      </Container>

      <div className="border-t border-white/10 py-4">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-steel-400 sm:flex-row">
          <p>
            © {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p>Serving {SERVICE_AREA_CITIES.map((c) => c.name).join(", ")}.</p>
        </Container>
      </div>
    </footer>
  );
}
