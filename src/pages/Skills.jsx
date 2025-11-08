import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced", icon: "🌐" },
    { name: "CSS", level: "Advanced", icon: "🎨" },
    { name: "JavaScript", level: "Intermediate", icon: "⚡" },
    { name: "React", level: "Intermediate", icon: "⚛️" },
    { name: "Python", level: "Beginner", icon: "🐍" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#001f3f", // dark blue background
        padding: "80px 20px",
        fontFamily: "Poppins, Arial, sans-serif",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2.8rem", marginBottom: "20px" }}>
        My <span style={{ color: "#61dafb" }}>Skills</span>
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#d0d0d0", marginBottom: "50px" }}>
        Here are the technologies and tools I use to build web applications:
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#002b5b", // darker blue for cards
              width: "180px",
              height: "180px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(97,218,251,0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(0,0,0,0.3)";
            }}
          >
            <span style={{ fontSize: "50px", marginBottom: "10px" }}>
              {skill.icon}
            </span>
            <h3 style={{ fontSize: "20px", margin: "5px 0", color: "#61dafb" }}>
              {skill.name}
            </h3>
            <p style={{ color: "#d0d0d0", fontSize: "16px" }}>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
