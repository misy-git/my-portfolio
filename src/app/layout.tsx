// eslint-disable-next-line @typescript-eslint/no-require-imports
require("./globals.css");
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Misbah Fathima | Portfolio",
  description: "AI/ML Developer & Web Developer — B.E. CSE Student at Sathyabama Institute of Science and Technology",
  keywords: ["Misbah Fathima", "portfolio", "AI/ML", "web developer", "Next.js", "React", "Chennai"],
  authors: [{ name: "Misbah Fathima H" }],
  openGraph: {
    title: "Misbah Fathima | Portfolio",
    description: "AI/ML Developer & Web Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ backgroundColor: "#08090d", color: "#e8e9f0", fontFamily: "Sora, sans-serif", overflowX: "hidden", margin: 0 }}>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('mousemove', function(e) {
              const cards = document.querySelectorAll('.card');
              cards.forEach(function(card) {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', x + '%');
                card.style.setProperty('--mouse-y', y + '%');
              });
            });
          `
        }} />
      </body>
    </html>
  );
}