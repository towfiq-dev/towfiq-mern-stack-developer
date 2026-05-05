import CertificatesSection from "@/components/certificates/CertificatesSection";
//import { div } from "framer-motion/client";
export const metadata = {
  title: "Training & Certificates | Towfiqul Islam",
  description:
    "View Towfiqul Islam's professional training, certifications, and courses completed in web development, MERN Stack, React, and more.",
  alternates: {
    canonical: "/navLinks/training",
  },
  openGraph: {
    title: "Training & Certificates | Towfiqul Islam",
    description:
      "Professional certifications and training completed by Towfiqul Islam in web development and MERN Stack.",
    url: "https://towfiq-mern-stack-developer.vercel.app/navLinks/training",
  },
};

const TrainingPage = () => {
  return (
    <div className="mt-15 mb-35">
      <CertificatesSection />
    </div>
  )
};

export default TrainingPage;