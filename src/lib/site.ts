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
    // Business email — to be activated on the company domain.
    email: "info@doubletwinservices.com",
    phone: "+60 17-930 8556",
    phoneHref: "+60179308556",
    addressLine1: "No. 56A, Tingkat 1, Jalan Bahagia",
    addressLine2: "Pekan Sekinchan",
    city: "Sekinchan",
    postcode: "45400",
    state: "Selangor",
    country: "Malaysia",
    hours: "Monday – Friday, 9:00 AM – 6:00 PM (MYT)",
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
