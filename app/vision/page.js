import { VISION, MISSION, ENTERPRISE } from "@/lib/data";

export const metadata = { title: "Vision & Mission — Tsilatemariam Integrated Agribusiness Enterprise" };

export default function VisionPage() {
  return (
    <>
      <section className="unit-hero">
        <div className="wrap">
          <p className="kicker">VISION &amp; MISSION</p>
          <h1>Where the enterprise is headed</h1>
          <p>{ENTERPRISE.shortVision}</p>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="split-2">
            <div>
              <p className="kicker" style={{ marginBottom: 10 }}>VISION</p>
              <h2 style={{ fontSize: 20, marginBottom: 16 }}>Our Vision</h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75 }}>{VISION}</p>
            </div>
            <div>
              <p className="kicker" style={{ marginBottom: 10 }}>MISSION</p>
              <h2 style={{ fontSize: 20, marginBottom: 16 }}>Our Mission</h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75 }}>{MISSION}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
