export const site = {
  name: "Proudlock",
  tagline: "Partners in building your vision.",
  description:
    "Commercial and residential construction across Southeast Queensland. Established 2014.",
  address: {
    street: "4/6 Timms Court",
    suburb: "Woodridge",
    state: "QLD",
    postcode: "4114",
    full: "4/6 Timms Court, Woodridge QLD 4114",
    note: "By appointment only",
    googleMapsUrl:
      "https://maps.google.com/?q=6+Timms+Court+Woodridge+QLD+4114",
    lat: -27.6256,
    lng: 153.1089,
  },
  contact: {
    phone: "+61 402 111 022",
    email: "cris@proudlock.com.au",
  },
  director: {
    name: "Cristian Telecican",
    title: "Director",
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
