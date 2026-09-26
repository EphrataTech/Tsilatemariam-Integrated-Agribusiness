import Image from "next/image";
import Link from "next/link";
import UnitCard from "@/components/UnitCard";
import TeamCard from "@/components/TeamCard";
import { UNITS, TEAM, CEO, ENTERPRISE } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <p className="hero-eyebrow">INTEGRATED AGRIBUSINESS</p>
            <h1>Growing Resources. Creating Lasting Value.</h1>
            <p className="lead">
              A woman-owned and woman-led agribusiness in Gondar, connecting production,
              processing and value creation across seven business lines.
            </p>
            <div className="hero-ctas">
              <Link href="/units/poultry" className="btn btn-gold">
                Explore Our Businesses
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image
              src="/hero.png"
              alt="Gondar farmland"
              className="hero-image"
              width={800}
              height={640}
              priority
            />
            <div className="hero-fact-card">
              <div className="fact"><b>2009</b><span>EST.</span></div>
              <div className="fact"><b>Gondar</b><span>ETHIOPIA</span></div>
              <div className="fact"><b>7</b><span>BUSINESS LINES</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">WHAT WE DO</p>
            <h2>One Enterprise. Seven Connected Businesses.</h2>
            <p>
              These are not seven unrelated businesses — they are interconnected parts of one
              integrated agribusiness ecosystem, from production through to market.
            </p>
          </div>

          <div className="ecosystem-flow">
            <span className="step">Production</span>
            <span className="arrow">→</span>
            <span className="step">Processing</span>
            <span className="arrow">→</span>
            <span className="step">Value Addition</span>
            <span className="arrow">→</span>
            <span className="step">Markets</span>
          </div>

          <div className="unit-grid" style={{ marginTop: 30 }}>
            {UNITS.map((u) => (
              <UnitCard key={u.id} unit={u} />
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">LEADERSHIP</p>
            <h2>From our Founder &amp; General Manager</h2>
          </div>
          <div className="ceo-block">
            <div className="ceo-photo">{CEO.name.charAt(0)}</div>
            <div>
              <p className="role">{CEO.role}</p>
              <h3>{CEO.name}</h3>
              <p className="quote">&quot;{CEO.quote}&quot;</p>
            </div>
          </div>
          <div className="team-grid">
            {TEAM.map((t, i) => (
              <TeamCard key={i} member={t} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
