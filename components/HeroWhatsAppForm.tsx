"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Paint Protection Film (PPF)",
  "10H Ceramic & Graphene Coating",
  "Deep Interior & Exterior Detailing",
  "Paint Correction & Polishing",
  "Ceramic Sun Film / Heat Tint",
  "Windshield Protection Film",
  "Paintless Dent Removal (PDR)",
  "Full Transformation Package"
];

export default function HeroWhatsAppForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = `*NEW VIP INQUIRY - DETAILING XPERTZ*
Client Name: ${name.trim()}
Phone Number: ${phone.trim()}
Selected Service: ${service}
Requirement / Car: ${notes.trim() || "N/A"}

Sent via detailingxpertz.com VIP Quote Form`;

    const encoded = encodeURIComponent(message);
    const targetWhatsApp = "919274557932";
    const waUrl = `https://wa.me/${targetWhatsApp}?text=${encoded}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="hero-apple-glass-card">
      {/* Light green response badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#4ade80", fontSize: "11px", fontWeight: "600", letterSpacing: "0.03em", marginBottom: "8px" }}>
        <span className="live-dot" style={{ width: 6, height: 6 }} />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#4ade80">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span>Avg response in 5 mins</span>
      </div>

      <div className="glass-header" style={{ marginBottom: "12px" }}>
        <h3 className="glass-title" style={{ fontSize: "18px", margin: "0 0 2px" }}>Instant WhatsApp Quote</h3>
        <p className="glass-subtitle" style={{ fontSize: "11.5px" }}>Connect with our master detailers directly</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-form" style={{ gap: "8px" }}>
        <div className="glass-input-group" style={{ gap: "4px" }}>
          <label style={{ fontSize: "10.5px" }}>Your Name</label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ fontSize: "13px", padding: "7px 11px" }}
          />
        </div>

        <div className="glass-input-group" style={{ gap: "4px" }}>
          <label style={{ fontSize: "10.5px" }}>Phone / WhatsApp Number</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ fontSize: "13px", padding: "7px 11px" }}
          />
        </div>

        <div className="glass-input-group" style={{ gap: "4px" }}>
          <label style={{ fontSize: "10.5px" }}>Requirement</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{ fontSize: "13px", padding: "7px 11px" }}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="glass-input-group" style={{ gap: "4px" }}>
          <label style={{ fontSize: "10.5px" }}>Car Model &amp; Notes (Optional)</label>
          <textarea
            rows={2}
            placeholder="e.g. BMW M340i / Full PPF"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{ fontSize: "13px", padding: "7px 11px", minHeight: "44px" }}
          />
        </div>

        <button
          type="submit"
          className="glass-submit-btn"
          style={{ padding: "10px 16px", fontSize: "11.5px", marginTop: "4px" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 00-8.600 15.100L2 22l5.100-1.300A10 10 0 1012 2zm0 18.200c-1.500 0-3-.4-4.200-1.200l-.3-.2-3 .8.8-2.900-.2-.3A8.200 8.200 0 1112 20.200zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8-.2-.1-.4-.1-.6.100l-.8 1c-.1.200-.3.200-.5.100-1.400-.7-2.400-1.300-3.300-2.900-.2-.3.200-.3.700-1.100.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.100-.7.300-.7.700-1 1.500-1 2.400.1 1 .5 2 1.100 2.800 1.300 1.900 2.900 3.300 5 4.100 1.800.7 2.500.7 3.400.6.600-.1 1.700-.7 1.900-1.400.2-.7.200-1.200.2-1.400-.1-.1-.3-.2-.5-.3z"/>
          </svg>
          <span>GET ESTIMATE ON WHATSAPP</span>
        </button>

        <div className="glass-footer-note" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", fontSize: "10.5px" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
          <span>Direct studio consultation</span>
        </div>
      </form>
    </div>
  );
}
