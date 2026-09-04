"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS_NAME } from "@/config/site";
import Container from "./Container";
import PhoneLink from "./PhoneLink";
import CTAButton from "./CTAButton";
import LogoMark from "./LogoMark";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-steel-50">
      <div className="hazard-band h-1.5 w-full" />
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <LogoMark className="h-9" />
          <span className="font-heading text-lg font-bold uppercase leading-none tracking-tight text-ink sm:text-xl">
            {BUSINESS_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-semibold uppercase tracking-wide text-steel-600 transition-colors hover:text-rust"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <PhoneLink className="hidden font-heading text-base font-bold text-ink hover:text-rust sm:block" />
          <CTAButton href="/contact" className="hidden sm:inline-flex">
            Get a Quote
          </CTAButton>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="clip-tag inline-flex h-10 w-10 items-center justify-center border-2 border-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t-2 border-ink bg-steel-50 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-steel-700 hover:text-rust"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PhoneLink className="mt-2 px-2 font-heading text-base font-bold text-ink" />
            <CTAButton href="/contact" className="mt-2">
              Get a Quote
            </CTAButton>
          </Container>
        </div>
      )}
    </header>
  );
}
