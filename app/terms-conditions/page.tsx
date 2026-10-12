import { BRAND_NAME, EMAIL, PHONE } from "@/lib/data";

export const metadata = {
  title: `Terms & Conditions | ${BRAND_NAME} Warranty Policy`,
  description: `Terms and conditions, service authorization and warranty policies at ${BRAND_NAME}.`,
};

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 130, paddingBottom: 100, background: "#050507", minHeight: "80vh" }}>
      <div className="wrap" style={{ maxWidth: 900 }}>
        <h1 style={{ marginBottom: 20 }}>
          Terms &amp; <span className="text-gradient-red">Conditions</span>
        </h1>
        <p style={{ color: "#777", fontSize: "14px", marginBottom: 40 }}>Service Authorization &amp; Warranty Guidelines</p>

        <div style={{ lineHeight: 1.8, fontSize: "16px", color: "#ccc" }}>
          <h3 style={{ color: "#fff", marginTop: 30 }}>1. Service Authorization</h3>
          <p>
            By booking a job card with {BRAND_NAME}, the customer authorizes our detailing technicians to operate, inspect, wash, compound, and apply specified protective films and coatings to the vehicle.
          </p>

          <h3 style={{ color: "#fff", marginTop: 30 }}>2. Paint Protection Film (PPF) Warranty</h3>
          <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
            <li><strong>Duration:</strong> 5 to 10 Years depending on the chosen TPU thickness package.</li>
            <li><strong>Coverage:</strong> Covers manufacturer defects including yellowing, bubbling, cracking, and premature delamination.</li>
            <li><strong>Transferability:</strong> Warranty applies to the original registered vehicle and is non-transferable unless verified by {BRAND_NAME}.</li>
          </ul>

          <h3 style={{ color: "#fff", marginTop: 30 }}>3. Ceramic &amp; Graphene Coating Maintenance</h3>
          <p>
            Ceramic coatings require periodic pH-neutral washes and annual inspection/top-coat refreshes to maintain extreme hydrophobicity and warranty coverage.
          </p>

          <h3 style={{ color: "#fff", marginTop: 30 }}>4. Warranty Exclusions</h3>
          <p>
            Warranty does not cover mechanical accidents, high-speed stone gouges that puncture the metal, harsh chemical acid washes at third-party roadside wash stations, or intentional vandalism.
          </p>

          <h3 style={{ color: "#fff", marginTop: 30 }}>5. Dispute Resolution</h3>
          <p>
            Any disputes arising out of detailing services or job orders are subject to the exclusive jurisdiction of the competent courts in Vadodara, Gujarat.
          </p>
        </div>
      </div>
    </div>
  );
}
