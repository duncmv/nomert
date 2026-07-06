import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of painting, bathroom, flooring, repair, cleaning and before-and-after property projects across London.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at the standard we work to"
        description="Painting, bathrooms, flooring, repairs, cleaning and before-and-after transformations from recent projects."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
