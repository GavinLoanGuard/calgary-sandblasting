import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-rust">Error 404</p>
        <h1 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight text-ink">Page Not Found</h1>
        <p className="mt-4 text-steel-600">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex justify-center">
          <CTAButton href="/">Back to Home</CTAButton>
        </div>
      </Container>
    </section>
  );
}
