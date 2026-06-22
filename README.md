# DOUBLE TWIN SERVICES SDN. BHD. — Corporate Website

A modern, fast, mobile-responsive corporate website built for **DOUBLE TWIN SERVICES SDN. BHD.**, a Malaysia-based e-commerce and retail company.

This site exists for corporate presence and business verification purposes:

- Meta Business Verification
- WhatsApp Business Account verification
- Domain verification

> This is **not** a product landing page, online store, or ecommerce site. There is no shopping cart or checkout.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- SEO optimised: per-page metadata, Open Graph, JSON-LD Organization schema, `sitemap.xml`, `robots.txt`, web manifest
- Mobile-first responsive design, white background, premium corporate feel

## Pages

| Route                | Page                |
| -------------------- | ------------------- |
| `/`                  | Home                |
| `/about`             | About Us            |
| `/contact`           | Contact Us          |
| `/privacy-policy`    | Privacy Policy      |
| `/terms-conditions`  | Terms & Conditions  |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
# open http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

## Project Structure

```
double-twin-services/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout, metadata, JSON-LD
│   │   ├── page.tsx             # Home
│   │   ├── globals.css          # Global + Tailwind styles
│   │   ├── icon.svg            # Favicon
│   │   ├── manifest.ts         # PWA manifest
│   │   ├── robots.ts           # robots.txt
│   │   ├── sitemap.ts          # sitemap.xml
│   │   ├── not-found.tsx       # 404 page
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── terms-conditions/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   └── LegalLayout.tsx
│   └── lib/
│       └── site.ts             # Central company + contact config
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## Customisation

All company and contact details live in **`src/lib/site.ts`**. Update the
placeholders before going live:

- `contact.email` — official business email
- `contact.phone` — business phone number
- `contact.addressLine1/2`, `city`, `postcode`, `state` — registered address
- `url` — production domain (used for canonical URLs, sitemap, Open Graph)

## Contact Form

The contact form (`src/components/ContactForm.tsx`) currently simulates a
successful submission on the client (no backend). To make it live, wire the
`handleSubmit` function to an email service or a Next.js API route / server
action.

## Deployment

Optimised for [Vercel](https://vercel.com): import the repository and deploy —
no extra configuration required. Set your production domain and update
`site.url` accordingly.

---

© 2025 DOUBLE TWIN SERVICES SDN. BHD. — Registration No: 202501027611 (1629023-A)
