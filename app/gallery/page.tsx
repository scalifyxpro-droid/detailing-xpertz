import Image from "next/image";
import Link from "next/link";
import { BRAND_NAME, PHONE, WHATSAPP_HREF } from "@/lib/data";

export const metadata = {
  title: `Portfolio & Gallery | ${BRAND_NAME} - Supercars & Luxury Car Work`,
  description: `Explore our completed PPF installations, 10H ceramic coatings, and paint correction projects on luxury sedans, supercars and SUVs in Vadodara.`,
};

// Full list of gallery projects downloaded from live website
const galleryImages = [
  "2025/05/g63-brabus-detailing-service-by-elite-detailing-2.jpg",
  "2025/05/g63-brabus-detailing-service-by-elite-detailing-9.jpg",
  "2025/05/g63-brabus-detailing-service-by-elite-detailing-10.jpg",
  "2025/05/g63-brabus-detailing-service-by-elite-detailing-12.jpg",
  "2025/05/g63-brabus-detailing-service-by-elite-detailing-13.jpg",
  "2025/05/g63-brabus-detailing-service-by-elite-detailing-14.jpg",
  "2025/05/lamborghini-window-tint-service-by-elite-detailing-3.jpg",
  "2025/05/lamborghini-window-tint-service-by-elite-detailing-4.jpg",
  "2025/05/lamborghini-window-tint-service-by-elite-detailing-5.jpg",
  "2025/05/mercedes-amg-detailing-service-by-elite-detailing-1.jpg",
  "2025/05/mercedes-amg-detailing-service-by-elite-detailing-2.jpg",
  "2025/05/mercedes-amg-detailing-service-by-elite-detailing-3.jpg",
  "2025/05/mercedes-amg-detailing-service-by-elite-detailing-4.jpg",
  "2025/05/mercedes-amg-detailing-service-by-elite-detailing-5.jpg",
  "2025/05/nissan-patrol-safari-detailing-service-by-elite-detailing-5.jpg",
  "2025/05/nissan-patrol-safari-detailing-service-by-elite-detailing-2.jpg",
  "2025/05/nissan-patrol-safari-detailing-service-by-elite-detailing-3.jpg",
  "2025/05/nissan-patrol-safari-detailing-service-by-elite-detailing-1.jpg",
  "2025/06/ppf-installation-land-rover-in-dubai-1.jpg",
  "2025/06/ppf-installation-land-rover-in-dubai-4.jpg",
  "2025/06/ppf-installation-land-rover-in-dubai-7.jpg",
  "2025/05/ppf-elite-detailing-work-14.jpg",
  "2025/05/ppf-elite-detailing-work-15.jpg",
  "2025/05/ppf-elite-detailing-work-16.jpg",
  "2025/05/ppf-elite-detailing-work-17.jpg",
  "2025/06/elite-detailing-work-defender-01.jpg",
  "2025/06/elite-detailing-work-defender-02.jpg",
  "2025/06/elite-detailing-work-defender-03.jpg",
  "2025/06/elite-detailing-work-defender-04.jpg",
  "2025/06/elite-detailing-work-defender-05.jpg",
  "2025/06/elite-detailing-work-defender-06.jpg",
  "2025/06/elite-detailing-work-defender-07.jpg",
  "2025/06/elite-detailing-work-defender-09.jpg",
  "2025/06/elite-detailing-work-defender-10.jpg",
  "2025/05/elite-detailing-work-lamborghini-huracan-11.jpg",
  "2025/05/elite-detailing-work-xpel-ppf-lc200-black-1.jpg",
  "2025/05/elite-detailing-work-xpel-ppf-lc200-black-2.jpg",
  "2025/05/elite-detailing-work-xpel-ppf-lc200-black-8.jpg",
  "2025/05/g63-brabus-detailing-service-by-elite-detailing-8.jpg",
  "2025/05/g63-brabus-detailing-service-by-elite-detailing-7.jpg"
];

export default function GalleryPage() {
  return (
    <div className="gallery-page" style={{ paddingTop: 100 }}>
      <section style={{ padding: "60px 0 100px", background: "#050507" }}>
        <div className="wrap" style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="section-tag">PORTFOLIO OF EXCELLENCE</span>
          <h1>
            Our Work <span className="text-gradient-red">Gallery</span>
          </h1>
          <p style={{ maxWidth: 700, margin: "0 auto", fontSize: "18px" }}>
            Experience the mirror gloss, wrapped edges, and showroom perfection delivered by {BRAND_NAME}. Every project is protected with pride and precision.
          </p>
        </div>

        <div className="gallery-grid" style={{ maxWidth: 1780, margin: "0 auto", padding: "0 24px" }}>
          {galleryImages.map((src, i) => (
            <a
              key={i}
              href={`/uploads/${src}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={`/uploads/${src}`}
                alt={`Detailing Xpertz Project ${i + 1}`}
                width={500}
                height={500}
              />
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 60 }}>
          <Link href="/book-your-cars" className="btn">
            BOOK YOUR CAR&#39;S TRANSFORMATION <span className="arrow">→</span>
          </Link>
          <p style={{ marginTop: 16, fontSize: "14px" }}>
            Or call us directly at <a href={`tel:${PHONE}`} style={{ color: "var(--red)", fontWeight: "bold" }}>{PHONE}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
