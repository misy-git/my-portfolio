"use client";
import { useState, useEffect } from "react";
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: scrolled ? "rgba(8,9,13,0.9)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(108,99,255,0.1)" : "none", transition: "all 0.3s" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
       <span style={{ fontFamily: "DM Mono", color: "#6c63ff", fontWeight: 700, fontSize: "1.1rem" }}>MF.dev</span>
        <ul style={{ display: "flex", alignItems: "center", gap: "4px", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={{ color: "#8b8ea8", textDecoration: "none", fontSize: "0.75rem", padding: "6px 12px", borderRadius: "8px", transition: "all 0.2s", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 500 }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "#e8e9f0"; (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "#8b8ea8"; (e.target as HTMLElement).style.background = "transparent"; }}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", fontWeight: 600, padding: "7px 18px", borderRadius: "8px", border: "1px solid #6c63ff", color: "#6c63ff", background: "transparent", cursor: "pointer", transition: "all 0.2s", textDecoration: "none" }}
  onMouseEnter={e => { (e.target as HTMLElement).style.background = "#6c63ff"; (e.target as HTMLElement).style.color = "white"; }}
  onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "#6c63ff"; }}>
  Resume
</a>
      </div>
    </nav>
  );
}