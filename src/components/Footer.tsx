import Link from "next/link";
import { site, fullAddress } from "@/lib/site";

const columns = [
  {
    heading: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-conditions", label: "Terms & Conditions" },
    ],
  },
];

export default function Footer() {
  const year = 2025;

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                DT
              </span>
              <span className="text-base font-bold text-ink">
                {site.company.legalName}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              A Malaysia-based e-commerce and retail company specialising in
              online product sales, commission sales and consumer goods
              distribution.
            </p>
            <address className="mt-4 max-w-md text-sm not-italic leading-relaxed text-muted">
              {fullAddress}
            </address>
            <p className="mt-3 text-sm text-muted">
              Tel:{" "}
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="hover:text-brand-600"
              >
                {site.contact.phone}
              </a>
              {" · "}Email:{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-brand-600"
              >
                {site.contact.email}
              </a>
            </p>
            <p className="mt-3 text-xs text-muted">
              Registration No: {site.company.registrationNumber}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.company.legalName}. All rights reserved.
          </p>
          <p>{site.company.country}</p>
        </div>
      </div>
    </footer>
  );
}
