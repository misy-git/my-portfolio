"use client";
import { useEffect, useState } from "react";

const roles = ["AI/ML Developer", "Web Developer", "Problem Solver", "Creative Coder", "Tech Innovator"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) { setDeleting(false); setRoleIndex((prev) => (prev + 1) % roles.length); }
      }
    }, deleting ? 50 : 90);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem 2rem 4rem", maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
      <div style={{ position: "absolute", top: "5rem", right: "-5rem", width: "350px", height: "350px", background: "rgba(108,99,255,0.08)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5rem", left: "-5rem", width: "250px", height: "250px", background: "rgba(0,212,255,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.3)", padding: "6px 16px", borderRadius: "100px", marginBottom: "1.5rem", width: "fit-content" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
        <span style={{ color: "#00d4ff", fontFamily: "DM Mono", fontSize: "0.7rem", letterSpacing: "0.1em" }}>Available for opportunities</span>
      </div>
      <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "0.5rem" }}>
        MISBAH FATHIMA<br />
        <span className="gradient-text">Building Tomorrow.</span>
        
      </h1>
      <div style={{ fontFamily: "DM Mono", color: "#ff6b9d", fontSize: "1.1rem", marginBottom: "1.5rem", height: "1.8rem" }}>
        {text}<span>|</span>
      </div>
      <p style={{ color: "#8b8ea8", fontSize: "1rem", maxWidth: "540px", lineHeight: 1.8, marginBottom: "2.5rem" }}>
        Motivated B.E. Computer Science Engineering student skilled in Web Development and AI/ML technologies. Experienced in building responsive websites and intelligent automation systems at CKM Buildbase and OneYes InfoTech Solutions.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "3rem" }}>
        <a href="#projects" className="btn-primary">View Projects →</a>
        <a href="#contact" className="btn-ghost">Contact Me</a>
        <a href="/resume.pdf" className="btn-ghost">Download Resume</a>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {["GitHub", "LinkedIn", "Email"].map((s) => (
          <button key={s} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "8px", border: "1px solid rgba(108,99,255,0.2)", background: "rgba(255,255,255,0.03)", color: "#8b8ea8", fontFamily: "DM Mono", fontSize: "0.7rem", cursor: "pointer" }}>⌥ {s}</button>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", color: "#8b8ea8" }}>
        <span style={{ fontSize: "0.65rem", fontFamily: "DM Mono", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, #6c63ff, transparent)" }} />
      </div>
    </section>
  );
}