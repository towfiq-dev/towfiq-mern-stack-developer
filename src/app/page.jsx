import React from "react";
import Hero from "@/components/hero/Hero";
import GetTouch from "@/components/getTouch/GetTouch";
import WhatDo from "@/components/whatIDo/WhatDo";
import States from "@/components/states/States";
import ProjectSection from "@/components/projectsSection/projectCard/ProjectSection";
import TechStackHome from "@/components/techStackHome/TechStackHome";
import Contact from "@/components/contact/Contact";
import SocialLinks from "@/components/socialLinks/SocialLinks";
import Education from "@/components/education/Education";
import TrainingSection from "@/components/trainingSection/TrainingSection";

export const metadata = {
  title: "Towfiqul Islam | MERN Stack Developer",
  description:
    "Towfiqul Islam is a Full Stack MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Hire me or explore my projects and skills.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Towfiqul Islam | MERN Stack Developer",
    description:
      "Towfiqul Islam — Full Stack MERN Developer building fast, elegant web applications with React, Next.js, Node.js & MongoDB.",
    url: "https://towfiq-mern-stack-developer.vercel.app",
    images: [
      {
        url: "https://towfiq-mern-stack-developer.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Towfiqul Islam — MERN Stack Developer",
      },
    ],
  },
};

// ── Structured Data ────────────────────────────────────────────────────────────
// Multiple schema types increase the chance Google shows a rich result/knowledge panel
const BASE = "https://towfiq-mern-stack-developer.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Person schema — the most important one for name-based search
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      name: "Towfiqul Islam",
      givenName: "Towfiqul",
      familyName: "Islam",
      alternateName: [
        "Towfiq Islam",
        "Towfiqul Islam Developer",
        "Towfiqul Islam MERN",
        "Towfiq Dev",
      ],
      url: BASE,
      image: {
        "@type": "ImageObject",
        "@id": `${BASE}/#personimage`,
        url: `${BASE}/og-image.png`,
        width: 1200,
        height: 630,
        caption: "Towfiqul Islam — Full Stack MERN Developer",
      },
      jobTitle: "Full Stack MERN Developer",
      description:
        "Towfiqul Islam is a Full Stack Web Developer from Bangladesh, specializing in React, Next.js, Node.js, MongoDB, and Express (MERN Stack). He builds scalable, high-performance web applications.",
      nationality: "Bangladeshi",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      email: "towfiqulislam017399@gmail.com",
      telephone: "+8801739943577",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Firebase",
        "Docker",
        "Prisma",
        "Git",
        "REST API",
        "Full Stack Web Development",
        "MERN Stack Development",
        "Frontend Development",
        "Backend Development",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Web Developer",
        occupationLocation: {
          "@type": "City",
          name: "Dhaka",
        },
        skills: "React, Next.js, Node.js, MongoDB, Express.js, JavaScript",
      },
      sameAs: [
        "https://github.com/towfiq-dev",
        "https://www.linkedin.com/in/towfiqul-islam1",
        "https://x.com/towfiqul6185",
        "https://www.facebook.com/towfiqul6185",
      ],
    },

    // 2. WebSite schema — enables Google Sitelinks Search Box
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Towfiqul Islam | Portfolio",
      description: "Portfolio of Towfiqul Islam — Full Stack MERN Stack Developer from Bangladesh.",
      author: { "@id": `${BASE}/#person` },
      publisher: { "@id": `${BASE}/#person` },
      inLanguage: "en-US",
    },

    // 3. ProfilePage schema — tells Google this is a person's profile
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      url: BASE,
      name: "Towfiqul Islam — Full Stack Developer Portfolio",
      description:
        "Official portfolio and profile of Towfiqul Islam, a Full Stack MERN Developer specializing in React and Next.js.",
      about: { "@id": `${BASE}/#person` },
      mainEntity: { "@id": `${BASE}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        ],
      },
    },

    // 4. ItemList of projects — Google can show projects in rich results
    {
      "@type": "ItemList",
      "@id": `${BASE}/#projects`,
      name: "Projects by Towfiqul Islam",
      description: "A selection of web development projects built by Towfiqul Islam.",
      numberOfItems: 3,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "FriendShip Management System",
          url: "https://friendship-management.netlify.app",
          description:
            "A personal relationship management platform built with React and Tailwind CSS.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "TilesPro — Online Ceramic Product Gallery",
          url: "https://tiles-gallery-app.vercel.app",
          description:
            "A high-end digital showcase for the ceramic industry, built with Next.js and MongoDB.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "DigiTools — Premium Digital Tools Marketplace",
          url: "https://digitoolls-platfrom.netlify.app",
          description:
            "A marketplace for digital assets and AI tools, built with React and Framer Motion.",
        },
      ],
    },

    // 5. BreadcrumbList for home page
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      ],
    },
  ],
};

const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Hero />
        <SocialLinks />
        <States />
        <Education />
        <TrainingSection />
        <ProjectSection />
        <WhatDo />
        <TechStackHome />
        <GetTouch />
        <Contact />
      </div>
    </>
  );
};

export default Home;
