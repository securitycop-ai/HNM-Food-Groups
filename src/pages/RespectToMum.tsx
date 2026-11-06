import { Link } from "react-router-dom";

const RespectToMum = () => (
  <div className="page-enter">
    <div className="wrap block" style={{ paddingTop: "clamp(3rem, 7vw, 5rem)" }}>
      <div className="letter">
        <span className="eyebrow">Personal</span>
        <h1 style={{ marginTop: "1rem", fontSize: "clamp(2rem,4vw,2.8rem)" }}>Respect to Mum.</h1>

        <p className="opening" style={{ marginTop: "2rem" }}>
          There are things you understand about food that no textbook ever teaches. My mother taught me most of them without saying a word.
        </p>

        <p>
          She cooked every day. Not occasionally, not when it was convenient. Every day. And she cooked with variety: different grains depending on what was needed, different pulses, combinations that changed with the season, the week, what was available.
        </p>

        <p>
          As a child I didn't appreciate how much thought went into what appeared on the table. I just ate. I just trusted it. That is, I think, the highest compliment you can give a cook: total trust, without question.
        </p>

        <p>
          When I began researching the ingredients behind HNM's first product, I kept coming back to the same realisation. The diversity I was documenting and studying was not new knowledge. It was the food my mother had been preparing for decades. She had not read the research papers. She simply knew.
        </p>

        <p>
          I want to acknowledge that this product — and this company — begins with her. With her kitchen. With the food she made.
        </p>

        <div className="mum">
          <p>To my mother, and to every mother who put a diverse, nourishing meal on the table every day, often without acknowledgement and always with care:</p>
          <p className="big">Thank you.</p>
        </div>

        <p style={{ marginTop: "2rem" }}>
          HNM stands for Harish, Naveen and Muni — three brothers whose support has been constant. But behind us all, there is always Mum.
        </p>

        <p className="sig" style={{ marginTop: "2rem" }}>
          <b>Harsh Sanmukh</b><br />
          Founder, HNM Food Group Ltd
        </p>

        <div className="actions" style={{ marginTop: "2.5rem" }}>
          <Link to="/our-story" className="btn ghost">Back to Our Story</Link>
        </div>
      </div>
    </div>
  </div>
);

export default RespectToMum;
