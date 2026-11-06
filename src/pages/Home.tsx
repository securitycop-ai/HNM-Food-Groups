import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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

const Home = () => {
  const t = useCountdown(REVEAL);

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <div className="hero-full">
        <img
          className="hf-img"
          src="/hero-bowl.jpg"
          alt="A bowl of HNM powdered breakfast blend with dates, millets and pulses"
          width="1770"
          height="1245"
        />
        <div className="wrap hf-inner">
          <div className="hf-copy">
            <span className="status on-dark">Ready · Name revealed 5 November · Wales, UK</span>
            <h1>
              <span>Rooted in Tradition.</span>
              <em>Made for Modern Mornings.</em>
            </h1>
            <p className="hf-lede">
              Generations of South Indian food wisdom, reimagined in Wales as one simple powdered breakfast. Add, stir, enjoy.
            </p>
            <div className="actions">
              <Link to="/pre-order" className="btn gold">Register to Pre-order</Link>
              <Link to="/our-product" className="btn ghost on-dark">Explore the Blend</Link>
            </div>
          </div>

          <aside className="hf-count" aria-label="Product name reveal">
            <span className="rc-k">The name is revealed</span>
            <p className="rc-date">5 November</p>
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
            <p className="rc-foot">Recipe finished. Pack finalised. Arriving Q4 2026.</p>
          </aside>
        </div>
      </div>

      {/* ── Why HNM ── */}
      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Why HNM?</span>
            <h2>Some food traditions deserve a place in modern life.</h2>
          </div>
          <div className="prose">
            <p>Not every good idea needs to begin with something new.</p>
            <p>Sometimes, it begins with the food we grew up eating, the ingredients our families trusted and the knowledge passed down through generations.</p>
            <p>At HNM, we believe those traditions still have a place in today's kitchens. Our approach combines traditional ingredient diversity with modern food development, creating a breakfast concept designed around today's routines without losing sight of where it began.</p>
          </div>
        </div>
      </div>

      {/* ── One Blend ── */}
      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Introducing our first product</span>
            <h2>One Blend. Many Ingredients. A Simpler Morning.</h2>
            <p className="muted" style={{ fontWeight: 600 }}>HNM Powdered Breakfast Blend · 315g</p>
          </div>
          <div className="prose">
            <p>A thoughtfully developed combination of grains and millets, pulses and legumes, rice, seeds and dates.</p>
            <p>Each ingredient brings its own character, carefully balanced so they work together in one convenient breakfast blend.</p>
            <p>Designed for busy mornings, whether you're preparing breakfast at home, getting ready for work or looking for something simple during your day.</p>
            <p className="note">Recipe finished. Pack finalised. Name revealed 5 November.</p>
            <div className="actions">
              <Link to="/our-product" className="btn ghost">Discover the Product</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Ritual ── */}
      <div className="wrap block">
        <div className="stack" style={{ marginBottom: "2rem" }}>
          <span className="eyebrow">Breakfast made simple</span>
          <h2>Less Preparation. More Time for Your Morning.</h2>
          <p className="lede">You shouldn't need a complicated routine to prepare breakfast. Our powdered breakfast blend is designed around three simple steps.</p>
        </div>
        <ol className="ritual">
          <li><span className="n">01</span><span className="verb">Add</span><p>Add hot water or hot milk to the breakfast blend.</p></li>
          <li><span className="n">02</span><span className="verb">Stir</span><p>Mix until combined.</p></li>
          <li><span className="n">03</span><span className="verb">Enjoy</span><p>A traditionally inspired breakfast, prepared for modern life.</p></li>
        </ol>
        <p className="muted" style={{ marginTop: "1.5rem", maxWidth: "38rem" }}>Whether you're at home, in the office or travelling, the idea is simple: make breakfast easier to fit into your day.</p>
      </div>

      {/* ── Pillars ── */}
      <div className="wrap block">
        <span className="eyebrow">What makes us different</span>
        <h2 style={{ marginTop: ".75rem" }}>Thoughtful Ingredients. Thoughtful Development.</h2>
        <div className="pillars">
          <div>
            <h3>Rooted in Tradition</h3>
            <p>Inspired by traditional South Indian food knowledge and the ingredients used in family kitchens across generations.</p>
          </div>
          <div>
            <h3>Ingredient Diversity</h3>
            <p>Bringing together different grains, millets, pulses, legumes, rice and seeds within one carefully developed formulation.</p>
          </div>
          <div>
            <h3>Developed with Purpose</h3>
            <p>Combining founder-led research with specialist food-development support to refine the formulation, processing and final product.</p>
          </div>
          <div>
            <h3>Made for Modern Routines</h3>
            <p>A convenient powdered format designed to reduce preparation time without losing its connection to traditional food.</p>
          </div>
        </div>
      </div>

      {/* ── Founder Story ── */}
      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Our founder's story</span>
            <h2>From My Grandmother's Kitchen in Chennai to Building a Food Company in Wales.</h2>
          </div>
          <div className="prose">
            <p>I grew up in Chennai, where food was always more than something we ate. It was part of our family, our daily routine and the knowledge shared between generations.</p>
            <p>Some of my earliest memories are of watching my mother and grandmother prepare food using different grains, pulses and traditional ingredients.</p>
            <p>Years later, after moving to the UK in 2023, I began working in a supermarket. While working on the shop floor, I found myself reading the ingredients on breakfast products and asking a simple question: could the food knowledge I grew up with become something useful for the way people live today?</p>
            <p>What started as curiosity became research, recipe development and eventually HNM Food Group.</p>
            <p className="sig"><b>Harsh Sanmukh</b><br />Founder, HNM Food Group Ltd</p>
            <div className="actions">
              <Link to="/our-story" className="btn ghost">Read Our Full Story</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Development Journey ── */}
      <div className="wrap block">
        <div className="split">
          <div className="stack">
            <span className="eyebrow">Our development journey</span>
            <h2>Tradition Is Our Starting Point. Development Takes Us Forward.</h2>
          </div>
          <div className="prose">
            <p>Building a food product takes more than a good recipe.</p>
            <p>Our first breakfast blend went through a structured development journey: formulation refinement, ingredient assessment, processing trials and sensory evaluation.</p>
            <p>We worked with specialist food-industry expertise, including Cardiff Metropolitan University's ZERO2FIVE Food Industry Centre, to get every detail right. Now it's ready.</p>
          </div>
        </div>
        <ul className="flow" aria-label="Development stages">
          <li>Research</li>
          <li>Formulation</li>
          <li>Testing</li>
          <li>Reveal · 5 Nov</li>
          <li>Launch</li>
        </ul>
        <div className="actions" style={{ marginTop: "1.5rem" }}>
          <Link to="/our-journey" className="btn ghost">Follow Our Journey</Link>
        </div>
      </div>

      {/* ── Places ── */}
      <div className="wrap block">
        <span className="eyebrow">Built in Wales, inspired by India</span>
        <h2 style={{ marginTop: ".75rem" }}>Two Places. One Purpose.</h2>
        <div className="places-grid" aria-label="From Chennai to Cardiff">
          <div className="place">
            <b>Chennai</b>
            <span>13.08° N · 80.27° E</span>
            <span>Where the inspiration began</span>
          </div>
          <div className="arc" aria-hidden="true" />
          <div className="place right">
            <b>Cardiff</b>
            <span>51.48° N · 3.18° W</span>
            <span>Where the company is being built</span>
          </div>
        </div>
        <div className="prose" style={{ marginTop: "2rem" }}>
          <p>Our story began with food traditions in Chennai and continues with the development of our business in Wales. India provides the inspiration. Wales is where we're building the company, developing our first product and preparing for the UK market.</p>
          <p>We want to build a food business that respects its origins while embracing the opportunities of modern food innovation.</p>
        </div>
      </div>

      {/* ── Dark CTA Band ── */}
      <div className="band">
        <div className="wrap block">
          <div className="split">
            <div className="stack">
              <span className="eyebrow">Be part of our journey</span>
              <h2>Something Good Is Almost Here.</h2>
            </div>
            <div className="stack">
              <p className="lede">Our first powdered breakfast blend is ready, and its name arrives on 5 November. Whether you're a future customer, independent retailer, distributor or potential collaborator, we'd love to hear from you.</p>
              <div className="actions">
                <Link to="/contact" className="btn">Get in Touch</Link>
                <Link to="/our-journey" className="btn ghost">Follow Our Progress</Link>
              </div>
              <p className="muted" style={{ fontSize: ".85rem" }}>Pre-orders open soon. Register now to be first in line.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
