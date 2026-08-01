import type { Metadata } from "next";
import { Phone, Buildings, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { RecentWorkStrip } from "@/components/sections/recent-work-strip";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { EnquiryForm } from "@/components/enquiry-form";
import { RevealGroup, Reveal } from "@/components/ui/reveal";
import { commercialServices } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import { workPhotos } from "@/lib/work-photos";

const commercialPhotos = workPhotos.filter((p) => p.category === "commercial");

export const metadata: Metadata = {
  title: "Commercial Services",
  description:
    "Commercial cleaning, property maintenance, facilities management, reactive and planned maintenance, and commercial property improvements across London.",
};

export default async function CommercialServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Commercial Services"
        title="Maintenance & facilities support for commercial premises"
        description="From single-site reactive maintenance to ongoing facilities contracts, we deliver commercial property services built to scale with your business."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Commercial Services" }]}
      />

      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((s) => (
              <ServiceCard
                key={s.slug}
                service={s}
                href={`/commercial-services?service=${encodeURIComponent(s.name)}#quote`}
              />
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
              <Buildings size={16} weight="bold" />
              Built to Scale
            </div>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready for larger contracts as your portfolio grows
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              Whether it&apos;s a single commercial unit or a portfolio of managed
              buildings, our commercial services are structured to expand with you —
              covering planned and reactive maintenance, facilities management and
              commercial improvement works under one contract.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-8">
            <TrendUp size={28} weight="bold" className="text-gold" />
            <p className="text-sm text-white/70">
              Speak to our team about a scheduled maintenance or facilities contract.
            </p>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-navy uppercase"
            >
              <Phone size={16} weight="fill" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </Reveal>
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
              Enquire about a commercial service
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist">
              Tell us about your premises and requirements — one-off, scheduled, or
              contract-based — and we&apos;ll come back with the right proposal.
            </p>
          </Reveal>
          <div className="rounded-2xl border border-navy/8 bg-cream p-8 shadow-[0_1px_2px_rgba(10,27,47,0.06)] sm:p-10">
            <EnquiryForm defaultService={service} />
          </div>
        </Container>
      </section>

      <RecentWorkStrip photos={commercialPhotos} title="Recent commercial work" tone="cream" limit={8} />

      <CtaBanner />
    </>
  );
}
