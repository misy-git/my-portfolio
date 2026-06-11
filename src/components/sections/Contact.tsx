"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p className="section-label">09 — contact</p>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.25rem" }}>Let&apos;s Talk</h2>
      <p style={{ color: "#8b8ea8", fontSize: "0.875rem", marginBottom: "2.5rem" }}>Open to internships, collaborations, and opportunities.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { icon: "✉️", label: "Email", value: "misbahfathima309@gmail.com" },
            { icon: "📍", label: "Location", value: "Chennai, Tamil Nadu, India" },
            { icon: "🟢", label: "Status", value: "Available for opportunities" },
            { icon: "📞", label: "Phone", value: "6383061217" },
          ].map((item) => (
            <div key={item.label} className="card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(108,99,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</div>
              <div>
                <p style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#8b8ea8", marginBottom: "2px" }}>{item.label}</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#e8e9f0" }}>{item.value}</p>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", gap: "10px", marginTop: "0.5rem" }}>
            <a href="https://www.linkedin.com/in/misbah-fathima-459404375" target="_blank" rel="noopener noreferrer" style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(108,99,255,0.2)", background: "rgba(108,99,255,0.05)", color: "#8b8ea8", fontSize: "0.75rem", fontFamily: "DM Mono", textDecoration: "none", transition: "all 0.2s" }}>LinkedIn →</a>
            <a href="https://github.com/misy-git" target="_blank" rel="noopener noreferrer" style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(108,99,255,0.2)", background: "rgba(108,99,255,0.05)", color: "#8b8ea8", fontSize: "0.75rem", fontFamily: "DM Mono", textDecoration: "none", transition: "all 0.2s" }}>GitHub →</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Name", key: "name", type: "text", placeholder: "Your name" },
            { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
          ].map((field) => (
            <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#8b8ea8" }}>{field.label}</label>
              <input type={field.type} value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} placeholder={field.placeholder} required style={{ background: "#0f1117", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "10px", padding: "10px 14px", color: "#e8e9f0", fontFamily: "Sora", fontSize: "0.875rem", outline: "none" }} />
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "0.7rem", fontFamily: "DM Mono", color: "#8b8ea8" }}>Message</label>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or opportunity..." required rows={4} style={{ background: "#0f1117", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "10px", padding: "10px 14px", color: "#e8e9f0", fontFamily: "Sora", fontSize: "0.875rem", outline: "none", resize: "none" }} />
          </div>
          <button type="submit" style={{ alignSelf: "flex-start", padding: "10px 24px", background: "#6c63ff", color: "white", border: "none", borderRadius: "10px", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", fontFamily: "Sora" }}>
            {sent ? "Message Sent! ✓" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}