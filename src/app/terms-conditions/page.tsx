import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions governing the use of the DOUBLE TWIN SERVICES SDN. BHD. website and services.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="22 June 2026">
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and
        use of the website operated by {site.company.legalName}{" "}
        (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;),
        registration number {site.company.registrationNumber}. By accessing or
        using this website, you agree to be bound by these Terms. If you do not
        agree, please do not use this website.
      </p>

      <h2>1. Use of the Website</h2>
      <p>
        You agree to use this website only for lawful purposes and in a manner
        that does not infringe the rights of, or restrict or inhibit the use and
        enjoyment of, this website by any third party. You must not use the
        website in any way that causes, or may cause, damage to the website or
        impairment of its availability or accessibility.
      </p>

      <h2>2. About Our Business</h2>
      <p>
        We are a Malaysia-based company engaged in e-commerce, online retail,
        commission sales and consumer products distribution. This website serves
        as our corporate presence and provides information about our company and
        business activities. It is not an online store, and no products are sold
        directly through this website.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, icons,
        images and software, is the property of {site.company.legalName} or its
        licensors and is protected by applicable intellectual property laws. You
        may not reproduce, distribute, modify or create derivative works from any
        content without our prior written consent.
      </p>

      <h2>4. Accuracy of Information</h2>
      <p>
        While we endeavour to ensure that the information on this website is
        accurate and up to date, we make no warranties or representations as to
        its accuracy, completeness or reliability. The content is provided for
        general information purposes only and may be changed without notice.
      </p>

      <h2>5. User Submissions</h2>
      <p>
        If you submit information to us through our contact form or other means,
        you confirm that the information is accurate and that you have the right
        to provide it. You agree not to submit any unlawful, defamatory,
        offensive or otherwise objectionable content.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        This website may contain links to third-party websites that are not
        owned or controlled by us. We are not responsible for the content,
        privacy policies or practices of any third-party websites and do not
        endorse them. You access such websites at your own risk.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {site.company.legalName} shall
        not be liable for any direct, indirect, incidental, consequential or
        special damages arising out of or in connection with your use of, or
        inability to use, this website, even if we have been advised of the
        possibility of such damages.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        This website is provided on an &quot;as is&quot; and &quot;as
        available&quot; basis without warranties of any kind, whether express or
        implied, including but not limited to implied warranties of
        merchantability, fitness for a particular purpose and non-infringement.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {site.company.legalName} and its
        directors, officers, employees and agents from and against any claims,
        liabilities, damages, losses and expenses arising out of your use of the
        website or your breach of these Terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of Malaysia. Any disputes arising out of or in connection with these
        Terms shall be subject to the exclusive jurisdiction of the courts of
        Malaysia.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We reserve the right to amend these Terms at any time. Any changes will
        be posted on this page with an updated &quot;Last updated&quot; date.
        Your continued use of the website after changes are posted constitutes
        your acceptance of the revised Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions about these Terms &amp; Conditions, please
        contact us:
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
