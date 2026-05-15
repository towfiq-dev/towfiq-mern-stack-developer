const BASE = "https://towfiq-mern-stack-developer.vercel.app";

export const metadata = {
  title: "Projects | Towfiqul Islam | তৌফিকুল ইসলাম",
  description:
    "Browse 20+ projects by Towfiqul Islam (তৌফিকুল ইসলাম) — Full Stack MERN Developer from Bangladesh. Web apps, full-stack platforms, and open-source tools built with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Towfiqul Islam projects",
    "তৌফিকুল ইসলাম প্রজেক্ট",
    "Towfiqul Islam portfolio projects",
    "MERN Stack projects Bangladesh",
    "React projects Towfiqul",
    "Next.js projects Bangladesh",
  ],
  alternates: { canonical: "/navLinks/projects" },
  openGraph: {
    title: "Projects by Towfiqul Islam | তৌফিকুল ইসলাম | MERN Stack Developer",
    description:
      "Explore 20+ projects built by Towfiqul Islam (তৌফিকুল ইসলাম) using React, Next.js, Node.js, and MongoDB.",
    url: `${BASE}/navLinks/projects`,
    images: [
      {
        url: `${BASE}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Projects by Towfiqul Islam",
      },
    ],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
