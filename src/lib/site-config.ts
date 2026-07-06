/**
 * Central business/site configuration.
 *
 * PLACEHOLDER CONTENT: phone, email, address, and service areas below use
 * Ofcom-reserved fictional numbers / illustrative copy so nothing "real"
 * accidentally ships. Replace every value marked TODO before launch.
 */

export const siteConfig = {
  brandName: "Nomert Property Services",
  legalName: "Nomert Facilities Management Ltd",
  tradingLine: "Nomert Property Services is a trading division of Nomert Facilities Management Ltd.",
  tagline: "We maintain. We improve. We transform.",
  domain: "nomertpropertyservices.co.uk", // TODO: confirm live domain
  description:
    "Professional property maintenance, repairs, refurbishments and home improvement services across London. One team, from quotation through to completion.",

  contact: {
    phoneDisplay: "020 7946 0123", // TODO: replace with real landline
    phoneHref: "tel:+442079460123",
    whatsappDisplay: "07700 900123", // TODO: replace with real WhatsApp number
    whatsappHref: "https://wa.me/447700900123",
    email: "hello@nomertpropertyservices.co.uk", // TODO: replace with real inbox
    addressLine1: "Nomert Property Services", // TODO: confirm registered office / trading address
    addressLine2: "London, United Kingdom",
    mapEmbedSrc: "https://maps.google.com/maps?q=London,UK&z=11&output=embed", // TODO: replace with real business location pin
  },

  social: {
    instagram: "https://instagram.com/nomertpropertyservices",
    facebook: "https://facebook.com/nomertpropertyservices",
    linkedin: "https://linkedin.com/company/nomertpropertyservices",
    handle: "@nomertpropertyservices",
  },

  serviceAreas: [
    "Westminster",
    "Kensington & Chelsea",
    "Camden",
    "Islington",
    "Hackney",
    "Tower Hamlets",
    "Wandsworth",
    "Lambeth",
    "Southwark",
    "Richmond upon Thames",
    "Barnet",
    "Ealing",
  ], // TODO: confirm actual coverage area

  stats: [
    { value: 12, suffix: "+", label: "Years combined trade experience" },
    { value: 480, suffix: "+", label: "Properties maintained & improved" },
    { value: 4.9, suffix: "/5", label: "Average client rating", decimals: 1 },
    { value: 100, suffix: "%", label: "Fully insured, vetted team" },
  ],

  trustBadges: [
    "Fully Insured",
    "DBS-Checked Team",
    "Free, No-Obligation Quotes",
    "London-Wide Coverage",
    "Same-Week Availability",
    "From Quotation to Completion",
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      children: [
        {
          label: "Property Services",
          href: "/property-services",
          description: "Repairs, refurbishments & improvements",
        },
        {
          label: "Cleaning Services",
          href: "/cleaning-services",
          description: "Residential, commercial & specialist cleaning",
        },
        {
          label: "Commercial Services",
          href: "/commercial-services",
          description: "Maintenance & facilities for businesses",
        },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
