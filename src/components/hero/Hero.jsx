// src/components/Hero.jsx (or similar path)
import Image from 'next/image';
import { Mail, Briefcase, ChevronRight, FileText } from 'lucide-react'; // Icons from a package like lucide-react
import { FaDownload } from 'react-icons/fa';

export default function Hero() {
  // Replace this with your actual image path or a relative path from the public folder.
  // Ideally, use the Next.js <Image /> component for optimization.
  const profileImageUrl = "/path/to/your/profile-image.png"; // Place your image in the public folder

  return (
    <section className="bg-[#050505] text-white min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-280 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side (Text Content) - Starts with Available for Freelance */}
        <div className="space-y-6 lg:order-1 order-2 mt-12 lg:mt-0 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-full px-4 py-2 text-sm text-neutral-300 animate-pulse-light mx-auto lg:mx-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            Available for Freelance Work
          </div>

          <p className="text-xl md:text-2xl text-neutral-400">Hello, I'm</p>
          
          {/* Main Name with Typing Animation */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Towfiqul Islam
          </h1>
          
          {/* Animated Typing Text - Custom CSS needed (see step 1) */}
          {/* Replace this div if you use a package like 'react-typewriter-effect' */}
          <div className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 typewriter-container h-[1.2em]">
            <span className="typewriter-text"></span>
            {/* The cursor styling (simple CSS pipe, looks good) */}
            <span className="inline-block w-0.5 h-[1em] bg-white ml-1 animate-pulse"></span>
          </div>
          
          <p className="text-[17px] text-neutral-400 max-w-130 mx-auto lg:mx-0">
            I craft modern, high-performance web applications with clean architecture and intuitive user experiences. Turning complex problems into elegant digital solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
            <a href="#projects" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-neutral-950 font-semibold px-6 py-3 rounded-full text-lg hover:from-cyan-600 hover:to-purple-700 transition duration-300 shadow-md">
              View Projects <ChevronRight size={22} className="stroke-[2.5]" />
            </a>
            <div className="flex gap-4 items-center">
              <a href="mailto:tanim.dev@email.com" className="group py-2.5 px-4 rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-500 flex items-center gap-2 transition duration-300">
                <Mail className="stroke-neutral-300 group-hover:stroke-white" />
                <h3 className='text-[20px] font-semibold'>Contact Me</h3>
                
              </a>
              <a href="/tanim-resume.pdf" target="_blank" rel="noopener noreferrer" className="group py-2.5 px-4 rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-500 flex items-center gap-2 transition duration-300">
                <FaDownload size={20} className="stroke-neutral-300 group-hover:stroke-white"/>
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Side (Profile Image & Animated Cards) */}
        <div className="relative flex justify-center items-center lg:order-2 order-1 px-8 lg:px-0">
          
          {/* Dark Halo Effect around the profile */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-neutral-950 to-neutral-950 rounded-full scale-125"></div>

          {/* Profile Image Container - Using Next.js Image component for optimization */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl z-10 flex items-center justify-center">
            {profileImageUrl ? (
                // Use actual image
                <Image 
                    src={profileImageUrl} // Set this correctly in public folder or with remote URL
                    alt="Towfiqul Islam- Portfolio Profile Picture" 
                    fill
                    sizes="(max-width: 768px) 320px, 384px"
                    style={{ objectFit: 'cover' }}
                    className="z-10"
                    priority={true} // Optimize loading for above-the-fold content
                />
            ) : (
                // Placeholder, replace with your image
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-4xl text-neutral-600 font-bold">Photo</div>
            )}
          </div>

          {/* Animated Floating Info Cards */}
          
          {/* 3+ Years Experience Card - Top Right */}
          <div className="absolute top-[10%] -right-10 md:top-20 md:right-1 bg-neutral-900 border border-neutral-800 px-5 py-2.5 rounded-2xl shadow-xl z-20 flex gap-3 items-center animate-float">
             <div className="p-2 rounded-lg bg-cyan-900/40">
               <Briefcase size={22} className="stroke-cyan-400" />
             </div>
             <div>
               <p className="text-[14px] font-bold text-white leading-none">3+ Years</p>
               <p className="text-[14px] text-neutral-400">Experience</p>
             </div>
          </div>

          {/* 50+ Projects Completed Card - Bottom Left */}
          <div className="absolute -bottom-10 -left-10 md:bottom-20 md:-left-4 bg-neutral-900 border border-neutral-800 px-5 py-2.5 rounded-2xl shadow-xl z-20 flex gap-3 items-center animate-float [animation-delay:1s]">
             <div className="p-2 rounded-lg bg-purple-900/40">
               <span className="text-2xl font-bold text-purple-400 leading-none">✓</span>
             </div>
             <div>
               <p className="text-[15px] font-bold text-white leading-none">50+ Projects</p>
               <p className="text-[15px] text-neutral-400">Completed</p>
             </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}