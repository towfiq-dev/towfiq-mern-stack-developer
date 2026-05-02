import React from 'react';
import { Download, CheckCircle2, Code2, Briefcase, GraduationCap, Users } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import myPhoto from '@/assets/tanim.jpg';
import Link from 'next/link';

const AboutMe = () => {
  const expertise = [
    "React & Next.js Applications",
    "RESTful & GraphQL APIs",
    "Database Design & Optimization",
    "Responsive & Accessible UI",
    "Cloud Deployment (AWS, Vercel)",
    "Performance Optimization"
  ];

  const stats = [
    { icon: <Code2 size={20} />, value: "50+", label: "Projects Completed", color: "bg-blue-500" },
    { icon: <Briefcase size={20} />, value: "3+", label: "Years Experience", color: "bg-purple-500" },
    { icon: <GraduationCap size={20} />, value: "10+", label: "Certifications", color: "bg-orange-500" },
    { icon: <Users size={20} />, value: "30+", label: "Happy Clients", color: "bg-emerald-500" },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="px-4 py-1.5 border border-cyan-900/50 rounded-full text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase bg-cyan-950/20">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight">
            Get to know <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">who I am</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A passionate developer dedicated to turning complex ideas into elegant, high-performance digital experiences.
          </p>
        </div>

        {/* Content Grid - items-center added here */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Side: Image Holder */}
          <div className="relative group max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#111] z-10">
              <Image 
                width={600} 
                height={700}
                src={myPhoto}
                alt="Towfiqul Islam" 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
              />
            </div>
            
            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
               <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg ring-4 ring-purple-600/20">
                  <Code2 size={24} className="text-white"/>
               </div>
               <div>
                  <p className="text-2xl font-black leading-none bg-white bg-clip-text">3+ Years</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Experience</p>
               </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full"></div>
          </div>

          {/* Right Side: Bio & Expertise */}
          <div className="flex flex-col justify-center">
            <div className="inline-block">
                <span className="text-cyan-400 text-xs font-black tracking-widest uppercase mb-2 block">Professional Bio</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-[1.2]">
                  Full Stack Web Developer & <br /> 
                  <span className="text-gray-400">React / Next.js Specialist</span>
                </h3>
            </div>
            
            <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed mb-10">
              <p>
                I'm <span className="text-white font-semibold">Towfiqul Islam</span> — a Full Stack Web Developer specializing in <span className="text-cyan-400">React & Next.js</span>. 
                I focus on building solutions that are not only visually stunning but also technically robust.
              </p>
              <p>
                Expert in the <span className="text-white font-medium border-b border-gray-700">MERN stack</span>, TypeScript, and modern cloud architectures. I bridge the gap between design and scalable engineering.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {expertise.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] p-3.5 rounded-xl hover:bg-white/[0.07] transition-all duration-300">
                  <CheckCircle2 size={18} className="text-cyan-500 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href={'/navLinks/contact'} className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/20">
                Let's Work Together <FaArrowRight size={14}/>
              </Link>
              <button className="flex items-center gap-2 px-8 py-4 bg-[#111] border border-gray-800 rounded-full font-bold text-sm hover:bg-gray-800 transition-all">
                <Download size={18}/> Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
           {stats.map((stat, i) => (
             <div key={i} className="relative overflow-hidden bg-[#0a0a0a] border border-gray-900 p-6 md:p-8 rounded-3xl hover:border-cyan-500/50 transition-all group">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                   {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-1 tracking-tight">{stat.value}</h3>
                <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                
                {/* Subtle Hover Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full -mr-10 -mt-10"></div>
             </div>
           ))}
        </div>

        {/* Core Stack Footer */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-950 to-black border border-gray-900 rounded-3xl text-center lg:text-left">
           <p className="text-gray-400 text-sm md:text-base">
             <span className="text-cyan-400 font-black uppercase tracking-tighter mr-3">Core Stack</span>
             <span className="inline-block italic">React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Tailwind CSS, Docker, AWS & Vercel.</span>
           </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;