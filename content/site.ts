export const site = {
  name: "Proudlock",
  tagline: "Partners in building your vision.",
  description:
    "Commercial and residential construction across Southeast Queensland. Established 2014.",
  address: {
    street: "20 Davrod St",
    suburb: "Robertson",
    state: "QLD",
    postcode: "4109",
    full: "20 Davrod St, Robertson QLD 4109",
    googleMapsUrl:
      "https://maps.google.com/?q=20+Davrod+St+Robertson+QLD+4109",
    lat: -27.5503,
    lng: 153.0281,
  },
  contact: {
    phone: "+61 7 3123 4567",
    email: "info@proudlock.com.au",
  },
  licences: {
    acn: "167 711 284",
    abn: "44 167 711 284",
    bsa: "15020024",
  },
  established: 2014,
  serviceArea: [
    "Brisbane",
    "Gold Coast",
    "Sunshine Coast",
    "Ipswich",
    "Logan",
    "Southeast Queensland",
  ],
  social: {
    instagram: "https://www.instagram.com/proudlock.developments",
    linkedin: "https://www.linkedin.com/company/proudlock",
  },
  stats: [
    { value: "Est. 2014", label: "A decade of delivery" },
    { value: "10,000+ sqm", label: "Largest single site" },
    { value: "SEQ-wide", label: "Brisbane to Gold Coast" },
    { value: "100+", label: "Projects completed" },
  ],
  services: [
    {
      slug: "commercial",
      title: "Commercial Construction",
      short: "Warehouses, offices, fitouts, industrial facilities.",
      href: "/commercial",
    },
    {
      slug: "residential",
      title: "Residential Construction",
      short: "Custom homes, apartments, renovations.",
      href: "/residential",
    },
    {
      slug: "interior-design",
      title: "Interior Design & Architect",
      short: "Design-led interiors for commercial and residential spaces.",
      href: "/interior-design",
    },
  ],
} as const;
