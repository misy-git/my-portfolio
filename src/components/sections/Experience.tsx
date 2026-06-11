const experiences = [
  {
    role: "Artificial Intelligence Intern",
    org: "Cisco Networking Academy · Remote",
    date: "Jun 2026 – Present",
    responsibilities: [
      "Working on AI concepts and practical implementations.",
      "Completed certifications in Data Analytics, Modern AI, and AI for customer review analysis.",
      "Applied AI techniques in real-world scenarios through structured learning.",
    ],
    tech: ["Artificial Intelligence", "Data Analytics", "Machine Learning"],
    outcomes: [
      "Earned multiple Cisco Networking Academy certifications in AI and Data Analytics.",
      "Strengthened understanding of AI applications in business and automation.",
    ],
  },
  {
    role: "AI/ML Developer Intern",
    org: "OneYes InfoTech Solutions · Chennai, Remote",
    date: "May 2026 – Present",
    responsibilities: [
      "Developed an AI-based Face Recognition Attendance System using DeepFace and TensorFlow.",
      "Implemented facial recognition for automated attendance tracking.",
      "Integrated AI models into real-world applications and deployment pipelines.",
      "Researched and applied ML techniques to improve model accuracy and performance.",
    ],
    tech: ["Python", "TensorFlow", "DeepFace", "Streamlit", "Pandas", "Machine Learning", "Data Visualization"],
    outcomes: [
      "Built a smart attendance system with real-time face recognition.",
      "Developed interactive dashboard with live updates and bulk image processing.",
      "Gained hands-on experience in intelligent automation solutions.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "CKM Buildbase Private Limited · Chennai",
    date: "26 Dec 2025 – 6 Jan 2026",
    responsibilities: [
      "Developed and designed a fully responsive business website from scratch.",
      "Worked on frontend UI design, webpage layout structuring, and cross-browser compatibility.",
      "Improved website responsiveness and user experience across all devices.",
      "Collaborated with team to debug issues, test features, and support deployment.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Font Awesome", "Formspree"],
    outcomes: [
      "Successfully built and delivered a functional business website on schedule.",
      "Enhanced practical knowledge in frontend development and responsive design.",
      "Strengthened problem-solving and real-world project development skills.",
    ],
  },
  {
    role: "Content Member",
    org: "ACM Student Chapter at Sathyabama · On-site",
    date: "Mar 2025 – Present",
    responsibilities: [
      "Creating and managing technical content for ACM chapter events.",
      "Involved in event planning, documentation, and community engagement.",
      "Supporting technical workshops and student activities.",
    ],
    tech: ["Event Management", "Event Planning", "Documentation", "Content Creation"],
    outcomes: [
      "Contributed to 1+ year of active technical community involvement.",
      "Developed leadership, communication, and organizational skills.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">04 — experience</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>My Journey</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Internships, roles, and leadership experiences.</p>
      <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
        <div style={{ position: "absolute", left: 0, top: "8px", bottom: 0, width: "1px", background: "linear-gradient(to bottom, #6c63ff, transparent)" }} />
        {experiences.map((exp) => (
          <div key={exp.role} style={{ position: "relative", marginBottom: "1.5rem" }}>
            <div className="timeline-dot" />
            <div className="card">
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#e8e9f0" }}>{exp.role}</span>
                <span style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#8b8ea8" }}>{exp.date}</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "#00d4ff", fontWeight: 500, marginBottom: "1rem" }}>{exp.org}</p>
              <p style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#6c63ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Responsibilities</p>
              <ul style={{ marginBottom: "1rem", paddingLeft: "0" }}>
                {exp.responsibilities.map((r) => (
                  <li key={r} style={{ fontSize: "0.8rem", color: "#8b8ea8", lineHeight: 1.7, marginBottom: "0.25rem", listStyle: "none" }}>• {r}</li>
                ))}
              </ul>
              <p style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#6c63ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Technologies Used</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
                {exp.tech.map((t) => (
                  <span key={t} className="pill pill-purple">{t}</span>
                ))}
              </div>
              <p style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#6c63ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Outcomes</p>
              <ul style={{ paddingLeft: "0" }}>
                {exp.outcomes.map((o) => (
                  <li key={o} style={{ fontSize: "0.8rem", color: "#8b8ea8", lineHeight: 1.7, marginBottom: "0.25rem", listStyle: "none" }}>• {o}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
