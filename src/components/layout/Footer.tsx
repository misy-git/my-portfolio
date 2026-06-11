export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(108,99,255,0.1)", padding: "2rem", marginTop: "2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <span style={{ fontFamily: "DM Mono", color: "#6c63ff", fontWeight: 700, fontSize: "0.875rem" }}>MF.dev</span>
        <p style={{ color: "#8b8ea8", fontSize: "0.75rem", fontFamily: "DM Mono" }}>Designed & built by <span style={{ color: "#6c63ff" }}>Misbah Fathima H</span> · 2026</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <a href="https://github.com/misy-git" target="_blank" rel="noopener noreferrer" style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1px solid rgba(108,99,255,0.2)", background: "rgba(255,255,255,0.03)", color: "#8b8ea8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontFamily: "DM Mono", fontWeight: 600, textDecoration: "none" }}>GH</a>
          <a href="https://www.linkedin.com/in/misbah-fathima-459404375" target="_blank" rel="noopener noreferrer" style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1px solid rgba(108,99,255,0.2)", background: "rgba(255,255,255,0.03)", color: "#8b8ea8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontFamily: "DM Mono", fontWeight: 600, textDecoration: "none" }}>LI</a>
        </div>
      </div>
    </footer>
  );
}