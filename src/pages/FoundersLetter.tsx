import { Link } from "react-router-dom";

const FoundersLetter = () => (
  <div className="page-enter">
    <div className="wrap block" style={{ paddingTop: "clamp(3rem, 7vw, 5rem)" }}>
      <div className="letter">
        <span className="eyebrow">Founder's Letter</span>
        <h1 style={{ marginTop: "1rem", fontSize: "clamp(2rem,4vw,2.8rem)" }}>A Letter from the Founder.</h1>

        <p className="opening" style={{ marginTop: "2rem" }}>
          If you're reading this, you're one of the first people to hear our story directly from me. That means a great deal.
        </p>

        <h2>Why I started HNM</h2>
        <p>
          I didn't set out to start a food company. I set out to answer a question that wouldn't leave me alone.
        </p>
        <p>
          Growing up in Chennai, food was woven into everything. My mother and grandmother cooked using different grains, pulses and ingredients. The variety was simply how they fed us. I never thought much about it at the time. It was just food.
        </p>
        <p>
          When I moved to the UK in 2023, I found myself standing in a supermarket aisle reading ingredient labels on breakfast products. Single-ingredient claims. Simplified formulations. Marketing copy that promised the world while the actual ingredients told a quieter story.
        </p>
        <p>
          I found myself asking: where is the diversity I grew up with? Could the food knowledge I carried from home become something useful for people here?
        </p>

        <h2>What I believe</h2>
        <p>
          I believe that some food traditions are worth preserving. Not as heritage exhibits, but as genuinely useful ideas that have something to offer modern life.
        </p>
        <p>
          I believe in ingredient diversity. Not as a marketing concept, but as a real formulation decision. Our first blend brings together grains, millets, pulses, legumes, rice, seeds and dates. Each family was chosen for a reason. The combination is the product.
        </p>
        <p>
          I believe in building a brand on what a product can actually demonstrate. We will not make a claim until the product has earned it. That principle drove two and a half years of development work before we ever spoke publicly.
        </p>

        <h2>What we built</h2>
        <p>
          Our first product is a 315g powdered breakfast blend. It is ready. Its name is revealed on 5 November.
        </p>
        <p>
          Behind that simplicity is genuine development work: formulation refinement, processing trials, sensory evaluation, allergen management, packaging and food safety compliance. We worked with Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre. We got every detail right before we told anyone it was ready.
        </p>

        <h2>Where we're going</h2>
        <p>
          HNM is a small company. We are building from Wales, we are preparing for the UK market, and we are doing this honestly.
        </p>
        <p>
          Our ambition is not to become the loudest brand on the shelf. It is to become one of the most trusted. That takes time, evidence and consistency. We are prepared to do the work.
        </p>

        <p style={{ marginTop: "2rem" }}>
          If you've read this far, thank you. I hope you'll follow our journey — and I hope you'll try what we've made.
        </p>

        <p className="sig" style={{ marginTop: "2rem" }}>
          With care,<br />
          <b>Harsh Sanmukh</b><br />
          Founder, HNM Food Group Ltd
        </p>

        <div className="actions" style={{ marginTop: "2.5rem" }}>
          <Link to="/pre-order" className="btn">Register to Pre-order</Link>
          <Link to="/our-story" className="btn ghost">Back to Our Story</Link>
        </div>
      </div>
    </div>
  </div>
);

export default FoundersLetter;
