import Image from "next/image";
import Link from "next/link";
import { ADDRESS, BRAND_NAME, EMAIL, MAPS_URL, PHONE, PHONE_HREF, PHONE_SECONDARY, WHATSAPP_HREF } from "@/lib/data";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer">
        <div className="footer-grid">
          <div className="footer-logo">
            <Image
              src="/images/logo-white.png"
              alt={BRAND_NAME}
              width={340}
              height={100}
              className="footer-logo-img"
            />
            <p style={{ color: "#a4a4b4", lineHeight: 1.7, fontSize: "14px" }}>
              Gujarat&#39;s premier automotive detailing studio. Certified installers for ultra-gloss TPU Paint Protection Film (PPF), 10H Ceramic &amp; Graphene coatings, and precision paint restoration.
            </p>
            <p style={{ marginTop: 20 }}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff", display: "inline-flex", gap: "8px", alignItems: "flex-start", fontSize: "14px" }}
              >
                <MapPinIcon size={18} color="var(--red)" />
                <span>{ADDRESS}</span>
              </a>
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/gallery">Gallery / Projects</Link></li>
              <li><Link href="/contact">Contact Studio</Link></li>
              <li><Link href="/book-your-cars">Book Inspection</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms &amp; Warranty</Link></li>
            </ul>
          </div>

          <div>
            <h4>Signature Services</h4>
            <ul className="footer-list">
              <li><Link href="/services/ppf">Paint Protection Film (PPF)</Link></li>
              <li><Link href="/services/ceramic">Ceramic &amp; Graphene 10H</Link></li>
              <li><Link href="/services/detailing">Deep Luxury Detailing</Link></li>
              <li><Link href="/services/polishing">Paint Correction &amp; Polish</Link></li>
              <li><Link href="/services/window-tint">Ceramic Sun Tint Film</Link></li>
              <li><Link href="/services/windshield-protection">Windshield Armor</Link></li>
              <li><Link href="/services/pdr">Paintless Dent Repair (PDR)</Link></li>
              <li><Link href="/services/waterless-car-wash">Waterless Eco Wash</Link></li>
              <li><Link href="/services/house-ppf">Architectural Home PPF</Link></li>
            </ul>
          </div>

          <div>
            <h4>Connect &amp; Visit</h4>
            <ul className="footer-list">
              <li>
                <a href={PHONE_HREF} style={{ fontWeight: 600, color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <PhoneIcon size={16} color="var(--red)" />
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_SECONDARY.replace(/\s+/g, "")}`} style={{ color: "#ccc", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <PhoneIcon size={16} color="var(--red)" />
                  <span>{PHONE_SECONDARY}</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" style={{ color: "#25d366", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <WhatsAppIcon size={16} color="#25d366" />
                  <span>WhatsApp Direct Chat</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <MailIcon size={16} color="var(--red)" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li style={{ marginTop: 12, color: "#8a8a9a", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <ClockIcon size={15} color="#8a8a9a" />
                <span>Mon – Sun: 10:00 AM – 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2026 {BRAND_NAME} – All Rights Reserved. Crafted for Car Enthusiasts.</p>
      </div>
    </footer>
  );
}
