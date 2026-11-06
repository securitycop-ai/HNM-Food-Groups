import { Link } from "react-router-dom";

const OurJourney = () => (
  <div className="page-enter">
    <div className="wrap hero">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Our Journey</span>
          <h1>From a Question Asked in a Supermarket Aisle to a Product Ready for Market.</h1>
        </div>
        <div className="prose">
          <p className="lede">HNM's first product has been two and a half years in the making. This is the story of how we got here.</p>
          <p>No shortcuts. No manufactured urgency. Just genuine progress, one stage at a time.</p>
        </div>
      </div>
    </div>

    <dl className="tally wrap" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "1rem", paddingBlock: "2rem 0", borderTop: "1px solid var(--line)", marginInline: "auto", maxWidth: "72rem", paddingInline: "max(20px, env(safe-area-inset-left, 0px))" }}>
      <div style={{ display: "flex", flexDirection: "column-reverse", gap: ".35rem" }}>
        <dd style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 500, fontSize: "clamp(2.6rem,6vw,3.8rem)", lineHeight: 1 }}>2.5+</dd>
        <dt style={{ fontSize: ".78rem", color: "var(--muted)" }}>Years of development</dt>
      </div>
      <div style={{ display: "flex", flexDirection: "column-reverse", gap: ".35rem" }}>
        <dd style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 500, fontSize: "clamp(2.6rem,6vw,3.8rem)", lineHeight: 1 }}>5</dd>
        <dt style={{ fontSize: ".78rem", color: "var(--muted)" }}>Ingredient families</dt>
      </div>
      <div style={{ display: "flex", flexDirection: "column-reverse", gap: ".35rem" }}>
        <dd style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 500, fontSize: "clamp(2.6rem,6vw,3.8rem)", lineHeight: 1 }}>315g</dd>
        <dt style={{ fontSize: ".78rem", color: "var(--muted)" }}>Pack size, ready for market</dt>
      </div>
      <div style={{ display: "flex", flexDirection: "column-reverse", gap: ".35rem" }}>
        <dd style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 500, fontSize: "clamp(2.6rem,6vw,3.8rem)", lineHeight: 1 }}>Q4</dd>
        <dt style={{ fontSize: ".78rem", color: "var(--muted)" }}>2026 launch window</dt>
      </div>
    </dl>

    <div className="wrap block">
      <span className="eyebrow">The roadmap</span>
      <h2 style={{ marginTop: ".75rem" }}>How we got here — and where we're going.</h2>

      <ul className="road">
        <li>
          <div className="when"><b>2023</b><span>Year One</span></div>
          <div className="dot" />
          <div className="what">
            <h3>The Question</h3>
            <p>Harsh moved to the UK and began working in a supermarket. Reading breakfast product labels on the shop floor prompted a simple question: could the food traditions of his upbringing in Chennai translate into something useful for modern consumers?</p>
          </div>
        </li>

        <li>
          <div className="when"><b>2023–24</b><span>Research</span></div>
          <div className="dot" />
          <div className="what">
            <h3>Traditional Food Research</h3>
            <p>Months of research into traditional South Indian food ingredients: their role in family food culture, their nutritional characteristics and their potential within a modern UK food product. This was not desk research. It was connected to lived experience and family knowledge.</p>
          </div>
        </li>

        <li>
          <div className="when"><b>2024</b><span>Formulation</span></div>
          <div className="dot" />
          <div className="what">
            <h3>Formulation Work Begins</h3>
            <p>Ingredient selection, early formulation trials and assessment of how different raw materials from multiple ingredient families would behave in a single powdered product. Grains, millets, pulses, legumes, rice, seeds and dates were all evaluated for their characteristics and suitability.</p>
          </div>
        </li>

        <li>
          <div className="when"><b>2024–25</b><span>Development</span></div>
          <div className="dot" />
          <div className="what">
            <h3>Specialist Food-Development Support</h3>
            <p>HNM engaged Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre for specialist food-development support. The collaboration covered processing, milling, blending, preparation performance, sensory evaluation, food safety and allergen management.</p>
          </div>
        </li>

        <li>
          <div className="when"><b>2025</b><span>Pack</span></div>
          <div className="dot" />
          <div className="what">
            <h3>Packaging Finalised</h3>
            <p>The 315g stand-up pouch was developed and finalised. Full ingredient, allergen and nutrition information was confirmed for the pack. The product name was reserved ahead of the reveal.</p>
          </div>
        </li>

        <li className="now">
          <div className="when"><b>5 Nov 2026</b><span>Now</span></div>
          <div className="dot" />
          <div className="what">
            <h3>The Name Is Revealed</h3>
            <p>On 5 November 2026, the product name that has been in development for two and a half years is revealed to the world. The recipe is finished. The pack is finalised. What comes next is the launch.</p>
            <Link to="/pre-order" className="road-link" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
              Register to Pre-order →
            </Link>
          </div>
        </li>

        <li className="next">
          <div className="when"><b>Q4 2026</b><span>Next</span></div>
          <div className="dot" />
          <div className="what">
            <h3>Launch</h3>
            <p>The HNM powdered breakfast blend arrives in Q4 2026. Pre-order interest registered ahead of launch will be prioritised. Retail, food-service and direct channels are all part of the go-to-market plan.</p>
          </div>
        </li>
      </ul>

      <blockquote className="quote road-quote">
        "Tradition is our starting point. Development takes us forward."
        <p className="sig"><b>Harsh Sanmukh</b> · Founder</p>
      </blockquote>
    </div>

    <div className="wrap block">
      <span className="eyebrow">What's on the horizon</span>
      <h2 style={{ marginTop: ".75rem" }}>After the launch, what comes next.</h2>
      <div className="horizon">
        <div>
          <span className="k">Near-term</span>
          <p>Build direct-to-consumer and independent retail presence in the UK for the first blend.</p>
        </div>
        <div>
          <span className="k">Mid-term</span>
          <p>Explore food-service and airline catering channels. Develop second product based on consumer feedback.</p>
        </div>
        <div>
          <span className="k">Long-term</span>
          <p>Establish HNM as a credible, ingredient-led food brand in the UK, known for honesty and traditional-inspired innovation.</p>
        </div>
      </div>
    </div>

    <div className="band">
      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Be part of it</span>
            <h2>Register now. Be first to know.</h2>
          </div>
          <div className="stack">
            <p className="lede">Pre-orders open alongside the product name reveal on 5 November. Register your interest now to be first in line.</p>
            <div className="actions">
              <Link to="/pre-order" className="btn">Register to Pre-order</Link>
              <Link to="/contact" className="btn ghost">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurJourney;
