import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  const email = "towfiqulislam017399@gmail.com";

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="relative group bg-[#0d0d12] border border-gray-800/50 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden">
          
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 rounded-3xl border border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors duration-300 pointer-events-none"></div>
          <div className="absolute -inset-1 rounded-3xl bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-colors duration-300 pointer-events-none"></div>

          {/* Mail Icon with Gradient */}
          <div className="mb-10 inline-flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Heading with Gradient text */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Amazing</span>
          </h2>

          {/* Subheading text */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Gradient CTA Button */}
            <Link href={'/navLinks/contact'} 
              //href={`mailto:${email}`}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:from-cyan-500 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Email Address Button/Text */}
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-8 py-4 bg-[#14141a] border border-gray-700/50 text-gray-300 rounded-full font-mono text-lg hover:bg-[#18181f] hover:border-gray-600 transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              <Mail className="w-5 h-5 text-gray-500" />
              {email}
            </a>
          </div>

          {/* Subtle inner background glow effect */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;