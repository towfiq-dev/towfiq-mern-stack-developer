"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import keenKeeperImg from "../../../assets/keenkeeper.png";
import tilesProImg from "../../../assets/TilesPro.png";
import dgToolsImg from "../../../assets/DGTools.png";
import githubIssueTrackerImg from "../../../assets/github.png";
import bookVibeImg from "../../../assets/bookvibe.png";
import dragonNewsImg from "../../../assets/dragon.png";
import englishIsEasyImg from "../../../assets/english.png";
import payooImg from "../../../assets/payoo.png";
import appstore from "../../../assets/app.png";

const allProjects = [
  {
    id: 1,
    title: "FriendShip Management System",
    description:
      "FriendShip Management is a modern web application designed to help you maintain regular contact with your friends. It functions as a Personal Relationship Manager (PRM) that tracks when you last spoke with someone and identifies who needs your attention most.",
    tags: ["JS", "React", "TailwindCSS"],
    category: "Full Stack",
    image: keenKeeperImg,
    liveLink: "https://friendship-management.netlify.app",
  },
  {
    id: 2,
    title: "TilesPro - Online Ceramic Product Gallery",
    description:
      "TilesPro is a modern, next-generation web application built to showcase a premium collection of tiles. It provides a seamless experience for users to explore various tile categories, view detailed specifications, and manage their personal profiles.",
    tags: ["Next.js", "React", "TailwindCSS", "MongoDB", "Better-Auth"],
    category: "Full Stack",
    image: tilesProImg,
    liveLink: "https://tiles-gallery-app.vercel.app",
  },
  {
    id: 3,
    title: "DigiTools - Premium Digital Tools Marketplace",
    description:
      "DigiTools is a modern, high-performance web platform designed for creators, professionals, and businesses. It serves as a curated marketplace where users can explore, filter, and manage premium digital assets and AI-powered tools.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack",
    image: dgToolsImg,
    liveLink: "https://digitoolls-platfrom.netlify.app",
  },
    {
    id: 4,
    title: "The Dragon News",
    description:
      "The Dragon News is a high-performance full-stack news portal built with Next.js and MongoDB. It features a dynamic news feed with category-based filtering, secure user authentication using Better-Auth, and a fully responsive dashboard.",
    tags: ["Next.js", "MongoDB", "Better-Auth", "TailwindCSS"],
    category: "Full Stack",
    image: dragonNewsImg,
    liveLink: "https://the-dragon-news-pro.vercel.app",
  },
    {
    id: 5,
    title: "AppStore – Productivity Hub",
    description:
      "This project is a comprehensive application marketplace and management system. It features a trending apps showcase, an 'All Applications' grid with filtering capabilities, user-installed app tracking, and detailed review/rating analytics.",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    category: "Full Stack",
    image: appstore,
    liveLink: "https://your-app-link.vercel.app",
  },
  {
    id: 6,
    title: "Payoo MFS Application",
    description:
      "Payoo is a simplified Mobile Financial Service (MFS) web application that allows users to manage their digital wallet. It features secure login, add money, cash out, money transfer, and a detailed transaction history.",
    tags: ["HTML", "CSS", "JS", "TailwindCSS"],
    category: "Frontend / Vanilla JS",
    image: payooImg,
    liveLink: "https://your-payoo-link.netlify.app",
  },
  {
    id: 7,
    title: "English Is Easy!!",
    description:
      "English Is Easy is an interactive language learning platform designed to simplify English vocabulary for learners. The application features a clean, categorized layout where users can explore words, view meanings, and practice through interactive UI components.",
    tags: ["JS", "TailwindCSS", "DOM Manipulation"],
    category: "Educational",
    image: englishIsEasyImg,
    liveLink: "https://english-is-easy-example.netlify.app",
  },

  {
    id: 8,
    title: "Book Vibe",
    description:
      "Book Vibe is a comprehensive book discovery and management platform where users can explore a vast collection of books, read reviews, and maintain a personalized reading wishlist.",
    tags: ["JS", "React", "Next.js", "TailwindCSS"],
    category: "Full Stack",
    image: bookVibeImg,
    liveLink: "https://your-book-vibe-link.netlify.app",
  },
  {
    id: 9,
    title: "GitHub Issue Tracker",
    description:
      "A comprehensive issue tracking system inspired by GitHub's workflow. It allows users to create, manage, and monitor technical issues or bugs with a clean, grid-based UI. Features include secure authentication and real-time status updates.",
    tags: ["Next.js", "React", "TailwindCSS", "MongoDB", "Better-Auth"],
    category: "Full Stack",
    image: githubIssueTrackerImg,
    liveLink: "https://your-live-link.vercel.app",
  },
];

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

                <button className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
                  View details <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
                className="absolute top-4 right-4 z-20 bg-black/60 p-2 rounded-full hover:bg-red-500 transition-colors text-white"
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
    </section>
  );
};

export default ProjectsPage;
