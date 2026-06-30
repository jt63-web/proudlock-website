export type ProjectSector = "commercial" | "residential" | "fitout" | "interior-design";

export interface Project {
  slug: string;
  title: string;
  location: string;
  suburb: string;
  sector: ProjectSector;
  year?: number;
  overview: string;
  stats?: { label: string; value: string }[];
  coverImage: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "90-eastern-road",
    title: "90 Eastern Road",
    location: "Eastern Road, Queensland",
    suburb: "Southeast Queensland",
    sector: "commercial",
    year: 2025,
    overview:
      "Modern two-storey commercial office and warehouse. Dark Colorbond cladding, large-format glazing, gated secure access.",
    stats: [
      { label: "Type", value: "Office / Warehouse" },
      { label: "Storeys", value: "2" },
      { label: "Sector", value: "Commercial" },
    ],
    coverImage: "/images/projects/90-eastern-road/1.jpg",
    images: [
      "/images/projects/90-eastern-road/1.jpg",
      "/images/projects/90-eastern-road/2.jpg",
      "/images/projects/90-eastern-road/3.jpg",
      "/images/projects/90-eastern-road/4.jpg",
      "/images/projects/90-eastern-road/5.jpg",
      "/images/projects/90-eastern-road/6.jpg",
      "/images/projects/90-eastern-road/7.jpg",
      "/images/projects/90-eastern-road/8.jpg",
    ],
    featured: true,
  },
  {
    slug: "2-stone-court-kingston",
    title: "2 Stone Court",
    location: "Stone Court, Kingston",
    suburb: "Kingston",
    sector: "commercial",
    overview:
      "Complex of four upmarket combined office and warehouse units. Mezzanine levels throughout, polished concrete floors, steel-framed mezzanine staircases.",
    stats: [
      { label: "Total area", value: "2,644 sqm" },
      { label: "Units", value: "4" },
      { label: "Unit size", value: "450–650 sqm" },
      { label: "Type", value: "Office / Warehouse" },
    ],
    coverImage: "/images/projects/2-stone-court/1.jpg",
    images: [
      "/images/projects/2-stone-court/1.jpg",
      "/images/projects/2-stone-court/2.jpg",
      "/images/projects/2-stone-court/3.jpg",
      "/images/projects/2-stone-court/4.jpg",
      "/images/projects/2-stone-court/5.jpg",
    ],
    featured: true,
  },
  {
    slug: "commercial-warehouses",
    title: "Commercial Warehouse Developments",
    location: "Southeast Queensland",
    suburb: "Meadowbrook",
    sector: "commercial",
    overview:
      "A series of high-specification commercial warehouse and office developments across Logan and surrounds. Tilt-panel construction, mezzanines, and premium fitouts.",
    stats: [
      { label: "Largest site", value: "10,000 sqm" },
      { label: "Type", value: "Warehouse / Office" },
      { label: "Region", value: "SEQ" },
    ],
    coverImage: "/images/hero/warehouse-1.jpg",
    images: Array.from({ length: 26 }, (_, i) => `/images/hero/warehouse-${i + 1}.jpg`),
    featured: true,
  },
  {
    slug: "meakin-road-meadowbrook-1",
    title: "63–69 Meakin Road (Units 1–3)",
    location: "Meakin Road, Meadowbrook",
    suburb: "Meadowbrook",
    sector: "commercial",
    overview:
      "Three upmarket combined office and warehouse units with mezzanines. Unit 1 features a commercial lift and specialised fitout.",
    stats: [
      { label: "Total area", value: "2,500 sqm" },
      { label: "Units", value: "3" },
      { label: "Special feature", value: "Lift installed" },
      { label: "Type", value: "Office / Warehouse" },
    ],
    coverImage: "/images/projects/warehouses/1.jpg",
    images: Array.from({ length: 13 }, (_, i) => `/images/projects/warehouses/${i + 1}.jpg`),
    featured: false,
  },
  {
    slug: "meakin-road-meadowbrook-atp",
    title: "63–69 Meakin Road (Unit 4) — ATP Science",
    location: "Meakin Road, Meadowbrook",
    suburb: "Meadowbrook",
    sector: "commercial",
    overview:
      "Custom-built TGA-approved manufacturing and warehouse facility for ATP Science. Designed to meet strict pharmaceutical-grade regulatory requirements.",
    stats: [
      { label: "Contract value", value: "$15M" },
      { label: "Total area", value: "7,600 sqm under roof" },
      { label: "Certification", value: "TGA-approved" },
      { label: "Sector", value: "Industrial / Pharmaceutical" },
    ],
    coverImage: "/images/projects/warehouses/3.jpg",
    images: Array.from({ length: 8 }, (_, i) => `/images/projects/warehouses/${i + 1}.jpg`),
    featured: true,
  },
  {
    slug: "24-26-ellerslie-road",
    title: "24–26 Ellerslie Road",
    location: "Ellerslie Road, Meadowbrook",
    suburb: "Meadowbrook",
    sector: "commercial",
    overview:
      "Ten high-end combined office and warehouse units on a 10,000 sqm site. Generous hardstand, high clearance, premium office fitouts.",
    stats: [
      { label: "Occupancy area", value: "7,288 sqm" },
      { label: "Site area", value: "10,000 sqm" },
      { label: "Units", value: "10" },
      { label: "Type", value: "Office / Warehouse" },
    ],
    coverImage: "/images/projects/warehouses/5.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/images/projects/warehouses/${i + 1}.jpg`),
    featured: false,
  },
  {
    slug: "18-ellerslie-road",
    title: "18 Ellerslie Road",
    location: "Ellerslie Road, Meadowbrook",
    suburb: "Meadowbrook",
    sector: "commercial",
    overview:
      "Eighteen high-end combined office and warehouse units on a 20,020 sqm site. Proudlock's largest completed strata development to date.",
    stats: [
      { label: "Occupancy area", value: "8,264 sqm" },
      { label: "Site area", value: "20,020 sqm" },
      { label: "Units", value: "18" },
      { label: "Type", value: "Office / Warehouse" },
    ],
    coverImage: "/images/projects/warehouses/7.jpg",
    images: Array.from({ length: 13 }, (_, i) => `/images/projects/warehouses/${i + 1}.jpg`),
    featured: false,
  },
  {
    slug: "little-red-dumpling",
    title: "Little Red Dumpling — Central Production Kitchen",
    location: "Geonic Street, Underwood",
    suburb: "Underwood",
    sector: "fitout",
    year: 2024,
    overview:
      "Commercial food production facility built to food-grade specification. Industrial-scale stainless steel fitout, cold rooms, and production-line equipment installation.",
    stats: [
      { label: "Type", value: "Food Production Fitout" },
      { label: "Location", value: "Underwood" },
      { label: "Sector", value: "Commercial Fitout" },
    ],
    coverImage: "/images/projects/little-red-dumpling/1.jpg",
    images: Array.from({ length: 12 }, (_, i) => `/images/projects/little-red-dumpling/${i + 1}.jpg`),
    featured: true,
  },
  {
    slug: "magic-acai-kingston",
    title: "Magic Acai",
    location: "Kingston",
    suburb: "Kingston",
    sector: "fitout",
    year: 2024,
    overview:
      "Retail food and beverage fitout. Vibrant interior with bespoke joinery, feature wall, and commercial kitchen.",
    stats: [
      { label: "Type", value: "Retail Fitout" },
      { label: "Location", value: "Kingston" },
    ],
    coverImage: "/images/projects/magic-acai/1.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/images/projects/magic-acai/${i + 1}.jpg`),
    featured: false,
  },
  {
    slug: "oceansplus-berrinba",
    title: "OceansPlus Medical Centre",
    location: "Berrinba",
    suburb: "Berrinba",
    sector: "fitout",
    year: 2025,
    overview:
      "Medical centre fitout including reception, consulting rooms, treatment areas, and ancillary spaces. Built to healthcare compliance standards.",
    stats: [
      { label: "Type", value: "Medical Centre Fitout" },
      { label: "Location", value: "Berrinba" },
    ],
    coverImage: "/images/projects/oceansplus/1.jpg",
    images: Array.from({ length: 12 }, (_, i) => `/images/projects/oceansplus/${i + 1}.jpg`),
    featured: true,
  },
  {
    slug: "quality-coffee",
    title: "Quality Coffee",
    location: "Southeast Queensland",
    suburb: "Southeast Queensland",
    sector: "fitout",
    overview:
      "Specialty coffee shop fitout. Custom joinery, exposed materials, and commercial espresso bar.",
    stats: [
      { label: "Type", value: "Retail Fitout" },
      { label: "Sector", value: "Hospitality" },
    ],
    coverImage: "/images/projects/quality-coffee/1.jpg",
    images: Array.from({ length: 8 }, (_, i) => `/images/projects/quality-coffee/${i + 1}.jpg`),
    featured: false,
  },
  {
    slug: "taste-of-purple-paradise",
    title: "Taste of Purple Paradise",
    location: "Tingalpa",
    suburb: "Tingalpa",
    sector: "fitout",
    year: 2025,
    overview:
      "Bold retail fitout with signature purple palette, bespoke lighting, and custom millwork throughout.",
    stats: [
      { label: "Type", value: "Retail Fitout" },
      { label: "Location", value: "Tingalpa" },
    ],
    coverImage: "/images/projects/taste-of-purple-paradise/1.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/images/projects/taste-of-purple-paradise/${i + 1}.jpg`),
    featured: false,
  },
  {
    slug: "top-health-doctors",
    title: "Top Health Doctors",
    location: "Multiple locations, SEQ",
    suburb: "Southeast Queensland",
    sector: "fitout",
    overview:
      "Rollout of medical centre fitouts across Southeast Queensland. Consistent design language with location-specific layouts. Locations include Underwood, Capalaba, Greenslopes, West End, Beenleigh, Birkdale, and Strathpine.",
    stats: [
      { label: "Locations", value: "7" },
      { label: "Type", value: "Medical Fitout" },
      { label: "Region", value: "SEQ" },
    ],
    coverImage: "/images/projects/top-health/1.jpg",
    images: [
      ...Array.from({ length: 6 }, (_, i) => `/images/projects/top-health/${i + 1}.jpg`),
      ...Array.from({ length: 6 }, (_, i) => `/images/projects/top-health-birkdale/${i + 1}.jpg`),
      ...Array.from({ length: 6 }, (_, i) => `/images/projects/top-health-strathpine/${i + 1}.jpg`),
    ],
    featured: true,
  },
  {
    slug: "custom-homes",
    title: "Custom Built Home",
    location: "Southeast Queensland",
    suburb: "Southeast Queensland",
    sector: "residential",
    overview:
      "Luxury custom residential build featuring bespoke joinery, high-end finishes throughout, and considered spatial planning.",
    stats: [
      { label: "Type", value: "Custom Home" },
      { label: "Sector", value: "Residential" },
      { label: "Region", value: "SEQ" },
    ],
    coverImage: "/images/projects/custom-homes/1.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/images/projects/custom-homes/${i + 1}.jpg`),
    featured: true,
  },
  {
    slug: "interior-design-renders",
    title: "Interior Design",
    location: "Southeast Queensland",
    suburb: "Southeast Queensland",
    sector: "interior-design",
    overview:
      "Design-led interior concepts for residential and commercial spaces. Spanning from concept renders to completed installations.",
    stats: [
      { label: "Type", value: "Interior Design" },
      { label: "Sector", value: "Residential / Commercial" },
    ],
    coverImage: "/images/projects/interior-design/1.jpg",
    images: Array.from({ length: 25 }, (_, i) => `/images/projects/interior-design/${i + 1}.jpg`),
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsBySector(sector: ProjectSector): Project[] {
  return projects.filter((p) => p.sector === sector);
}
