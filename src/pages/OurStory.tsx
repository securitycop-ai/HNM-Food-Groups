import { Link } from "react-router-dom";

const OurStory = () => (
  <div className="page-enter">
    <div className="wrap hero">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Our Story</span>
          <h1>From Chennai to Cardiff. From a Family Kitchen to a Food Company.</h1>
        </div>
        <figure className="portrait">
          <img
            src="/harsh-founder.jpg"
            alt="Harsh Sanmukh, Founder of HNM Food Group"
            width="760"
            height="1140"
          />
          <figcaption>Harsh Sanmukh · Founder</figcaption>
        </figure>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">The beginning</span>
          <h2>It started with the food I grew up with.</h2>
        </div>
        <div className="prose">
          <p>I grew up in Chennai, where food was always more than something we ate. It was part of our family, our daily routine and the knowledge shared between generations.</p>
          <p>Some of my earliest memories are of watching my mother and grandmother prepare food using different grains, pulses and traditional ingredients. The variety was simply part of how they cooked.</p>
          <p>When I moved to the UK in 2023, I found myself in a very different food environment. Breakfast aisles full of products that often relied on a single ingredient or a small handful of them. I found myself reading ingredient lists and asking: what happened to the diversity I grew up with?</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">The question</span>
          <h2>Could traditional food knowledge become something useful for modern consumers?</h2>
        </div>
        <div className="prose">
          <p>While working in a supermarket on the shop floor, I began researching traditional South Indian food ingredients. The question that kept returning was a simple one: could the food knowledge I grew up with become something useful for the way people live today?</p>
          <p>This was not about recreating my grandmother's recipe. It was about understanding what made those traditions meaningful and exploring how they could be adapted into a convenient product for the modern market.</p>
          <p>That question became a research project. The research project became a formulation. And the formulation eventually became HNM Food Group.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">The company</span>
          <h2>HNM Food Group Ltd.</h2>
        </div>
        <div className="prose">
          <p>HNM Food Group Ltd was incorporated in England and Wales. Company No. 17007002.</p>
          <p>The name HNM connects the three founders: Harish, Naveen and Muni, three brothers who have supported this journey alongside Harsh. The company is based at Welsh ICE in Caerphilly and is developing its first product with support from Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre.</p>
          <p>The goal from the beginning has been to bring something genuinely different to the UK breakfast market: a product rooted in traditional food knowledge, developed with care and built to last.</p>
        </div>
      </div>

      <figure className="friends" style={{ marginTop: "2.5rem" }}>
        <img
          src="/hnm-friends.jpg"
          alt="Harish, Naveen, Muni and Harsh — the people behind HNM"
          width="1200"
          height="800"
        />
        <figcaption>Harish, Naveen, Muni &amp; Harsh — the team behind HNM</figcaption>
      </figure>
    </div>

    <div className="wrap block">
      <span className="eyebrow">Founder background</span>
      <h2 style={{ marginTop: ".75rem" }}>Harsh Sanmukh.</h2>
      <div className="cv-wins">
        <div><b>2.5+</b><span>Years of product development</span></div>
        <div><b>5</b><span>Ingredient families in the blend</span></div>
        <div><b>315g</b><span>First product pack size</span></div>
        <div><b>Wales</b><span>Where the company is built</span></div>
      </div>

      <div className="cv-grid">
        <div>
          <h3>Experience</h3>
          <ul className="cv-list">
            <li>
              <span className="d">2023–Now</span>
              <div>
                <b>Founder, HNM Food Group Ltd</b>
                <em>Wales, United Kingdom</em>
                <p>Developed the company's first powdered breakfast blend from initial research through to pack-ready product. Collaborated with Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre for specialist food-development support.</p>
              </div>
            </li>
            <li>
              <span className="d">2023</span>
              <div>
                <b>Retail &amp; Consumer Research</b>
                <em>United Kingdom</em>
                <p>Worked on the shop floor of a UK supermarket, gaining direct insight into consumer behaviour and product positioning in the UK breakfast category.</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3>What Harsh Brings</h3>
          <ul className="cv-tags">
            <li>Traditional food research</li>
            <li>Ingredient diversity</li>
            <li>Product formulation</li>
            <li>Food development</li>
            <li>Sensory evaluation</li>
            <li>Retail insight</li>
            <li>UK food regulations</li>
            <li>Allergen management</li>
            <li>Pack design</li>
            <li>Supplier relationships</li>
          </ul>
          <p style={{ marginTop: "1.5rem", fontSize: ".95rem", color: "var(--muted)" }}>
            From the first research question to a pack-ready product, Harsh has led every stage of HNM's product development. The goal has always been the same: build something that respects its origins and stands behind what it claims.
          </p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <span className="eyebrow">Journal</span>
      <h2 style={{ marginTop: ".75rem" }}>Read more from Harsh.</h2>
      <div className="cards">
        <Link to="/our-story/founders-letter">
          <span className="k">Founder's Letter</span>
          <h3>A Letter from the Founder</h3>
          <p>Why I started HNM, what I believe in and where we're going.</p>
        </Link>
        <Link to="/our-story/respect-to-mum">
          <span className="k">Personal</span>
          <h3>Respect to Mum</h3>
          <p>The woman whose kitchen taught me everything I needed to know about food.</p>
        </Link>
      </div>
    </div>

    <div className="band">
      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Be part of it</span>
            <h2>From my family's kitchen to yours.</h2>
          </div>
          <div className="stack">
            <p className="lede">If you believe good food deserves a thoughtful origin story, we'd love to have you as part of our journey.</p>
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

export default OurStory;
