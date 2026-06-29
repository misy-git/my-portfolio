"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function BlogCard({ post, index }: { post: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(108,99,255,0.06) 0%, rgba(0,212,255,0.04) 100%)",
            border: "1px solid rgba(108,99,255,0.2)",
            borderRadius: "16px",
            padding: "2rem",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.transform = "translateY(-4px)";
            el.style.borderColor = "rgba(108,99,255,0.6)";
            el.style.boxShadow = "0 20px 60px rgba(108,99,255,0.15)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.transform = "translateY(0)";
            el.style.borderColor = "rgba(108,99,255,0.2)";
            el.style.boxShadow = "none";
          }}
        >
          <div style={{
            position: "absolute", top: "-40px", right: "-40px",
            width: "120px", height: "120px",
            background: "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)",
            borderRadius: "50%", pointerEvents: "none",
          }} />

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.75rem", color: "#6c63ff", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {post.date}
            </span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#444" }} />
            <span style={{ fontSize: "0.75rem", color: "#8b8ea8" }}>
              {post.readTime} min read
            </span>
          </div>

          <h2 style={{
            fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.3,
            background: "linear-gradient(90deg, #ffffff 0%, #a8a4ff 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            {post.title}
          </h2>

          <p style={{ fontSize: "0.9rem", color: "#8b8ea8", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            {post.excerpt}
          </p>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            {post.tags?.map((tag: string) => (
              <span key={tag} style={{
                fontSize: "0.7rem", padding: "3px 10px", borderRadius: "999px",
                background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)",
                color: "#a8a4ff", fontWeight: 500,
              }}>{tag}</span>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6c63ff", fontSize: "0.875rem", fontWeight: 600 }}>
            Read Article →
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BlogPageClient({ posts }: { posts: any[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main style={{ minHeight: "100vh", padding: "6rem 1.5rem 4rem", maxWidth: "760px", margin: "0 auto" }}>
      <div style={{
        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease", marginBottom: "3.5rem",
      }}>
        <p style={{ fontSize: "0.75rem", color: "#6c63ff", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          07 — Blog
        </p>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "0.75rem",
          background: "linear-gradient(135deg, #ffffff 0%, #6c63ff 50%, #00d4ff 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          Articles & Writing
        </h1>
        <p style={{ color: "#8b8ea8", fontSize: "1rem" }}>
          My thoughts, learning journey, and things I figured out the hard way.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </main>
  );
}