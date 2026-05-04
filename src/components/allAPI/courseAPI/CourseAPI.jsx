import PH from '@/assets/PH-Logo.png'
import DYD from '@/assets/DYD-Logo.png'
import PHCert from '@/assets/ph-certificate.png'
import DYDCert from '@/assets/DYD-certificate.jpg'

export const courses = [
  {
    id: 1,
    title: "Complete Web Development Course",
    institution: "Programming Hero",
    instructor: "Jhankar Mahbub",
    issuedDate: "July 2026",
    category: "Full Stack",
    badge: "WEB13-1086",
    tags: ["React", "Next.js", "JavaScript", "Node.js", "MongoDB", "Express.js", "HTML5", "CSS3"],
    description:
      "This was an intensive learning program focused on modern web technologies. Through this course, I received comprehensive guidance ranging from front-end design to back-end database management. During the program, I completed numerous real-world projects that significantly enhanced my problem-solving skills and ability to collaborate effectively within a team environment",
    projects: [
      "FriendShip Management System",
      "TilesPro - Online Ceramic Product Gallery",
      "DigiTools - Premium Digital Tools Marketplace",
      "Dragon News-Paper",
      "AppStore – Productivity Hub",
    ],
    color: "#10b981",
    gradient: "from-purple-600 to-fuchsia-500",
    icon: "💻",
    institutionLogo: PH,
    certificateImage: PHCert,
  },
  
  {
    id: 2,
    title: "Computer Basic & ICT Application",
    institution: "Department of Youth Development",
    instructor: "Ministry of Youth and Sports",
    issuedDate: "December 2025",
    category: "Advanced",
    badge: "ICT-ADV",
    tags: ["Microsoft Office", "Data Entry", "Photoshop", "Graphic Design"],
    description:
      "Completed a comprehensive ICT training program conducted by the Ministry of Youth and Sports. This course provided a solid foundation in computer operations, office productivity software, and internet applications. It equipped me with the essential digital literacy and technical skills required to excel in today’s technology-driven professional environment",
    projects: [
      "Automated Business Management System (Excel & Word)",
      "E-commerce Product Cataloging & Inventory Mapping",
      "Professional Product Retouching & Web Asset Optimization",
      "Brand Identity Design for a Tech Startup",
      "Personal Portfolio Branding & Content Strategy",
    ],
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-500",
    icon: "💻",
    institutionLogo: DYD,
    certificateImage: DYDCert,
  },
];