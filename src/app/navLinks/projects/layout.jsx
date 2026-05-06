export const metadata = {
  title: "Projects | Towfiqul Islam",
  description:
    "Browse 20+ projects by Towfiqul Islam — Full Stack MERN Developer. Web apps, full-stack platforms, and open-source tools built with React, Next.js, Node.js, and MongoDB.",
  alternates: { canonical: "/navLinks/projects" },
  openGraph: {
    title: "Projects by Towfiqul Islam | MERN Stack Developer",
    description:
      "Explore 20+ projects built by Towfiqul Islam using React, Next.js, Node.js, and MongoDB.",
    url: "https://towfiq-mern-stack-developer.vercel.app/navLinks/projects",
    images: [
      {
        url: "https://towfiq-mern-stack-developer.vercel.app/og-image.png",
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
