import SkillsClient from "@/components/skillsClient/SkillsClient";

export const metadata = {
  title: "Skills & Technologies | Towfiqul Islam",
  description:
    "Towfiqul Islam's full technical skill set: React (95%), Next.js (90%), JavaScript (95%), Node.js (90%), MongoDB (85%), Tailwind CSS, Redux, Docker, Firebase, and more.",

  keywords: [
    "Towfiqul Islam",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "Full Stack Developer Bangladesh",
    "Web Developer Portfolio",
  ],

  alternates: { canonical: "/navLinks/skills" },
  openGraph: {
    title: "Skills & Technologies | Towfiqul Islam",
    description:
      "Full stack technical skills of Towfiqul Islam — React, Next.js, Node.js, MongoDB, and modern DevOps tools.",
    url: "https://towfiq-mern-stack-developer.vercel.app/navLinks/skills",
    images: [
      {
        url: "https://towfiq-mern-stack-developer.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skills — Towfiqul Islam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Skills & Technologies | Towfiqul Islam",
    description:
      "Full stack technical skills of Towfiqul Islam — React, Next.js, Node.js, MongoDB, and modern DevOps tools.",
    images: ["https://towfiq-mern-stack-developer.vercel.app/og-image.png"],
  },
};

const BASE = "https://towfiq-mern-stack-developer.vercel.app";

const skillsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Skills", item: `${BASE}/navLinks/skills` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Technical Skills of Towfiqul Islam",
      description: "Programming languages, frameworks, and tools used by Towfiqul Islam.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "React — 95%" },
        { "@type": "ListItem", position: 2, name: "Next.js — 90%" },
        { "@type": "ListItem", position: 3, name: "JavaScript — 95%" },
        { "@type": "ListItem", position: 4, name: "Node.js — 90%" },
        { "@type": "ListItem", position: 5, name: "MongoDB — 85%" },
        { "@type": "ListItem", position: 6, name: "Tailwind CSS — 98%" },
        { "@type": "ListItem", position: 7, name: "Redux — 80%" },
        { "@type": "ListItem", position: 8, name: "Docker — 78%" },
        { "@type": "ListItem", position: 9, name: "Firebase — 80%" },
        { "@type": "ListItem", position: 10, name: "Git — 92%" },
      ],
    },
  ],
};


import React from 'react';

const SkillsPage = () => {
  return (
    <div>
      <SkillsClient skillsJsonLd={skillsJsonLd} />
    </div>
  );
};

export default SkillsPage;
