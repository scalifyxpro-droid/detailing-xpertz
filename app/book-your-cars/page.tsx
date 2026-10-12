import Link from "next/link";
import HeroWhatsAppForm from "@/components/HeroWhatsAppForm";
import { ADDRESS, BRAND_NAME, MAPS_URL, PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/lib/data";

export const metadata = {
  title: `Book Your Car's Detailing Slot | ${BRAND_NAME} Vadodara`,
  description: `Reserve your VIP bay inspection and detailing slot at ${BRAND_NAME}. PPF installation, Ceramic Coating, and Paint Restoration.`,
};

export default function BookPage() {
  return (
    <div className="book-page" style={{ paddingTop: 100 }}>
      <section style={{ padding: "60px 0 100px", background: "#050507" }}>
        <div className="wrap" style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="section-tag">PRIORITY APPOINTMENTS</span>
          <h1>
            Book Your Car&#39;s <span className="text-gradient-red">VIP Slot</span>
          </h1>
          <p style={{ maxWidth: 700, margin: "0 auto", fontSize: "18px" }}>
            Experience personalized automotive care. Reserve your slot for digital paint measurement, custom film cut planning, or multi-stage detailing.
          </p>
        </div>

        <div className="wrap" style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Top Quick Action Chips */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}>
            <div style={{ background: "var(--surface-card)", padding: "24px", borderRadius: "14px", border: "1px solid var(--surface-border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--red)", marginBottom: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <h4 style={{ margin: 0, fontSize: "16px" }}>Fastest Response</h4>
              </div>
              <p style={{ fontSize: "13.5px", margin: "0 0 16px", color: "var(--muted)" }}>
                Message our master detailers on WhatsApp with your vehicle model for immediate scheduling.
              </p>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="btn outline-red" style={{ padding: "8px 18px", fontSize: "11px" }}>
                WHATSAPP DIRECT →
              </a>
            </div>

            <div style={{ background: "var(--surface-card)", padding: "24px", borderRadius: "14px", border: "1px solid var(--surface-border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--red)", marginBottom: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h4 style={{ margin: 0, fontSize: "16px" }}>Visit Our Studio</h4>
              </div>
              <p style={{ fontSize: "13.5px", margin: "0 0 16px", color: "var(--muted)" }}>
                Drive by Vasna - Bhayli Road, Vadodara for a complimentary paint health check &amp; scratch audit.
              </p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn outline" style={{ padding: "8px 18px", fontSize: "11px" }}>
                MAP DIRECTIONS →
              </a>
            </div>
          </div>

          {/* Centered WhatsApp Lead Form */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: "560px" }}>
              <HeroWhatsAppForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
