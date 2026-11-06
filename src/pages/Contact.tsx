import { useState } from "react";
import { Link } from "react-router-dom";

type EnquiryType = "general" | "feedback" | "business" | "bulk" | "tasting";

const enquiryOptions: { value: EnquiryType; label: string }[] = [
  { value: "general",  label: "General enquiry" },
  { value: "feedback", label: "Product feedback" },
  { value: "business", label: "Business / media" },
  { value: "bulk",     label: "Wholesale / bulk" },
  { value: "tasting",  label: "Tasting panel" },
];

const Contact = () => {
  const [enquiry, setEnquiry] = useState<EnquiryType>("general");
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "", quantity: "", consent: false });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, enquiry }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="page-enter">
      <div className="wrap hero">
        <div className="stack">
          <span className="eyebrow">Contact</span>
          <h1>Get in Touch.</h1>
          <p className="lede" style={{ maxWidth: "44rem" }}>Whether you're a future customer, independent retailer, media contact, potential collaborator or just curious about what we're building — we'd love to hear from you.</p>
        </div>
      </div>

      <div className="wrap block">
        <div className="contact-grid">
          <div>
            {status === "sent" ? (
              <div className="form-msg" style={{ padding: "2.5rem", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--display)", fontSize: "1.6rem" }}>Message received.</p>
                <p style={{ marginTop: ".75rem", color: "var(--muted)" }}>We'll get back to you as soon as we can.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.25rem" }}>
                {status === "error" && (
                  <div className="form-msg">
                    Something went wrong. Please try again or email <a href="mailto:harsh@hnmfoodgroup.com" style={{ color: "var(--accent)" }}>harsh@hnmfoodgroup.com</a>.
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="ct-enquiry">What is your enquiry about?</label>
                  <select id="ct-enquiry" name="enquiry" value={enquiry}
                    onChange={e => setEnquiry(e.target.value as EnquiryType)}>
                    {enquiryOptions.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>

                <div className="two">
                  <div className="form-group">
                    <label htmlFor="ct-name">Full Name</label>
                    <input id="ct-name" name="name" type="text" required autoComplete="name"
                      value={form.name} onChange={handleChange} placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-email">Email Address</label>
                    <input id="ct-email" name="email" type="email" required autoComplete="email"
                      value={form.email} onChange={handleChange} placeholder="you@example.com" />
                  </div>
                </div>

                {(enquiry === "business" || enquiry === "bulk") && (
                  <div className="form-group">
                    <label htmlFor="ct-org">
                      {enquiry === "bulk" ? "Company / Organisation" : "Publication / Organisation"}
                    </label>
                    <input id="ct-org" name="org" type="text"
                      value={form.org} onChange={handleChange}
                      placeholder={enquiry === "bulk" ? "Your company name" : "Your publication or organisation"} />
                  </div>
                )}

                {enquiry === "bulk" && (
                  <div className="form-group">
                    <label htmlFor="ct-quantity">Approximate Quantity Required</label>
                    <input id="ct-quantity" name="quantity" type="text"
                      value={form.quantity} onChange={handleChange}
                      placeholder="e.g. 100 units/month, 500 units initial order" />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="ct-message">
                    {enquiry === "feedback"  ? "Your Feedback" :
                     enquiry === "tasting"   ? "Tell us about yourself and your interest in tasting" :
                     enquiry === "bulk"      ? "Tell us more about your requirements" :
                     enquiry === "business"  ? "What would you like to know or discuss?" :
                     "Your Message"}
                  </label>
                  <textarea id="ct-message" name="message" required
                    value={form.message} onChange={handleChange}
                    placeholder={
                      enquiry === "tasting"
                        ? "e.g. dietary needs, location, why you'd like to take part..."
                        : "How can we help?"
                    }
                  />
                </div>

                {enquiry === "tasting" && (
                  <div className="form-msg">
                    <strong>Tasting panel:</strong> We're looking for people to try HNM's first blend and share honest feedback. No prior experience required. We'll be in touch with details if your application is shortlisted.
                  </div>
                )}

                <label className="check">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
                  <span>I agree to HNM Food Group using my details to respond to this enquiry.</span>
                </label>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                  <button type="submit" className="btn" disabled={!form.consent}>Send Message</button>
                </div>
              </form>
            )}
          </div>

          <div className="details">
            <div>
              <dl>
                <dt>Phone</dt>
                <dd><a href="tel:+447393066783" style={{ color: "var(--ink)" }}>+44 7393 066783</a></dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt>Email</dt>
                <dd><a href="mailto:harsh@hnmfoodgroup.com" style={{ color: "var(--ink)", wordBreak: "break-all" }}>harsh@hnmfoodgroup.com</a></dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt>Address</dt>
                <dd style={{ fontSize: ".9rem" }}>Welsh ICE, Tŷ Merlin,<br />Caerphilly Business Park,<br />Van Road, Caerphilly CF83 3GS</dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt>We hear from</dt>
              </dl>
              <ul className="audiences">
                <li>Future customers</li>
                <li>Independent retailers</li>
                <li>Distributors</li>
                <li>Media &amp; press</li>
                <li>Food-service operators</li>
                <li>Collaborators</li>
                <li>Investors</li>
              </ul>
            </div>

            <div className="founder-note">
              <svg viewBox="0 0 1080 1038.21" aria-hidden="true" style={{ width: 52, height: 50, color: "var(--logo)", gridRow: "span 2" }}>
                <path fill="currentColor" d="M290.38534,345.15026c23.05194-15.75094,42.11234-12.0066,58.21279,6.18638,0,0,28.47608-39.48076-18.27006-75.95081C278.74613,298.35592,290.38534,345.15026,290.38534,345.15026Z"/>
                <path fill="currentColor" d="M751.0159,443.89711c-7.55,64.01173-13.6878,141.494-19.47233,205.75-.32605,5.51318-1.57522,13.742-2.2,19.28237l-9.26085,75.20087-.08139.65177a21.24411,21.24411,0,0,1-39.135,8.5819L583.26008,595.73831,572.424,773.84137a29.23227,29.23227,0,1,1-58.14549-5.7033c.10858-.65177,32.37245-239.50756,32.481-240.13215a20.341,20.341,0,0,1,37.36962-8.12025l98.12233,155.80618c.81472-11.94964,1.49367-21.56356,1.6838-24.49669,1.76534-59.36763,3.99216-133.91673,6.76234-193.28437l.5432-9.6411.67895-10.02136a29.69345,29.69345,0,1,1,59.09612,5.64878Z"/>
                <path fill="currentColor" d="M759.95925,319.92868a338.89154,338.89154,0,0,1-27.6038,27.00664c-58.09308,51.31736-124.46405,94.11761-194.10376,127.94743q-18.53786,8.98236-37.47994,17.12962l-62.86457,513.10187a22.68624,22.68624,0,0,1-45.067-5.24867l53.75145-486.52465h-.02446c-5.17688,1.86081-10.40152,3.674-15.62616,5.43942-15.24522,5.15329-30.60927,10.47345-46.23543,14.17133q-24.76548,5.869-49.52864,11.71408c-20.58868,4.86686-41.10631,9.16117-62.02933,12.28649q-41.72721,6.22676-83.90641,8.63638-24.29894,1.28847-48.57341,1.31227c2.50457,1.59841,5.01029,3.17294,7.49156,4.843,30.58481,19.94478,57.87758,45.47226,78.77613,75.53272l6.70408,10.11553c4.27058,6.58467,8.37457,13.95654,12.21529,20.73211,4.867,8.92266,9.63849,17.79756,14.21894,26.79186L272.289,571.0043c16.07931-1.88468,32.875-4.24654,46.402-6.56079-16.41363,113.25132-33.08937,229.771-33.08937,229.771-3.7219,20.99451-34.11683,17.86919-33.06608-3.841.83408-11.14139-4.03293-25.09807-8.42233-35.97706-9.543-22.927-22.97443-45.73466-36.2393-67.25411a233.06411,233.06411,0,0,0-18.46622-25.74212c-4.19835-5.36792-9.30416-10.75973-13.93236-15.67435-19.80121-20.08792-43.53982-36.40647-68.39908-49.6712-25.4557-13.718-52.964-25.432-80.73319-37.55158a22.62979,22.62979,0,0,1,11.99978-43.182,843.26607,843.26607,0,0,0,239.2663-8.89878l11.90542-134.699A28.37636,28.37636,0,1,1,345.865,378.284s-10.11495,69.80673-16.98561,117.307a867.80207,867.80207,0,0,0,124.10526-40.27136l26.9829-244.22855c5.39238-35.97706,57.33006-30.32286,54.44341,6.346l-26.0766,212.90373q15.20912-7.515,30.10836-15.65048,10.19942-5.5468,20.27882-11.33228c56.78023-32.54143,111.58127-70.66571,156.00293-119.144,40.892-44.61329,54.801-122.69877,54.27567-181.41188,0,1.40765-133.9348,39.81806-153.2118,190.97873,29.011-18.06009,73.40938-63.55624,94.40345-90.51511C678.844,257.39829,642.3181,318.18714,560.86849,368.8603c1.2884-.83509,5.65449-47.90577,6.05988-52.00917,1.74155-17.55919,3.86519-35.11822,7.014-52.48636,6.03658-33.47205,15.7939-66.5623,32.804-96.21708,22.6168-39.34088,57.019-70.85661,94.8333-95.93079,37.83757-25.05031,112.12995-59.04715,112.12995-59.04715C837.35263,111.08075,829.76554,242.65442,759.95925,319.92868Z"/>
                <path fill="currentColor" d="M481.83141,912.90845l0-.00008a29.71884,29.71884,0,0,1,17.95723-22.62422c170.56685-70.24051,350.36677-123.41454,537.08841-163.79456a15.63925,15.63925,0,0,1,18.91811,15.30086v0a15.65655,15.65655,0,0,1-11.44139,15.06433c-185.367,51.88048-354.97635,102.58765-519.486,187.38533C503.08075,955.47044,477.81039,937.08749,481.83141,912.90845Z"/>
              </svg>
              <blockquote>"If you have a question, however simple, I will always reply personally."</blockquote>
              <figcaption><b>Harsh Sanmukh</b> · Founder</figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
