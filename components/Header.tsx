"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navServices, PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/lib/data";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${sticky ? " sticky" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="logo" onClick={close}>
          <Image
            src="/images/logo-white.png"
            alt="Detailing Xpertz"
            width={340}
            height={100}
            priority
            className="logo-img"
          />
        </Link>

        <nav className={`nav${open ? " open" : ""}`}>
          <Link href="/" onClick={close}>Home</Link>
          <div className="dd">
            <Link href="/#services" className="dd-label" onClick={close}>Services</Link>
            <div className="dd-menu">
              {navServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={close}>
                  <span>{s.label}</span>
                  <span style={{ color: "var(--red)", fontSize: "12px" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" onClick={close}>About Us</Link>
          <Link href="/gallery" onClick={close}>Portfolio</Link>
          <Link href="/contact" onClick={close}>Contact</Link>
        </nav>

        <div className="header-right">
          <a href={PHONE_HREF} className="phone-chip">
            <span className="dot" />
            <span>CALL <strong>{PHONE}</strong></span>
          </a>

          <div className="social">
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.600 15.100L2 22l5.100-1.300A10 10 0 1012 2zm0 18.200c-1.500 0-3-.4-4.200-1.200l-.3-.2-3 .8.8-2.900-.2-.3A8.200 8.200 0 1112 20.200zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8-.2-.1-.4-.1-.6.100l-.8 1c-.1.200-.3.200-.5.100-1.400-.7-2.400-1.300-3.300-2.900-.2-.3.200-.3.700-1.100.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.100-.7.300-.7.700-1 1.500-1 2.400.1 1 .5 2 1.100 2.800 1.300 1.900 2.900 3.300 5 4.100 1.800.7 2.500.7 3.400.6.600-.1 1.700-.7 1.900-1.400.2-.7.200-1.200.2-1.400-.1-.1-.3-.2-.5-.3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 2.2c-3.2 0-3.6 0-4.8.1-3.3.1-4.8 1.7-5 5-.1 1.2-.1 1.600-.1 4.800s0 3.600.1 4.800c.2 3.300 1.700 4.800 5 5 1.200.1 1.600.1 4.800.1s3.600 0 4.800-.1c3.300-.2 4.800-1.700 5-5 .1-1.200.1-1.600.1-4.800s0-3.600-.1-4.800c-.2-3.300-1.700-4.800-5-5-1.200-.1-1.600-.1-4.800-.1zm6.200 17.200c-.5.500-1.200.7-3.200.8-1.100.1-1.500.1-3 .1s-1.900 0-3-.1c-2-.1-2.700-.3-3.200-.8-.5-.5-.7-1.200-.8-3.200-.1-1.100-.1-1.500-.1-3s0-1.900.1-3c.1-2 .3-2.700.8-3.200.5-.5 1.200-.7 3.200-.8 1.100-.1 1.500-.1 3-.1s1.900 0 3 .1c2 .1 2.700.3 3.200.8.5.5.7 1.200.8 3.200.1 1.100.1 1.500.1 3s0 1.900-.1 3c-.1 2-.3 2.700-.8 3.200z"/></svg>
            </a>
          </div>

          <Link href="/book-your-cars" className="btn">
            BOOK VIP SLOT
          </Link>

          <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
