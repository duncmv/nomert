import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

export function TrustMarquee() {
  const items = [...siteConfig.trustBadges, ...siteConfig.trustBadges];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-navy-dark py-4">
      <div className="flex w-max animate-marquee gap-12">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center gap-12">
            {items.map((badge, i) => (
              <span
                key={`${rep}-${i}`}
                className="flex items-center gap-2.5 text-sm font-medium tracking-wide whitespace-nowrap text-white/60"
              >
                <ShieldCheck size={16} weight="fill" className="text-gold" />
                {badge}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
