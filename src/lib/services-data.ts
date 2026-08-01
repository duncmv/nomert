import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import {
  Wrench,
  Hammer,
  PaintRoller,
  SquaresFour,
  Bathtub,
  CookingPot,
  Buildings,
  Key,
  Tree,
  Broom,
  Building,
  SprayBottle,
  Sparkle,
  Drop,
  ClipboardText,
  ArrowsClockwise,
  CalendarCheck,
} from "@phosphor-icons/react/dist/ssr";

export type ServiceCategory = "property" | "cleaning" | "commercial";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  icon: Icon;
  imageKey: string;
}

export const propertyServices: Service[] = [
  {
    slug: "property-repairs",
    name: "Property Repairs",
    category: "property",
    shortDescription:
      "General repairs handled quickly and properly, from a sticking door to a leaking joint.",
    longDescription:
      "From a single loose fitting to a list of snagging items, our team diagnoses the issue and puts it right the first time. We treat every property the way we'd treat our own — tidy, careful, and finished properly.",
    highlights: [
      "Internal and external repairs",
      "Carpentry, plastering and general fabric repairs",
      "Fixtures, fittings and fault diagnosis",
      "Landlord and homeowner repair lists",
    ],
    icon: Wrench,
    imageKey: "propertyServicesHub",
  },
  {
    slug: "handyman-services",
    name: "Handyman Services",
    category: "property",
    shortDescription:
      "A reliable, multi-skilled team for the jobs your property needs — big or small.",
    longDescription:
      "Shelving, flat-pack assembly, door adjustments, mounting, sealing, fixing — our handyman team handles the full list in a single visit, so you're not coordinating multiple call-outs for one afternoon of work.",
    highlights: [
      "Single visit for multiple small jobs",
      "Furniture assembly and mounting",
      "Doors, locks, hinges and hardware",
      "General property upkeep",
    ],
    icon: Hammer,
    imageKey: "handyman",
  },
  {
    slug: "painting-decorating",
    name: "Painting & Decorating",
    category: "property",
    shortDescription:
      "Precise, clean-finished painting and decorating for interiors and exteriors.",
    longDescription:
      "A fresh coat of paint changes how a property feels in an afternoon. Our decorators prepare surfaces properly, protect what shouldn't be painted, and deliver a crisp, even finish — inside or out.",
    highlights: [
      "Interior and exterior painting",
      "Wallpaper removal and hanging",
      "Surface preparation and repair",
      "Colour consultation on request",
    ],
    icon: PaintRoller,
    imageKey: "painting",
  },
  {
    slug: "flooring-installation",
    name: "Flooring Installation",
    category: "property",
    shortDescription:
      "Supply and installation of quality flooring, fitted with a precise, lasting finish.",
    longDescription:
      "From laminate and engineered wood to vinyl and tiling, our team installs flooring with the preparation and attention to detail that makes the difference between a good finish and a great one.",
    highlights: [
      "Laminate, engineered wood and vinyl",
      "Tiling for kitchens and bathrooms",
      "Subfloor preparation and levelling",
      "Skirting and finishing details",
    ],
    icon: SquaresFour,
    imageKey: "flooring",
  },
  {
    slug: "bathroom-refreshes",
    name: "Bathroom Refreshes",
    category: "property",
    shortDescription:
      "Re-grouting, re-sealing, fixture swaps and full refreshes that modernise without a full rebuild.",
    longDescription:
      "Not every bathroom needs a full refurbishment. Our refresh service updates tiling, sealant, fixtures and finishes to bring a tired bathroom back to a premium standard, quickly and with minimal disruption.",
    highlights: [
      "Re-grouting and re-sealing",
      "Fixture and fitting replacement",
      "Tile repair and partial retiling",
      "Full refresh packages available",
    ],
    icon: Bathtub,
    imageKey: "whiteSubwayTileBathroomFinished",
  },
  {
    slug: "kitchen-refreshes",
    name: "Kitchen Refreshes",
    category: "property",
    shortDescription:
      "Cabinet, worktop and fixture updates that transform a kitchen without a full renovation.",
    longDescription:
      "A kitchen refresh — new worktops, repainted cabinetry, updated hardware and fixtures — delivers a renovated feel at a fraction of the disruption. We manage every stage in your home, start to finish.",
    highlights: [
      "Cabinet repainting and hardware updates",
      "Worktop replacement",
      "Splashback and tiling updates",
      "Appliance fitting",
    ],
    icon: CookingPot,
    imageKey: "kitchen",
  },
  {
    slug: "landlord-refurbishments",
    name: "Landlord Refurbishments",
    category: "property",
    shortDescription:
      "Full property refurbishments between tenancies, delivered to a consistent, lettable standard.",
    longDescription:
      "We refurbish rental properties to a standard that holds up — for viewings, for tenants, and for your next inspection. One team accountable for the entire scope, from quotation through to completion.",
    highlights: [
      "Full or partial refurbishment scopes",
      "Decoration, flooring and fixture renewal",
      "Compliance-ready finishing standards",
      "Turnaround planned around your letting schedule",
    ],
    icon: Buildings,
    imageKey: "landlordRefurb", // TODO: replace once real landlord refurbishment photos are supplied
  },
  {
    slug: "end-of-tenancy-repairs",
    name: "End of Tenancy Repairs",
    category: "property",
    shortDescription:
      "Snagging and repair lists resolved before handover, protecting deposits and deadlines.",
    longDescription:
      "Marks, damage, and wear-and-tear items are addressed properly before check-out or check-in, so the property changes hands in the condition it should. We work to the timelines that tenancy handovers demand.",
    highlights: [
      "Pre-handover snagging lists",
      "Wall, door and fixture repairs",
      "Fast turnaround for tight deadlines",
      "Reports available for landlords and agents",
    ],
    icon: Key,
    imageKey: "endOfTenancy",
  },
  {
    slug: "garden-improvements",
    name: "Garden Improvements",
    category: "property",
    shortDescription:
      "Tidy-ups, fencing, decking and general garden improvements that extend a property's kerb appeal.",
    longDescription:
      "Outdoor space is part of the property. We handle fencing repairs, decking, planting beds, jet-washing and general garden improvements to keep the exterior as presentable as the interior.",
    highlights: [
      "Fencing and gate repairs",
      "Decking and patio improvements",
      "Garden tidy-ups and jet-washing",
      "Planting and border maintenance",
    ],
    icon: Tree,
    imageKey: "garden",
  },
];

export const cleaningServices: Service[] = [
  {
    slug: "residential-cleaning",
    name: "Residential Cleaning",
    category: "cleaning",
    shortDescription: "Regular and one-off cleaning for homes, to a consistent, premium standard.",
    longDescription:
      "A dependable clean, every time. Our residential cleaning team follows a consistent checklist so your home is cared for the same way on every visit.",
    highlights: ["Regular or one-off visits", "Consistent checklist standard", "Vetted, insured team"],
    icon: SprayBottle,
    imageKey: "kitchenCabinetsCleanDetail",
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    category: "cleaning",
    shortDescription: "Scheduled cleaning for offices and commercial units, fitted around your hours.",
    longDescription:
      "Clean, presentable premises for staff and visitors alike, delivered on a schedule that works around your operating hours.",
    highlights: ["Flexible scheduling", "Office and retail units", "Consistent quality reporting"],
    icon: Building,
    imageKey: "commercialCleaning",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    category: "cleaning",
    shortDescription: "A thorough, top-to-bottom clean for homes and properties that need more than a routine visit.",
    longDescription:
      "Deep cleaning covers the detail a routine visit doesn't — behind appliances, inside cabinets, and every overlooked surface — leaving a property genuinely reset.",
    highlights: ["Full property deep clean", "Kitchen and bathroom detailing", "One-off or seasonal booking"],
    icon: Sparkle,
    imageKey: "fridgeInteriorDeepClean",
  },
  {
    slug: "end-of-tenancy-cleaning",
    name: "End of Tenancy Cleaning",
    category: "cleaning",
    shortDescription: "A move-out standard clean that supports a smooth handover and deposit return.",
    longDescription:
      "Our end of tenancy clean is built around the standard letting agents and landlords expect at check-out, helping the handover go smoothly for everyone involved.",
    highlights: ["Move-out standard checklist", "Kitchen and bathroom deep clean", "Fast turnaround between tenancies"],
    icon: Key,
    imageKey: "bedroomAfterClean5",
  },
  {
    slug: "communal-area-cleaning",
    name: "Communal Area Cleaning",
    category: "cleaning",
    shortDescription: "Scheduled cleaning for shared hallways, stairwells and communal building areas.",
    longDescription:
      "Communal spaces set the tone for an entire building. We keep hallways, stairwells, lifts and entrances to a consistent, presentable standard on a scheduled visit basis.",
    highlights: ["Hallways, stairwells and lobbies", "Scheduled recurring visits", "Managing agent reporting available"],
    icon: Buildings,
    imageKey: "communalLobbyFinished",
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    category: "cleaning",
    shortDescription: "Interior and exterior window cleaning for residential and commercial properties.",
    longDescription:
      "Streak-free window cleaning, inside and out, for homes and commercial premises — scheduled as a one-off or on a recurring basis.",
    highlights: ["Interior and exterior cleaning", "Residential and commercial", "One-off or recurring visits"],
    icon: Drop,
    imageKey: "windowCleaning",
  },
  {
    slug: "builders-cleans",
    name: "Builders Cleans",
    category: "cleaning",
    shortDescription: "Post-construction and post-renovation cleans that leave a property genuinely finished.",
    longDescription:
      "After the tools come out, dust and debris remain. Our builders clean service gets a newly finished or renovated property to a truly move-in ready standard.",
    highlights: ["Post-renovation and post-build", "Dust, debris and residue removal", "Move-in ready standard"],
    icon: Broom,
    imageKey: "propertyServicesHub",
  },
];

export const commercialServices: Service[] = [
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    category: "commercial",
    shortDescription: "Scheduled cleaning programmes for commercial premises of any size.",
    longDescription:
      "A consistent, scheduled cleaning programme for commercial premises, delivered by a team who understand what a professional working environment requires.",
    highlights: ["Scheduled cleaning programmes", "Office, retail and light industrial", "Consistent quality standards"],
    icon: Building,
    imageKey: "commercialCleaning",
  },
  {
    slug: "property-maintenance",
    name: "Property Maintenance",
    category: "commercial",
    shortDescription: "Ongoing maintenance for commercial buildings, keeping premises safe and presentable.",
    longDescription:
      "Ongoing maintenance cover for commercial buildings — general repairs, upkeep and presentation — delivered by one accountable team.",
    highlights: ["Ongoing maintenance cover", "Single point of accountability", "Scheduled site visits"],
    icon: Wrench,
    imageKey: "officeCorridorFinished",
  },
  {
    slug: "facilities-management",
    name: "Facilities Management",
    category: "commercial",
    shortDescription: "Day-to-day facilities support for commercial buildings and managed premises.",
    longDescription:
      "Day-to-day facilities support covering maintenance, cleaning and general upkeep, coordinated as a single service for the buildings you manage.",
    highlights: ["Day-to-day facilities support", "Maintenance and cleaning combined", "Scalable to contract size"],
    icon: ClipboardText,
    imageKey: "officeFloorDesksFinished",
  },
  {
    slug: "reactive-maintenance",
    name: "Reactive Maintenance",
    category: "commercial",
    shortDescription: "Fast-response repairs when something needs fixing now.",
    longDescription:
      "When something breaks, it needs fixing — not a queue. Our reactive maintenance service is built for fast response and prompt resolution on commercial premises.",
    highlights: ["Fast-response call-outs", "Fault diagnosis and repair", "Clear reporting after every visit"],
    icon: ArrowsClockwise,
    imageKey: "commercialPlasteringInProgress",
  },
  {
    slug: "planned-maintenance",
    name: "Planned Maintenance",
    category: "commercial",
    shortDescription: "Scheduled, preventative maintenance that keeps small issues from becoming large ones.",
    longDescription:
      "Preventative, scheduled maintenance visits that catch issues early — reducing downtime, reducing cost, and keeping commercial premises running properly.",
    highlights: ["Scheduled preventative visits", "Reduced reactive call-outs", "Maintenance planning and reporting"],
    icon: CalendarCheck,
    imageKey: "officeDeskAreaFinished",
  },
  {
    slug: "commercial-property-improvements",
    name: "Commercial Property Improvements",
    category: "commercial",
    shortDescription: "Upgrades and improvement works for commercial premises, delivered with minimal disruption.",
    longDescription:
      "From refreshed communal areas to full space improvements, we deliver commercial upgrade works with the planning and communication that minimises disruption to your operation.",
    highlights: ["Space and communal area upgrades", "Planned around operating hours", "One team, start to finish"],
    icon: Buildings,
    imageKey: "officeBrandedWallFinished",
  },
];

export const allServices: Service[] = [
  ...propertyServices,
  ...cleaningServices,
  ...commercialServices,
];

export function findService(category: ServiceCategory, slug: string): Service | undefined {
  return allServices.find((s) => s.category === category && s.slug === slug);
}
