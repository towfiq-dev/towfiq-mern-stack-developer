"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Award, Calendar, Star, TrendingUp } from "lucide-react";

const educationData = [
  {
    id: 1,
    level: "SSC",
    fullTitle: "Secondary School Certificate",
    year: "2020",
    gpa: "4.22",
    outOf: "5.00",
    status: "Completed",
    icon: <BookOpen size={22} />,
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "shadow-blue-500/20",
    borderColor: "border-blue-500/30",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    highlight: "Strong Foundation",
    description: "Completed SSC with a solid academic foundation in science and core subjects.",
  },
  {
    id: 2,
    level: "HSC",
    fullTitle: "Higher Secondary Certificate",
    year: "2022",
    gpa: "4.17",
    outOf: "5.00",
    status: "Completed",
    icon: <Award size={22} />,
    gradient: "from-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/20",
    borderColor: "border-purple-500/30",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    highlight: "Advanced Studies",
    description: "Excelled in higher secondary with a consistent GPA across all subjects.",
  },
  {
    id: 3,
    level: "B.Sc",
    fullTitle: "Bachelor of Science (Running)",
    year: "2022 — Present",
    gpa: "Running",
    outOf: null,
    status: "3rd Year",
    icon: <GraduationCap size={22} />,
    gradient: "from-emerald-500 to-teal-400",
    glowColor: "shadow-emerald-500/20",
    borderColor: "border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    highlight: "Currently Enrolled",
    description: "Pursuing B.Sc in Computer Science, currently in the 3rd year with a focus on software engineering and web technologies.",
  },
];

const GPABar = ({ gpa, gradient }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const percent = gpa === "Running" ? 100 : (parseFloat(gpa) / 5) * 100;

  return (
    <div ref={ref} className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${percent}%` } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className={`h-full rounded-full bg-gradient-to-r ${gradient} ${gpa === "Running" ? "animate-pulse" : ""}`}
      />
    </div>
  );
};

const EducationPage = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20">

      {/* Header */}
      <div className="relative text-center pb-12 sm:pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="inline-block px-4 py-1.5 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-5">
            Academic Journey
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            A structured academic path building the knowledge and skills that power my work as a developer.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent -translate-x-1/2"></div>

          <div className="space-y-10 md:space-y-16">
            {educationData.map((edu, index) => {
              const isRight = index % 2 === 0;
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`w-full md:w-[46%] ${isRight ? "md:pr-10" : "md:pl-10"}`}>
                    <div className={`group relative bg-[#0a0a0a] border ${edu.borderColor} rounded-3xl p-6 sm:p-8 hover:shadow-2xl ${edu.glowColor} transition-all duration-500 overflow-hidden`}>
                      <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-[0.06] rounded-full blur-3xl transition-opacity duration-500 pointer-events-none`}></div>

                      <div className="flex items-start justify-between gap-3 mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                            {edu.icon}
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-none mb-1">{edu.level}</h3>
                            <p className="text-[11px] text-gray-500 font-medium leading-none">{edu.fullTitle}</p>
                          </div>
                        </div>
                        <span className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${edu.badgeColor}`}>
                          {edu.status}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{edu.description}</p>

                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Star size={14} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                          <div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest block">GPA</span>
                            <span className="text-white font-bold text-base leading-none">
                              {edu.gpa !== "Running" ? `${edu.gpa} / ${edu.outOf}` : "In Progress"}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gray-500 flex-shrink-0" />
                          <div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Year</span>
                            <span className="text-white font-bold text-base leading-none">{edu.year}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} className="text-gray-500 flex-shrink-0" />
                          <div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Track</span>
                            <span className="text-white font-bold text-sm leading-none">{edu.highlight}</span>
                          </div>
                        </div>
                      </div>

                      <GPABar gpa={edu.gpa} gradient={edu.gradient} />
                      <div className="flex justify-between mt-1.5">
                        <span className="text-[10px] text-gray-600">0.00</span>
                        <span className="text-[10px] text-gray-600">5.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${edu.gradient} ring-4 ring-black shadow-lg`}
                    />
                  </div>

                  <div className={`hidden md:flex w-[46%] ${isRight ? "md:pl-10" : "md:pr-10"} items-center ${isRight ? "justify-start" : "justify-end"}`}>
                    <span className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent opacity-20`}>
                      {edu.year.split(" ")[0]}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { label: "Exams Passed", value: "2", color: "text-cyan-400" },
            { label: "Avg. GPA", value: "4.19", color: "text-purple-400" },
            { label: "Currently", value: "3rd Year", color: "text-emerald-400" },
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-gray-900 rounded-2xl p-4 sm:p-6 text-center hover:border-gray-800 transition-all">
              <p className={`text-2xl sm:text-3xl font-black mb-1 ${item.color}`}>{item.value}</p>
              <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-medium">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationPage;
