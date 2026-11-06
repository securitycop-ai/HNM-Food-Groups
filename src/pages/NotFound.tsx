import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="page-enter">
    <div className="wrap block" style={{ textAlign: "center", paddingBlock: "clamp(5rem, 12vw, 9rem)" }}>
      <span className="eyebrow" style={{ justifyContent: "center" }}>404</span>
      <h1 style={{ marginTop: "1rem", fontSize: "clamp(2.4rem,5vw,3.6rem)" }}>Page not found.</h1>
      <p className="lede" style={{ margin: "1.25rem auto 0", textAlign: "center" }}>
        The page you're looking for doesn't exist or may have moved.
      </p>
      <div className="actions" style={{ justifyContent: "center", marginTop: "2rem" }}>
        <Link to="/" className="btn">Go home</Link>
        <Link to="/contact" className="btn ghost">Contact us</Link>
      </div>
    </div>
  </div>
);

export default NotFound;
