"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";

// ১০টি ডামি প্রজেক্ট তৈরি করছি উদাহরণের জন্য
const projects = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "Looklify – Modern Beauty & Skincare" : "CareerOstad – AI Job Platform",
  description: "A comprehensive full-stack application designed to bridge the gap between users and modern services.",
  fullDescription: "This is a detailed description for project " + (i + 1) + ". It includes advanced features like real-time data fetching, AI integration, and a fully responsive UI crafted with Tailwind CSS and Framer Motion for smooth animations.",
  tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  category: "Full Stack",
  image: i % 2 === 0 ? "/project1.png" : "/project2.png", // Replace with your image path
  liveLink: "https://your-demo.com",
}));

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-[#08090a] min-h-screen text-white py-20 px-4 sm:px-8 lg:px-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          All <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my complete collection of works, ranging from web apps to AI platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-320 mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="bg-[#121418] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer group hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 bg-blue-600 text-[10px] uppercase font-bold px-3 py-1 rounded-md">
                {project.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] bg-gray-800 text-blue-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-1 rounded">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              <button className="flex items-center gap-1 text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
                View details <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Details Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative bg-[#16181d] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-gray-700 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-10 bg-black/50 p-2 rounded-full hover:bg-red-500 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-400/10 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="bg-gray-800 text-white text-xs px-4 py-2 rounded-xl border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPage;