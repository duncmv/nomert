import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { RevealGroup } from "@/components/ui/reveal";
import { propertyServices } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Property Services",
  description:
    "Property repairs, handyman services, painting & decorating, flooring, bathroom and kitchen refreshes, landlord refurbishments and garden improvements across London.",
};

export default function PropertyServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Property Services"
        title="Property maintenance, repairs & home improvements"
        description="Our primary focus: a full range of property services delivered by one accountable team, from a single repair to a full refurbishment."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Property Services" }]}
      />

      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {propertyServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                href={`/property-services/${service.slug}`}
              />
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaBanner
        title="Not sure which service you need?"
        description="Tell us what's going on with your property and we'll recommend the right service — no pressure, no obligation."
      />
    </>
  );
}
