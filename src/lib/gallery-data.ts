import { workPhotos, beforeAfterPairs, type WorkPhotoCategory } from "@/lib/work-photos";

/**
 * The public Gallery only ever shows real completed-work photography (see
 * work-photos.ts). Categories with no real photos yet (Painting, Flooring,
 * Property Repairs, Garden, Kitchen, Handyman) simply don't appear here —
 * showing stock photos as "our work" would misrepresent them. Once real
 * photos exist for a trade, add its category to CATEGORY_LABELS below and
 * it appears automatically.
 */
const CATEGORY_LABELS: Record<WorkPhotoCategory, string> = {
  "bathroom-refreshes": "Bathrooms",
  commercial: "Commercial",
  "end-of-tenancy-cleaning": "Cleaning",
  "communal-area-cleaning": "Cleaning",
  "deep-cleaning": "Cleaning",
  "residential-cleaning": "Cleaning",
};

const BEFORE_AFTER_LABEL = "Before & After";

export interface GalleryItem {
  imageKey: string;
  category: string;
  caption: string;
}

/**
 * The photo grid — every real photo, tagged by its actual trade. Before/after
 * source photos already appear here once each under their real category, so
 * the paired comparison view below doesn't duplicate them.
 */
export const galleryItems: GalleryItem[] = workPhotos.map((photo) => ({
  imageKey: photo.key,
  category: CATEGORY_LABELS[photo.category],
  caption: photo.caption,
}));

export const galleryCategories = [
  "All",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
  BEFORE_AFTER_LABEL,
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface BeforeAfterPair {
  title: string;
  beforeKey: string;
  afterKey: string;
  beforeCaption: string;
  afterCaption: string;
}

export const beforeAfterGalleryPairs: BeforeAfterPair[] = beforeAfterPairs.flatMap(({ before, after, title }) => {
  const beforePhoto = workPhotos.find((p) => p.key === before);
  const afterPhoto = workPhotos.find((p) => p.key === after);
  if (!beforePhoto || !afterPhoto) return [];
  return [
    {
      title,
      beforeKey: beforePhoto.key,
      afterKey: afterPhoto.key,
      beforeCaption: `${title} — before`,
      afterCaption: `${title} — after`,
    },
  ];
});
