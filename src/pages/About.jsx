import React from "react";

function About() {
  return (
    <section
      className="about-section"
      style={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "#001f3f", // dark blue background
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>About Me</h2>

      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
          color: "#d0d0d0",
        }}
      >
        Hi, I'm <strong>Priyadharshini</strong> — a passionate web developer who
        loves building modern, responsive, and interactive web applications using
        <strong> React</strong>, <strong>JavaScript</strong>, and other modern
        technologies. I enjoy solving real-world problems and bringing creative
        ideas to life through code.
      </p>

      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "30px auto 0",
          lineHeight: "1.8",
          color: "#d0d0d0",
        }}
      >
        My goal is to continuously learn and improve while creating meaningful
        digital experiences that make a difference.
      </p>
    </section>
  );
}

export default About;
