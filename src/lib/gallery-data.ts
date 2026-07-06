export const galleryCategories = [
  "All",
  "Painting",
  "Bathrooms",
  "Flooring",
  "Repairs",
  "Cleaning",
  "Before & After",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  imageKey: string;
  category: Exclude<GalleryCategory, "All">;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  { imageKey: "painting", category: "Painting", caption: "Interior painting & decorating" },
  { imageKey: "bathroom", category: "Bathrooms", caption: "Marble bathroom refresh" },
  { imageKey: "flooring", category: "Flooring", caption: "Precision flooring installation" },
  { imageKey: "propertyServicesHub", category: "Repairs", caption: "Property refurbishment in progress" },
  { imageKey: "handyman", category: "Repairs", caption: "General property repairs" },
  { imageKey: "kitchen", category: "Repairs", caption: "Kitchen refresh" },
  { imageKey: "landlordRefurb", category: "Repairs", caption: "Landlord refurbishment" },
  { imageKey: "garden", category: "Repairs", caption: "Garden improvement works" },
  { imageKey: "endOfTenancy", category: "Repairs", caption: "End of tenancy repairs" },
  { imageKey: "cleaningHub", category: "Cleaning", caption: "Cleaning, done properly" },
  { imageKey: "residentialCleaning", category: "Cleaning", caption: "Residential cleaning" },
  { imageKey: "commercialCleaning", category: "Cleaning", caption: "Commercial cleaning" },
  { imageKey: "windowCleaning", category: "Cleaning", caption: "Window cleaning" },
  { imageKey: "gallery1", category: "Before & After", caption: "Rear extension — before & after" },
  { imageKey: "gallery2", category: "Before & After", caption: "Exterior renovation in progress" },
];
