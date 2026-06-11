const bars = [
  { name: "HTML / CSS / JavaScript", pct: 90 },
  { name: "Python / AI-ML", pct: 85 },
  { name: "React / Next.js / TypeScript", pct: 80 },
  { name: "TensorFlow / DeepFace / Facial Recognition", pct: 78 },
];

const categories = [
  { title: "Programming Languages", pills: ["C", "Java", "Python"], color: "pill-cyan" },
  { title: "Web Technologies", pills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"], color: "pill-purple" },
  { title: "AI / ML", pills: ["TensorFlow", "DeepFace", "Facial Recognition", "Scikit-learn", "Machine Learning", "Data Analysis"], color: "pill-pink" },
  { title: "Design & Data", pills: ["User Interface Design", "Data Visualization", "Problem Solving", "Analytical Thinking"], color: "pill-green" },
  { title: "Tools & Platforms", pills: ["VS Code", "MySQL", "Git", "GitHub", "Streamlit", "Pandas"], color: "pill-cyan" },
  { title: "Soft Skills", pills: ["Event Management", "Event Planning", "Documentation", "Leadership", "Communication"], color: "pill-green" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">02 — skills</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>My Toolkit</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Technologies and tools I work with.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {bars.map((bar) => (
            <div key={bar.name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#e8e9f0" }}>{bar.name}</span>
                <span style={{ fontSize: "0.75rem", fontFamily: "DM Mono", color: "#00d4ff" }}>{bar.pct}%</span>
              </div>
              <div style={{ height: "4px", background: "#161822", borderRadius: "100px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${bar.pct}%`, background: "linear-gradient(90deg, #6c63ff, #00d4ff)", borderRadius: "100px" }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {categories.map((cat) => (
            <div key={cat.title}>
              <p style={{ fontFamily: "DM Mono", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6c63ff", marginBottom: "0.5rem" }}>{cat.title}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {cat.pills.map((pill) => (
                  <span key={pill} className={`pill ${cat.color}`}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}