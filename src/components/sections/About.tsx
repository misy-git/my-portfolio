const cards = [
  { icon: "🎯", title: "Career Goals", desc: "Seeking internship or entry-level opportunities to apply technical skills in Web Development and AI/ML, and grow as a software professional." },
  { icon: "🌍", title: "Languages Known", desc: "English (Fluent), Tamil (Fluent), Hindi (Basic), Urdu (Native), Arabic (Read/Write)." },
  { icon: "📚", title: "Education", desc: "B.E. Computer Science Engineering, Sathyabama Institute of Science and Technology, Chennai. 2024–2028." },
  { icon: "💡", title: "Soft Skills", desc: "Communication & Teamwork, Problem Solving, Time Management, Adaptability, Leadership & Presentation Skills." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">01 — about</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>Who I Am</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Motivated. Detail-oriented. Passionate builder.</p>
      <div className="card" style={{ marginBottom: "1rem" }}>
        <p style={{ color: "#8b8ea8", fontSize: "0.875rem", lineHeight: 1.8 }}>
          I&apos;m <span style={{ color: "#00d4ff", fontWeight: 600 }}>Misbah Fathima H</span>, a B.E. Computer Science Engineering student at <span style={{ color: "#00d4ff", fontWeight: 600 }}>Sathyabama Institute of Science and Technology</span>, Chennai (2024–2028). Motivated and detail-oriented with a strong foundation in programming, problem-solving, and software development. Skilled in <span style={{ color: "#6c63ff", fontWeight: 500 }}>Web Development</span> (HTML, CSS, JavaScript, React, Next.js) and <span style={{ color: "#6c63ff", fontWeight: 500 }}>AI/ML</span> (TensorFlow, DeepFace, Python) with hands-on internship experience at <span style={{ color: "#00d4ff", fontWeight: 500 }}>CKM Buildbase</span> and <span style={{ color: "#00d4ff", fontWeight: 500 }}>OneYes InfoTech Solutions</span>.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
        {cards.map((card) => (
          <div key={card.title} className="card">
            <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{card.icon}</div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#e8e9f0" }}>{card.title}</h4>
            <p style={{ fontSize: "0.75rem", color: "#8b8ea8", lineHeight: 1.7 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}