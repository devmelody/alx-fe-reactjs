import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        gap: "1.5rem",
      }}
    >
      <Link to="/" style={{ margin: "1rem" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "1rem" }}>
        About
      </Link>
      <Link to="/contact" style={{ margin: "1rem" }}>
        Contact
      </Link>
      <Link to="/services" style={{ margin: "1rem" }}>
        Services
      </Link>
    </nav>
  );
}
export default Navbar;
