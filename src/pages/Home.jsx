import React from "react";

function Home() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, Arial, sans-serif",
        backgroundColor: "#0d1b2a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77)",
          textAlign: "center",
          padding: "120px 20px",
          borderRadius: "0 0 30px 30px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
        >
          Hi, I'm <span style={{ color: "#61dafb" }}>Priyadharshini</span> 👋
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#ddd",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          A passionate <strong>Full Stack Developer</strong> crafting clean,
          modern, and responsive web experiences using
          <strong> React</strong> and <strong>JavaScript</strong>.
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* View Work Button */}
          <button
            onClick={scrollToProjects}
            style={{
              padding: "14px 32px",
              fontSize: "18px",
              backgroundColor: "#61dafb",
              border: "none",
              borderRadius: "8px",
              color: "#0d1b2a",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4cc3e0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#61dafb")}
          >
            View My Work 🚀
          </button>

          {/* Download Resume Button */}
          <a
            href="/Priyadharshini_Resume.pdf" // Place your PDF inside "public" folder
            download="Priyadharshini_Resume.pdf"
            style={{
              padding: "14px 32px",
              fontSize: "18px",
              backgroundColor: "transparent",
              border: "2px solid #61dafb",
              borderRadius: "8px",
              color: "#61dafb",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#61dafb";
              e.target.style.color = "#0d1b2a";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#61dafb";
            }}
          >
            📄 Download Resume
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section
        style={{
          textAlign: "center",
          marginTop: "80px",
          padding: "0 20px 80px",
          backgroundColor: "#f5f5f5",
          color: "#333",
          borderTop: "5px solid #61dafb",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Welcome to My Portfolio
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          I’m a developer who loves turning creative ideas into interactive,
          responsive websites. Browse through my projects, explore my skills,
          and feel free to connect with me anytime!
        </p>
      </section>

      {/* Dummy Projects Section for Scroll Demo */}
      <section
        id="projects"
        style={{
          padding: "80px 20px",
          backgroundColor: "#1b263b",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#61dafb" }}>
          My Projects
        </h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
          Here you can showcase your projects with images, GitHub links, and
          short descriptions. Build this section next!
        </p>
      </section>
    </div>
  );
}

export default Home;
