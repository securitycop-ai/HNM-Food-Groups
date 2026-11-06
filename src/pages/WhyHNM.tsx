import { Link } from "react-router-dom";

const WhyHNM = () => (
  <div className="page-enter">
    <div className="wrap hero">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Why HNM</span>
          <h1>Ingredient Diversity, Clean Development and Respect for Tradition.</h1>
        </div>
        <div className="prose">
          <p className="lede">At HNM, every decision we make from ingredient sourcing to formulation is guided by our commitment to clean, honest nutrition and respect for the traditions we draw from.</p>
          <p>This page explains the principles behind our approach to developing HNM's first product.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <span className="eyebrow">What makes us different</span>
      <h2 style={{ marginTop: ".75rem" }}>Four pillars that define HNM.</h2>
      <div className="pillars">
        <div>
          <h3>Rooted in Tradition</h3>
          <p>Inspired by traditional South Indian food knowledge and the ingredients used in family kitchens across generations, not invented from scratch for a marketing brief.</p>
        </div>
        <div>
          <h3>Ingredient Diversity</h3>
          <p>Grains, millets, pulses, legumes, rice, seeds and dates — bringing several ingredient families into one carefully developed blend rather than relying on a single hero ingredient.</p>
        </div>
        <div>
          <h3>Developed with Purpose</h3>
          <p>Combining founder-led research with specialist food-development support from Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre.</p>
        </div>
        <div>
          <h3>Made for Modern Routines</h3>
          <p>A convenient powdered format that reduces preparation time without losing its connection to the traditions that inspired it.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">No artificial additives</span>
          <h2>What We Leave Out Is as Important as What We Put In.</h2>
        </div>
        <div className="prose">
          <p>HNM's first product contains no artificial colours, no artificial preservatives, no refined sugar, no synthetic fortification and no nuts.</p>
          <p>These are not marketing claims. They are decisions built into the formulation from the outset, not added as an afterthought. The ingredient list tells the full story, and that list will be on every pack.</p>
          <p>We believe clean labelling begins with clean formulation, not with selective ingredient disclosure.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">We develop before we claim</span>
          <h2>Evidence First. Claims Follow.</h2>
        </div>
        <div className="prose">
          <p>HNM will not build its brand around claims that the finished product has not earned. Full nutrition and allergen details will be published at launch and printed on every pack.</p>
          <p>We want the finished product to speak through evidence, not exaggerated marketing language. The development work came first. The story comes second.</p>
          <p><strong>This is what we mean when we say we develop before we claim.</strong></p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <div className="split">
        <div className="stack">
          <span className="eyebrow">Built in Wales</span>
          <h2>Regulatory Compliance Built In from Day One.</h2>
        </div>
        <div className="prose">
          <p>All HNM products are developed with full awareness of UK and EU food safety regulations, nutritional labelling requirements, and allergen disclosure standards.</p>
          <p>Our go-to-market planning covers both retail and food-service segments, ensuring products meet the specific compliance requirements of each channel.</p>
          <p>We work from Cardiff, supported by Welsh ICE and Cardiff Metropolitan University's food-industry expertise.</p>
        </div>
      </div>
    </div>

    <div className="wrap block">
      <span className="eyebrow">Our development flow</span>
      <h2 style={{ marginTop: ".75rem" }}>From insight to shelf.</h2>
      <ul className="flow" style={{ marginTop: "2rem" }} aria-label="Development stages">
        <li>Traditional Research</li>
        <li>Ingredient Selection</li>
        <li>Formulation</li>
        <li>Processing Trials</li>
        <li>Sensory Evaluation</li>
        <li>Pack Design</li>
        <li>Reveal · 5 Nov</li>
        <li>Launch Q4 2026</li>
      </ul>
    </div>

    <div className="band">
      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Learn more</span>
            <h2>See the product that all of this builds toward.</h2>
          </div>
          <div className="stack">
            <p className="lede">Our first blend is ready. Find out exactly what we made and why.</p>
            <div className="actions">
              <Link to="/our-product" className="btn">Explore the Product</Link>
              <Link to="/our-journey" className="btn ghost">Our Development Journey</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhyHNM;
