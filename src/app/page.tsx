import { Hero } from "@/components/sections/home/hero";
import { TrustMarquee } from "@/components/ui/trust-marquee";
import { ServicesOverview } from "@/components/sections/home/services-overview";
import { GalleryTeaser } from "@/components/sections/home/gallery-teaser";
import { WhyChoose } from "@/components/sections/why-choose";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AreasTeaser } from "@/components/sections/home/areas-teaser";
import { AboutTeaser } from "@/components/sections/home/about-teaser";
import { TestimonialsTeaser } from "@/components/sections/home/testimonials-teaser";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesOverview />
      <GalleryTeaser />
      <WhyChoose index="03" showStats={false} />
      <HowItWorks index="04" />
      <AreasTeaser index="05" />
      <AboutTeaser />
      <TestimonialsTeaser />
      <CtaBanner />
    </>
  );
}
