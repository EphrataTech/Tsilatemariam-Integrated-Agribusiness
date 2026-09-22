import Link from "next/link";
import { ENTERPRISE } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <div className="foot-brand">{ENTERPRISE.shortName}</div>
          <p style={{ marginTop: 8, maxWidth: 260, opacity: 0.75 }}>{ENTERPRISE.tagline}</p>
        </div>
        <div className="foot-col">
          <Link href="/about">About</Link>
          <Link href="/vision">Vision &amp; Mission</Link>
          <Link href="/values">Values</Link>
        </div>
        <div className="foot-col">
          <Link href="/units/poultry">Business Units</Link>
          <Link href="/customers">Our Customers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div style={{ opacity: 0.75 }}>
          © {new Date().getFullYear()} {ENTERPRISE.fullName}
        </div>
      </div>
    </footer>
  );
}
