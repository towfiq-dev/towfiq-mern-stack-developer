"use client";
import Link from "next/link";
import { getCatStyle } from "./CertificateCard";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function CourseModal({ course, onClose }) {
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
              <Image src={course.institutionLogo} width={50} height={50} alt={course.title}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black text-white"
                style={{ background: course.color }}
              >
              </Image>
              <div>
                <p className="text-xs text-white/40">Issued by</p>
                <a
                  href={course.institution === 'Programming Hero' ? 'https://www.programming-hero.com' : 
                  'https://dyd.gov.bd'}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-white hover:text-blue-400 hover:underline transition-all duration-300 flex items-center gap-1"
                >
                  {course.institution}

                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">Verified</span>
            </div>
          </div>
        </div>

        {/* Show Credential Button */}
        <Link 
        href={course.liveLink || 
        "https://drive.google.com/drive/folders/1ZRzStK6B1wshZ7SBTiFBIFlMWV2_93FF"} 
        target="_blank" 
        className="flex justify-center mb-5">
          <button className="bg-gradient-to-r from-blue-500 cursor-pointer to-purple-500 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
            Show Credential
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
