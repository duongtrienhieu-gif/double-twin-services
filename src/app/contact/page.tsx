import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DOUBLE TWIN SERVICES SDN. BHD. Find our company details, registration number and Malaysia address, or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            We&apos;d love to hear from you. Reach out with any questions about
            our services.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Company details */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                Company Information
              </h2>
              <p className="mt-3 text-muted">
                Official company details for {site.company.legalName}.
              </p>

              <dl className="mt-8 space-y-6">
                <Detail label="Company Name" icon={iconBuilding}>
                  {site.company.legalName}
                </Detail>
                <Detail label="Registration Number" icon={iconFile}>
                  {site.company.registrationNumber}
                </Detail>
                <Detail label="Address" icon={iconPin}>
                  <span className="block">{fullAddress}</span>
                </Detail>
                <Detail label="Email" icon={iconMail}>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-brand-600 hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </Detail>
                <Detail label="Phone" icon={iconPhone}>
                  <a
                    href={`tel:${site.contact.phoneHref}`}
                    className="text-brand-600 hover:underline"
                  >
                    {site.contact.phone}
                  </a>
                </Detail>
                <Detail label="Business Hours" icon={iconClock}>
                  {site.contact.hours}
                </Detail>
              </dl>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill in the form and our team will respond as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        {icon}
      </div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </dt>
        <dd className="mt-1 text-sm font-medium text-ink">{children}</dd>
      </div>
    </div>
  );
}

const iconBuilding = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="22" x2="9" y2="2" />
    <line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);
const iconFile = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);
const iconPin = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const iconMail = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const iconPhone = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const iconClock = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
