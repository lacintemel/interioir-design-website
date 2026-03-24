export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  client?: string;
  duration?: string;
  size?: string;
  heroImage: string;
  thumbnailImage: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  concept: string;
  materials: string[];
  features: string[];
  gallery: ProjectImage[];
  beforeAfter?: {
    before: ProjectImage;
    after: ProjectImage;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  awards?: string[];
  credits?: {
    role: string;
    name: string;
  }[];
}

export const projects: ProjectDetail[] = [
  {
    id: "1",
    slug: "tribeca-loft",
    title: "Tribeca Loft",
    category: "Residential",
    year: "2024",
    location: "Tribeca, New York",
    client: "Private Residence",
    duration: "14 months",
    size: "3,200 sq ft",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
    thumbnailImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    tagline: "A modern sanctuary in the heart of Manhattan",
    description:
      "This Tribeca loft transformation represents the pinnacle of contemporary urban living. We reimagined a raw industrial space into a warm, inviting home that honors the building's heritage while embracing modern luxury. The design philosophy centered on creating a seamless flow between living spaces while maintaining distinct zones for work, relaxation, and entertaining.",
    challenge:
      "The primary challenge was preserving the authentic industrial character—exposed brick, cast iron columns, and original timber beams—while introducing warmth and livability. The clients, a creative couple with two children, needed a space that could adapt to their dynamic lifestyle, from intimate family dinners to large gatherings with colleagues and friends.",
    solution:
      "We developed a layered approach to materials and textures, juxtaposing raw industrial elements with refined finishes. Custom millwork in white oak creates visual continuity throughout, while strategic lighting design highlights architectural features and creates distinct moods. The open floor plan is articulated through furniture placement and subtle level changes, defining spaces without barriers.",
    concept:
      "The design concept, 'Industrial Poetry,' emerged from the dialogue between the building's muscular structure and the delicate, curated lifestyle of its inhabitants. Every element serves dual purposes—aesthetic and functional—creating a space that feels both composed and effortless.",
    materials: [
      "White Oak Flooring",
      "Calacatta Marble",
      "Blackened Steel",
      "Linen Textiles",
      "Cast Bronze Hardware",
      "Hand-Troweled Plaster",
    ],
    features: [
      "Custom chef's kitchen with hidden appliances",
      "Sculptural floating staircase",
      "Integrated home automation system",
      "Private library with rolling ladder",
      "Spa-inspired primary bathroom",
      "Climate-controlled wine room",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
        alt: "Living room with exposed brick",
        caption: "Main living area with original exposed brick walls",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        alt: "Kitchen design",
        caption: "Custom kitchen with integrated appliances",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
        alt: "Dining area",
        caption: "Dining space beneath original timber beams",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        alt: "Primary bedroom",
        caption: "Serene primary bedroom with city views",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        alt: "Bathroom design",
        caption: "Spa-inspired primary bathroom",
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
        alt: "Study room",
        caption: "Private library and study",
      },
    ],
    beforeAfter: {
      before: {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        alt: "Before renovation - raw industrial space",
      },
      after: {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
        alt: "After renovation - refined living space",
      },
    },
    testimonial: {
      quote:
        "Elena understood exactly what we needed—a home that could breathe with us through every phase of life. The result exceeds everything we imagined.",
      author: "Sarah & Michael Chen",
      role: "Homeowners",
    },
    awards: [
      "Interior Design Magazine - Best of Year 2024",
      "AIA New York Chapter Design Award",
    ],
    credits: [
      { role: "Lead Designer", name: "Elena Voss" },
      { role: "Architecture", name: "Voss Studio" },
      { role: "Contractor", name: "Tribeca Build Co." },
      { role: "Lighting Design", name: "Luminary Partners" },
    ],
  },
  {
    id: "2",
    slug: "hamptons-estate",
    title: "Hamptons Estate",
    category: "Residential",
    year: "2023",
    location: "East Hampton, NY",
    client: "Private Residence",
    duration: "18 months",
    size: "8,500 sq ft",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    thumbnailImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    tagline: "Coastal elegance meets timeless luxury",
    description:
      "Nestled among dunes and native grasses, this Hamptons estate redefines coastal living with a sophisticated material palette and thoughtful connection to the landscape. The design embraces the home's privileged position overlooking the Atlantic, creating frames for nature's ever-changing canvas.",
    challenge:
      "Creating a family retreat that felt substantial yet light, sophisticated yet welcoming, and modern while respecting Hamptons architectural traditions. The oceanfront location demanded materials and detailing that could withstand harsh coastal conditions while maintaining their beauty over time.",
    solution:
      "We employed a restrained palette of natural materials—weathered cedar, limestone, and bronze—that age gracefully and echo the coastal environment. Large-scale glazing dissolves boundaries between inside and out, while deep overhangs provide shade and protect against weather. Interior spaces flow seamlessly to multiple outdoor living areas, extending the home's footprint across the property.",
    concept:
      "Drawing from the Japanese concept of 'borrowed scenery,' we designed every room to frame specific views and capture particular qualities of light at different times of day. The result is a home in constant dialogue with its environment.",
    materials: [
      "Weathered White Cedar",
      "French Limestone",
      "Patinated Bronze",
      "Belgian Linen",
      "Sea-Weathered Oak",
      "Hand-Blown Glass",
    ],
    features: [
      "Infinity pool with ocean views",
      "Outdoor living room with fireplace",
      "Professional chef's kitchen",
      "Guest house and pool pavilion",
      "Temperature-controlled wine cellar",
      "Home theater with acoustic treatment",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        alt: "Exterior view",
        caption: "Main residence overlooking the dunes",
      },
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        alt: "Pool area",
        caption: "Infinity pool with Atlantic views",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
        alt: "Living room",
        caption: "Great room with floor-to-ceiling windows",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        alt: "Kitchen",
        caption: "Kitchen opening to outdoor dining",
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
        alt: "Bedroom",
        caption: "Primary suite with private terrace",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        alt: "Bathroom",
        caption: "Bathroom with freestanding tub",
      },
    ],
    testimonial: {
      quote:
        "Our home has become a place where three generations gather, where grandchildren build sandcastles and adults watch the sunset. Elena captured exactly the spirit we hoped for.",
      author: "The Morrison Family",
      role: "Homeowners",
    },
    awards: ["Architectural Digest - AD100 Featured Project"],
    credits: [
      { role: "Lead Designer", name: "Elena Voss" },
      { role: "Landscape", name: "Oehme van Sweden" },
      { role: "Pool Design", name: "Aqua Dynamics" },
    ],
  },
  {
    id: "3",
    slug: "soho-gallery",
    title: "SoHo Gallery",
    category: "Commercial",
    year: "2023",
    location: "SoHo, New York",
    client: "Meridian Art Foundation",
    duration: "8 months",
    size: "4,800 sq ft",
    heroImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
    thumbnailImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
    tagline: "Art-inspired contemporary workspace",
    description:
      "This former manufacturing floor has been transformed into a flexible gallery and event space that celebrates its raw industrial bones while providing museum-quality exhibition capabilities. The design supports both intimate viewing experiences and large-scale installations.",
    challenge:
      "Creating a neutral yet characterful backdrop for ever-changing art installations while maintaining the building's historic character. The space needed to accommodate everything from delicate works on paper to monumental sculptures, with lighting and climate control meeting conservation standards.",
    solution:
      "We developed a system of moveable gallery walls on a hidden track system, allowing the 4,800 square foot space to be reconfigured endlessly. A sophisticated lighting grid provides museum-quality illumination, while the perimeter retains original windows and cast-iron columns. Climate control systems are concealed within a raised floor and dropped ceiling.",
    concept:
      "The concept of 'Living Architecture' guided our approach—creating a space that adapts to art rather than constraining it. Every element, from the proportion of walls to the quality of light, was calibrated to enhance the viewing experience.",
    materials: [
      "Polished Concrete",
      "Gallery-Grade Drywall",
      "Blackened Steel",
      "Architectural Glass",
      "White Oak",
      "Museum-Quality Lighting",
    ],
    features: [
      "Modular gallery wall system",
      "Museum-grade climate control",
      "Professional lighting grid",
      "Private viewing room",
      "Climate-controlled art storage",
      "Integrated AV capabilities",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
        alt: "Main gallery space",
        caption: "Main exhibition hall",
      },
      {
        url: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=2070&auto=format&fit=crop",
        alt: "Gallery view",
        caption: "Flexible gallery configuration",
      },
      {
        url: "https://images.unsplash.com/photo-1594131431531-2cb0a0c8a0dd?q=80&w=2070&auto=format&fit=crop",
        alt: "Reception area",
        caption: "Welcome reception and gallery shop",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        alt: "Private viewing room",
        caption: "Private collector viewing room",
      },
    ],
    testimonial: {
      quote:
        "Elena created a space that disappears when art demands attention and emerges as a destination in its own right during events. It's the perfect partnership.",
      author: "Diana Whitfield",
      role: "Director, Meridian Art Foundation",
    },
    credits: [
      { role: "Lead Designer", name: "Elena Voss" },
      { role: "Lighting", name: "Erco International" },
      { role: "HVAC Conservation", name: "Climate Control Specialists" },
    ],
  },
  {
    id: "4",
    slug: "park-avenue-penthouse",
    title: "Park Avenue Penthouse",
    category: "Residential",
    year: "2023",
    location: "Upper East Side, New York",
    client: "Private Residence",
    duration: "20 months",
    size: "5,600 sq ft",
    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    thumbnailImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    tagline: "Sophisticated urban living redefined",
    description:
      "Crowning a prestigious pre-war Park Avenue building, this penthouse combines the grandeur of classic New York architecture with the clarity of contemporary design. Soaring ceilings, gracious proportions, and wraparound terraces create a residence of exceptional presence.",
    challenge:
      "Honoring the building's storied pre-war character while creating interiors that feel fresh and personal. The space required complete infrastructure updates—electrical, plumbing, climate control—without disrupting original architectural details like crown moldings, parquet floors, and working fireplaces.",
    solution:
      "We took a contextual approach, preserving and restoring original details while introducing contemporary elements in a complementary dialogue. Custom furniture scaled to the rooms' generous proportions creates comfort without clutter. A muted palette of creams, grays, and warm woods lets the architecture and art collection take center stage.",
    concept:
      "Inspired by the Parisian tradition of 'grand apartment' living, we created a sequence of rooms that flow gracefully for entertaining while offering intimate retreats for daily life. Every room offers multiple seating arrangements and lighting scenarios.",
    materials: [
      "French Limestone",
      "Antique Mirror",
      "Silk Velvet",
      "Hand-Finished Plaster",
      "Antique Brass",
      "Restored Parquet",
    ],
    features: [
      "360-degree terrace with Central Park views",
      "Original Juliet balconies restored",
      "Two working fireplaces",
      "Butler's pantry and catering kitchen",
      "Private elevator landing",
      "Climate-controlled gallery walls",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        alt: "Living room",
        caption: "Grand salon with restored fireplace",
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
        alt: "Library",
        caption: "Library with custom millwork",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        alt: "Dining room",
        caption: "Formal dining with park views",
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
        alt: "Primary bedroom",
        caption: "Primary suite with sitting area",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        alt: "Terrace",
        caption: "Wraparound terrace with skyline view",
      },
    ],
    testimonial: {
      quote:
        "After thirty years in this apartment, I thought I knew its potential. Elena showed me I had only scratched the surface.",
      author: "Eleanor Whitman",
      role: "Homeowner",
    },
    awards: ["Elle Decor - A-List Designer Project 2023"],
    credits: [
      { role: "Lead Designer", name: "Elena Voss" },
      { role: "Restoration", name: "Historic Arts & Building" },
      { role: "Custom Furniture", name: "Atelier de Voss" },
    ],
  },
  {
    id: "5",
    slug: "nolita-boutique-hotel",
    title: "Nolita Boutique Hotel",
    category: "Hospitality",
    year: "2022",
    location: "Nolita, New York",
    client: "Maison Collective",
    duration: "24 months",
    size: "12,000 sq ft",
    heroImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    thumbnailImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    tagline: "Intimate luxury in every detail",
    description:
      "This 24-room boutique hotel reimagines hospitality for the design-conscious traveler. Each room is unique, responding to its specific orientation and views while maintaining a cohesive identity. The ground floor houses a restaurant and cocktail bar that have become destinations in their own right.",
    challenge:
      "Creating 24 distinct room experiences within a constrained budget while establishing a cohesive brand identity. The century-old building presented structural limitations and irregular room shapes that required creative solutions.",
    solution:
      "We embraced irregularity as opportunity, letting each room's quirks inspire unique design responses. A family of custom furniture pieces appears throughout, ensuring continuity while allowing variation. Local artisans provided one-of-a-kind elements—ceramics, textiles, artwork—that give each room its personality.",
    concept:
      "Conceived as 'your stylish friend's apartment,' the hotel offers the comfort of home with the polish of expert curation. Every element was selected for both beauty and durability, with guest comfort the ultimate measure of success.",
    materials: [
      "Reclaimed Oak",
      "Handmade Ceramic Tile",
      "Belgian Linen",
      "Venetian Plaster",
      "Unlacquered Brass",
      "Mohair & Boucle",
    ],
    features: [
      "24 individually designed rooms",
      "Ground floor restaurant and bar",
      "Rooftop terrace for guests",
      "Curated minibar selections",
      "Custom bathroom amenities",
      "Art collection by local artists",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        alt: "Hotel room",
        caption: "Signature suite with custom furnishings",
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
        alt: "Lobby",
        caption: "Reception and gathering area",
      },
      {
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
        alt: "Restaurant",
        caption: "Ground floor restaurant",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        alt: "Bathroom",
        caption: "Spa-inspired guest bathroom",
      },
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        alt: "Rooftop",
        caption: "Rooftop terrace with city views",
      },
    ],
    testimonial: {
      quote:
        "The hotel has exceeded every metric—guest satisfaction, social media mentions, return visits. Elena delivered something truly special.",
      author: "James Hartwell",
      role: "Managing Director, Maison Collective",
    },
    awards: [
      "Wallpaper* Design Award - Best New Hotel",
      "Travel + Leisure - It List 2023",
    ],
    credits: [
      { role: "Lead Designer", name: "Elena Voss" },
      { role: "F&B Design", name: "Voss Studio" },
      { role: "Art Curation", name: "Whitfield Advisory" },
    ],
  },
  {
    id: "6",
    slug: "west-village-townhouse",
    title: "West Village Townhouse",
    category: "Residential",
    year: "2022",
    location: "West Village, New York",
    client: "Private Residence",
    duration: "16 months",
    size: "4,200 sq ft",
    heroImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
    thumbnailImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
    tagline: "Historic charm with modern sensibility",
    description:
      "This four-story Greek Revival townhouse underwent a complete transformation, restoring historic details while introducing contemporary systems and spatial clarity. The result is a family home that honors its 1840s origins while meeting twenty-first-century needs.",
    challenge:
      "Navigating Landmarks Preservation Commission requirements while creating a comfortable modern home. The historic facade and significant interior details required restoration, while the floor plan needed complete reimagining for contemporary family life.",
    solution:
      "We developed two distinct design vocabularies—meticulously restored historic elements in the front parlor floors, and clean contemporary spaces in the private rear extension and garden level. The transition between old and new is seamless yet honest, with a glass-walled stair tower providing vertical connection and natural light.",
    concept:
      "The project embodies 'respectful evolution,' acknowledging that great houses are works in progress, shaped by generations of inhabitants. Our intervention is the latest chapter in an ongoing story.",
    materials: [
      "Heart Pine Flooring",
      "Honed Marble",
      "Clear Finished Steel",
      "Restored Original Millwork",
      "Custom Plaster Moldings",
      "Artisan Hardware",
    ],
    features: [
      "Restored 1840s parlor floors",
      "New glass-enclosed garden extension",
      "Chef's kitchen with breakfast room",
      "Landscaped private garden",
      "Rooftop terrace",
      "Five bedrooms across four floors",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
        alt: "Living room",
        caption: "Restored parlor with original fireplace",
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
        alt: "Kitchen",
        caption: "Contemporary kitchen in garden extension",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        alt: "Dining room",
        caption: "Formal dining with garden views",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        alt: "Garden",
        caption: "Private landscaped garden",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
        alt: "Bedroom",
        caption: "Primary bedroom on parlor floor",
      },
    ],
    beforeAfter: {
      before: {
        url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop",
        alt: "Before renovation - original condition",
      },
      after: {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
        alt: "After renovation - restored and modernized",
      },
    },
    testimonial: {
      quote:
        "Walking through our door, you feel enveloped in history and completely at home in the present. Elena achieved the impossible.",
      author: "The Whitfield Family",
      role: "Homeowners",
    },
    awards: ["New York Landmarks Conservancy - Lucy G. Moses Preservation Award"],
    credits: [
      { role: "Lead Designer", name: "Elena Voss" },
      { role: "Historic Preservation", name: "Building Conservation Associates" },
      { role: "Landscape", name: "Hollander Design" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: ProjectDetail | null;
  next: ProjectDetail | null;
} {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
