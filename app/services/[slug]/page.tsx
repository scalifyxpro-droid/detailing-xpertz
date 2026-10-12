import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroWhatsAppForm from "@/components/HeroWhatsAppForm";
import { BRAND_NAME, PHONE, PHONE_HREF, services, WHATSAPP_HREF } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | ${BRAND_NAME}`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="service-page" style={{ paddingTop: 90 }}>
      {/* Hero Section */}
      <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#050507" }}>
        {service.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            src={`/uploads/2025/06/${service.video}`}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Image
            src={`/images/${service.img}`}
            alt={service.title}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        )}

        <div className="hero-vignette" />

        <div className="hero-content">
          <div className="hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff525a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> <span>{BRAND_NAME} SIGNATURE EXCELLENCE</span>
          </div>
          <h1>
            {service.title.split(" ")[0]}{" "}
            <strong className="text-gradient-red">
              {service.title.split(" ").slice(1).join(" ")}
            </strong>
          </h1>
          <p style={{ maxWidth: 720, fontSize: "20px", color: "#e5e5eb" }}>
            {service.tagline}
          </p>
          <div className="hero-actions">
            <Link href="/book-your-cars" className="btn">
              BOOK SERVICE SLOT <span className="arrow">→</span>
            </Link>
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="btn outline">
              WHATSAPP INQUIRY
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Detail Section */}
      <section style={{ padding: "100px 0", background: "#08080a" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span className="section-tag">COMPREHENSIVE SPECIFICATION</span>
              <h2 style={{ marginBottom: 20 }}>
                Precision Engineering for <span className="text-gradient-red">{service.title}</span>
              </h2>
              <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#d2d2dd", marginBottom: "24px" }}>
                {service.desc}
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#a0a0ab", marginBottom: "30px" }}>
                At our Vadodara studio, every application is conducted under high CRI surgical inspection lighting inside our climate-controlled dust-free bays. We maintain the highest standards of preparation, edge-tucking, and curing.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", margin: "30px 0" }}>
                <div style={{ background: "var(--surface-card)", padding: "20px", borderRadius: "10px", border: "1px solid var(--surface-border)" }}>
                  <div style={{ color: "var(--red)", marginBottom: "6px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="var(--red)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg></div>
                  <strong style={{ display: "block", color: "#fff", marginBottom: "4px" }}>Warranty Guaranteed</strong>
                  <span style={{ fontSize: "13px", color: "#999" }}>Backed by authentic manufacturer warranty certification.</span>
                </div>

                <div style={{ background: "var(--surface-card)", padding: "20px", borderRadius: "10px", border: "1px solid var(--surface-border)" }}>
                  <div style={{ color: "var(--red)", marginBottom: "6px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="var(--red)"><path d="M19 3H5L2 9l10 12L22 9l-3-6z"/></svg></div>
                  <strong style={{ display: "block", color: "#fff", marginBottom: "4px" }}>Zero Orange Peel</strong>
                  <span style={{ fontSize: "13px", color: "#999" }}>Optical clarity that amplifies factory metallic flake and gloss.</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "20px" }}>
                <Link href="/book-your-cars" className="btn">
                  SCHEDULE BAY INSPECTION
                </Link>
                <a href={PHONE_HREF} className="btn outline">
                  CALL {PHONE}
                </a>
              </div>
            </div>

            <div style={{ position: "relative", height: "520px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--surface-border)", boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}>
              <Image
                src={`/images/${service.img}`}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote & Consultation Section */}
      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">CUSTOM ESTIMATE</span>
            <h2 style={{ marginBottom: 20 }}>
              Request a Quote for <span className="text-gradient-red">{service.title}</span>
            </h2>
            <p>
              Share your vehicle model and requirements. Our detailing consultants will provide you with an itemized estimate, turnaround time, and warranty options.
            </p>
          </div>
          <div style={{ width: "100%", maxWidth: "460px", marginLeft: "auto" }}><HeroWhatsAppForm /></div>
        </div>
      </section>
    </div>
  );
}
