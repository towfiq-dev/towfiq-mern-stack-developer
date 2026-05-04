"use client";
import { useState } from "react";
import { courses } from "@/components/allAPI/courseAPI/CourseAPI";
import CertificateCard from "./CertificateCard";
import CourseModal from "./CourseModal";

export default function CertificatesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="min-h-screen bg-[#060810] pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase mb-4">
            Achievements & Learning
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Courses &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            A collection of verified courses and certifications that shaped my expertise across web development, AI, and modern technologies.
          </p>

          <div className="flex items-center justify-center gap-8 mt-8">
            {[
              { value: courses.length, label: "Certificates" },
              { value: courses.reduce((acc, c) => acc + c.tags.length, 0) + "+", label: "Skills" },
              { value: courses.reduce((acc, c) => acc + c.projects.length, 0), label: "Projects" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-white/30">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-3xl mx-auto">
          {courses.map((course) => (
            <CertificateCard key={course.id} course={course} onClick={setSelectedCourse} />
          ))}
        </div>
      </div>

      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </section>
  );
}
