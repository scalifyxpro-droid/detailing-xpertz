import Image from "next/image";
import Link from "next/link";
import HeroWhatsAppForm from "@/components/HeroWhatsAppForm";
import { ADDRESS, BRAND_NAME, EMAIL, MAPS_URL, PHONE, PHONE_HREF, PHONE_SECONDARY, WHATSAPP_HREF } from "@/lib/data";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata = {
  title: `Contact Us | ${BRAND_NAME} - Vadodara Detailing Studio`,
  description: `Contact ${BRAND_NAME} located at Vasna - Bhayli Road, Vadodara. Call ${PHONE} or WhatsApp us for instant quote on PPF, Ceramic Coating and Detailing.`,
};

export default function ContactPage() {
  return (
    <div className="contact-page" style={{ paddingTop: 90 }}>
      {/* Top Banner & Form */}
      <section style={{ position: "relative", minHeight: "85vh", paddingTop: "60px", paddingBottom: "100px", background: "url('/uploads/2025/03/contact-us-bg.jpg') center top/cover" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,5,5,0.85) 0%, rgba(10,10,14,0.95) 100%)" }} />
        
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="section-tag">GET IN TOUCH WITH MASTER DETAILERS</span>
            <h1 style={{ fontWeight: 800, marginBottom: "15px" }}>
              Contact <span className="text-gradient-red">{BRAND_NAME}</span>
            </h1>
            <p style={{ maxWidth: 650, margin: "0 auto", fontSize: "18px" }}>
              Have questions about TPU PPF packages, ceramic warranties, or car drop-off schedules? Our detailing specialists in Vadodara are here to help.
            </p>
          </div>

          <div className="contact-grid" style={{ alignItems: "center" }}>
            <div className="contact-info">
              <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>Studio Contact Info</h3>
              <p style={{ fontSize: "17px", lineHeight: "1.6", marginBottom: "30px" }}>
                Send your vehicle inquiry directly to WhatsApp, reach us via phone, or drop by our studio for an in-person vehicle paint inspection.
              </p>
              
              <ul style={{ display: "grid", gap: "25px" }}>
                <li style={{ display: "flex", gap: "16px", alignItems: "center", fontSize: "18px" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(229,9,20,0.12)", border: "1px solid rgba(229,9,20,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <PhoneIcon size={18} color="var(--red)" />
                  </div>
                  <div>
                    <a href={PHONE_HREF} style={{ fontWeight: "700", color: "#fff", display: "block" }}>{PHONE}</a>
                    <a href={`tel:${PHONE_SECONDARY.replace(/\s+/g, "")}`} style={{ color: "#a0a0ab", fontSize: "15px" }}>Secondary: {PHONE_SECONDARY}</a>
                  </div>
                </li>

                <li style={{ display: "flex", gap: "16px", alignItems: "center", fontSize: "18px" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <WhatsAppIcon size={20} color="#25d366" />
                  </div>
                  <div>
                    <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" style={{ color: "#25d366", fontWeight: "600" }}>
                      Chat on WhatsApp (Instant Response)
                    </a>
                  </div>
                </li>

                <li style={{ display: "flex", gap: "16px", alignItems: "center", fontSize: "18px" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(229,9,20,0.12)", border: "1px solid rgba(229,9,20,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MailIcon size={18} color="var(--red)" />
                  </div>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>

                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start", fontSize: "18px" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(229,9,20,0.12)", border: "1px solid rgba(229,9,20,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 4 }}>
                    <MapPinIcon size={20} color="var(--red)" />
                  </div>
                  <div>
                    <a href={MAPS_URL} target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
                      {ADDRESS}
                    </a>
                    <div style={{ fontSize: "13px", color: "var(--red)", marginTop: "4px" }}>
                      Landmark: Opposite HP Petrol Pump, Near Nilamber Circle
                    </div>
                  </div>
                </li>
              </ul>

              <div style={{ marginTop: "40px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn">
                  OPEN GOOGLE MAPS
                </a>
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="btn outline">
                  WHATSAPP US
                </a>
              </div>
            </div>

            <div style={{ width: "100%", maxWidth: "460px", marginLeft: "auto" }}>
              <HeroWhatsAppForm />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Banner */}
      <section className="facility-section">
        <div className="facility-inner">
          <span className="section-tag">PREMIUM WORKSHOP</span>
          <h2>
            LOCATED IN <span className="text-gradient-red">VADODARA, GUJARAT</span>
          </h2>
          <p style={{ fontSize: "20px", color: "#e2e2ec", maxWidth: 750, margin: "0 auto 20px" }}>
            Equipped with state-of-the-art climate control, ultrasonic thickness measurement, and hex lighting.
          </p>
        </div>
      </section>
    </div>
  );
}
