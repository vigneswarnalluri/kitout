import { pending } from "./site";

// Used by the FAQ page and its FAQPage structured data, so the two always match.
const base = [
  { q: "Do I need a permit?", a: "It depends on where the unit is going and how long it will stay. Rules differ between local authorities, so check early. We can supply the drawings and specifications they usually ask for." },
  { q: "Will it be comfortable in summer and winter?", a: "Yes. Bare steel conducts heat, so we frame the interior, insulate it with spray foam and line the walls and ceiling. A mini-split unit provides both heating and cooling." },
  { q: "What does the site need?", a: "A firm, level base and a power supply. Containers carry their load at the corners, so a gravel pad, concrete piers or a slab all work. We tell you what your unit needs before delivery." },
  { q: "How is it delivered?", a: "By truck, then set in place with a tilt-bed, forklift or crane, depending on the unit and the site. You need clear access for the truck and room to unload." },
  { q: "Can I change the layout?", a: "Yes. Our units are starting points. Door and window positions, room layout, finishes and fittings can all be changed, and fully custom builds are welcome." },
  { q: "What is included in the price?", a: "The finished unit: framing, insulation, wall and ceiling panels, flooring, wiring, lighting, outlets, doors, windows and exterior paint. Delivery, site preparation and the power connection are quoted separately because they depend on your site." },
  { q: "How secure is it?", a: "A container is a steel box built to be locked. We fit steel entry doors, can add security screens over the windows, and keep the original lockable cargo doors on storage bays." },
  { q: "Will it rust?", a: "Containers are made from weathering steel designed for years at sea. We treat any cut edges, then prime and paint the exterior. Like any steel building, it benefits from a repaint as part of long-term maintenance." },
  { q: "Can I add to it later?", a: "Yes. Units can be placed side by side or stacked, and we plan for future additions if you tell us at the design stage." },
  { q: "Do you sell empty containers?", a: "Yes. We sell new one-trip 20 ft containers and 40 ft high-cubes, as-is or as the starting point for a build. Call (256) 227-9757 for current stock and delivery pricing." },
];

const leaseToOwn = {
  q: "Do you offer lease-to-own?",
  a: "Yes, on our offices: the Office 20 at $995 a month, the Combo 40 at $1,195 a month and the Office 40 at $1,295 a month. Ask us for terms when you request your quote.",
};

export const faqs = () => (pending.showLeaseToOwn ? [...base, leaseToOwn] : base);
