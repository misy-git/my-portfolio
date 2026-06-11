export default function Blog() {
  return (
    <section id="blog" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">07 — blog</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>Articles & Writing</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>My thoughts, learning journey, and technical writing.</p>
      <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✍️</div>
        <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#e8e9f0", marginBottom: "0.75rem" }}>Coming Soon</h4>
        <p style={{ fontSize: "0.875rem", color: "#8b8ea8", maxWidth: "400px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          I&apos;m currently writing about <span style={{ color: "#6c63ff", fontWeight: 500 }}>How I Built My First Portfolio</span> — covering the tech stack, design decisions, challenges faced, and lessons learned.
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <span className="pill pill-purple">Next.js</span>
          <span className="pill pill-cyan">TypeScript</span>
          <span className="pill pill-pink">Tailwind CSS</span>
          <span className="pill pill-green">Portfolio</span>
        </div>
      </div>
    </section>
  );
}