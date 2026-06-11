const certs = [
  { icon: "🌐", name: "Data Analytics Essential", org: "Cisco Networking Academy", date: "Jun 2026", credential: "4dddf8ae-7123-4000-b9a0-bf7a610d8224", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "🤖", name: "Apply AI: Analyze Customer Reviews", org: "Cisco Networking Academy", date: "Jun 2026", credential: "41b4e8a9-34d9-4df9-9915-c54fa2c18ab5", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "💡", name: "Introduction to Modern AI", org: "Cisco Networking Academy", date: "Jun 2026", credential: "41091384-01b3-4f20-9f46-00fdd4556adb", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "🧠", name: "Prompt Engineering for Everyone", org: "IBM", date: "Jun 2026", credential: "7cd12d93fd8b49efaa9395bc0e95a3b6", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "📊", name: "Data Analysis with Python", org: "IBM", date: "Jun 2026", credential: "", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "☁️", name: "Microsoft Certified: Azure and Networking", org: "Microsoft", date: "2024", credential: "", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "🌤️", name: "Microsoft Certified: Cloud Computing", org: "Microsoft", date: "2024", credential: "", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "🐍", name: "Python for Data Science", org: "NPTEL", date: "2024", credential: "", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "☕", name: "Programming in Java", org: "NPTEL", date: "2024", credential: "", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
  { icon: "💻", name: "C for Beginners", org: "Certification Program", date: "2024", credential: "", link: "https://www.linkedin.com/in/misbah-fathima-459404375/details/certifications/" },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">05 — certifications</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>Credentials</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Click any certificate to verify on LinkedIn.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {certs.map((cert) => (
          <a key={cert.name} href={cert.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card" style={{ cursor: "pointer", height: "100%" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{cert.icon}</div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 600, color: "#e8e9f0", marginBottom: "0.25rem", lineHeight: 1.4 }}>{cert.name}</h4>
              <p style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#8b8ea8", marginBottom: "0.5rem" }}>{cert.org}</p>
              <p style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#00d4ff", marginBottom: cert.credential ? "0.5rem" : "0" }}>{cert.date}</p>
              {cert.credential && <p style={{ fontSize: "0.6rem", fontFamily: "DM Mono", color: "#8b8ea8", wordBreak: "break-all" }}>ID: {cert.credential}</p>}
              <p style={{ fontSize: "0.65rem", color: "#6c63ff", marginTop: "0.75rem", fontFamily: "DM Mono" }}>Verify →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}