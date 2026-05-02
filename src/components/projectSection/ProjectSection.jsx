"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; // lucide-react ব্যবহার করা হয়েছে আইকনের জন্য

const projects = [
  {
    id: 1,
    title: "Looklify – Modern Beauty & Skincare E-Commerce Website",
    description: "Looklify – Modern Beauty & Skincare E-Commerce Website built with Next.js, Tailwind CSS, and...",
    tags: ["Next.js", "React", "MongoDB"],
    category: "Full Stack",
    image: "/project1.png", // আপনার ইমেজের পাথ দিন
    liveLink: "https://your-project-link.com",
  },
  {
    id: 2,
    title: "CareerOstad – AI Job Matching & Learning Platform",
    description: "CareerOstad is a comprehensive full-stack AI-powered platform designed to bridge the gap...",
    tags: ["Next.js", "React", "JavaScript"],
    category: "Full Stack",
    image: "/project2.png",
    liveLink: "https://your-project-link.com",
  },
  {
    id: 3,
    title: "Bogurabashi Web",
    description: "Bogura Bashi Website is a full-featured web application designed to provide the citizens of...",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack",
    image: "/project3.png",
    liveLink: "https://your-project-link.com",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-teal-400 border border-teal-400/30 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of my recent work — built with modern tools and best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="bg-[#0f1115] border border-gray-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Image Container */}
            <div className="relative h-56 w-full bg-gray-900">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-medium text-teal-400 bg-teal-400/10 px-3 py-1 rounded-lg w-fit mb-4">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Link
                href={project.liveLink}
                target="_blank"
                className="flex items-center gap-2 text-teal-400 border border-teal-400/20 w-fit px-4 py-2 rounded-lg hover:bg-teal-400 hover:text-black transition-colors duration-300"
              >
                <ExternalLink size={16} />
                <span className="text-sm font-medium">Live</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-16 text-center">
        <Link href="/navLinks/projects">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;