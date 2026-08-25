import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const VARIANTS: Record<string, string> = {
  primary:
    "bg-hazard text-ink shadow-[4px_4px_0_0_theme(colors.ink.DEFAULT)] hover:bg-hazard-dim focus-visible:outline-ink",
  secondary:
    "bg-steel-50 text-ink border-2 border-ink shadow-[4px_4px_0_0_theme(colors.ink.DEFAULT)] hover:bg-ink hover:text-steel-50 focus-visible:outline-ink",
  ghost:
    "bg-transparent text-hazard border-2 border-hazard shadow-[4px_4px_0_0_theme(colors.hazard.DEFAULT)] hover:bg-hazard hover:text-ink focus-visible:outline-hazard",
};

export default function CTAButton({ href, children, variant = "primary", className = "" }: Props) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  const classes = `clip-tag inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
