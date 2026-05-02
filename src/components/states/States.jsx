import React from 'react';

const SimpleStats = () => {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
    { value: "10+", label: "Certifications" },
  ];

  return (
    <div className="bg-neutral-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              {/* Main Number */}
              <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-3">
                {stat.value}
              </h2>
              {/* Description Label */}
              <p className="text-[#666666] text-sm md:text-base font-medium tracking-wide">
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