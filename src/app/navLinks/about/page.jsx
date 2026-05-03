import React from "react";
import { Download, CheckCircle2, Code2, Briefcase, GraduationCap, Users } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import profileImageUrl from "@/assets/towfiq.jpg";
import Link from "next/link";

const expertise = [
  "React & Next.js Applications",
  "RESTful & GraphQL APIs",
  "Database Design & Optimization",
  "Responsive & Accessible UI",
  "Cloud Deployment (AWS, Vercel)",
  "Performance Optimization",
];

const stats = [
  { icon: <Code2 size={18} />, value: "20+", label: "Projects Completed", color: "bg-blue-500" },
  { icon: <Briefcase size={18} />, value: "1+", label: "Years Experience", color: "bg-purple-500" },
  { icon: <GraduationCap size={18} />, value: "5+", label: "Certifications", color: "bg-orange-500" },
  { icon: <Users size={18} />, value: "10+", label: "Happy Clients", color: "bg-emerald-500" },
];

const AboutMe = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto pt-12 sm:pt-16">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="px-4 py-1.5 border border-cyan-900/50 rounded-full text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase bg-cyan-950/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-5 mb-5 tracking-tight">
            Get to know{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              who I am
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            A passionate developer dedicated to turning complex ideas into elegant, high-performance
            digital experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center mb-14 md:mb-20">

          {/* Left: Image */}
          <div className="relative group max-w-sm mx-auto lg:max-w-none w-full">
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#111]  z-10">
              <Image
                width={600}
                height={700}
                src={profileImageUrl}
                alt="Towfiqul Islam"
                className="w-full h-auto object-cover  group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 right-4 sm:right-8 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20">
              <div className="p-2.5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl ring-4 ring-purple-600/20">
                <Code2 size={20} className="text-white" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-black leading-none text-white">1+ Years</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">
                  Experience
                </p>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          </div>

          {/* Right: Bio */}
          <div className="flex flex-col justify-center">
            <span className="text-cyan-400 text-xs font-black tracking-widest uppercase mb-2 block">
              Professional Bio
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">
              Full Stack Web Developer & <br />
              <span className="text-gray-400">React / Next.js Specialist</span>
            </h3>

            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                I'm{" "}
                <span className="text-white font-semibold">Towfiqul Islam</span> — a Full Stack Web
                Developer specializing in{" "}
                <span className="text-cyan-400">React & Next.js</span>. I focus on building
                solutions that are not only visually stunning but also technically robust.
              </p>
              <p>
                Expert in the{" "}
                <span className="text-white font-medium border-b border-gray-700">MERN stack</span>{" "}
                and modern cloud architectures. I bridge the gap between design and scalable
                engineering.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {expertise.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] p-3 rounded-xl hover:bg-white/[0.06] transition-all"
                >
                  <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/navLinks/contact"
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
              >
                Let's Work Together <FaArrowRight size={12} />
              </Link>
              <a
                href="/towfiq-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#111] border border-gray-800 rounded-full font-bold text-sm hover:bg-gray-800 transition-all"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-[#0a0a0a] border border-gray-900 p-5 sm:p-6 md:p-8 rounded-3xl hover:border-cyan-500/50 transition-all group"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform`}
              >
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 tracking-tight text-white">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.02] rounded-full -mr-8 -mt-8"></div>
            </div>
          ))}
        </div>

        {/* Core Stack */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 bg-gradient-to-r from-gray-950 to-black border border-gray-900 rounded-3xl text-center lg:text-left">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            <span className="text-cyan-400 font-black uppercase tracking-tighter mr-3">
              Core Stack
            </span>
            <span className="italic">
              React, Next.js, Node.js, MongoDB, Tailwind CSS, Firebase, Prisma, Docker, AWS &
              Vercel.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
