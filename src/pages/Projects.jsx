import React from "react";

function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "My personal portfolio built with React and Vite.",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "#"
    },
    {
      name: "Quiz App",
      description: "A Django + React skill assessment platform with live scoring.",
      tech: ["Django", "React", "Bootstrap"],
      link: "#"
    },
    {
      name: "Todo App",
      description: "A simple productivity app made with React Hooks.",
      tech: ["React", "Hooks", "CSS"],
      link: "#"
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#001f3f", // Dark blue background
        padding: "80px 20px",
        textAlign: "center",
        color: "white",
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.8rem", marginBottom: "20px" }}>
        My <span style={{ color: "#61dafb" }}>Projects</span>
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#d0d0d0", marginBottom: "50px" }}>
        Here are some of the cool projects I’ve worked on recently 👇
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#002b5b", // Card dark blue
              color: "white",
              padding: "25px",
              borderRadius: "12px",
              width: "280px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(97,218,251,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(0,0,0,0.3)";
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#61dafb" }}>
              {project.name}
            </h3>
            <p style={{ color: "#ccc", marginBottom: "15px" }}>
              {project.description}
            </p>

            <div style={{ marginBottom: "15px" }}>
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#61dafb",
                    color: "#001f3f",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    marginRight: "5px",
                    fontWeight: "500",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              style={{
                display: "inline-block",
                backgroundColor: "#61dafb",
                color: "#001f3f",
                padding: "8px 15px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4cc3e0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#61dafb")}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
