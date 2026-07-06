import { ArrowUpRight, SprayBottle, Buildings } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { RevealGroup } from "@/components/ui/reveal";
import { propertyServices } from "@/lib/services-data";

export function ServicesOverview() {
  const featured = propertyServices.slice(0, 6);

  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="02"
            eyebrow="Property Services"
            title="What we deliver, start to finish"
            description="Property maintenance is our primary focus — general repairs, refurbishments and home improvements delivered by one team, from quotation through to completion."
          />
          <ButtonLink href="/property-services" variant="outline-dark" className="shrink-0">
            View All Services
          </ButtonLink>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              href={`/property-services/${service.slug}`}
            />
          ))}
        </RevealGroup>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <SecondaryServiceCard
            href="/cleaning-services"
            icon={<SprayBottle size={20} weight="bold" />}
            imageKey="cleaningHub"
            title="Cleaning Services"
            description="Residential, commercial and specialist cleaning — offered as a supporting service alongside property maintenance."
          />
          <SecondaryServiceCard
            href="/commercial-services"
            icon={<Buildings size={20} weight="bold" />}
            imageKey="commercialBuilding"
            title="Commercial Services"
            description="Maintenance, facilities management and cleaning programmes for commercial premises, built to scale with your contract."
          />
        </div>
      </Container>
    </section>
  );
}

function SecondaryServiceCard({
  href,
  icon,
  imageKey,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  imageKey: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-navy/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(10,27,47,0.16)]"
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
        <Photo imageKey={imageKey} grounding={false} sizes="120px" width={240} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 text-gold-dark">
          {icon}
          <h3 className="font-display text-base font-semibold text-navy">{title}</h3>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-mist">{description}</p>
      </div>
      <ArrowUpRight
        size={18}
        weight="bold"
        className="shrink-0 self-start text-gold-dark transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
