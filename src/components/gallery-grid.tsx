"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import {
  galleryCategories,
  galleryItems,
  beforeAfterGalleryPairs,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/gallery-data";
import { stockImages } from "@/lib/stock-images";
import { resolveImageSrc } from "@/lib/image-src";
import { Photo } from "@/components/ui/photo";
import { cn } from "@/lib/utils";

const BEFORE_AFTER_LABEL = "Before & After";

const beforeAfterLightboxItems: GalleryItem[] = beforeAfterGalleryPairs.flatMap((pair) => [
  { imageKey: pair.beforeKey, category: BEFORE_AFTER_LABEL, caption: pair.beforeCaption },
  { imageKey: pair.afterKey, category: BEFORE_AFTER_LABEL, caption: pair.afterCaption },
]);

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isBeforeAfter = active === BEFORE_AFTER_LABEL;

  const filtered = useMemo(
    () => (active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active]
  );

  const lightboxItems = isBeforeAfter ? beforeAfterLightboxItems : filtered;

  const current = lightboxIndex !== null ? lightboxItems[lightboxIndex] : null;
  const currentImage = current ? stockImages[current.imageKey] : null;
  const currentResolved = currentImage ? resolveImageSrc(currentImage.url, 1600) : null;

  function show(delta: number) {
    setLightboxIndex((i) => {
      if (i === null) return i;
      return (i + delta + lightboxItems.length) % lightboxItems.length;
    });
  }

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") show(-1);
      if (e.key === "ArrowRight") show(1);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, lightboxItems.length]);

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    counts.set("All", galleryItems.length);
    counts.set(BEFORE_AFTER_LABEL, beforeAfterGalleryPairs.length);
    for (const item of galleryItems) {
      counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
    }
    return counts;
  }, []);

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
            <span className={cn("ml-1.5", active === category ? "text-navy/60" : "text-mist")}>
              {categoryCounts.get(category) ?? 0}
            </span>
          </button>
        ))}
      </div>

      {isBeforeAfter ? (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {beforeAfterGalleryPairs.map((pair, pairIndex) => (
            <div key={pair.title + pairIndex}>
              <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-xl sm:gap-1.5">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(pairIndex * 2)}
                  className="group relative aspect-[4/5] overflow-hidden text-left"
                >
                  <Photo
                    imageKey={pair.beforeKey}
                    grounding={false}
                    width={480}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-navy-dark/85 px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
                    Before
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(pairIndex * 2 + 1)}
                  className="group relative aspect-[4/5] overflow-hidden text-left"
                >
                  <Photo
                    imageKey={pair.afterKey}
                    grounding={false}
                    width={480}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-navy uppercase">
                    After
                  </span>
                </button>
              </div>
              <p className="mt-3 text-sm font-medium text-navy">{pair.title}</p>
            </div>
          ))}
        </div>
      ) : (
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
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent px-3 pt-8 pb-3">
                <p className="text-xs leading-snug font-medium text-white sm:text-sm">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      )}

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
                src={currentResolved!.src}
                alt={currentImage.alt}
                fill
                sizes="90vw"
                unoptimized={currentResolved!.unoptimized}
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
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1">
              <p className="text-sm text-white/70">{current.caption}</p>
              {lightboxIndex !== null && (
                <p className="text-xs font-medium tracking-wide text-white/40 tabular-nums">
                  {lightboxIndex + 1} / {lightboxItems.length}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
