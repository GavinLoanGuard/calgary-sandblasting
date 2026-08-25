import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h1 className="font-heading text-3xl font-bold uppercase tracking-tight text-brand">Page Not Found</h1>
        <p className="mt-4 text-steel-600">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8">
          <CTAButton href="/">Back to Home</CTAButton>
        </div>
      </Container>
    </section>
  );
}
