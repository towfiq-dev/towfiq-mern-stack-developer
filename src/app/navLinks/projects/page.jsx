"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { allProjects } from "@/components/allAPI/projectApi/ProjectApi";
import Modals from "@/components/projectsSection/projectsModals/ProjectsModals";
const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-[#08090a] min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-24 sm:pt-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            All <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Explore my complete collection of works, ranging from web apps to full-stack platforms.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="bg-[#121418] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer group hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-[10px] uppercase font-bold px-2.5 py-1 rounded-md">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-gray-800 text-blue-300 px-2 py-1 rounded border border-blue-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-1 rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <button className="flex cursor-pointer items-center gap-1 text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
                  View details <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modals 
      selectedProject={selectedProject} 
      setSelectedProject={setSelectedProject}/>
    </section>
  );
};

export default ProjectsPage;
