export interface StockImage {
  url: string; // base Unsplash CDN URL, no query params
  alt: string; // descriptive alt text for accessibility
  credit?: string; // photographer name if easily found on the page, else omit
}

export const stockImages: Record<string, StockImage> = {
  hero: {
    url: "https://images.unsplash.com/photo-1510265236892-329bfd7de7a1",
    alt: "Elegant white period townhouses on a picturesque London mews street",
    credit: "Bruno Martins",
  },
  about: {
    url: "https://images.unsplash.com/photo-1587582423116-ec07293f0395",
    alt: "Skilled tradesman in a hard hat working confidently on a building frame",
    credit: "Josh Olalde",
  },
  propertyServicesHub: {
    url: "https://images.unsplash.com/photo-1692890659047-079b769ee3e6",
    alt: "Interior renovation workspace with tools and materials neatly arranged mid-project",
    credit: "Brett Jordan",
  },
  handyman: {
    url: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f",
    alt: "A well-organised wall-mounted rack of hand tools including saws, chisels and files",
    credit: "Barn Images",
  },
  painting: {
    url: "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1",
    alt: "Professional decorator painting an interior wall with a roller in a clean modern space",
    credit: "Ernys",
  },
  flooring: {
    url: "https://images.unsplash.com/photo-1753943803304-8cf8b01bde9b",
    alt: "Skilled hands using a precision tool on wood, showcasing fine craftsmanship",
    credit: "PB Swiss Tools",
  },
  bathroom: {
    url: "https://images.unsplash.com/photo-1754788358645-d6e6cca12e25",
    alt: "Elegant marble bathroom vanity with vessel sink and warm ambient lighting",
    credit: "Ela De Pure",
  },
  kitchen: {
    url: "https://images.unsplash.com/photo-1770063817031-f3b98dff347f",
    alt: "Modern luxury kitchen with stainless steel appliances and white cabinetry",
    credit: "Clay Banks",
  },
  landlordRefurb: {
    url: "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c",
    alt: "Bright, beautifully renovated apartment living room with a large window",
    credit: "Lumbardh Plluzhina",
  },
  endOfTenancy: {
    url: "https://images.unsplash.com/photo-1646592491741-e79ae5953486",
    alt: "Pristine empty apartment with hardwood floors and staircase, move-out ready",
    credit: "Point3D Commercial Imaging Ltd.",
  },
  garden: {
    url: "https://images.unsplash.com/photo-1719324923613-ff0884b031ed",
    alt: "Landscaped garden patio with table, chairs and umbrella for outdoor entertaining",
    credit: "Tile Merchant Ireland",
  },
  cleaningHub: {
    url: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab",
    alt: "Elegant cleaning spray bottles arranged aesthetically on a table",
    credit: "Daiga Ellaby",
  },
  residentialCleaning: {
    url: "https://images.unsplash.com/photo-1768609239321-1cfe14893e80",
    alt: "Bright, spotless minimalist living room interior with white furniture",
    credit: "rawkkim",
  },
  commercialCleaning: {
    url: "https://images.unsplash.com/photo-1700809888987-cf2b29ecbd2c",
    alt: "Modern, clean office interior with a plant and open workspace",
    credit: "Declan Sun",
  },
  windowCleaning: {
    url: "https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7",
    alt: "Window cleaner on an elevated platform cleaning a glass building facade",
    credit: "Priscilla Du Preez",
  },
  commercialBuilding: {
    url: "https://images.unsplash.com/photo-1696521006550-2dbb0d97d690",
    alt: "Modern glass commercial office building exterior in London",
    credit: "Dawid Tkocz",
  },
  facilitiesManagement: {
    url: "https://images.unsplash.com/photo-1751888095225-7bda00013367",
    alt: "Modern architectural corridor leading to a window in a commercial building",
    credit: "Declan Sun",
  },
  gallery1: {
    url: "https://images.unsplash.com/photo-1753977725475-41b221add2c0",
    alt: "House renovation before and after a new extension",
    credit: "Brett Jordan",
  },
  gallery2: {
    url: "https://images.unsplash.com/photo-1753893558281-9acda0662bbd",
    alt: "House exterior renovation in progress with active building work",
    credit: "Brett Jordan",
  },
};
