"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 9999, background: "rgba(255,255,255,0.05)" }}>
      <div style={{
        height: "100%", width: `${progress}%`,
        background: "linear-gradient(90deg, #6c63ff, #00d4ff)",
        transition: "width 0.1s linear",
        boxShadow: "0 0 10px rgba(108,99,255,0.8)",
      }} />
    </div>
  );
}

export default function BlogPostClient({
  data, html, readTime,
}: {
  data: { title: string; date: string; tags?: string[] };
  html: string;
  readTime: number;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <ProgressBar />
      <main style={{
        maxWidth: "720px", margin: "0 auto", padding: "5rem 1.5rem 6rem",
        opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease",
      }}>
        <Link href="/#blog" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          fontSize: "0.8rem", color: "#6c63ff", textDecoration: "none",
          marginBottom: "2.5rem", fontWeight: 500,
        }}
          onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
          onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
        >
          ← Back to Articles
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.75rem", color: "#6c63ff", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {data.date}
          </span>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#444" }} />
          <span style={{ fontSize: "0.75rem", color: "#8b8ea8" }}>{readTime} min read</span>
        </div>

        <h1 style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem",
          background: "linear-gradient(135deg, #ffffff 0%, #a8a4ff 60%, #00d4ff 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          {data.title}
        </h1>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "3rem" }}>
          {data.tags?.map((tag) => (
            <span key={tag} style={{
              fontSize: "0.7rem", padding: "4px 12px", borderRadius: "999px",
              background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)",
              color: "#a8a4ff", fontWeight: 500,
            }}>{tag}</span>
          ))}
        </div>

        <div style={{
          height: "1px", marginBottom: "3rem",
          background: "linear-gradient(90deg, #6c63ff33, #00d4ff33, transparent)",
        }} />

        <article className="blog-article" dangerouslySetInnerHTML={{ __html: html }} />

        <div style={{
          marginTop: "4rem", paddingTop: "2rem",
          borderTop: "1px solid rgba(108,99,255,0.15)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
        }}>
          <Link href="/#blog" style={{ fontSize: "0.875rem", color: "#6c63ff", textDecoration: "none", fontWeight: 500 }}>
            ← More Articles
          </Link>
          <span style={{ fontSize: "0.75rem", color: "#555" }}>Built with Next.js · Misbah Fathima · 2026</span>
        </div>
      </main>

      <style>{`
        .blog-article h1, .blog-article h2, .blog-article h3 {
          color: #ffffff;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .blog-article h1 { font-size: 1.6rem; }
        .blog-article h2 {
          font-size: 1.25rem;
          background: linear-gradient(90deg, #ffffff, #a8a4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .blog-article h3 { font-size: 1.05rem; color: #a8a4ff; }
        .blog-article p {
          color: #c8cad8;
          margin-bottom: 1.4rem;
          line-height: 1.85;
          font-size: 1rem;
        }
        .blog-article strong { color: #ffffff; font-weight: 600; }
        .blog-article em { color: #a8a4ff; font-style: italic; }
        .blog-article hr {
          border: none; height: 1px;
          background: linear-gradient(90deg, rgba(108,99,255,0.3), rgba(0,212,255,0.2), transparent);
          margin: 2.5rem 0;
        }
        .blog-article p:first-of-type { font-size: 1.1rem; color: #d8dae8; }
      `}</style>
    </>
  );
}