import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UNITS, getUnit } from "@/lib/data";

export function generateStaticParams() {
  return UNITS.map((u) => ({ slug: u.id }));
}

export function generateMetadata({ params }) {
  const unit = getUnit(params.slug);
  if (!unit) return {};
  return { title: `${unit.name} — Tsilatemariam Integrated Agribusiness Enterprise` };
}

const GALLERY = {
  poultry: [
    { src: "/red-chickens.png", alt: "Red chickens" },
    { src: "/white-chicken1.png", alt: "White chicken" },
    { src: "/white-chickens.png", alt: "White chickens" },
  ],
  "forestry-fishery": [
    { src: "/fish-1.jpg", alt: "Fish pond" },
    { src: "/fish-2.png", alt: "Fish production" },
    { src: "/fish-3.png", alt: "Fish harvest" },
  ],
  honey: [
    { src: "/honey-1.png", alt: "Honey production" },
    { src: "/honey-2.png", alt: "Honey processing" },
    { src: "/honey-3.png", alt: "Honey products" },
  ],
  meat: [
    { src: "/meat-1.png", alt: "Meat production" },
    { src: "/meat-2.png", alt: "Meat processing" },
  ],
};

export default function UnitDetailPage({ params }) {
  const unit = getUnit(params.slug);
  if (!unit) notFound();
  const gallery = GALLERY[unit.id] || [];

  return (
    <>
      <section className="unit-hero">
        <div className="wrap">
          <Link href="/" className="back-link">← All business units</Link>
          <p className="kicker">BUSINESS UNIT · {unit.status.toUpperCase()}</p>
          <h1>{unit.name}</h1>
          <p>{unit.desc}</p>
        </div>
      </section>
      <section className="block alt">
        <div className="wrap">
          <div className="unit-meta">
            {unit.meta.map(([label, val], i) => (
              <div className="item" key={i}>
                <div className="label">{label.toUpperCase()}</div>
                <div className="val">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {gallery.length > 0 && (
        <section className="block">
          <div className="wrap">
            <h3 style={{ fontSize: 17, color: "var(--forest-700)", marginBottom: 16 }}>Photo gallery</h3>
            <div className="gallery-grid">
              {gallery.map((img) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="gallery-tile"
                  width={700}
                  height={525}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
