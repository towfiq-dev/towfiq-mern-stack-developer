"use client";
import Image from "next/image";
import { Mail, Briefcase, ChevronRight } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import { useEffect, useRef } from "react";
import profileImageUrl from "@/assets/towfiq.jpg";
import Link from "next/link";

const TYPING_TEXTS = ["Full Stack Developer", "MERN Stack Developer", "React / Next.js Expert"];

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const current = TYPING_TEXTS[textIndex];
      if (!deleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          textIndex = (textIndex + 1) % TYPING_TEXTS.length;
        }
      }
      timeout = setTimeout(type, deleting ? 50 : 80);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-[#050505] text-white min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: Text Content */}
        <div className="space-y-5 order-2 lg:order-1 text-center lg:text-left">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-neutral-900 border border-neutral-700 rounded-full px-4 py-2 text-sm text-neutral-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            Available for Freelance Work
          </div>

          <p className="text-lg md:text-xl text-neutral-400">Hello, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Towfiqul Islam
          </h1>

          {/* Typing Animation */}
          <div className="flex items-center justify-center lg:justify-start gap-1 h-10 sm:h-12">
            <span
              ref={typingRef}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            ></span>
            <span className="inline-block w-0.5 h-7 sm:h-8 bg-cyan-400 ml-0.5 animate-pulse"></span>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I craft modern, high-performance web applications with clean architecture and intuitive user
            experiences. Turning complex problems into elegant digital solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
            <Link
              href="/navLinks/projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full text-base hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              View Projects <ChevronRight size={18} className="stroke-[2.5]" />
            </Link>

            <div className="flex gap-3 justify-center">
              <Link
                href="/navLinks/contact"
                className="group py-3 px-5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-500 flex items-center gap-2 transition-all duration-300"
              >
                <Mail size={18} className="stroke-neutral-300 group-hover:stroke-white" />
                <span className="text-sm font-semibold text-neutral-300 group-hover:text-white">
                  Contact Me
                </span>
              </Link>
              <a
                href="/towfiq-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group py-3 px-5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-500 flex items-center gap-2 transition-all duration-300"
              >
                <FaDownload size={16} className="text-neutral-300 group-hover:text-white" />
                <span className="text-sm font-semibold text-neutral-300 group-hover:text-white">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Radial glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/10 rounded-full blur-3xl scale-110 pointer-events-none"></div>

          {/* Profile Circle */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl z-10">
            <Image
              src={profileImageUrl}
              alt="Towfiqul Islam - Portfolio Profile Picture"
              fill
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
              style={{ objectFit: "cover" }}
              className="z-10"
              priority
            />
          </div>

          {/* Floating Card: Experience - Top Right */}
          <div className="absolute top-2 right-0 sm:-right-4 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-2xl shadow-xl z-20 flex gap-3 items-center animate-float">
            <div className="p-2 rounded-lg bg-cyan-900/40">
              <Briefcase size={18} className="stroke-cyan-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">1+ Years</p>
              <p className="text-xs text-neutral-400 mt-0.5">Experience</p>
            </div>
          </div>

          {/* Floating Card: Projects - Bottom Left */}
          <div className="absolute bottom-2 left-0 sm:-left-4 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-2xl shadow-xl z-20 flex gap-3 items-center animate-float [animation-delay:1.2s]">
            <div className="p-2 rounded-lg bg-purple-900/40">
              <span className="text-lg font-bold text-purple-400 leading-none">✓</span>
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">20+ Projects</p>
              <p className="text-xs text-neutral-400 mt-0.5">Completed</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
