export const metadata = { title: "Contact — Tsilatemariam Integrated Agribusiness Enterprise" };

export default function ContactPage() {
  return (
    <>
      <section className="unit-hero">
        <div className="wrap">
          <p className="kicker">CONTACT</p>
          <h1>Get in touch</h1>
          <p>Let&apos;s build lasting value from agriculture — together.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap contact-grid">
          <div>
            <p className="kicker" style={{ marginBottom: 16 }}>FIND US</p>
            <div className="contact-item"><div className="label">Location</div><div>Gondar, Amhara Region, Ethiopia</div></div>
            <div className="contact-item"><div className="label">Phone</div><div>+251 9XX XXX XXX</div></div>
            <div className="contact-item"><div className="label">Email</div><div>info@tsilatemariam.com</div></div>
            <div className="contact-item"><div className="label">Hours</div><div>Mon–Sat, 8:00–17:00</div></div>
          </div>
          <div>
            <p className="kicker" style={{ marginBottom: 16 }}>SEND A MESSAGE</p>
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows="4" placeholder="How can we help?" />
            </div>
            <button className="btn btn-gold" type="button">Send Message</button>
          </div>
        </div>
      </section>
    </>
  );
}
