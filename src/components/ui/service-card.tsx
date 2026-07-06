import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/lib/services-data";
import { Photo } from "@/components/ui/photo";
import { RevealItem } from "@/components/ui/reveal";

export function ServiceCard({ service, href }: { service: Service; href: string }) {
  const Icon = service.icon;
  return (
    <RevealItem className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-[0_1px_2px_rgba(10,27,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(10,27,47,0.18)]">
      <Link href={href} className="absolute inset-0 z-10" aria-label={service.name} />
      <div className="relative h-52 overflow-hidden">
        <Photo
          imageKey={service.imageKey}
          grounding={false}
          width={800}
          className="h-full w-full transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0" />
        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy shadow-lg">
          <Icon size={20} weight="bold" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-navy">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">
          {service.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition-colors group-hover:text-navy">
          Learn more
          <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </RevealItem>
  );
}
