"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, height: "2px", width: `${progress}%`, background: "linear-gradient(90deg, #6c63ff, #00d4ff)", zIndex: 999, transition: "width 0.1s" }} />
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ position: "fixed", bottom: "2rem", right: "2rem", width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #6c63ff, #00d4ff)", border: "none", color: "white", fontSize: "1.2rem", cursor: "pointer", zIndex: 999, boxShadow: "0 4px 20px rgba(108,99,255,0.4)" }}
        >
          ↑
        </button>
      )}
    </>
  );
}