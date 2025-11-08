import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#001f3f",
        color: "white",
        textAlign: "center",
        padding: "20px 10px",
        marginTop: "50px",
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      <p style={{ marginBottom: "8px" }}>
        © {new Date().getFullYear()} <span style={{ color: "#61dafb" }}>Priyadharshini</span>. All Rights Reserved.
      </p>
      <p style={{ fontSize: "14px", color: "#aaa" }}>
        Built with ❤️ using React
      </p>
    </footer>
  );
}

export default Footer;
