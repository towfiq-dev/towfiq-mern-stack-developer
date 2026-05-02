import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiBetterauth,
  SiPrisma,
  SiFirebase,
} from "react-icons/si";

const techItems = [
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "Better Auth", icon: <SiBetterauth />, color: "text-[#FF9900]" },
  { name: "Prisma", icon: <SiPrisma />, color: "text-cyan-300" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
];

const TechStackHome = () => {
  return (
    <section className="bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="text-center mb-5">
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium tracking-widest uppercase">
            Tech Stack
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 leading-tight">
          Technologies I{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Work With
          </span>
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {techItems.map((tech, index) => (
            <div
              key={index}
              className="group bg-[#0d0d0d] border border-gray-800/50 p-4 sm:p-5 h-32 sm:h-36 md:h-40 rounded-2xl flex flex-col items-center justify-center gap-2.5 hover:border-cyan-500/40 hover:bg-[#111] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`text-2xl sm:text-3xl md:text-4xl font-mono ${tech.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {tech.icon}
              </div>
              <span className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-12 text-center">
          <Link
            href="/navLinks/skills"
            className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-base sm:text-lg"
          >
            <Zap className="w-4 h-4 fill-cyan-400 animate-pulse" />
            View all skills & proficiency
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechStackHome;
