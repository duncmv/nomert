import Link from "next/link";
import { Phone, WhatsappLogo, NotePencil } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-config";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-navy-dark/95 backdrop-blur-md lg:hidden">
      <a
        href={siteConfig.contact.phoneHref}
        className="flex flex-1 flex-col items-center gap-1 py-3 text-[0.65rem] font-semibold tracking-wide text-white/85 uppercase"
      >
        <Phone size={18} weight="fill" className="text-gold" />
        Call
      </a>
      <a
        href={siteConfig.contact.whatsappHref}
        className="flex flex-1 flex-col items-center gap-1 border-x border-white/10 py-3 text-[0.65rem] font-semibold tracking-wide text-white/85 uppercase"
      >
        <WhatsappLogo size={18} weight="fill" className="text-gold" />
        WhatsApp
      </a>
      <Link
        href="/contact"
        className="flex flex-1 flex-col items-center gap-1 bg-gold py-3 text-[0.65rem] font-semibold tracking-wide text-navy uppercase"
      >
        <NotePencil size={18} weight="fill" />
        Get Quote
      </Link>
    </div>
  );
}
