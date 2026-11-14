import { photos, type projects } from "./media";

type ProjectKey = (typeof projects)[number]["key"];

export type Model = {
  slug: string;
  name: string;
  tag: string;
  /** Which build in the photo gallery this unit is shown by. */
  project: ProjectKey;
  /** Lead photo (a file in public/images, without extension). */
  photo: string;
  /** Which part of the lead photo stays visible when it is cropped. */
  pos?: string;
  /** Short label on the photo, e.g. "1 × 40ft container". */
  size: string;
  /** One-glance figure used in menus. */
  short: string;
  summary: string;
  intro: string;
  facts: { label: string; value: string }[];
  tags: string[];
  uses: string[];
  why: { title: string; text: string }[];
  specs: { label: string; value: string }[];
  included: string[];
  upgrades: string[];
};

// The four unit types, each based on a real Kit Out build. Sizes follow standard
// container dimensions. Inclusions and options were drafted from the build photos
// and need the client's confirmation before launch.
export const models: Model[] = [
  {
    slug: "office-20",
    name: "Office 20",
    tag: "Modular office · 20ft",
    project: "modular",
    photo: "modular-office",
    size: "1 × 20ft container",
    short: "160 sq ft",
    summary: "A compact, self-contained office in a single 20-foot container, with a steel entry door, canopy light and window.",
    intro:
      "The Office 20 turns one 20-foot container into a finished, insulated office. It moves on a standard truck or with a forklift, and keeps its original cargo doors for loading furniture and equipment.",
    facts: [
      { label: "Length", value: "20 ft" },
      { label: "Floor area", value: "160 sq ft" },
      { label: "Layout", value: "Single office" },
    ],
    tags: ["Forklift pockets", "Entry canopy with light", "Sliding window", "Cargo doors kept"],
    uses: ["Job-site office", "Gatehouse or check-in point", "Small sales office", "Remote workspace"],
    why: [
      { title: "Small footprint", text: "Fits where a trailer or site-built office will not, on a simple level base." },
      { title: "Easy to move", text: "One container, one lift. Relocate it when the job moves on." },
      { title: "Ready on arrival", text: "Delivered finished. Connect power and start work." },
    ],
    specs: [
      { label: "Container", value: "1 × 20ft" },
      { label: "External size (L × W × H)", value: "20 ft × 8 ft × 8 ft 6 in" },
      { label: "Floor area", value: "Approx. 160 sq ft (external footprint)" },
      { label: "Layout", value: "Single office" },
      { label: "Structure", value: "Steel container shell with framed interior" },
      { label: "Insulation", value: "Spray foam" },
      { label: "Entry", value: "Steel door with canopy and light" },
    ],
    included: ["Framed and insulated interior", "Wall and ceiling panels", "Wiring, LED lighting and outlets", "Steel entry door with canopy light", "Sliding window", "Exterior paint"],
    upgrades: ["Mini-split air conditioning", "Window security screen", "Built-in desk and shelving", "Custom paint color"],
  },
  {
    slug: "office-40",
    name: "Office 40",
    tag: "All-office · 40ft",
    project: "office40",
    photo: "office40-exterior",
    size: "1 × 40ft container",
    short: "320 sq ft",
    summary: "A full-length office in one 40-foot container, with windows on both sides, a steel entry door and climate control.",
    intro:
      "The Office 40 gives the whole 40 feet to working space: room for several desks, a meeting table or a front counter. It is framed, spray-foam insulated, lined and wired in our workshop, with a mini-split unit for heating and cooling.",
    facts: [
      { label: "Length", value: "40 ft" },
      { label: "Floor area", value: "320 sq ft" },
      { label: "Layout", value: "Open office" },
    ],
    tags: ["Windows on both sides", "Mini-split air conditioning", "Coated floor", "Steel entry door"],
    uses: ["Permanent site office", "Dispatch or scale office", "Sales or leasing office", "Team break room"],
    why: [
      { title: "Room for a team", text: "Forty feet of clear working space for desks, a counter or a meeting table." },
      { title: "Comfortable year-round", text: "Spray foam insulation and a mini-split unit keep it cool in summer and warm in winter." },
      { title: "One piece, one delivery", text: "Nothing to assemble on site. It arrives finished." },
    ],
    specs: [
      { label: "Container", value: "1 × 40ft" },
      { label: "External size (L × W)", value: "40 ft × 8 ft" },
      { label: "Floor area", value: "Approx. 320 sq ft (external footprint)" },
      { label: "Layout", value: "Open office" },
      { label: "Structure", value: "Steel container shell with framed interior" },
      { label: "Insulation", value: "Spray foam" },
      { label: "Heating and cooling", value: "Mini-split unit" },
      { label: "Floor", value: "Coated, easy-clean finish" },
    ],
    included: ["Framed and insulated interior", "Wall and ceiling panels", "Wiring, LED lighting and outlets", "Mini-split air conditioning", "Coated floor", "Steel entry door and windows", "Exterior paint"],
    upgrades: ["Window security screens", "Partition for a second room", "Data and network cabling", "Custom paint color"],
  },
  {
    slug: "combo-40",
    name: "Combo 40",
    tag: "Office + storage · 40ft",
    project: "combo",
    photo: "build-exterior",
    pos: "50% 62%",
    size: "1 × 40ft container",
    short: "320 sq ft",
    summary: "One 40-foot container split into a finished office and a secure storage bay, joined by an interior door.",
    intro:
      "The Combo 40 puts an insulated, air-conditioned office at one end and a storage bay at the other. The storage side keeps the original lockable cargo doors for easy loading, and an interior door links the two.",
    facts: [
      { label: "Length", value: "40 ft" },
      { label: "Floor area", value: "320 sq ft" },
      { label: "Layout", value: "Office + storage" },
    ],
    tags: ["Interior connecting door", "Lockable cargo doors", "Mini-split air conditioning", "Exterior electrical panel"],
    uses: ["Job-site office with tool storage", "Parts or equipment store with a desk", "Farm or yard office", "Seasonal or event base"],
    why: [
      { title: "Two spaces, one unit", text: "A place to work and a place to lock things up, on a single 40-foot footprint." },
      { title: "Secure by design", text: "A steel shell, a steel entry door and lockable cargo doors on the storage bay." },
      { title: "Built for the site", text: "Hard-wearing finishes inside, and a storage bay you can load straight from a truck." },
    ],
    specs: [
      { label: "Container", value: "1 × 40ft" },
      { label: "External size (L × W)", value: "40 ft × 8 ft" },
      { label: "Floor area", value: "Approx. 320 sq ft (external footprint)" },
      { label: "Layout", value: "Office at one end, storage bay at the other" },
      { label: "Office", value: "Framed, spray-foam insulated, lined and wired" },
      { label: "Storage bay", value: "Original cargo doors, door through to the office" },
      { label: "Heating and cooling", value: "Mini-split unit in the office" },
    ],
    included: ["Framed and insulated office", "Wall and ceiling panels", "Wiring, LED lighting and outlets", "Exterior electrical panel", "Mini-split air conditioning", "Steel entry door and window", "Interior door to the storage bay", "Exterior paint"],
    upgrades: ["Window security screen", "Shelving and racking in the storage bay", "Lighting in the storage bay", "Custom paint color"],
  },
  {
    slug: "stacked-office",
    name: "Stacked Office",
    tag: "Two stories · built to order",
    project: "stack",
    photo: "stack-deck",
    pos: "50% 28%",
    size: "2 containers, stacked",
    short: "Two stories",
    summary: "A two-story container office with folding glass doors, a rooftop deck and an outdoor deck at ground level.",
    intro:
      "Stacked builds set one container on top of another to double the floor space on the same footprint. This one pairs a glazed ground floor that opens onto a deck with an upper level and a covered rooftop deck. Every stacked build is designed to order.",
    facts: [
      { label: "Stories", value: "2" },
      { label: "Floor area", value: "To order" },
      { label: "Layout", value: "Custom" },
    ],
    tags: ["Folding glass doors", "Rooftop deck", "Ground-level deck", "External stair"],
    uses: ["Head office or yard office", "Sales and customer area", "Hospitality or event space", "Viewing or control room"],
    why: [
      { title: "Double the space", text: "A second story adds a whole floor without taking up more ground." },
      { title: "A front door to be proud of", text: "Glazing, decking and an awning make it a building customers want to walk into." },
      { title: "Made to stack", text: "Containers lock together at their corner castings, the way they are engineered to." },
    ],
    specs: [
      { label: "Containers", value: "Two or more, stacked" },
      { label: "Footprint", value: "Set by the design" },
      { label: "Glazing", value: "Folding glass doors and full-height windows" },
      { label: "Outdoor space", value: "Ground-level deck and rooftop deck" },
      { label: "Access", value: "External steel stair" },
      { label: "Heating and cooling", value: "Mini-split units" },
    ],
    included: ["Design drawings", "Structural connections between containers", "Framed, insulated and lined interiors", "Wiring and lighting", "Glazing as designed", "Exterior paint"],
    upgrades: ["Composite decking", "Awning", "Railings and balustrades", "Signage"],
  },
];

export const getModel = (slug: string) => models.find((m) => m.slug === slug);
export const photoAlt = (m: Model) => photos.find((p) => p.file === m.photo)?.alt ?? m.name;
