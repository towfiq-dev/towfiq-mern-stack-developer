import React from 'react';
import { Globe, Smartphone, Database, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "End-to-end web applications built with modern frameworks, clean architecture, and scalable backends.",
      icon: <Globe className="w-6 h-6 text-white" />,
      bgGradient: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      title: "Responsive UI / UX",
      description: "Pixel-perfect, mobile-first interfaces with smooth animations and intuitive user experiences.",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      bgGradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "API & Database Design",
      description: "RESTful & GraphQL APIs with optimized database schemas for performance and data integrity.",
      icon: <Database className="w-6 h-6 text-white" />,
      bgGradient: "bg-gradient-to-br from-emerald-500 to-teal-400"
    },
    {
      title: "DevOps & Deployment",
      description: "Cloud deployment on AWS & Vercel with CI/CD pipelines, Docker, and monitoring for production-ready apps.",
      icon: <Settings className="w-6 h-6 text-white" />,
      bgGradient: "bg-gradient-to-br from-orange-500 to-amber-500"
    }
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-block px-4 py-1 rounded-full border border-cyan-900/50 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
          Services
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          What I <span className="text-blue-500">Do</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          From concept to deployment — I deliver complete digital solutions tailored to your needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative bg-[#0a0a0b] border border-gray-800/50 p-5 rounded-3xl hover:border-gray-700 transition-all duration-300 flex flex-col items-start"
          >
            {/* Icon Box with Gradient */}
            <div className={`w-14 h-14 rounded-2xl ${service.bgGradient} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>

            {/* Content */}
            <h3 className="text-[17px] font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              {service.description}
            </p>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/[0.02] transition-colors pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;