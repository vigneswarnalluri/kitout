// Single place for business details.
export const site = {
  name: "Kit Out",
  tagline: "Container Co.",
  description:
    "Kit Out converts shipping containers into insulated offices, homes and secure storage in Bessemer, Alabama — finished in the workshop and delivered ready to use.",
  slogan: "Your box. Your build. Your way.",
  email: "info@kitoutcontainer.com",
  phone: "(256) 227-9757",
  phoneHref: "tel:+12562279757",
  whatsappHref: "https://wa.me/12562279757",
  address: "1166 Raimund Muscoda Rd, Bessemer, AL 35020",
  mapHref: "https://www.google.com/maps/search/?api=1&query=1166+Raimund+Muscoda+Rd%2C+Bessemer%2C+AL+35020",
  hours: [
    { day: "Monday–Friday", time: "8:00 AM–5:00 PM" },
    { day: "Saturday and Sunday", time: "Closed" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/1461688940359627" },
    { label: "Instagram", href: "https://www.instagram.com/kitoutcontainerco/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/kit-out-container-co/" },
    { label: "YouTube", href: "https://www.youtube.com/@kitoutcontainerco" },
  ],
};

// Waiting on Rick's sign-off. Keep these false until he confirms in writing.
// showPrices: unit prices (models.ts `price`, still to be filled in) and the empty-container prices.
// emptyContainerLine is only read by server-rendered pages, so it is not sent to the browser
// while showPrices is false (checked in the built JS on 2026-11-17).
// showLeaseToOwn: the lease-to-own line on the homepage and the FAQ answer.
export const pending = {
  showPrices: false,
  showLeaseToOwn: false,
};

export const emptyContainerLine =
  "Need just the box? New one-trip 20 ft containers from $3,500 and 40 ft high-cubes from $4,850 — call (256) 227-9757 for current stock and delivery.";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Units", href: "/models" },
  { label: "How It Works", href: "/process" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
