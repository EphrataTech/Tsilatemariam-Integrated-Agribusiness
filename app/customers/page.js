import { CUSTOMERS } from "@/lib/data";

export const metadata = { title: "Our Customers — Tsilatemariam Integrated Agribusiness Enterprise" };

export default function CustomersPage() {
  return (
    <>
      <section className="unit-hero">
        <div className="wrap">
          <p className="kicker">OUR CUSTOMERS</p>
          <h1>Who we serve</h1>
          <p>From households to retailers, our business lines supply a range of customers across the region.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="customer-grid">
            {CUSTOMERS.map(([title, desc], i) => (
              <div className="customer-tile" key={i}>
                <div className="mark">{title}</div>
                {desc}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
