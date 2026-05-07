"use client";

import { useEffect, useRef, useState } from "react";
import { columns } from "./Colums";
import { CategoryColumn } from "./SkillsServer";

const SkillsClient = ({ skillsJsonLd }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Observe when the section enters the viewport to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Split columns into two groups for the two-column layout
  const leftGroups = [columns[0], columns[2]];
  const rightGroups = [columns[1], columns[3]];

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsJsonLd) }}
      />

      <section
        ref={sectionRef}
        className="relative bg-[#080b0b] min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-10 overflow-hidden"
        aria-label="Skills and Technologies — Towfiqul Islam"
      >
        {/* Background gradient decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 20% 10%, rgba(0,212,255,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(99,102,241,0.04) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto pt-24 sm:pt-28">
          {/* Section heading */}
          <div className="mb-14 sm:mb-18">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-cyan-500/60 mb-3">
              Technical Proficiency
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              Skills &amp;{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #00d4ff 0%, #6366f1 100%)",
                }}
              >
                Technologies
              </span>
            </h1>
            <p className="text-gray-500 text-sm">
              Technologies I work with to bring ideas to life
            </p>
            <div
              className="mt-5 h-px w-24 rounded-full"
              style={{ background: "linear-gradient(90deg,#00d4ff,transparent)" }}
            />
          </div>

          {/* Skills grid — two columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-10">
            <div className="flex flex-col gap-10">
              {leftGroups.map((group, i) => (
                <CategoryColumn
                  key={i}
                  title={group.title}
                  subtitle={group.subtitle}
                  skills={group.skills}
                  inView={inView}
                />
              ))}
            </div>
            <div className="flex flex-col gap-10">
              {rightGroups.map((group, i) => (
                <CategoryColumn
                  key={i}
                  title={group.title}
                  subtitle={group.subtitle}
                  skills={group.skills}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          {/* Bottom divider */}
          <div
            aria-hidden="true"
            className="mt-20 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(99,102,241,0.2), transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default SkillsClient;