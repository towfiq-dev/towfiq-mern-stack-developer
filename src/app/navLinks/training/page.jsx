"use client";
import { useState } from "react";
import { courses } from "@/components/allAPI/courseAPI/CourseAPI";
import Link from "next/link";

const categoryColors = {
  "Full Stack": { bg: "bg-purple-500/20", text: "text-purple-300", border: "border-purple-500/30" },
  Advanced: { bg: "bg-emerald-500/20", text: "text-emerald-300", border: "border-emerald-500/30" },
};

function getCatStyle(category) {
  return categoryColors[category] || { bg: "bg-slate-500/20", text: "text-slate-300", border: "border-slate-500/30" };
}

function Modal({ course, onClose }) {
  if (!course) return null;
  const catStyle = getCatStyle(course.category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0d1117] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: `0 0 60px ${course.color}22, 0 25px 60px rgba(0,0,0,0.6)` }}
      >
        <div className={`h-1.5 w-full rounded-t-3xl bg-gradient-to-r ${course.gradient}`} />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${course.color}40, ${course.color}20)`, border: `1.5px solid ${course.color}50` }}
              >
                {course.icon}
              </div>
              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${catStyle.bg} ${catStyle.text} ${catStyle.border} mb-2`}>
                  {course.category}
                </span>
                <h2 className="text-xl font-bold text-white leading-tight">{course.title}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white/60 hover:text-white flex-shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: "Institution", value: course.institution },
              { label: "Instructor", value: course.instructor },
              { label: "Issued", value: course.issuedDate },
              { label: "Badge ID", value: course.badge },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white/5 border border-white/8 px-4 py-3">
                <p className="text-xs text-white/40 mb-0.5">{item.label}</p>
                <p className="text-sm text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">About this Course</h3>
            <p className="text-sm text-white/70 leading-relaxed">{course.description}</p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">Skills Gained</h3>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{ background: `${course.color}20`, color: course.color, border: `1px solid ${course.color}30` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          {course.projects.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">Projects Completed</h3>
              <ul className="space-y-2">
                {course.projects.map((proj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: `${course.color}30` }}
                    >
                      {i + 1}
                    </span>
                    {proj}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer */}
          <div
            className="rounded-2xl p-4 flex items-center justify-between"
            style={{ background: `${course.color}10`, border: `1px solid ${course.color}25` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black text-white"
                style={{ background: course.color }}
              >
                {course.institutionLogo}
              </div>
              <div>
                <p className="text-xs text-white/40">Issued by</p>
                <p className="text-sm font-semibold text-white">{course.institution}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">Verified</span>
            </div>
          </div>
        </div>
        <Link href={'/'} className="flex justify-center mb-5">
          <button className="bg-gradient-to-r from-blue-500 cursor-pointer to-purple-500 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
            Show Credential
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/01/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

function CertificateCard({ course, onClick }) {
  const catStyle = getCatStyle(course.category);

  return (
    <div
      className="group relative rounded-2xl border border-white/8 bg-[#0d1117] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 40px ${course.color}25, 0 4px 24px rgba(0,0,0,0.4)`;
        e.currentTarget.style.borderColor = `${course.color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
      onClick={() => onClick(course)}
    >
      <div className={`h-0.5 w-full bg-gradient-to-r ${course.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Preview */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{ background: `radial-gradient(ellipse at center, ${course.color}15 0%, transparent 70%)` }}
      >
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10" style={{ background: course.color }} />
        <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full opacity-10" style={{ background: course.color }} />

        <div className="relative bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center group-hover:bg-white/8 transition-colors">
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Certificate of Completion</p>
          <p className="text-sm font-bold text-white mb-1">Towfiqul Islam</p>
          <p className="text-[11px] text-white/50 max-w-[180px] leading-tight">{course.title}</p>
          <div
            className="mt-2 inline-block text-[9px] font-mono px-2 py-0.5 rounded"
            style={{ background: `${course.color}25`, color: course.color }}
          >
            {course.badge}
          </div>
        </div>

        <div
          className="absolute top-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${course.color}20`, border: `1px solid ${course.color}30` }}
        >
          {course.icon}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-sm font-bold text-white leading-tight mb-1">{course.title}</h3>
        <p className="text-xs text-white/40 mb-1">{course.institution}</p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-white/30">📅</span>
          <span className="text-xs text-white/30">Issued {course.issuedDate}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
              style={{ background: `${course.color}18`, color: course.color, border: `1px solid ${course.color}28` }}
            >
              {tag}
            </span>
          ))}
          {course.tags.length > 3 && (
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/8 text-white/40 border border-white/10">
              +{course.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}>
            {course.category}
          </span>
          <button className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: course.color }}>
            View details
            <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CertificatesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="min-h-screen bg-[#060810] py-20 px-4 relative overflow-hidden">
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

        {/* Cards — 2 col since API has 2 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {courses.map((course) => (
            <CertificateCard key={course.id} course={course} onClick={setSelectedCourse} />
          ))}
        </div>
      </div>

      {selectedCourse && (
        <Modal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </section>
  );
}
