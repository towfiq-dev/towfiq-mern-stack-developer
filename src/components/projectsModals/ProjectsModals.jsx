import {motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Modals = ({selectedProject, setSelectedProject}) => {
  return (
    <div>
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative bg-[#16181d] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-gray-700 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute cursor-pointer top-4 right-4 z-20 bg-black/60 p-2 rounded-full hover:bg-red-500 transition-colors text-white"
              >
                <X size={18} />
              </button>

              <div className="relative h-52 sm:h-64 md:h-80 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-7 md:p-8">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-400/10 px-3 py-1 rounded-full border border-blue-500/20">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {selectedProject.features && (
                  <div className="mb-7">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 tracking-wider">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-blue-500 mt-1">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-7">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition-all"
                >
                  <ExternalLink size={18} /> View Live Project
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modals;