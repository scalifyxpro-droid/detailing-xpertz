import Link from "next/link";
import { BRAND_NAME, EMAIL, PHONE } from "@/lib/data";

export const metadata = {
  title: `Privacy Policy | ${BRAND_NAME}`,
  description: `Privacy Policy for ${BRAND_NAME} automotive detailing studio.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: 130, paddingBottom: 100, background: "#050507", minHeight: "80vh" }}>
      <div className="wrap" style={{ maxWidth: 900 }}>
        <h1 style={{ marginBottom: 20 }}>
          Privacy <span className="text-gradient-red">Policy</span>
        </h1>
        <p style={{ color: "#777", fontSize: "14px", marginBottom: 40 }}>Last updated: 2026</p>

        <div style={{ lineHeight: 1.8, fontSize: "16px", color: "#ccc" }}>
          <h3 style={{ color: "#fff", marginTop: 30 }}>1. Who We Are</h3>
          <p>
            {BRAND_NAME} is an ultra-luxury automotive care studio located in Vadodara, Gujarat. We respect your privacy and are committed to protecting any personal details you share with us through our website or direct consultations.
          </p>

          <h3 style={{ color: "#fff", marginTop: 30 }}>2. Information We Collect</h3>
          <p>
            When you request an estimate, schedule an appointment, or contact us via WhatsApp/Phone, we collect basic details such as your name, contact number, email address, vehicle make &amp; model, and preferred detailing service.
          </p>

          <h3 style={{ color: "#fff", marginTop: 30 }}>3. How We Use Your Information</h3>
          <p>
            Your information is used solely to provide customized service quotations, coordinate vehicle pick-up/drop-off, issue warranty certificates for PPF and ceramic coatings, and deliver appointment reminders.
          </p>

          <h3 style={{ color: "#fff", marginTop: 30 }}>4. Third-Party Sharing</h3>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We may share vehicle warranty information with official film manufacturers (such as PPF warranty registries) solely for warranty validation.
          </p>

          <h3 style={{ color: "#fff", marginTop: 30 }}>5. Contact Us</h3>
          <p>
            If you have questions about our privacy policies, contact us at <a href={`mailto:${EMAIL}`} style={{ color: "var(--red)" }}>{EMAIL}</a> or call <a href={`tel:${PHONE}`} style={{ color: "var(--red)" }}>{PHONE}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
