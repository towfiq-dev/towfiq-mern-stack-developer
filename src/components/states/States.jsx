import React from "react";

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "20+", label: "Tech Stack" },
  { value: "500+", label: "Github Contribution" },
  { value: "3+", label: "Certifications" },
];

const SimpleStats = () => {
  return (
    <div className="bg-neutral-950 py-16 md:py-20 px-4 sm:px-6 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center group"
            >
              <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </h2>
              <p className="text-neutral-500 text-[13px] md:text-[16px] font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleStats;
