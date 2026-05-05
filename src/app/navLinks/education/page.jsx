import React from 'react';
import Education from '@/components/education/Education'

export const metadata = {
  title: "Education | Towfiqul Islam",
  description:
    "Explore the academic background and educational qualifications of Towfiqul Islam — Full Stack MERN Stack Developer.",
  alternates: {
    canonical: "/navLinks/education",
  },
  openGraph: {
    title: "Education | Towfiqul Islam",
    description:
      "Academic background and qualifications of Towfiqul Islam, Full Stack Developer.",
    url: "https://towfiq-mern-stack-developer.vercel.app/navLinks/education",
  },
};

const EducationPage = () => {
  return <Education/>
};

export default EducationPage;