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
    "bg-accent text-white hover:bg-accent-dark focus-visible:outline-accent",
  secondary:
    "bg-white text-brand border-2 border-brand hover:bg-steel-50 focus-visible:outline-brand",
  ghost:
    "bg-transparent text-white border-2 border-white hover:bg-white/10 focus-visible:outline-white",
};

export default function CTAButton({ href, children, variant = "primary", className = "" }: Props) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${className}`;

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
