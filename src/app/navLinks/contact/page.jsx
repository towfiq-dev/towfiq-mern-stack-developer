import React from 'react';
import Contact from '@/components/contact/Contact'

export const metadata = {
  title: "Contact Towfiqul Islam | Hire a MERN Developer",
  description:
    "Get in touch with Towfiqul Islam — Full Stack MERN Developer. Available for freelance projects, collaborations, and full-time opportunities.",
  alternates: {
    canonical: "/navLinks/contact",
  },
  openGraph: {
    title: "Contact Towfiqul Islam | Hire a MERN Developer",
    description:
      "Reach out to Towfiqul Islam for web development projects, collaborations, or job opportunities.",
    url: "https://towfiq-mern-stack-developer.vercel.app/navLinks/contact",
  },
};


const ContactSection = () => {
  return <Contact/>
};

export default ContactSection;