"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/lib/gallery-data";
import { stockImages } from "@/lib/stock-images";
import { Photo } from "@/components/ui/photo";
import { cn } from "@/lib/utils";

function buildSrc(url: string, width: number) {
  const hasQuery = url.includes("?");
  return `${url}${hasQuery ? "&" : "?"}auto=format&fit=crop&w=${width}&q=85`;
}

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active]
  );

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;
  const currentImage = current ? stockImages[current.imageKey] : null;

  function show(delta: number) {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + delta + filtered.length) % filtered.length);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
              active === category
                ? "border-gold bg-gold text-navy"
                : "border-navy/15 text-navy hover:border-gold-dark hover:text-gold-dark"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={`${item.imageKey}-${i}`}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl text-left"
          >
            <Photo
              imageKey={item.imageKey}
              grounding={false}
              width={640}
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium text-white">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {current && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-dark/95 p-4 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                show(-1);
              }}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold sm:left-8"
              aria-label="Previous image"
            >
              <CaretLeft size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={buildSrc(currentImage.url, 1600)}
                alt={currentImage.alt}
                fill
                sizes="90vw"
                unoptimized
                className="rounded-lg object-contain"
              />
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                show(1);
              }}
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold sm:right-8"
              aria-label="Next image"
            >
              <CaretRight size={20} />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {current.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
