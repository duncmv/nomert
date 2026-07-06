import { Hero } from "@/components/sections/home/hero";
import { TrustMarquee } from "@/components/ui/trust-marquee";
import { AboutTeaser } from "@/components/sections/home/about-teaser";
import { ServicesOverview } from "@/components/sections/home/services-overview";
import { GalleryTeaser } from "@/components/sections/home/gallery-teaser";
import { TestimonialsTeaser } from "@/components/sections/home/testimonials-teaser";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <AboutTeaser />
      <ServicesOverview />
      <GalleryTeaser />
      <TestimonialsTeaser />
      <CtaBanner />
    </>
  );
}
