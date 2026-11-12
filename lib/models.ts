export type ArtVariant = "solo" | "duo" | "family" | "loft";

export type Model = {
  slug: string;
  name: string;
  tag: string;
  variant: ArtVariant;
  body: string;
  summary: string;
  intro: string;
  beds: string;
  baths: string;
  area: string;
  modules: string;
  tags: string[];
  uses: string[];
  why: { title: string; text: string }[];
  specs: { label: string; value: string }[];
  included: string[];
  upgrades: string[];
};

// Sample range. Sizes follow standard ISO container dimensions; layouts,
// finishes and inclusions are placeholders for the client to confirm.
export const models: Model[] = [
  {
    slug: "solo-20",
    name: "Solo 20",
    tag: "Studio · 1 module",
    variant: "solo",
    body: "#0D4532",
    summary:
      "A compact studio in a single 20ft module. Ideal as a garden room, guest suite or rental cabin.",
    intro:
      "The Solo 20 fits a full studio into one 20ft high-cube module: sleeping area, kitchenette and a shower room. It arrives on a single truck and can be set on simple pad footings.",
    beds: "Studio",
    baths: "1",
    area: "14.8 m² / 160 sq ft",
    modules: "1 × 20ft high-cube",
    tags: ["Single truck delivery", "Kitchenette", "Shower room", "Full-height glazing"],
    uses: ["Garden studio or home office", "Guest suite", "Short-stay rental cabin", "Site office"],
    why: [
      { title: "Small footprint", text: "Fits on plots where a conventional build would not, with minimal groundworks." },
      { title: "Fast to place", text: "Delivered finished and craned into position in a single day." },
      { title: "Easy to relocate", text: "One module, one lift. Take it with you if you move." },
    ],
    specs: [
      { label: "Modules", value: "1 × 20ft high-cube" },
      { label: "External size (L × W × H)", value: "6.06 × 2.44 × 2.90 m" },
      { label: "Floor area", value: "14.8 m² / 160 sq ft" },
      { label: "Layout", value: "Open studio with shower room" },
      { label: "Structure", value: "Corten steel shell, reinforced openings" },
      { label: "Insulation", value: "Insulated walls, floor and roof" },
      { label: "Glazing", value: "Double-glazed sliding door and window" },
    ],
    included: ["Insulation and interior wall lining", "Electrical wiring and LED lighting", "Kitchenette with sink", "Shower room with WC and basin", "Vinyl plank flooring", "External paint finish"],
    upgrades: ["Timber deck", "Air conditioning", "Solar-ready roof", "Timber cladding"],
  },
  {
    slug: "duo-40",
    name: "Duo 40",
    tag: "1 bedroom · 1 module",
    variant: "duo",
    body: "#272727",
    summary:
      "A one-bedroom home in a single 40ft module, with a separate bedroom, full kitchen and bathroom.",
    intro:
      "The Duo 40 is our most popular layout. A 40ft high-cube module gives room for a separate bedroom, a full galley kitchen, a living area and a bathroom, all delivered in one piece.",
    beds: "1",
    baths: "1",
    area: "29.7 m² / 320 sq ft",
    modules: "1 × 40ft high-cube",
    tags: ["Separate bedroom", "Full kitchen", "Living area", "Single truck delivery"],
    uses: ["First home or downsizer", "Rental unit", "Holiday home", "Staff accommodation"],
    why: [
      { title: "A real one-bed", text: "A closed bedroom and a proper kitchen, not a studio with a curtain." },
      { title: "One module", text: "No on-site joining. The home is finished in the factory and delivered whole." },
      { title: "Ready for extension", text: "Designed so a second module can be added later." },
    ],
    specs: [
      { label: "Modules", value: "1 × 40ft high-cube" },
      { label: "External size (L × W × H)", value: "12.19 × 2.44 × 2.90 m" },
      { label: "Floor area", value: "29.7 m² / 320 sq ft" },
      { label: "Layout", value: "1 bedroom, living/kitchen, bathroom" },
      { label: "Structure", value: "Corten steel shell, reinforced openings" },
      { label: "Insulation", value: "Insulated walls, floor and roof" },
      { label: "Glazing", value: "Double-glazed sliding door and windows" },
    ],
    included: ["Insulation and interior wall lining", "Electrical wiring and LED lighting", "Fitted galley kitchen", "Bathroom with shower, WC and basin", "Built-in wardrobe", "Vinyl plank flooring", "External paint finish"],
    upgrades: ["Timber deck", "Air conditioning", "Solar-ready roof", "Timber cladding", "Appliance package"],
  },
  {
    slug: "family-80",
    name: "Family 80",
    tag: "2 bedrooms · 2 modules",
    variant: "family",
    body: "#A37A52",
    summary:
      "Two 40ft modules joined side by side for a two-bedroom home with an open living space.",
    intro:
      "The Family 80 joins two 40ft high-cube modules along their length. Removing the shared wall creates a wide open-plan living and kitchen space, with two bedrooms and a family bathroom.",
    beds: "2",
    baths: "1",
    area: "59.5 m² / 640 sq ft",
    modules: "2 × 40ft high-cube",
    tags: ["Open-plan living", "2 bedrooms", "Family bathroom", "Joined on site"],
    uses: ["Family home", "Holiday let", "Annexe for relatives", "Small office"],
    why: [
      { title: "Room to live", text: "Nearly five metres of clear width in the living space." },
      { title: "Two proper bedrooms", text: "Both take a double bed with storage." },
      { title: "Still quick to build", text: "Two lifts, then the modules are joined and sealed on site." },
    ],
    specs: [
      { label: "Modules", value: "2 × 40ft high-cube" },
      { label: "External size (L × W × H)", value: "12.19 × 4.88 × 2.90 m" },
      { label: "Floor area", value: "59.5 m² / 640 sq ft" },
      { label: "Layout", value: "2 bedrooms, open living/kitchen, bathroom" },
      { label: "Structure", value: "Corten steel shell, steel portal at join" },
      { label: "Insulation", value: "Insulated walls, floor and roof" },
      { label: "Glazing", value: "Double-glazed sliding doors and windows" },
    ],
    included: ["Insulation and interior wall lining", "Electrical wiring and LED lighting", "Fitted kitchen with island", "Family bathroom", "Built-in wardrobes", "Vinyl plank flooring", "External paint finish"],
    upgrades: ["Timber deck", "Air conditioning", "Solar-ready roof", "Timber cladding", "Second bathroom"],
  },
  {
    slug: "loft-stack",
    name: "Loft Stack",
    tag: "2 bedrooms · 2 storeys",
    variant: "loft",
    body: "#1B4633",
    summary:
      "A two-storey home with living space below, bedrooms above and a roof terrace.",
    intro:
      "The Loft Stack places a 20ft module on top of a 40ft module. Living, kitchen and a bathroom sit on the ground floor; the upper module holds the bedrooms and opens onto a roof terrace.",
    beds: "2",
    baths: "2",
    area: "44.5 m² / 480 sq ft",
    modules: "1 × 40ft + 1 × 20ft high-cube",
    tags: ["Two storeys", "Roof terrace", "Internal stair", "Small plot friendly"],
    uses: ["Narrow or small plots", "Home with a view", "Holiday home", "Live/work unit"],
    why: [
      { title: "More home, same plot", text: "Building up keeps the footprint to a single 40ft module." },
      { title: "Outdoor space built in", text: "The lower roof becomes a terrace off the bedrooms." },
      { title: "Engineered stack", text: "Modules lock at the corner castings, as containers are designed to." },
    ],
    specs: [
      { label: "Modules", value: "1 × 40ft + 1 × 20ft high-cube" },
      { label: "Footprint (L × W)", value: "12.19 × 2.44 m" },
      { label: "Overall height", value: "5.80 m" },
      { label: "Floor area", value: "44.5 m² / 480 sq ft, plus terrace" },
      { label: "Layout", value: "Living/kitchen and WC below, 2 bedrooms and bathroom above" },
      { label: "Structure", value: "Corten steel shells, twist-lock corner connections" },
      { label: "Glazing", value: "Double-glazed sliding doors and windows" },
    ],
    included: ["Insulation and interior wall lining", "Electrical wiring and LED lighting", "Fitted kitchen", "Two bathrooms", "Internal staircase", "Terrace balustrade", "External paint finish"],
    upgrades: ["Terrace decking", "Air conditioning", "Solar-ready roof", "Timber cladding"],
  },
];

export const getModel = (slug: string) => models.find((m) => m.slug === slug);
