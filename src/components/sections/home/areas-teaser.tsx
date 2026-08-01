import Link from "next/link";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

interface AreasTeaserProps {
  index?: string;
}

export function AreasTeaser({ index }: AreasTeaserProps) {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="flex flex-col items-center text-center">
        <SectionHeading
          index={index}
          eyebrow="Areas We Cover"
          title="Property services across South East London"
          align="center"
        />
        <Reveal className="mt-10 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {siteConfig.serviceAreas.map((area) => (
            <span
              key={area}
              className="flex items-center gap-2 rounded-full border border-navy/10 bg-cream px-4 py-2 text-sm font-medium text-navy"
            >
              <MapPin size={14} weight="fill" className="text-gold-dark" />
              {area}
            </span>
          ))}
        </Reveal>
        <p className="mt-8 text-sm text-mist">
          Don&apos;t see your area?{" "}
          <Link href="/contact" className="font-semibold text-gold-dark hover:text-navy">
            Get in touch
          </Link>{" "}
          — we may still be able to help.
        </p>
      </Container>
    </section>
  );
}
