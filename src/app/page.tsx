import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50 to-white"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                {site.company.country} • E-Commerce & Retail
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                {site.company.legalName}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {site.company.tagline}. We connect quality consumer products
                with customers across Malaysia through dependable e-commerce and
                retail distribution.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-600"
                >
                  Learn More
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted">
                Registration No: {site.company.registrationNumber}
              </p>
            </div>

            {/* Corporate visual */}
            <div className="relative">
              <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/60">
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900">
                  <div className="text-center text-white">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 text-2xl font-bold backdrop-blur">
                      DT
                    </div>
                    <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                      Double Twin Services
                    </p>
                    <p className="text-xs text-white/60">SDN. BHD.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            About Our Company
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            DOUBLE TWIN SERVICES SDN. BHD. is a Malaysia-based e-commerce and
            retail company. We specialise in the online sale and distribution of
            consumer products, helping reputable brands and trusted suppliers
            reach customers efficiently across the Malaysian market. Our
            operations are built on professionalism, reliability and a
            commitment to quality service.
          </p>
        </div>
      </section>

      {/* Business Activities */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Our Business Activities
            </h2>
            <p className="mt-4 text-muted">
              A focused set of e-commerce and distribution services designed to
              move quality products to market.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Why Choose Us
            </h2>
            <p className="mt-4 text-muted">
              We operate to consistent standards so our partners and customers
              can rely on us with confidence.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {reasons.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-600 text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-700">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">
            Have a question about our e-commerce and distribution services? Our
            team is ready to assist you.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- content data ---------- */

const iconCart = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const iconTruck = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const iconGlobe = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const iconBox = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const activities = [
  {
    title: "E-Commerce Solutions",
    description:
      "Online selling operations that bring consumer products to customers across digital channels.",
    icon: iconCart,
  },
  {
    title: "Retail Distribution",
    description:
      "Efficient distribution of goods to retail and online points of sale throughout Malaysia.",
    icon: iconTruck,
  },
  {
    title: "Online Product Sales",
    description:
      "Sales of quality products through e-commerce platforms, including commission-based sales.",
    icon: iconGlobe,
  },
  {
    title: "Consumer Goods Distribution",
    description:
      "Sourcing and distributing reliable consumer goods to meet everyday market demand.",
    icon: iconBox,
  },
];

const iconBadge = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const iconUsers = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const iconShield = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const iconCheck = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const reasons = [
  {
    title: "Professional Service",
    description:
      "A disciplined, business-first approach in every interaction and transaction.",
    icon: iconBadge,
  },
  {
    title: "Customer Focused",
    description:
      "We put customer needs at the centre of our operations and decisions.",
    icon: iconUsers,
  },
  {
    title: "Reliable Operations",
    description:
      "Consistent, dependable processes you can count on day after day.",
    icon: iconShield,
  },
  {
    title: "Quality Standards",
    description:
      "We uphold high standards across the products and services we deliver.",
    icon: iconCheck,
  },
];
