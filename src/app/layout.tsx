import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.company.legalName} | E-Commerce & Retail Malaysia`,
    template: `%s | ${site.company.shortName}`,
  },
  description:
    "DOUBLE TWIN SERVICES SDN. BHD. is a Malaysia-based e-commerce and retail company specialising in online product sales, commission sales and consumer goods distribution.",
  keywords: [
    "Double Twin Services",
    "e-commerce Malaysia",
    "online retail Malaysia",
    "consumer products distribution",
    "commission sales",
    "retail distribution",
  ],
  authors: [{ name: site.company.legalName }],
  creator: site.company.legalName,
  publisher: site.company.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: site.url,
    siteName: site.company.legalName,
    title: `${site.company.legalName} | E-Commerce & Retail Malaysia`,
    description:
      "A Malaysia-based e-commerce and retail company specialising in online product sales and consumer goods distribution.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company.legalName}`,
    description:
      "Malaysia-based e-commerce and retail company specialising in online product sales and consumer goods distribution.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company.legalName,
    legalName: site.company.legalName,
    url: site.url,
    foundingDate: String(site.company.foundedYear),
    email: site.contact.email,
    telephone: site.contact.phone,
    description:
      "Malaysia-based e-commerce and retail company specialising in online product sales, commission sales and consumer goods distribution.",
    identifier: site.company.registrationNumber,
    address: {
      "@type": "PostalAddress",
      addressCountry: "MY",
      addressLocality: site.contact.city,
      addressRegion: site.contact.state,
      postalCode: site.contact.postcode,
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
