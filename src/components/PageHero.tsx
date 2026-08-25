import { ReactNode } from "react";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <span className="grain" aria-hidden />
      <div className="hazard-band h-1.5 w-full" />
      <Container className="relative py-14 lg:py-20">
        {eyebrow && (
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-hazard">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-steel-300">{description}</p>}
        {children}
      </Container>
      <div className="hazard-band h-1.5 w-full" />
    </section>
  );
}
