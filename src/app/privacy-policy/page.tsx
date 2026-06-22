import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for DOUBLE TWIN SERVICES SDN. BHD. — how we collect, use, store and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="22 June 2026">
      <p>
        This Privacy Policy explains how {site.company.legalName}{" "}
        (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;),
        registration number {site.company.registrationNumber}, collects, uses,
        discloses and safeguards your information when you visit our website or
        interact with our services. We are committed to protecting your privacy
        and handling your personal data responsibly and in accordance with
        applicable Malaysian law, including the Personal Data Protection Act 2010
        (PDPA).
      </p>
      <p>
        By using our website, you consent to the practices described in this
        Privacy Policy. If you do not agree with this policy, please discontinue
        use of our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal information</strong> you provide voluntarily, such as
          your name, email address, telephone number and the contents of any
          message you send us through our contact form.
        </li>
        <li>
          <strong>Technical information</strong> automatically collected when you
          visit our website, such as your IP address, browser type, device
          information, operating system and pages visited.
        </li>
        <li>
          <strong>Usage information</strong> relating to how you interact with
          our website, including referring pages and the date and time of your
          visit.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect for purposes including:</p>
      <ul>
        <li>Responding to your enquiries and providing customer support;</li>
        <li>Operating, maintaining and improving our website and services;</li>
        <li>Communicating with you about our services where appropriate;</li>
        <li>Ensuring the security and integrity of our website;</li>
        <li>Complying with legal and regulatory obligations.</li>
      </ul>

      <h2>3. Legal Basis for Processing</h2>
      <p>
        We process your personal data on the basis of your consent, the
        necessity of performing or entering into a contract with you, compliance
        with legal obligations, and our legitimate business interests, provided
        such interests are not overridden by your rights.
      </p>

      <h2>4. Cookies and Similar Technologies</h2>
      <p>
        Our website may use cookies and similar technologies to enhance your
        browsing experience and analyse website traffic. You can control or
        disable cookies through your browser settings; however, some parts of the
        website may not function properly if cookies are disabled.
      </p>

      <h2>5. Disclosure of Your Information</h2>
      <p>
        We do not sell your personal information. We may share your information
        with:
      </p>
      <ul>
        <li>
          Service providers who assist us in operating our website and conducting
          our business, subject to confidentiality obligations;
        </li>
        <li>
          Regulatory authorities, law enforcement or other parties where required
          by law or to protect our legal rights;
        </li>
        <li>
          Successor entities in connection with a merger, acquisition or
          reorganisation.
        </li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures designed to
        protect your personal data against unauthorised access, loss, misuse or
        alteration. However, no method of transmission over the internet or
        electronic storage is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your personal data only for as long as necessary to fulfil the
        purposes for which it was collected, including to satisfy any legal,
        accounting or reporting requirements.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Subject to applicable law, you may have the right to access, correct or
        update your personal data, withdraw your consent, or request that we
        limit or stop processing your information. To exercise any of these
        rights, please contact us using the details below.
      </p>

      <h2>9. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of those websites. We
        encourage you to review the privacy policies of any third-party sites you
        visit.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our website is not directed at children, and we do not knowingly collect
        personal data from children. If you believe a child has provided us with
        personal information, please contact us so we can take appropriate
        action.
      </p>

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated &quot;Last updated&quot; date. We
        encourage you to review this policy periodically.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how we
        handle your personal data, please contact us:
      </p>
      <ul>
        <li>
          <strong>Company:</strong> {site.company.legalName}
        </li>
        <li>
          <strong>Registration No:</strong> {site.company.registrationNumber}
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </li>
        <li>
          <strong>Address:</strong> {fullAddress}
        </li>
      </ul>
    </LegalLayout>
  );
}
