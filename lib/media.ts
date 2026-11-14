// Photos are Kit Out's own, supplied by the client.
// Video clips are still stock; sources and licences are listed in MEDIA-CREDITS.md.

// Each build is one filter tab in the gallery.
export const projects = [
  { key: "stack", label: "Two-story office" },
  { key: "office40", label: "40ft all-office" },
  { key: "combo", label: "40ft office + storage" },
  { key: "modular", label: "Modular office" },
] as const;

export type Photo = { file: string; project: (typeof projects)[number]["key"]; w: number; h: number; alt: string; caption: string };

export const photos: Photo[] = [
  { file: "stack-deck", project: "stack", w: 1206, h: 1609, alt: "Two-story stacked container office in dark gray, with glazed doors, a balcony and a wide composite deck", caption: "Two-story stacked office with deck" },
  { file: "office40-exterior", project: "office40", w: 945, h: 760, alt: "Gray 40-foot container office with two windows, a steel door and a mini-split air conditioner", caption: "40ft all-office unit, exterior" },
  { file: "build-exterior", project: "combo", w: 1206, h: 1608, alt: "Cream 40-foot container with a door, window and wall-mounted mini-split air conditioner", caption: "Combo unit: finished exterior with mini-split" },
  { file: "modular-office", project: "modular", w: 1600, h: 1208, alt: "Cream container office with a dark steel door, entry canopy with light, and a sliding window", caption: "Modular office with entry canopy" },
  { file: "stack-front", project: "stack", w: 1206, h: 1609, alt: "Front of the two-story container office: folding glass doors under an awning, with a balcony above", caption: "Folding glass doors and upper balcony" },
  { file: "office40-interior", project: "office40", w: 1206, h: 1609, alt: "Inside the 40-foot office: panelled walls, epoxy floor, windows on both sides, desk and wall-mounted air conditioner", caption: "40ft all-office unit, interior" },
  { file: "build-office", project: "combo", w: 1206, h: 904, alt: "Finished office interior with panelled walls, a window, ceiling lights and an interior door", caption: "Combo unit: finished office interior" },
  { file: "build-storage", project: "combo", w: 1206, h: 1608, alt: "View through the open container doors into the storage bay, with a door to the office at the far end", caption: "Combo unit: storage side, with a door through to the office" },
  { file: "build-electrical", project: "combo", w: 1206, h: 904, alt: "Electrician fitting the electrical panel on the end wall of the container", caption: "Combo unit: electrical work" },
  { file: "build-foam", project: "combo", w: 1206, h: 904, alt: "Installer in protective suit spraying foam insulation between the timber framing", caption: "Combo unit: spray foam insulation going in" },
  { file: "build-framing", project: "combo", w: 1206, h: 1608, alt: "Timber wall and ceiling framing inside the container before insulation", caption: "Combo unit: framing during the build" },
  { file: "build-screen", project: "combo", w: 1206, h: 904, alt: "Painted steel mesh security screen for the window, on trestles in the workshop", caption: "Combo unit: window security screen" },
];

export type Clip = { file: string; label: string; title: string; text: string };

export const clips: Clip[] = [
  { file: "containers", label: "Raw steel", title: "It starts as a steel box.", text: "A shipping container forms the structural shell of every unit we build." },
  { file: "welding", label: "Cut and welded", title: "Openings are cut and reinforced.", text: "Doors and windows are framed in welded steel so the shell stays as strong as it began." },
  { file: "grinding", label: "Finished by hand", title: "Every edge is finished.", text: "Steel is ground smooth, treated and primed before insulation and fit-out begin." },
];
