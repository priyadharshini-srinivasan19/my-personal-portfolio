import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div
      style={{
        padding: "60px",
        textAlign: "center",
        backgroundColor: "#001f3f", // light dark blue background
        color: "white",
        minHeight: "80vh",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          color: "#4fd1c5", // teal accent
        }}
      >
        Contact Me
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#cbd5e1",
          marginBottom: "40px",
          maxWidth: "600px",
          margin: "0 auto 40px auto",
        }}
      >
        I’d love to connect! Feel free to reach out through any of the platforms
        below 👇
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Email */}
        <a
          href="mailto:arish@example.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#1e2a38",
            fontSize: "18px",
            backgroundColor: "#4fd1c5",
            padding: "15px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 15px #4fd1c5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <FaEnvelope /> arish@example.com
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/arish"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#4fd1c5",
            backgroundColor: "#243447",
            padding: "15px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            border: "2px solid #4fd1c5",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#4fd1c5";
            e.currentTarget.style.color = "#1e2a38";
            e.currentTarget.style.boxShadow = "0 0 15px #4fd1c5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#243447";
            e.currentTarget.style.color = "#4fd1c5";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <FaGithub /> GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/arish"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#4fd1c5",
            backgroundColor: "#243447",
            padding: "15px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            border: "2px solid #4fd1c5",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#4fd1c5";
            e.currentTarget.style.color = "#1e2a38";
            e.currentTarget.style.boxShadow = "0 0 15px #4fd1c5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#243447";
            e.currentTarget.style.color = "#4fd1c5";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
