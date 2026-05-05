import React from 'react';
import Hero from '@/components/hero/Hero';
import GetTouch from '@/components/getTouch/GetTouch';
import WhatDo from '@/components/whatIDo/WhatDo';
import States from '@/components/states/States';
import ProjectSection from '@/components/projectsSection/projectCard/ProjectSection';
import TechStackHome from '@/components/techStackHome/TechStackHome';
import Contact from '@/components/contact/Contact';
import SocialLinks from '@/components/socialLinks/SocialLinks';
import Education from '@/components/education/Education';
import TrainingSection from '@/components/trainingSection/TrainingSection';

export const metadata = {
  title: "Towfiqul Islam | MERN Stack Developer",
  description:
    "Towfiqul Islam is a Full Stack MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Hire me or explore my projects and skills.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Towfiqul Islam | MERN Stack Developer",
    description:
      "Towfiqul Islam — Full Stack MERN Developer building fast, elegant web applications.",
    url: "https://towfiq-mern-stack-developer.vercel.app",
  },
};

// JSON-LD Structured Data — helps Google show rich results for "Towfiqul Islam"
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://towfiq-mern-stack-developer.vercel.app/#person",
      name: "Towfiqul Islam",
      alternateName: ["Towfiq Islam", "Towfiqul Islam Developer"],
      url: "https://towfiq-mern-stack-developer.vercel.app",
      image: {
        "@type": "ImageObject",
        url: "https://towfiq-mern-stack-developer.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
      jobTitle: "Full Stack MERN Developer",
      description:
        "Towfiqul Islam is a Full Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB (MERN Stack). He builds high-performance, scalable web applications.",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "Tailwind CSS",
        "Redux",
        "Firebase",
        "Docker",
        "Git",
        "REST API",
        "Full Stack",
        "Full Stack Web Development",
        "Full Stack Development",
        "MERN Stack",
        "MERN Stack Web Development",
        "MERN Stack Development",
      ],
      sameAs: [
        "https://github.com/towfiq-dev",
        "https://www.linkedin.com/in/towfiqul-islam1",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://towfiq-mern-stack-developer.vercel.app/#website",
      url: "https://towfiq-mern-stack-developer.vercel.app",
      name: "Towfiqul Islam | Portfolio",
      description:
        "Portfolio website of Towfiqul Islam — MERN Stack Developer",
      author: { "@id": "https://towfiq-mern-stack-developer.vercel.app/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://towfiq-mern-stack-developer.vercel.app/#profilepage",
      url: "https://towfiq-mern-stack-developer.vercel.app",
      name: "Towfiqul Islam — Developer Portfolio",
      about: { "@id": "https://towfiq-mern-stack-developer.vercel.app/#person" },
      mainEntity: { "@id": "https://towfiq-mern-stack-developer.vercel.app/#person" },
    },
  ],
};

const Home = () => {
  return (
    <>
      {/* Inject structured data into <head> */}
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