import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse real photos of Nomert's completed bathroom, commercial and cleaning work across London, including before-and-after transformations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at the standard we work to"
        description="Real photos from real jobs — bathrooms, commercial fit-outs, cleaning and before-and-after transformations. More trades are added as new work is completed."
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
