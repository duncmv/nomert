"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { List, X, Phone, CaretDown } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type NavItem = (typeof siteConfig.nav)[number];
type DropdownItem = Extract<NavItem, { children: readonly unknown[] }>;

function isDropdown(item: NavItem): item is DropdownItem {
  return "children" in item;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    if (!servicesOpen) return;
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [servicesOpen]);

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

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => {
            if (isDropdown(item)) {
              const active = item.children.some((c) => pathname.startsWith(c.href));
              return (
                <div key={item.label} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    className={cn(
                      "flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors",
                      active || servicesOpen ? "text-gold" : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                    <CaretDown
                      size={13}
                      weight="bold"
                      className={cn("transition-transform", servicesOpen && "rotate-180")}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 mt-4 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-navy-dark shadow-2xl"
                      >
                        {item.children.map(
                          (child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setServicesOpen(false)}
                              className="block border-b border-white/5 px-5 py-4 transition-colors last:border-b-0 hover:bg-white/5"
                            >
                              <p className="text-sm font-semibold text-white">{child.label}</p>
                              <p className="mt-0.5 text-xs text-white/50">{child.description}</p>
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
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

        <div className="hidden items-center gap-4 lg:flex">
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
              {siteConfig.nav.map((item, i) => {
                if (isDropdown(item)) {
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="border-b border-white/5"
                    >
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        className="flex w-full items-center justify-between py-3.5 text-base font-medium text-white/85"
                      >
                        {item.label}
                        <CaretDown
                          size={16}
                          className={cn("transition-transform", mobileServicesOpen && "rotate-180")}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pb-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block py-2.5 pl-4 text-sm text-white/70 hover:text-gold"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
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
                );
              })}
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
