import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { WhyChoose } from "@/components/sections/why-choose";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nomert Property Services is a London property maintenance, repairs and refurbishment company delivering every stage of the work directly, with no middlemen.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nomert"
        title="Property care you can hand over completely"
        description="Nomert Property Services is the customer-facing trading name of Nomert Facilities Management Ltd — a London property maintenance, repairs and refurbishment company."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Photo imageKey="about" className="aspect-[4/5] w-full" />
          </Reveal>
          <div>
            <SectionHeading
              index="01"
              eyebrow="Our Story"
              title="Property maintenance, without the usual hassle"
              description="Too many property jobs involve juggling multiple tradespeople, chasing quotes, and hoping the standard holds up. Nomert exists to remove that friction — one team, one point of contact, and a consistent standard across every visit."
            />
            <p className="mt-6 text-base leading-relaxed text-mist">
              We handle every stage of the works ourselves, from the first
              conversation through to completion — repairs, refurbishments, home
              improvements and the cleaning that supports them. When you hire Nomert,
              you&apos;re hiring the team that turns up and does the work.
            </p>
          </div>
        </Container>
      </section>

      <WhyChoose index="02" />

      <HowItWorks index="03" />

      <CtaBanner />
    </>
  );
}
