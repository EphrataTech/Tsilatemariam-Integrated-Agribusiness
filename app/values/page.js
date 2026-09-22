import { VALUES } from "@/lib/data";

export const metadata = { title: "Values — Tsilatemariam Integrated Agribusiness Enterprise" };

export default function ValuesPage() {
  return (
    <>
      <section className="unit-hero">
        <div className="wrap">
          <p className="kicker">OUR VALUES</p>
          <h1>What the enterprise stands for</h1>
          <p>The principles that guide every decision, relationship and product we deliver.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="value-list">
            {VALUES.map(([title, desc], i) => (
              <div className="value-item" key={i}>
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
