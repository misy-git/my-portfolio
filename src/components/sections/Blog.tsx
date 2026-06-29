import Link from "next/link";

export default function Blog() {
  return (
    <section id="blog" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">07 — blog</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>Articles & Writing</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>My thoughts, learning journey, and technical writing.</p>

      <Link href="/blog/how-i-built-my-portfolio" style={{ textDecoration: "none" }}>
        <div className="card" style={{ padding: "2rem", cursor: "pointer", transition: "border-color 0.2s" }}>
          <p style={{ fontSize: "0.75rem", color: "#8b8ea8", marginBottom: "0.5rem" }}>2026-06-29</p>
          <h4 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#e8e9f0", marginBottom: "0.75rem" }}>
            I Built My Portfolio in 6–7 Days. Here&apos; the Honest Story.
          </h4>
          <p style={{ fontSize: "0.875rem", color: "#8b8ea8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Not a tutorial. Not a polished recap. Just the real, messy, rewarding story of how this portfolio came to life — day by day.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <span className="pill pill-purple">Next.js</span>
            <span className="pill pill-cyan">TypeScript</span>
            <span className="pill pill-pink">Tailwind CSS</span>
            <span className="pill pill-green">Portfolio</span>
          </div>
          <p style={{ fontSize: "0.875rem", color: "#6c63ff", fontWeight: 500 }}>Read Article →</p>
        </div>
      </Link>
    </section>
  );
}
