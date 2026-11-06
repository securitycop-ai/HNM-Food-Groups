import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function useCountdown(target: Date) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0, done: false });
  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setTime({ d: 0, h: 0, m: 0, s: 0, done: true }); return; }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
        done: false,
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

const REVEAL = new Date("2026-11-05T00:00:00+00:00");
const pad = (n: number) => String(n).padStart(2, "0");

const PreOrder = () => {
  const t = useCountdown(REVEAL);
  const [form, setForm] = useState({ name: "", email: "", packs: "1", postcode: "", consent: false });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) return;
    try {
      const res = await fetch("/api/pre-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="page-enter">
      <div className="wrap hero">
        <div className="teaser">
          <div className="stack">
            <span className="eyebrow">Pre-order interest</span>
            <h1>Be First in Line When We Launch.</h1>
            <p className="lede">Our 315g powdered breakfast blend is ready. The name arrives on 5 November. Register your interest now and we'll reach out when pre-orders open.</p>
            <p className="note">Registering interest is not a purchase or commitment. We will contact you when pre-orders go live.</p>
          </div>

          <div className="reveal-card">
            <span className="rc-k">The name is revealed</span>
            <p className="rc-date">5 November 2026</p>
            {t.done ? (
              <p style={{ color: "#F6EBD4", fontFamily: "var(--display)", fontSize: "1.25rem", fontStyle: "italic" }}>
                The name has been revealed!
              </p>
            ) : (
              <div className="countdown" role="timer" aria-label="Time until the product name reveal">
                <div><b>{pad(t.d)}</b><span>Days</span></div>
                <div><b>{pad(t.h)}</b><span>Hours</span></div>
                <div><b>{pad(t.m)}</b><span>Mins</span></div>
                <div><b>{pad(t.s)}</b><span>Secs</span></div>
              </div>
            )}
            <p style={{ fontSize: ".88rem", color: "var(--band-muted)" }}>Recipe finished. Pack finalised. Arriving Q4 2026.</p>
          </div>
        </div>
      </div>

      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Register interest</span>
            <h2>Tell us you're interested.</h2>
            <p className="lede">We'll contact you as soon as pre-orders open. No spam. No selling your details.</p>
          </div>

          <div>
            {status === "sent" ? (
              <div className="form-msg" style={{ padding: "2rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--display)", fontSize: "1.5rem" }}>Thank you for registering.</p>
                <p style={{ marginTop: ".75rem", color: "var(--muted)" }}>We'll be in touch when pre-orders go live.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
                {status === "error" && (
                  <div className="form-msg">
                    Something went wrong. Please try again or email <a href="mailto:harsh@hnmfoodgroup.com" style={{ color: "var(--accent)" }}>harsh@hnmfoodgroup.com</a>.
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="po-name">Full Name</label>
                  <input id="po-name" name="name" type="text" required autoComplete="name"
                    value={form.name} onChange={handleChange} placeholder="Your full name" />
                </div>

                <div className="form-group">
                  <label htmlFor="po-email">Email Address</label>
                  <input id="po-email" name="email" type="email" required autoComplete="email"
                    value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>

                <div className="two">
                  <div className="form-group">
                    <label htmlFor="po-packs">Packs of Interest</label>
                    <select id="po-packs" name="packs" value={form.packs} onChange={handleChange}>
                      <option value="1">1 pack</option>
                      <option value="2">2 packs</option>
                      <option value="3">3 packs</option>
                      <option value="4">4–6 packs</option>
                      <option value="7">7+ packs (trade/bulk)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="po-postcode">Postcode (optional)</label>
                    <input id="po-postcode" name="postcode" type="text" autoComplete="postal-code"
                      value={form.postcode} onChange={handleChange} placeholder="e.g. CF10 1AB" />
                  </div>
                </div>

                <label className="check">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
                  <span>I agree to be contacted when pre-orders open and understand I am not making a purchase.</span>
                </label>

                <button type="submit" className="btn" style={{ justifySelf: "start" }} disabled={!form.consent}>
                  Register My Interest
                </button>

                <p style={{ fontSize: ".82rem", color: "var(--muted)" }}>
                  We will only use your details to notify you when pre-orders open. See our <Link to="/privacy" style={{ color: "var(--accent)" }}>Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="wrap block">
        <span className="eyebrow">What to expect</span>
        <h2 style={{ marginTop: ".75rem" }}>When you pre-order.</h2>
        <ul className="shop-points" style={{ marginTop: "2rem" }}>
          <li><b>Name reveal · 5 Nov</b><span>The product name is announced on 5 November. Registered interest holders are notified first.</span></li>
          <li><b>Pre-order opens</b><span>Pre-order links go out to registered interest holders ahead of public launch.</span></li>
          <li><b>Launch · Q4 2026</b><span>Your order ships with the first batch. 315g stand-up pouch, ready to enjoy.</span></li>
          <li><b>Full information on pack</b><span>Complete ingredients, allergens and nutrition information printed on every pack.</span></li>
        </ul>
      </div>

      <div className="band">
        <div className="wrap block">
          <div className="split">
            <div className="stack">
              <span className="eyebrow">Trade &amp; wholesale</span>
              <h2>Looking to stock HNM?</h2>
            </div>
            <div className="stack">
              <p className="lede">If you're an independent retailer, food-service operator or distributor interested in stocking HNM's first blend, we'd love to hear from you.</p>
              <div className="actions">
                <Link to="/contact" className="btn">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
