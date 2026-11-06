import { Link } from "react-router-dom";

const OurProduct = () => (
  <div className="page-enter">
    <div className="wrap hero">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Meet HNM</span>
          <h1>A Powdered Breakfast Blend Rooted in Tradition and Developed for Modern Mornings.</h1>
        </div>
        <div className="prose">
          <p className="lede">HNM's first product is a 315g powdered breakfast blend, developed in Wales. It's ready, and its name is revealed on 5 November.</p>
          <p>The concept brings together grains, millets, pulses and legumes, rice, seeds and dates in a convenient powdered format designed to be prepared with hot water or milk.</p>
          <p>Add. Stir. Enjoy. Behind that simplicity sit two and a half years of formulation and food-development work.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Product at a glance</span>
          <h2>The essentials.</h2>
        </div>
        <div className="stack">
          <table className="spec">
            <tbody>
              <tr><th scope="row">Product</th><td>HNM Powdered Breakfast Blend</td></tr>
              <tr><th scope="row">Format</th><td>Fine powdered breakfast blend</td></tr>
              <tr><th scope="row">Pack</th><td>315g stand-up pouch</td></tr>
              <tr><th scope="row">Preparation</th><td>Add hot water or milk, stir and enjoy</td></tr>
              <tr><th scope="row">Ingredient families</th><td>Grains, millets, pulses and legumes, rice, seeds and dates</td></tr>
              <tr><th scope="row">Developed in</th><td>Wales, United Kingdom</td></tr>
              <tr><th scope="row">Status</th><td>Christmas is coming and Santa might arrive early. <Link to="/pre-order" style={{ color: "var(--accent)" }}>Subscribe</Link> to be first to know.</td></tr>
            </tbody>
          </table>
          <p className="note">Full serving guidance, ingredients, allergens and nutrition information will be published here and printed on every pack at launch.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Why this product?</span>
          <h2>Breakfast has changed.</h2>
        </div>
        <div className="prose">
          <p>Modern consumers often need convenience, but convenience does not mean that every new breakfast idea has to start with an entirely new food philosophy.</p>
          <p>HNM started by looking backwards before looking forwards. The inspiration comes from the diversity of ingredients and food knowledge found within traditional family food practices, combined with the realities of modern UK mornings.</p>
          <p>Our question became: how can we take inspiration from traditional ingredient diversity and translate it into a practical modern breakfast format? The HNM powdered breakfast blend is our answer.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <span className="eyebrow">More than one headline ingredient</span>
      <h2 style={{ marginTop: ".75rem" }}>Five ingredient families, one blend.</h2>
      <p className="lede" style={{ marginTop: "1rem" }}>Many food products are marketed around a single hero ingredient. HNM brings together several ingredient families rather than asking one ingredient to define the entire product.</p>
      <div className="families">
        <div><h3>Grains &amp; Millets</h3><p>Part of the structural foundation of the HNM formulation.</p></div>
        <div><h3>Pulses &amp; Legumes</h3><p>An important part of HNM's ingredient-diversity approach.</p></div>
        <div><h3>Rice</h3><p>Selected rice ingredients form another part of the wider formulation.</p></div>
        <div><h3>Seeds</h3><p>Used within the blend as part of the broader ingredient combination.</p></div>
        <div><h3>Dates</h3><p>Part of the product's developing flavour and sweetness.</p></div>
      </div>
      <p className="muted" style={{ marginTop: "1rem", fontSize: ".88rem" }}>The exact formulation and proportions are proprietary to HNM and are not published.</p>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Why a powdered format?</span>
          <h2>Because innovation is not useful if it ignores how people actually live.</h2>
        </div>
        <div className="prose">
          <p>Modern mornings can involve work, commuting, education, childcare and limited preparation time. HNM comes in a powdered format that takes the inspiration behind the product and translates it into something straightforward to prepare.</p>
          <p>The convenience is intentional. The powdered format is not an afterthought added to a traditional recipe. It is part of the product proposition itself.</p>
        </div>
      </div>
      <ol className="ritual" style={{ marginTop: "2.5rem" }}>
        <li><span className="n">01</span><span className="verb">Add</span><p>Hot water or milk.</p></li>
        <li><span className="n">02</span><span className="verb">Stir</span><p>Mix until combined.</p></li>
        <li><span className="n">03</span><span className="verb">Enjoy</span><p>Breakfast, made simple.</p></li>
      </ol>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Thoughtfully developed, not simply mixed</span>
          <h2>Different ingredients behave differently.</h2>
        </div>
        <div className="prose">
          <p>HNM's development work considers the characteristics of the individual raw materials rather than treating a diverse formulation as though every component behaves identically.</p>
          <p>Our R&amp;D covers ingredient selection, formulation, processing, milling, blending, preparation performance, sensory characteristics, food safety, allergen management, packaging, shelf-life considerations and commercial manufacturing.</p>
          <p>We also worked with Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre for specialist food-development support. Certain elements of HNM's formulation and processing methodology are proprietary and remain confidential.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">The HNM development standard</span>
          <h2>We Develop Before We Claim.</h2>
        </div>
        <div className="prose">
          <p>We want the finished product to speak through evidence, not exaggerated marketing language.</p>
          <p>That is why we only say what the finished product can stand behind. Full nutrition and allergen details arrive with the launch.</p>
          <p><strong>HNM will not build its brand around claims that the finished product has not earned.</strong></p>
        </div>
      </div>
    </div>

    <div className="band">
      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Be first to know</span>
            <h2>The name arrives on 5 November.</h2>
          </div>
          <div className="stack">
            <p className="lede">Register your interest now and be first in line when pre-orders open.</p>
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

export default OurProduct;
