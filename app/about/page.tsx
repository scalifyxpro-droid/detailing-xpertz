import Image from "next/image";
import Link from "next/link";
import { ADDRESS, BRAND_NAME, MAPS_URL, PHONE, PHONE_HREF, services, WHATSAPP_HREF } from "@/lib/data";

export const metadata = {
  title: `About Us | ${BRAND_NAME} - Luxury Car Detailing Studio`,
  description: `Learn about ${BRAND_NAME} in Vadodara, Gujarat. Master certified installers for TPU Paint Protection Film (PPF), 10H Ceramic Coating, and Paint Correction.`,
};

export default function AboutPage() {
  return (
    <div className="about-page" style={{ paddingTop: 90 }}>
      {/* Hero Banner */}
      <section style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/uploads/2025/03/about-us.jpg"
            alt={`About ${BRAND_NAME}`}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0.92) 100%)" }} />
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 2, padding: "100px 24px 60px", maxWidth: "1200px" }}>
          <div className="hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff525a">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>THE DETAILING XPERTZ CRAFTSMANSHIP</span>
          </div>
          <h1 style={{ marginBottom: "20px" }}>
            About <span className="text-gradient-red">{BRAND_NAME}</span>
          </h1>
          <p style={{ fontSize: "20px", maxWidth: "800px", lineHeight: "1.6", marginBottom: "35px", color: "#e2e2ec" }}>
            Established with a passion for automotive excellence, {BRAND_NAME} is Vadodara&#39;s premier car care and paint protection studio. We specialize in optical-clarity TPU Paint Protection Films, 10H Ceramic and Graphene Nano-Coatings, surgical Paint Correction, and high heat-rejection Sun Films.
          </p>

          <ul style={{ marginBottom: "35px", display: "grid", gap: "16px", fontSize: "16px" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span><strong>Certified Installers</strong> ensuring edge-wrapped, seamless bulk installation on supercars &amp; luxury vehicles.</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span><strong>100% Dust-Free Climate Controlled Studio</strong> featuring medical-grade air filtration and multi-spectrum inspection lighting.</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span><strong>Manufacturer Backed 5 to 10 Year Warranty</strong> against yellowing, peeling, cracking, and bubbling.</span>
            </li>
          </ul>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/book-your-cars" className="btn">
              BOOK AN INSPECTION <span className="arrow">→</span>
            </Link>
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="btn outline">
              CHAT WITH OUR EXPERTS
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "100px 0", background: "#08080a" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="section-tag">COMPREHENSIVE CATALOG</span>
          <h2 style={{ marginBottom: "15px" }}>
            Our Signature <span className="text-gradient-red">Service Capabilities</span>
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 60px" }}>
            From exterior invisible shields to deep interior sanitization and paintless dent repair.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", textAlign: "left" }}>
            {services.map((s) => (
              <div
                key={s.slug}
                style={{
                  background: "var(--surface-card)",
                  borderRadius: "14px",
                  padding: "28px",
                  border: "1px solid var(--surface-border)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all .3s"
                }}
              >
                <div>
                  <div style={{ width: "100%", height: "220px", position: "relative", marginBottom: "22px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Image
                      src={`/images/${s.img}`}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{s.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.5, marginBottom: "20px" }}>
                    {s.desc}
                  </p>
                </div>
                <Link href={`/services/${s.slug}`} className="btn outline-red" style={{ alignSelf: "flex-start", padding: "10px 22px", fontSize: "11px" }}>
                  EXPLORE DETAILS →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Banner */}
      <section className="facility-section">
        <div className="facility-inner">
          <span className="section-tag">VISIT OUR STUDIO</span>
          <h2>
            STATE OF THE ART <span className="text-gradient-red">FACILITY</span>
          </h2>
          <p style={{ fontSize: "20px", color: "#e2e2ec", maxWidth: 750, margin: "0 auto 25px" }}>
            Plot No. 10/11, Vasna - Bhayli Main Road, Opp. HP Petrol Pump, Near Nilamber Circle, Vasna, Vadodara.
          </p>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn">
            OPEN IN GOOGLE MAPS
          </a>
        </div>
      </section>
    </div>
  );
}
