const testimonials = [
  {
    name: "CKM Buildbase Team",
    role: "Web Development Internship · Dec 2025",
    initials: "CK",
    text: "Misbah delivered a fully functional and responsive business website within the internship period. She showed strong initiative, attention to detail, and excellent frontend development skills.",
  },
  {
    name: "OneYes InfoTech Solutions",
    role: "AI/ML Internship · 2026",
    initials: "OY",
    text: "Misbah has shown exceptional ability in implementing AI models for real-world applications. Her Face Recognition Attendance System demonstrates strong technical depth and problem-solving skills.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">08 — testimonials</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>What People Say</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Kind words from internship companies and collaborators.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
        {testimonials.map((t) => (
          <div key={t.name} className="card">
            <div style={{ color: "#fbbf24", fontSize: "0.875rem", marginBottom: "0.75rem" }}>★★★★★</div>
            <p style={{ fontSize: "0.8rem", color: "#8b8ea8", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1rem" }}>{t.text}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #6c63ff, #00d4ff)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0 }}>{t.initials}</div>
              <div>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#e8e9f0" }}>{t.name}</p>
                <p style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#8b8ea8" }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}