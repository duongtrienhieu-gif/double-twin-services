/**
 * Central configuration for company + site details.
 * Update placeholder contact values (email / phone / address line)
 * once final business details are confirmed.
 */

export const site = {
  company: {
    legalName: "DOUBLE TWIN SERVICES SDN. BHD.",
    shortName: "Double Twin Services",
    registrationNumber: "202501027611 (1629023-A)",
    country: "Malaysia",
    tagline: "Trusted E-Commerce & Retail Distribution in Malaysia",
    foundedYear: 2025,
  },
  contact: {
    // Placeholders — replace with verified business details.
    email: "info@doubletwinservices.com",
    phone: "+60 0-0000 0000",
    addressLine1: "[Business Address Line 1]",
    addressLine2: "[Business Address Line 2]",
    city: "Kuala Lumpur",
    postcode: "00000",
    state: "Wilayah Persekutuan",
    country: "Malaysia",
  },
  // Used for canonical URLs, sitemap, robots, Open Graph.
  // Production domain (apex). www redirects to this in Vercel.
  url: "https://doubletwinservices.com",
  businessActivities: [
    "E-commerce",
    "Online retail",
    "Commission sales",
    "Consumer products distribution",
  ],
} as const;

export const fullAddress = [
  site.contact.addressLine1,
  site.contact.addressLine2,
  `${site.contact.postcode} ${site.contact.city}`,
  `${site.contact.state}, ${site.contact.country}`,
].join(", ");
