import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { EnquiryForm } from "@/components/enquiry-form";
import { ServiceCard } from "@/components/ui/service-card";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { propertyServices, findService } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return propertyServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService("property", slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function PropertyServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = findService("property", slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = propertyServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} | ${siteConfig.brandName}`,
    description: service.longDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.brandName,
    },
    areaServed: "London, UK",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Property Services"
        title={service.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Property Services", href: "/property-services" },
          { label: service.name },
        ]}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Photo imageKey={service.imageKey} className="aspect-[4/3] w-full" priority />
          </Reveal>

          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
              <Icon size={26} weight="bold" />
            </span>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              {service.longDescription}
            </p>
            <ul className="mt-7 space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-navy">
                  <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-gold" />
                  <span className="text-[0.95rem] leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
            <a
              href="#quote"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-navy uppercase shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Request a Free Quote
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </Container>
      </section>

      <section id="quote" className="bg-cream py-24 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-gold-dark uppercase">
              <span className="font-serif text-base italic tracking-normal">05</span>
              <span className="h-px w-8 bg-gold-dark/40" />
              Get a Quote
            </div>
            <h2 className="text-balance font-display text-3xl font-semibold text-navy sm:text-4xl">
              Request your free {service.name.toLowerCase()} quote
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist">
              Share a few details about the property and the work required. Our team
              reviews every enquiry and comes back to you directly — no call centres,
              no middlemen.
            </p>
          </div>
          <div className="rounded-2xl border border-navy/8 bg-white p-8 shadow-[0_1px_2px_rgba(10,27,47,0.06)] sm:p-10">
            <EnquiryForm defaultService={service.name} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Related Property Services
          </h2>
          <RevealGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} href={`/property-services/${s.slug}`} />
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
