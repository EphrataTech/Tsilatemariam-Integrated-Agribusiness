import { ENTERPRISE } from "@/lib/data";

export const metadata = { title: "About — Tsilatemariam Integrated Agribusiness Enterprise" };

const FACTS = [
  ["2009", "Established"],
  ["Gondar", "Based in Ethiopia"],
  ["7", "Connected business lines"],
  ["Woman-Owned & Led", "Family enterprise"],
];

export default function AboutPage() {
  return (
    <>
      <section className="unit-hero">
        <div className="wrap">
          <p className="kicker">ABOUT US</p>
          <h1>{ENTERPRISE.fullName}</h1>
          <p>
            A woman-owned and woman-led family agribusiness enterprise established in {ENTERPRISE.established}{" "}
            in {ENTERPRISE.location}.
          </p>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}
            className="about-facts"
          >
            {FACTS.map(([value, label], i) => (
              <div key={i} style={{ borderTop: "2px solid var(--gold-500)", paddingTop: 14 }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: "var(--forest-700)", fontWeight: 500 }}>
                  {value}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.3px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="split-2">
            <div>
              <p className="kicker" style={{ marginBottom: 10 }}>OUR STORY</p>
              <h2 style={{ fontSize: 22, marginBottom: 16 }}>How TIAE came to be</h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75 }}>
                {ENTERPRISE.shortName} Integrated Agribusiness Enterprise (TIAE) was established with the aim of
                creating a sustainable and reliable source of income for the owner and family, while creating
                productive employment opportunities for others. Over time, TIAE has developed a diversified and
                integrated agribusiness model bringing together agricultural production, livestock and poultry,
                fishery, honey production and processing, feed and agricultural-input processing, and meat and
                meat-product production and processing.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, marginTop: 14 }}>
                The Enterprise is founded on the principle that agriculture should generate greater value than
                the production and sale of raw commodities alone — transforming agricultural resources into
                quality food products, value-added products, employment opportunities and sustainable business
                opportunities.
              </p>
            </div>
            <div>
              <p className="kicker" style={{ marginBottom: 10 }}>WHY WE EXIST</p>
              <h2 style={{ fontSize: 22, marginBottom: 16 }}>Purpose behind the enterprise</h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75 }}>
                TIAE was established to build a long-term family-owned business and a sustainable source of
                income, to create productive employment for others, to make better use of local agricultural
                resources, and to develop agricultural products beyond raw commodity sales — building
                integrated, reliable agricultural value chains that contribute to local food security and
                economic growth, starting in Gondar and expanding to the wider region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
