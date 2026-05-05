"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function EducationDetails({ edu, onClose }) {
  if (!edu) return null;

  const isRunning = edu.gpa === "Running";

  const gradientColorMap = {
    "from-blue-500 to-cyan-400": "#22d3ee",
    "from-purple-500 to-pink-500": "#a855f7",
    "from-emerald-500 to-teal-400": "#10b981",
  };
  const glowColor = gradientColorMap[edu.gradient] || "#22d3ee";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0d1117] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: `0 0 60px ${glowColor}22, 0 25px 60px rgba(0,0,0,0.6)`,
        }}
      >
        {/* Top gradient line */}
        <div className={`h-1.5 w-full rounded-t-3xl bg-gradient-to-r ${edu.gradient}`} />

        <div className="px-4 py-8">

          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${glowColor}40, ${glowColor}20)`,
                  border: `1.5px solid ${glowColor}50`,
                }}
              >
                {edu.boardLogo ? (
                  <Image
                    src={edu.boardLogo}
                    width={48}
                    height={48}
                    alt={edu.institution}
                    className="w-10 h-10 rounded-xl object-contain"
                  />
                ) : (
                  <span className="text-2xl">{edu.icon}</span>
                )}
              </div>
              <div>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${edu.badgeColor} mb-2`}
                >
                  {edu.status}
                </span>
                <h2 className="text-[15px] md:text-[20px] font-bold text-white leading-tight">
                  {edu.fullTitle}
                </h2>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-9 h-9 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white/60 hover:text-white flex-shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { label: "Institution", value: edu.institution },
              { label: "Degree Level", value: edu.level },
              { label: "Passing Year", value: edu.passingYear },
              {
                label: "GPA",
                value: isRunning
                  ? "Currently Running"
                  : `${edu.gpa} / ${edu.outOf}`,
              },
              ...(edu.roll ? [{ label: "Roll Number", value: edu.roll }] : []),
              ...(edu.regNo || edu.reg
                ? [{ label: "Registration No.", value: edu.regNo || edu.reg }]
                : []),
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white/5 border border-white/[0.08] px-4 py-3"
              >
                <p className="text-xs text-white/40 mb-0.5">{item.label}</p>
                <p className="text-sm text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">
              About this Degree
            </h3>
            <p className="text-sm text-center md:text-justify text-white/70 leading-relaxed">
              {edu.description}
            </p>
          </div>

          {/* Academic Focus */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">
              Academic Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              <span
                className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  background: `${glowColor}20`,
                  color: glowColor,
                  border: `1px solid ${glowColor}30`,
                }}
              >
                {edu.highlight}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div
            className="rounded-2xl p-4 flex items-center justify-between"
            style={{
              background: `${glowColor}10`,
              border: `1px solid ${glowColor}25`,
            }}
          >
            <div className="flex items-center gap-3">
              {edu.boardLogo ? (
                <Image
                  src={edu.boardLogo}
                  width={40}
                  height={40}
                  alt={edu.institution}
                  className="w-10 h-10 rounded-xl object-contain"
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${glowColor}30` }}
                >
                  {edu.icon}
                </div>
              )}
              <div>
                <p className="text-xs text-white/40">Issued by</p>
                <a href={edu.institution === "National University" ? 'https://www.nu.ac.bd' : 
                  'https://dhakaeducationboard.gov.bd'}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-white hover:text-blue-400 hover:underline transition-all duration-300 flex items-center gap-1"
                
                >
                  {edu.board}
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isRunning ? (
                <>
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-xs text-yellow-400 font-medium">In Progress</span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Completed</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Show Certificate Button */}
        {edu.certificateImage && (
          <div className="flex justify-center mb-5">
            <a
              href={
                edu.institution === "Seraj Nagar M.A. Pilot High School, Narsingdi"? "https://drive.google.com/drive/folders/1oRsCMwDdhZ9l02gboad_GBnr--wCuSvm" : edu.institution === "Raipura Govt. College, Narsingdi"? "https://drive.google.com/drive/folders/1s36njuUr0N-z_aeRl2oCVfmcmTyhj_gq" : ''
              }
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 font-medium hover:from-blue-600 hover:to-purple-600 transition-all cursor-pointer"
            >
              Show Credential
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
