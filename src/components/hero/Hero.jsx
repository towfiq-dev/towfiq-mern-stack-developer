import Image from "next/image";
import { Mail, ChevronRight } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import { MdBiotech } from "react-icons/md";
import profileImageUrl from "@/assets/towfiq.jpg";
import Link from "next/link";
import TypingAnimation from "./TypingAnimation";

export default function Hero() {
  return (
    <section
      className="bg-[#050505] text-white min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 lg:pt-10 lg:pb-0"
      aria-label="Hero section — Towfiqul Islam, Full Stack MERN Developer"
    >
      <div className="max-w-7xl pt-20 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* Left: Text Content */}
        <div className="space-y-4 sm:space-y-5 order-2 lg:order-1 text-center lg:text-left">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-neutral-900 border border-neutral-700 rounded-full px-4 py-2 text-[15px] text-neutral-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            Open to Full-time opportunities or Freelance projects
          </div>

          <p className="text-lg md:text-xl text-neutral-400">Hello, I&apos;m</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Towfiqul Islam
          </h1>

          {/* Typing Animation — client component */}
          <TypingAnimation />

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I craft modern, high-performance web applications with clean architecture and intuitive user
            experiences. Turning complex problems into elegant digital solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2 pb-2">
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
                href="https://drive.google.com/file/d/1VcFCmG6LmMKLE0Rk0BdOaEChltObzPNX/view?usp=drivesdk"
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
        <div className="relative flex justify-center items-center order-1 lg:order-2 pt-8 lg:pt-0">
          {/* Radial glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/10 rounded-full blur-3xl scale-110 pointer-events-none"></div>

          {/* Profile Circle */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl z-10">
            <Image
              src={profileImageUrl}
              alt="Towfiqul Islam — Full Stack MERN Developer, Portfolio Profile Picture"
              fill
              sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              style={{ objectFit: "cover" }}
              className="z-10"
              priority
            />
          </div>

          {/* Floating Card: Experience */}
          <div className="absolute top-[8%] right-[5%] bg-neutral-900 border border-neutral-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-xl z-20 flex gap-2 sm:gap-3 items-center animate-float">
            <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-900/40">
              <MdBiotech size={16} className="stroke-cyan-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">20+</p>
              <p className="text-xs text-neutral-400 mt-0.5">Tech Stack</p>
            </div>
          </div>

          {/* Floating Card: Projects */}
          <div className="absolute -bottom-4 left-2 sm:bottom-[8%] sm:left-[5%] bg-neutral-900 border border-neutral-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-xl z-20 flex gap-2 sm:gap-3 items-center animate-float [animation-delay:1.2s]">
            <div className="p-1.5 sm:p-2 rounded-lg bg-purple-900/40">
              <span className="text-base font-bold text-purple-400 leading-none">✓</span>
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
