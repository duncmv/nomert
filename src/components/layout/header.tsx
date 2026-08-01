"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { List, X, Phone } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 shrink-0">
            <Image src="/logo.png" alt="" fill className="object-contain" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-wide text-white">
              NOMERT
            </span>
            <span className="text-[0.65rem] font-medium tracking-[0.25em] text-gold uppercase">
              Property Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {siteConfig.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide whitespace-nowrap transition-colors",
                  active ? "text-gold" : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap text-white/85 hover:text-gold"
          >
            <Phone size={18} weight="fill" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <ButtonLink href="/contact" variant="primary" className="!py-3 shrink-0">
            Get a Quote
          </ButtonLink>
        </div>

        <ButtonLink href="/contact" variant="primary" className="hidden !py-3 shrink-0 lg:flex xl:hidden">
          Get a Quote
        </ButtonLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-dark lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-3.5 text-base font-medium text-white/85 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <ButtonLink
                href="/contact"
                variant="primary"
                className="mt-5"
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </ButtonLink>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
