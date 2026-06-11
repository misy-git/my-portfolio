const stats = [
  { number: "9.30", label: "CGPA" },
  { number: "2+", label: "Internships" },
  { number: "10+", label: "Certifications" },
  { number: "1", label: "Research Paper" },
];

const achievements = [
  {
    icon: "📄",
    title: "Research Publication",
    desc: "SmartSecurity: Leveraging AI for Predictive Cyber Threat Detection — covering threat analysis, anomaly detection, and proactive security mechanisms.",
    date: "2025",
  },
  {
    icon: "🏆",
    title: "Academic Excellence",
    desc: "Maintaining a strong academic record in B.E. Computer Science Engineering at Sathyabama Institute of Science and Technology, Chennai (2024–2028).",
    date: "2024–Present",
  },
  {
    icon: "☁️",
    title: "Microsoft Certified",
    desc: "Microsoft Certified in Azure and Networking, and Cloud Computing — demonstrating proficiency in cloud infrastructure and services.",
    date: "2024",
  },
  {
    icon: "🐍",
    title: "NPTEL Certifications",
    desc: "Completed NPTEL Certifications in Python for Data Science and Programming in Java — nationally recognized courses by IITs.",
    date: "2024",
  },
  {
    icon: "🤖",
    title: "AI/ML Internship",
    desc: "Selected as AI/ML Developer Intern at OneYes InfoTech Solutions — building a Face Recognition Attendance System using DeepFace and TensorFlow.",
    date: "2026",
  },
  {
    icon: "🌐",
    title: "Web Development Internship",
    desc: "Built and delivered a fully responsive business website for CKM Buildbase Private Limited — covering UI design, responsiveness, and deployment.",
    date: "2025",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">06 — achievements</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>Recognition</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Certifications, research, and milestones.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
        {stats.map((stat) => (
          <div key={stat.label} className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "DM Mono", background: "linear-gradient(135deg, #6c63ff, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.25rem" }}>{stat.number}</div>
            <div style={{ fontSize: "0.75rem", color: "#8b8ea8" }}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
        {achievements.map((a) => (
          <div key={a.title} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "1.5rem" }}>{a.icon}</span>
              <span style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#8b8ea8" }}>{a.date}</span>
            </div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#e8e9f0", marginBottom: "0.5rem" }}>{a.title}</h4>
            <p style={{ fontSize: "0.75rem", color: "#8b8ea8", lineHeight: 1.7 }}>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}