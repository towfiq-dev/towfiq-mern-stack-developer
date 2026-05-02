"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import keenKeeperImg from "../../assets/keenkeeper.png";
import tilesProImg from "../../assets/TilesPro.png";
import dgToolsImg from "../../assets/DGTools.png";

const projects = [
  {
    id: 1,
    title: "FriendShip Management System",
    description:
      "A modern web application designed to help you maintain regular contact with your friends and strengthen your relationships.",
    tags: ["JS", "React", "TailwindCSS"],
    category: "Full Stack",
    image: keenKeeperImg,
    liveLink: "https://friendship-management.netlify.app",
  },
  {
    id: 2,
    title: "TilesPro - Online Ceramic Product Gallery",
    description:
      "A next-generation web application built to showcase a premium collection of tiles with seamless browsing and profile management.",
    tags: ["Next.js", "React", "MongoDB", "Better-Auth"],
    category: "Full Stack",
    image: tilesProImg,
    liveLink: "https://tiles-gallery-app.vercel.app",
  },
  {
    id: 3,
    title: "DigiTools - Premium Digital Tools Marketplace",
    description:
      "A high-performance web platform for creators and businesses to explore and manage premium digital assets and AI tools.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack",
    image: dgToolsImg,
    liveLink: "https://digitoolls-platfrom.netlify.app",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A selection of my recent work — built with modern tools and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#0f1115] border border-gray-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-gray-700 group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 w-full bg-gray-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-lg w-fit mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 border border-cyan-400/20 w-fit px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm font-medium"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/navLinks/projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
