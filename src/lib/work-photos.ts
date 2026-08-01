/**
 * Real completed-work photography supplied by Nomert, triaged and organised
 * from the raw WhatsApp export. Categories match the service/cleaning slugs
 * in services-data.ts where a direct match exists; "commercial" is a general
 * bucket covering the office/facilities photo set.
 *
 * Coverage is partial by design — only bathroom-refreshes, commercial, and a
 * few cleaning categories have real photos so far. Everything else still
 * needs photos from the client before it can appear as "our work" anywhere
 * on the site.
 */

export type WorkPhotoCategory =
  | "bathroom-refreshes"
  | "commercial"
  | "end-of-tenancy-cleaning"
  | "communal-area-cleaning"
  | "deep-cleaning"
  | "residential-cleaning";

export interface WorkPhoto {
  key: string;
  category: WorkPhotoCategory;
  src: string;
  alt: string;
  caption: string;
  role?: "before" | "after";
}

const BASE = "/images/work";

export const workPhotos: WorkPhoto[] = [
  // --- Bathroom refreshes -------------------------------------------------
  {
    key: "marbleBathroomTilingInProgress1",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/marble-bathroom-tiling-in-progress-01.webp`,
    alt: "Marble bathroom mid-tiling with spacers in place",
    caption: "Marble bathroom — tiling in progress",
    role: "before",
  },
  {
    key: "marbleBathroomTilingInProgress2",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/marble-bathroom-tiling-in-progress-02.webp`,
    alt: "Marble bathroom shower tiling in progress, floor substrate visible",
    caption: "Marble bathroom — tiling in progress",
    role: "before",
  },
  {
    key: "marbleBathroomFinished1",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/marble-bathroom-finished-01.webp`,
    alt: "Finished marble bathroom with shower, toilet and towel rail",
    caption: "Marble bathroom — finished",
    role: "after",
  },
  {
    key: "marbleBathroomFinished2",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/marble-bathroom-finished-02.webp`,
    alt: "Wide view of finished marble bathroom including vanity",
    caption: "Marble bathroom — finished",
    role: "after",
  },
  {
    key: "bathroomStripOutBefore1",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/bathroom-strip-out-before-01.webp`,
    alt: "Bathroom stripped back to bare board before refurbishment",
    caption: "Bathroom strip-out, before refurbishment",
    role: "before",
  },
  {
    key: "bathroomStripOutBefore2",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/bathroom-strip-out-before-02.webp`,
    alt: "Gutted bathroom with old toilet and tools present, before refurbishment",
    caption: "Bathroom strip-out, before refurbishment",
    role: "before",
  },
  {
    key: "bathroomFirstFixPipework",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/bathroom-first-fix-pipework-01.webp`,
    alt: "Bathroom first fix with stud wall and pipework being installed",
    caption: "Bathroom refurbishment — first fix pipework",
    role: "before",
  },
  {
    key: "greenTileBathroomFinished1",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/green-tile-bathroom-finished-01.webp`,
    alt: "Finished green tiled bathroom with black shower screen",
    caption: "Bathroom refurbishment — finished",
    role: "after",
  },
  {
    key: "greenTileBathroomFinished2",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/green-tile-bathroom-finished-02.webp`,
    alt: "Finished green tiled bathroom, toilet-focused angle",
    caption: "Bathroom refurbishment — finished",
    role: "after",
  },
  {
    key: "greenTileBathroomShowerDetail",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/green-tile-bathroom-shower-detail.webp`,
    alt: "Close-up of finished shower valve and head in green tiled bathroom",
    caption: "Bathroom refurbishment — finishing detail",
    role: "after",
  },
  {
    key: "greenTileBathroomVanity",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/green-tile-bathroom-vanity.webp`,
    alt: "Green bathroom vanity and chrome towel radiator, finished",
    caption: "Bathroom refurbishment — finished",
    role: "after",
  },
  {
    key: "bathroomBeforeRefurbishment1",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/bathroom-before-refurbishment-01.webp`,
    alt: "Old attic bathroom before refurbishment",
    caption: "Bathroom before refurbishment",
    role: "before",
  },
  {
    key: "bathroomBeforeRefurbishment2",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/bathroom-before-refurbishment-02.webp`,
    alt: "Old wood-seat toilet and bath under protective wrap, before refurbishment",
    caption: "Bathroom before refurbishment",
    role: "before",
  },
  {
    key: "bathroomBeforeRefurbishment3",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/bathroom-before-refurbishment-03.webp`,
    alt: "Bare-plaster bathroom with old orange-seat toilet, before refurbishment",
    caption: "Bathroom before refurbishment",
    role: "before",
  },
  {
    key: "bathroomStripOutBefore3",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/bathroom-strip-out-before-03.webp`,
    alt: "Bathroom strip-out, bath under protective sheet",
    caption: "Bathroom strip-out, before refurbishment",
    role: "before",
  },
  {
    key: "bathroomStripOutBefore4",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/bathroom-strip-out-before-04.webp`,
    alt: "Shower area stripped back to bare plaster, before refurbishment",
    caption: "Bathroom strip-out, before refurbishment",
    role: "before",
  },
  {
    key: "greyStoneShowerInProgress",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/grey-stone-shower-in-progress.webp`,
    alt: "Grey stone-tile shower in progress with tile spacers",
    caption: "Grey stone shower — tiling in progress",
    role: "before",
  },
  {
    key: "greyStoneShowerFinished",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/grey-stone-shower-finished.webp`,
    alt: "Finished grey stone shower with black fittings",
    caption: "Grey stone shower — finished",
    role: "after",
  },
  {
    key: "greyTileBathroomFinished",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/grey-tile-bathroom-finished.webp`,
    alt: "Finished small grey-tile bathroom with arch mirror",
    caption: "Bathroom refresh — finished",
  },
  {
    key: "stripedTileShowerFinished",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/striped-tile-shower-finished.webp`,
    alt: "Finished striped-tile shower with gold fittings and window view",
    caption: "Bathroom refresh — finished",
  },
  {
    key: "whiteSubwayTileBathroomFinished",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/white-subway-tile-bathroom-finished.webp`,
    alt: "Finished white subway-tile bathroom with round mirror",
    caption: "Bathroom refresh — finished",
  },
  {
    key: "woodVanityBathroomFinished",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/wood-vanity-bathroom-finished-01.webp`,
    alt: "Finished bathroom with wood-shelf vanity and oval sink",
    caption: "Bathroom refresh — finished",
  },
  {
    key: "woodVanityBathroomDetail",
    category: "bathroom-refreshes",
    src: `${BASE}/bathroom-refreshes/wood-vanity-bathroom-detail.webp`,
    alt: "Close-up of wood-shelf vanity, sink and taps",
    caption: "Bathroom refresh — finishing detail",
  },

  // --- Commercial ----------------------------------------------------------
  {
    key: "commercialPlasteringInProgress",
    category: "commercial",
    src: `${BASE}/commercial/commercial-plastering-in-progress.webp`,
    alt: "Two tradespeople plastering a commercial site",
    caption: "Commercial fit-out — plastering in progress",
  },
  {
    key: "officeDeskAreaFinished",
    category: "commercial",
    src: `${BASE}/commercial/office-desk-area-finished.webp`,
    alt: "Finished office desk area with whiteboard and monitor",
    caption: "Commercial office — finished",
  },
  {
    key: "officeCorridorFinished",
    category: "commercial",
    src: `${BASE}/commercial/office-corridor-finished.webp`,
    alt: "Office corridor with steel-framed glass door",
    caption: "Commercial office — finished",
  },
  {
    key: "officeFloorDesksFinished",
    category: "commercial",
    src: `${BASE}/commercial/office-floor-desks-finished.webp`,
    alt: "Finished open office floor with desks",
    caption: "Commercial office — finished",
  },
  {
    key: "officeBrandedWallFinished",
    category: "commercial",
    src: `${BASE}/commercial/office-branded-wall-finished.webp`,
    alt: "Office space with branded chevron wall mural and whiteboard",
    caption: "Commercial office — finished",
  },
  {
    key: "officeMeetingRoom1",
    category: "commercial",
    src: `${BASE}/commercial/office-meeting-room-01.webp`,
    alt: "Finished office meeting room with table and chairs",
    caption: "Commercial office — meeting room",
  },
  {
    key: "officeOpenPlanFinished",
    category: "commercial",
    src: `${BASE}/commercial/office-open-plan-finished.webp`,
    alt: "Finished open-plan office area with desks and monitors",
    caption: "Commercial office — finished",
  },
  {
    key: "officeMeetingRoom2",
    category: "commercial",
    src: `${BASE}/commercial/office-meeting-room-02.webp`,
    alt: "Office meeting room with wall-mounted TV",
    caption: "Commercial office — meeting room",
  },

  // --- End of tenancy cleaning ----------------------------------------------
  {
    key: "ensuiteBeforeClean",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/ensuite-before-clean-01.webp`,
    alt: "Stained toilet bowl before end of tenancy clean",
    caption: "Ensuite, before end of tenancy clean",
    role: "before",
  },
  {
    key: "ensuiteAfterClean1",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/ensuite-after-clean-01.webp`,
    alt: "Sparkling clean ensuite toilet and sink after end of tenancy clean",
    caption: "Ensuite, after end of tenancy clean",
    role: "after",
  },
  {
    key: "showerMouldBeforeClean",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/shower-mould-before-clean.webp`,
    alt: "Shower corner with heavy black mould before clean",
    caption: "Shower, before clean",
    role: "before",
  },
  {
    key: "showerAfterClean",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/shower-after-clean.webp`,
    alt: "Spotless empty shower stall after clean",
    caption: "Shower, after clean",
    role: "after",
  },
  {
    key: "sinkBeforeClean",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/sink-before-clean.webp`,
    alt: "Stained sink and floor before clean",
    caption: "Bathroom, before clean",
    role: "before",
  },
  {
    key: "toiletAfterCleanDetail",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/toilet-after-clean-detail.webp`,
    alt: "Spotless toilet bowl close-up after clean",
    caption: "Bathroom detail, after clean",
    role: "after",
  },
  {
    key: "ensuiteAfterClean2",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/ensuite-after-clean-02.webp`,
    alt: "Clean ensuite shower, toilet and sink",
    caption: "Ensuite, after clean",
    role: "after",
  },
  {
    key: "bedroomAfterClean1",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/bedroom-after-clean-01.webp`,
    alt: "Bright empty student bedroom after end of tenancy clean",
    caption: "Bedroom, after end of tenancy clean",
    role: "after",
  },
  {
    key: "bedroomAfterClean2",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/bedroom-after-clean-02.webp`,
    alt: "Clean empty bedroom, alternate angle",
    caption: "Bedroom, after end of tenancy clean",
    role: "after",
  },
  {
    key: "sharedKitchenAfterClean",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/shared-kitchen-after-clean-01.webp`,
    alt: "Clean shared kitchen with appliances after end of tenancy clean",
    caption: "Shared kitchen, after clean",
    role: "after",
  },
  {
    key: "bedroomAfterClean3",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/bedroom-after-clean-03.webp`,
    alt: "Clean bedroom with bare mattress and desk",
    caption: "Bedroom, after end of tenancy clean",
    role: "after",
  },
  {
    key: "bedroomAfterClean4",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/bedroom-after-clean-04.webp`,
    alt: "Clean bedroom, wide angle, striped mattress",
    caption: "Bedroom, after end of tenancy clean",
    role: "after",
  },
  {
    key: "kitchenAfterClean1",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/kitchen-after-clean-01.webp`,
    alt: "Clean galley kitchen with sink and hob after clean",
    caption: "Kitchen, after end of tenancy clean",
    role: "after",
  },
  {
    key: "bedroomAfterClean5",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/bedroom-after-clean-05.webp`,
    alt: "Bright, sunlit empty bedroom with clean wood floor",
    caption: "Bedroom, after end of tenancy clean",
    role: "after",
  },
  {
    key: "kitchenAfterClean2",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/kitchen-after-clean-02.webp`,
    alt: "Empty clean kitchen with black worktops",
    caption: "Kitchen, after end of tenancy clean",
    role: "after",
  },
  {
    key: "bedroomAfterClean6",
    category: "end-of-tenancy-cleaning",
    src: `${BASE}/end-of-tenancy-cleaning/bedroom-after-clean-06.webp`,
    alt: "Empty sunlit room with clean wood floor",
    caption: "Bedroom, after end of tenancy clean",
    role: "after",
  },

  // --- Communal area cleaning ------------------------------------------------
  {
    key: "communalLobbyFinished",
    category: "communal-area-cleaning",
    src: `${BASE}/communal-area-cleaning/communal-lobby-finished.webp`,
    alt: "Clean, presentable communal building lobby with plants",
    caption: "Communal lobby, cleaned and maintained",
  },
  {
    key: "communalMailboxArea",
    category: "communal-area-cleaning",
    src: `${BASE}/communal-area-cleaning/communal-mailbox-area.webp`,
    alt: "Communal mailbox wall and plant, tidy and clean",
    caption: "Communal entrance, cleaned and maintained",
  },
  {
    key: "communalSharedHallway",
    category: "communal-area-cleaning",
    src: `${BASE}/communal-area-cleaning/communal-shared-hallway.webp`,
    alt: "Bright, tidy communal hallway",
    caption: "Communal hallway, cleaned and maintained",
  },
  {
    key: "communalSharedKitchen",
    category: "communal-area-cleaning",
    src: `${BASE}/communal-area-cleaning/communal-shared-kitchen.webp`,
    alt: "Clean communal shared kitchen and dining area",
    caption: "Communal kitchen, cleaned and maintained",
  },

  // --- Deep cleaning ---------------------------------------------------------
  {
    key: "fridgeInteriorDeepClean",
    category: "deep-cleaning",
    src: `${BASE}/deep-cleaning/fridge-interior-deep-clean.webp`,
    alt: "Empty fridge interior, spotless after deep clean",
    caption: "Deep clean detail — fridge interior",
    role: "after",
  },

  // --- Residential cleaning ----------------------------------------------------
  {
    key: "kitchenCabinetsCleanDetail",
    category: "residential-cleaning",
    src: `${BASE}/residential-cleaning/kitchen-cabinets-clean-detail.webp`,
    alt: "Clean kitchen cabinets and oven, close-up detail",
    caption: "Residential cleaning — kitchen detail",
    role: "after",
  },
];

export function workPhotosByCategory(category: WorkPhotoCategory): WorkPhoto[] {
  return workPhotos.filter((p) => p.category === category);
}

export const beforeAfterPairs: { before: string; after: string; title: string }[] = [
  { before: "showerMouldBeforeClean", after: "showerAfterClean", title: "Shower — before and after clean" },
  { before: "ensuiteBeforeClean", after: "ensuiteAfterClean1", title: "Ensuite — before and after clean" },
  {
    before: "marbleBathroomTilingInProgress1",
    after: "marbleBathroomFinished1",
    title: "Marble bathroom — in progress to finished",
  },
  {
    before: "greyStoneShowerInProgress",
    after: "greyStoneShowerFinished",
    title: "Grey stone shower — in progress to finished",
  },
];
