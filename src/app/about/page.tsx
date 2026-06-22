import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DOUBLE TWIN SERVICES SDN. BHD. — a Malaysia-based e-commerce and retail company. Our mission, vision and core values.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Building trusted e-commerce and retail distribution in Malaysia.
          </p>
        </div>
      </section>

      {/* Company overview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Company Overview
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
            <p>
              {site.company.legalName} is a Malaysia-based company operating in
              the e-commerce and retail sector. We focus on the online sale and
              distribution of consumer products, connecting trusted suppliers
              and brands with customers throughout Malaysia.
            </p>
            <p>
              Our business activities span e-commerce, online retail, commission
              sales and consumer products distribution. We combine modern
              digital sales channels with reliable distribution practices to
              deliver a dependable experience for our partners and customers.
            </p>
            <p>
              Registered in Malaysia under registration number{" "}
              <span className="font-medium text-ink">
                {site.company.registrationNumber}
              </span>
              , we are committed to conducting business with integrity,
              professionalism and a long-term outlook.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-ink">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted">
                To deliver quality consumer products to customers across
                Malaysia through efficient e-commerce and retail distribution,
                while maintaining the highest standards of service, reliability
                and trust.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-ink">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-muted">
                To be a recognised and trusted name in Malaysia&apos;s
                e-commerce and retail distribution landscape — known for quality,
                dependability and a genuine commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Core Values
            </h2>
            <p className="mt-4 text-muted">
              The principles that guide how we work and serve our customers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="text-base font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const values = [
  {
    title: "Integrity",
    description:
      "We act honestly and transparently in all our business dealings.",
  },
  {
    title: "Quality",
    description:
      "We hold our products and services to consistently high standards.",
  },
  {
    title: "Reliability",
    description:
      "We deliver on our commitments with dependable, consistent operations.",
  },
  {
    title: "Customer Focus",
    description:
      "We place the needs and satisfaction of our customers at the centre.",
  },
];
