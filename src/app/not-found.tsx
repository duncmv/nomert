import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy">
      <div className="bg-brand-pattern absolute inset-0 opacity-30" />
      <Container className="relative flex flex-col items-center py-24 text-center">
        <span className="relative h-16 w-16 shrink-0">
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </span>
        <p className="mt-8 font-serif text-lg text-gold italic">404</p>
        <h1 className="mt-3 text-balance font-display text-3xl font-bold text-white sm:text-4xl">
          This page has moved or doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-white/65">
          Let&apos;s get you back to somewhere useful — browse our services or head
          back to the homepage.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/" variant="primary">
            Back to Homepage
          </ButtonLink>
          <ButtonLink href="/property-services" variant="outline-light">
            View Services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
