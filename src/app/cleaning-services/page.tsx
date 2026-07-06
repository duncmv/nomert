import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { EnquiryForm } from "@/components/enquiry-form";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { cleaningServices } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Residential, commercial, deep, end of tenancy, communal area and window cleaning services in London — delivered alongside our property maintenance work.",
};

export default async function CleaningServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Cleaning Services"
        title="Cleaning, delivered to the same standard as everything else we do"
        description="Cleaning is part of the Nomert offering — a supporting service alongside property maintenance, delivered by the same accountable team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cleaning Services" }]}
      />

      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cleaningServices.map((s) => (
              <ServiceCard
                key={s.slug}
                service={s}
                href={`/cleaning-services?service=${encodeURIComponent(s.name)}#quote`}
              />
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section id="quote" className="bg-white py-24 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-gold-dark uppercase">
              <span className="h-px w-8 bg-gold-dark/40" />
              Get a Quote
            </div>
            <h2 className="text-balance font-display text-3xl font-semibold text-navy sm:text-4xl">
              Request a free cleaning quote
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist">
              Let us know which cleaning service you need and a little about the
              property, and we&apos;ll come back with a free, no-obligation quote.
            </p>
          </Reveal>
          <div className="rounded-2xl border border-navy/8 bg-cream p-8 shadow-[0_1px_2px_rgba(10,27,47,0.06)] sm:p-10">
            <EnquiryForm defaultService={service} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
