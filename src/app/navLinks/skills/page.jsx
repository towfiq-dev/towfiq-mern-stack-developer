import React from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiPython, SiGraphql, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiFirebase, SiPrisma, SiVercel, SiFigma 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const SkillCard = ({ name, icon, percentage, color }) => (
  <div className="bg-[#0a0a0a] border border-gray-900 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-gray-700 transition-all duration-300">
    <div className={`text-4xl md:text-5xl ${color} bg-gray-900/50 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-white font-medium mt-2">{name}</h3>
    <span className="text-gray-500 text-xs font-mono">{percentage}</span>
  </div>
);

const SectionHeader = ({ title, subtitle, accentColor }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      <div className={`w-1.5 h-6 rounded-full ${accentColor}`}></div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <p className="text-gray-500 text-sm ml-4">{subtitle}</p>
  </div>
);

const SkillsSection = () => {
  const skillsData = {
    frontend: {
      title: "Frontend",
      subtitle: "Building fast, interactive user interfaces",
      accent: "bg-blue-500",
      items: [
        { name: "React", icon: <SiReact />, percentage: "95%", color: "text-[#61DAFB]" },
        { name: "Next.js", icon: <SiNextdotjs />, percentage: "90%", color: "text-white" },
        { name: "TypeScript", icon: <SiTypescript />, percentage: "88%", color: "text-[#3178C6]" },
        { name: "JavaScript", icon: <SiJavascript />, percentage: "95%", color: "text-[#F7DF1E]" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: "92%", color: "text-[#06B6D4]" },
        { name: "Redux", icon: <SiRedux />, percentage: "80%", color: "text-[#764ABC]" },
      ]
    },
    backend: {
      title: "Backend",
      subtitle: "Designing scalable server-side systems",
      accent: "bg-emerald-500",
      items: [
        { name: "Node.js", icon: <SiNodedotjs />, percentage: "90%", color: "text-[#339933]" },
        { name: "Express", icon: <SiExpress />, percentage: "88%", color: "text-gray-400" },
        { name: "Python", icon: <SiPython />, percentage: "75%", color: "text-[#3776AB]" },
        { name: "GraphQL", icon: <SiGraphql />, percentage: "78%", color: "text-[#E10098]" },
        { name: "MongoDB", icon: <SiMongodb />, percentage: "85%", color: "text-[#47A248]" },
        { name: "PostgreSQL", icon: <SiPostgresql />, percentage: "82%", color: "text-[#4169E1]" },
      ]
    },
    tools: {
      title: "Tools & Platforms",
      subtitle: "DevOps, cloud, and productivity tools",
      accent: "bg-purple-500",
      items: [
        { name: "Git", icon: <SiGit />, percentage: "92%", color: "text-[#F05032]" },
        { name: "Docker", icon: <SiDocker />, percentage: "78%", color: "text-[#2496ED]" },
        { name: "Firebase", icon: <SiFirebase />, percentage: "85%", color: "text-[#FFCA28]" },
        { name: "Prisma", icon: <SiPrisma />, percentage: "80%", color: "text-white" },
        { name: "AWS", icon: <FaAws />, percentage: "70%", color: "text-[#FF9900]" },
        { name: "Vercel", icon: <SiVercel />, percentage: "90%", color: "text-white" },
        { name: "Figma", icon: <SiFigma />, percentage: "75%", color: "text-[#F24E1E]" },
      ]
    }
  };

  return (
    <section className="bg-black py-25 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto mt-20">
        
        {/* Main Title Section */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h1>
          <p className="text-gray-400">Technologies I work with to bring ideas to life</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {Object.values(skillsData).map((category, idx) => (
            <div key={idx}>
              <SectionHeader 
                title={category.title} 
                subtitle={category.subtitle} 
                accentColor={category.accent} 
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.items.map((skill, sIdx) => (
                  <SkillCard key={sIdx} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;