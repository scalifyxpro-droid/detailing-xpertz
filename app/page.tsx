import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSlider from "@/components/ServicesSlider";
import HeroWhatsAppForm from "@/components/HeroWhatsAppForm";

import { ADDRESS, BRAND_NAME, EMAIL, gallery, MAPS_URL, PHONE, PHONE_HREF, REVIEWS, WHATSAPP_HREF } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO SECTION WITH APPLE GLASS LEAD FORM */}
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/video/elite-detailing-website-video-home.mp4"
        />
        <div className="hero-vignette" />

        <div className="hero-content">
          <div className="hero-split-grid">
            {/* Left side: Pure White Luxury Titles & Badges */}
            <div>
              <div className="hero-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff525a" style={{ display: "inline-block" }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>VADODARA&#39;S PREMIER STUDIO • CAR DETAILING &amp; PPF</span>
              </div>

              <h1>
                MAKE YOUR CAR <strong>ULTRA LUXURY</strong>
              </h1>

              <p style={{ maxWidth: 620, fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: 1.55, color: "#e5e5eb" }}>
                Certified master installers in <strong>Paint Protection Film (PPF)</strong>, <strong>10H Ceramic Coating</strong>, and <strong>Showroom Paint Correction</strong> for luxury vehicles in Vadodara.
              </p>

              <div className="hero-actions" style={{ marginTop: 28 }}>
                <Link href="/book-your-cars" className="btn outline">
                  BOOK YOUR CAR’S <span className="arrow">→</span>
                </Link>
                <a href={PHONE_HREF} className="btn outline" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                  CALL STUDIO
                </a>
              </div>
            </div>

            {/* Right side: Apple Glossy Lead Form */}
            <div>
              <HeroWhatsAppForm />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND HIGHLIGHTS STRIP */}
      <section className="brands-strip">
        <div className="wrap brands-strip-inner">
          <div className="strip-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--red)">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span>5-10 Yr PPF Warranty</span>
          </div>
          <div className="strip-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--red)">
              <path d="M19 3H5L2 9l10 12L22 9l-3-6z"/>
            </svg>
            <span>10H Graphene &amp; Ceramic</span>
          </div>
          <div className="strip-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--red)">
              <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z"/>
            </svg>
            <span>99% Swirl Mark Elimination</span>
          </div>
          <div className="strip-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--red)">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
            <span>Dust-Free Climate Bay</span>
          </div>
          <div className="strip-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--red)">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Vasna - Bhayli Rd, Vadodara</span>
          </div>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section className="services-section" id="services">
        <div className="section-head">
          <span className="section-tag">ELITE AUTOMOTIVE SERVICES</span>
          <h2>
            Signature Detailing &amp; <span className="text-gradient-red">Protection Expertise</span>
          </h2>
          <p>
            Engineered precision, surgical paint correction, and industry-leading protective films tailored for automotive perfectionists.
          </p>
        </div>

        <Suspense fallback={<div style={{ minHeight: 600 }} />}>
          <ServicesSlider />
        </Suspense>

        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 40, flexWrap: "wrap", gap: 20 }}>
          <Link href="/gallery" className="btn-arrow">
            Explore All Completed Projects
          </Link>
          <Link href="/book-your-cars" className="btn outline-red">
            REQUEST CUSTOM QUOTATION
          </Link>
        </div>
      </section>

      {/* RECENT WORK GALLERY */}
      <section className="recent" style={{ background: "#050507", padding: "110px 0 80px" }}>
        <div className="wrap" style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="section-tag">CRAFTED FOR PERFECTION</span>
          <h2>
            Recent <span className="text-gradient-red">Masterpieces</span>
          </h2>
          <p style={{ maxWidth: 650, margin: "0 auto" }}>
            See Detailing Xpertz in action — protecting luxury brands from Porsche, BMW, Mercedes-Benz, Land Rover to Audi in our state-of-the-art studio.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((g) => (
            <a key={g} href={`/images/${g}`} target="_blank" rel="noreferrer">
              <Image src={`/images/${g}`} alt={g.replace(/-/g, " ").replace(".jpg", "")} width={530} height={530} />
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 50, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Link href="/gallery" className="btn outline">
            VIEW FULL GALLERY (150+ PHOTOS)
          </Link>
          <Link href="/book-your-cars" className="btn">
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <section className="reviews-section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">GOOGLE VERIFIED REVIEWS</span>
            <h2>
              What Car Enthusiasts <span className="text-gradient-red">Say About Us</span>
            </h2>
            <p>Rated 5.0 Stars by luxury vehicle owners across Vadodara &amp; Gujarat.</p>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">{"★".repeat(r.rating)}</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">
                  <div>
                    <div className="review-name">{r.author}</div>
                    <div className="review-car">{r.car}</div>
                  </div>
                  <span style={{ fontSize: "12px", color: "#666" }}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href="https://share.google/qh8c1AK35M5AdDyJ2"
              target="_blank"
              rel="noreferrer"
              className="btn outline"
              style={{ fontSize: "11px" }}
            >
              READ ALL GOOGLE REVIEWS ↗
            </a>
          </div>
        </div>
      </section>

      {/* STATE OF THE ART FACILITY */}
      <section className="facility-section">
        <div className="facility-inner">
          <span className="section-tag">ADVANCED AUTOMOTIVE WORKSHOP</span>
          <h2>
            STATE OF THE ART <span className="text-gradient-red">DETAILING STUDIO</span>
          </h2>
          <p style={{ fontSize: "20px", color: "#e2e2ec", maxWidth: 750, margin: "0 auto 30px" }}>
            Climate-controlled dust-free installation bays, surgical hex-lighting arrays, computerized film-plotters, and European steam equipment in Vadodara.
          </p>
          <p style={{ color: "var(--red)", fontWeight: 600, fontSize: "18px" }}>
            📍 {ADDRESS}
          </p>
          <div style={{ marginTop: 30 }}>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn">
              GET DIRECTIONS ON GOOGLE MAPS 📍
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DETAILING XPERTZ */}
      <section className="why-section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">THE DETAILING XPERTZ ADVANTAGE</span>
            <h2>
              Why Luxury Owners Choose <span className="text-gradient-red">{BRAND_NAME}</span>?
            </h2>
            <p>
              We treat every vehicle like a piece of art. Here is what sets our craftsmanship apart from conventional car washes.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Image src="/images/industry-certified-professionals.png" alt="Certified Master Technicians" width={38} height={38} />
              </div>
              <h3>Certified Master Installers</h3>
              <p>
                Our crew has undergone rigorous factory certification for edge-wrapping, bulk-fit TPU PPF application, and paint leveling.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Image src="/images/exceptional-quality.png" alt="Pure Optical Materials" width={38} height={38} />
              </div>
              <h3>100% Genuine Top-Tier Films</h3>
              <p>
                We exclusively utilize optical-grade TPU PPF and certified 10H ceramic formulations with verified manufacturer warranties.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Image src="/images/swift-service.png" alt="Surgical Dust-Free Studio" width={38} height={38} />
              </div>
              <h3>Dust-Free Climate Controlled Bay</h3>
              <p>
                Controlled air filtration, temperature regulation, and high CRI inspection lighting to guarantee zero trapped contaminants.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Link href="/book-your-cars" className="btn outline-red">
              BOOK YOUR CAR&#39;S INSPECTION
            </Link>
          </div>
        </div>
      </section>

      {/* 3-STEP SIGNATURE PROCESS */}
      <section className="process-section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">HOW WE WORK</span>
            <h2 style={{ color: "#ffffff", fontWeight: 800 }}>
              Our 3-Step Precision Workflow
            </h2>
            <p style={{ color: "#dcdce8", fontSize: "17px" }}>From initial paint depth inspection to final delivery under inspection lights.</p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="process-num">01</div>
              <h3>Digital Inspection &amp; Decon</h3>
              <p>
                We measure paint depth across all panels using ultrasonic gauges, identify hidden micro-scratches, and perform iron-fallout clay bar decontamination.
              </p>
            </div>
            <div className="process-step">
              <div className="process-num">02</div>
              <h3>Correction &amp; Protection Application</h3>
              <p>
                Multi-stage dual action compounding removes 95%+ defects. We then install custom edge-wrapped TPU PPF or apply 10H ceramic coatings in our clean room.
              </p>
            </div>
            <div className="process-step">
              <div className="process-num">03</div>
              <h3>Infrared Curing &amp; VIP Handover</h3>
              <p>
                Coatings are IR-baked for maximum hardness. We conduct a 50-point quality audit under multi-angle lighting before handing over your keys with a warranty card.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/book-your-cars" className="btn">
              GET A CUSTOM PACKAGE ESTIMATE
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT & QUOTE FORM */}
      <section className="contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 style={{ marginBottom: 20 }}>
              Book Your Car&#39;s <span className="text-gradient-red">Transformation</span>
            </h2>
            <p>
              Whether you need full body PPF protection, a 10H ceramic coating package, or deep interior restoration in Vadodara, our master detailers are ready.
            </p>
            <ul style={{ marginTop: 30 }}>
              <li>
                <Image src="/images/icon-phone.png" alt="" width={24} height={24} />
                <div>
                  <a href={PHONE_HREF} style={{ fontWeight: 700, fontSize: "19px", color: "#fff" }}>
                    {PHONE}
                  </a>
                  <div style={{ fontSize: "13px", color: "#a0a0ab" }}>Direct Line &amp; Consultations</div>
                </div>
              </li>
              <li>
                <Image src="/images/icon-email.png" alt="" width={24} height={24} />
                <div>
                  <a href={`mailto:${EMAIL}`} style={{ color: "#fff" }}>{EMAIL}</a>
                  <div style={{ fontSize: "13px", color: "#a0a0ab" }}>Send your custom inquiries</div>
                </div>
              </li>
              <li>
                <Image src="/images/icon-address.png" alt="" width={24} height={24} />
                <div>
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
                    {ADDRESS}
                  </a>
                  <div style={{ fontSize: "13px", color: "var(--red)" }}>Opp. HP Petrol Pump, Vasna Road</div>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ width: "100%", maxWidth: "460px", marginLeft: "auto" }}><HeroWhatsAppForm /></div>
        </div>
      </section>
    </>
  );
}
