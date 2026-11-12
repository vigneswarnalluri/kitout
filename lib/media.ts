// Stock media used until the client supplies their own photos and footage.
// Sources and licences are listed in MEDIA-CREDITS.md.

export type Photo = { file: string; alt: string; caption: string };

export const photos: Photo[] = [
  { file: "deck-pavilion", alt: "White modular building with large windows opening onto a timber deck", caption: "Modular pavilion with a wraparound timber deck" },
  { file: "interior-window", alt: "Bright room with a full-height window and a white table", caption: "Full-height glazing brings daylight deep inside" },
  { file: "glass-stack", alt: "Two stacked glass-fronted container units among trees", caption: "Stacked units with glazed fronts" },
  { file: "deck-terrace", alt: "Timber terrace with planter and seating beside a modular building", caption: "Outdoor living on a timber terrace" },
  { file: "container-yard", alt: "Aerial view of colourful shipping containers in a yard", caption: "Where every module begins" },
  { file: "interior-office", alt: "Fitted interior with desks, windows and air conditioning", caption: "A fitted, insulated interior" },
  { file: "container-stack", alt: "Shipping containers stacked five high against a blue sky", caption: "Built to be stacked" },
];

export type Clip = { file: string; label: string; title: string; text: string };

export const clips: Clip[] = [
  { file: "containers", label: "Raw steel", title: "It starts as a steel box.", text: "High-cube containers form the structural shell of every home we build." },
  { file: "welding", label: "Cut and welded", title: "Openings are cut and reinforced.", text: "Doors and windows are framed in welded steel so the shell stays as strong as it began." },
  { file: "grinding", label: "Finished by hand", title: "Every edge is finished.", text: "Steel is ground smooth, treated and primed before insulation and fit-out begin." },
];
