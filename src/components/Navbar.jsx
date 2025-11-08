import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#282c34",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/skills" style={linkStyle}>Skills</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.3s, border-bottom 0.3s",
};

const navHoverStyle = {
  color: "#61dafb",
  borderBottom: "2px solid #61dafb",
};

// Optional: simple hover effect
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.color = navHoverStyle.color;
      link.style.borderBottom = navHoverStyle.borderBottom;
    });
    link.addEventListener("mouseleave", () => {
      link.style.color = "white";
      link.style.borderBottom = "none";
    });
  });
});

export default Navbar;
