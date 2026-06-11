"use client";
import { useState } from "react";

const projects = [
  {
    icon: "🤖",
    title: "Face Recognition Attendance System",
    category: "AI/ML",
    desc: "An AI-based Face Recognition Attendance System that allows users to upload single or multiple images, automatically detects faces, identifies individuals using deep learning, and marks attendance in real-time with a dashboard view.",
    tech: ["Python", "Streamlit", "DeepFace", "TensorFlow", "Keras", "Pandas", "Pillow"],
    featured: true,
    github: "https://github.com/misy-git",
    live: "",
    features: [
      "Real-time face recognition",
      "Bulk image processing",
      "Interactive dashboard with live updates",
      "Automatic attendance marking",
      "Scalable and contactless system",
    ],
  },
  {
    icon: "🌐",
    title: "CKM Buildbase Website",
    category: "Web",
    desc: "A modern, responsive business website for a construction company to showcase services, projects, and company information with an engaging user interface and smooth navigation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Font Awesome", "Formspree"],
    featured: false,
    github: "https://github.com/misy-git",
    live: "",
    features: [
      "Fully responsive design",
      "Modern hero section",
      "Services & project showcase",
      "Video background section",
      "Functional contact form",
    ],
  },
];

const tabs = ["All", "Web", "AI/ML"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">03 — projects</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>What I&apos;ve Built</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2rem" }}>Real-world projects built during internships.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)} style={{ padding: "5px 16px", borderRadius: "100px", fontSize: "0.7rem", fontFamily: "DM Mono", fontWeight: 500, border: `1px solid ${active === tab ? "#6c63ff" : "rgba(108,99,255,0.2)"}`, background: active === tab ? "#6c63ff" : "transparent", color: active === tab ? "white" : "#8b8ea8", cursor: "pointer", transition: "all 0.2s" }}>{tab}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
        {filtered.map((project) => (
          <div key={project.title} className="card" style={{ gridColumn: project.featured ? "1 / -1" : "auto", background: project.featured ? "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,255,0.04))" : "#0f1117", border: project.featured ? "1px solid rgba(108,99,255,0.35)" : "1px solid rgba(108,99,255,0.2)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "1.5rem" }}>{project.icon}</span>
              <span style={{ fontSize: "0.65rem", fontFamily: "DM Mono", fontWeight: 600, padding: "3px 10px", borderRadius: "100px", background: project.featured ? "rgba(108,99,255,0.15)" : "rgba(0,212,255,0.1)", border: project.featured ? "1px solid rgba(108,99,255,0.4)" : "1px solid rgba(0,212,255,0.3)", color: project.featured ? "#6c63ff" : "#00d4ff" }}>{project.featured ? "Featured" : project.category}</span>
            </div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.5rem", color: "#e8e9f0" }}>{project.title}</h4>
            <p style={{ fontSize: "0.8rem", color: "#8b8ea8", lineHeight: 1.6, marginBottom: "1rem" }}>{project.desc}</p>
            <p style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#6c63ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Key Features</p>
            <ul style={{ marginBottom: "1rem", paddingLeft: "0" }}>
              {project.features.map((f) => (
                <li key={f} style={{ fontSize: "0.75rem", color: "#8b8ea8", lineHeight: 1.7, listStyle: "none" }}>✓ {f}</li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
              {project.tech.map((t) => (
                <span key={t} style={{ fontSize: "0.65rem", fontFamily: "DM Mono", color: "#8b8ea8", background: "#161822", padding: "2px 8px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.06)" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", fontWeight: 500, padding: "5px 14px", borderRadius: "8px", border: "1px solid rgba(108,99,255,0.2)", background: "transparent", color: "#8b8ea8", cursor: "pointer", textDecoration: "none", transition: "all 0.2s" }}>GitHub →</a>
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", fontWeight: 500, padding: "5px 14px", borderRadius: "8px", border: "1px solid rgba(108,99,255,0.2)", background: "transparent", color: "#8b8ea8", cursor: "pointer", textDecoration: "none" }}>Live →</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}