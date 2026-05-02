import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

const TechStackHome = () => {
  // আপনার টেক স্ট্যাকের ডাটা - উজ্জ্বল লুকের জন্য টেক্সট বেসড বা ব্র্যান্ডেড কালার আইকন
  const techItems = [
    // ছবির মতো উজ্জ্বলতা পেতে সরাসরি টেক্সট বা নির্দিষ্ট কালার ব্যবহার করা হয়েছে
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "Next.js", icon: "N", color: "text-white" },
    { name: "TypeScript", icon: "TS", color: "text-blue-500" },
    { name: "Node.js", icon: "JS", color: "text-green-500" }, // ছবির গ্রিন লুকের জন্য JS টেক্সট
    { name: "MongoDB", icon: "🍃", color: "text-green-400" },
    { name: "Tailwind", icon: "≈", color: "text-cyan-400" }, // Tailwind এর ওয়েভ সাইন
    { name: "Express", icon: "ex", color: "text-gray-300" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-300" },
    { name: "Docker", icon: "🐳", color: "text-blue-500" },
    { name: "Git", icon: "📜", color: "text-orange-500" },
    { name: "Prisma", icon: "◭", color: "text-cyan-300" },
    { name: "Firebase", icon: "🔥", color: "text-yellow-500" },
  ];

  return (
    <section className="bg-black py-20 px-4 flex flex-col items-center justify-center min-h-screen">
      {/* Badge */}
      <div className="mb-6">
        <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium tracking-widest uppercase">
          Tech Stack
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 leading-tight">
        Technologies I <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Work With</span>
      </h2>

      {/* Tech Grid - Responsive for Mobile, Tab, Laptop, PC */}
      <div className="max-w-6xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {techItems.map((tech, index) => (
          <div 
            key={index}
            className="group bg-[#0d0d0d] border border-gray-800/50 p-6 h-40 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-cyan-500/40 hover:bg-[#121212] transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Icon Box - Grayscale ফিল্টার সরিয়ে উজ্জ্বলতা বাড়ানো হয়েছে */}
            <div className={`text-3xl md:text-4xl font-mono ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
              {tech.icon}
            </div>
            {/* Name */}
            <span className="text-gray-400 text-xs md:text-sm font-medium group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* View All Skills Button */}
      <div className="mt-16">
        <Link 
          href="/navLinks/skills" 
          className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-lg"
        >
          <Zap className="w-4 h-4 fill-cyan-400 animate-pulse" />
          <span>View all skills & proficiency</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default TechStackHome;