import CertificatesSection from "@/components/certificates/CertificatesSection";

const BASE = "https://towfiq-mern-stack-developer.vercel.app";

export const metadata = {
  title: "Training & Certificates | Towfiqul Islam | তৌফিকুল ইসলাম",
  description:
    "View Towfiqul Islam's (তৌফিকুল ইসলাম) professional training and certifications — Complete Web Development (Programming Hero), Computer Basic & ICT Application (Youth Development), and more.",
  keywords: [
    "Towfiqul Islam certificate",
    "তৌফিকুল ইসলাম সার্টিফিকেট",
    "Towfiqul Islam training",
    "Programming Hero certificate",
    "MERN Stack certificate Bangladesh",
  ],
  alternates: { canonical: "/navLinks/training" },
  openGraph: {
    title: "Training & Certificates | Towfiqul Islam | তৌফিকুল ইসলাম",
    description:
      "Professional certifications and training completed by Towfiqul Islam (তৌফিকুল ইসলাম) in web development and MERN Stack.",
    url: `${BASE}/navLinks/training`,
    images: [
      {
        url: `${BASE}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Training & Certificates — Towfiqul Islam",
      },
    ],
  },
};

const TrainingPage = () => {
  return (
    <div className="mt-15 mb-35">
      <CertificatesSection />
    </div>
  );
};

export default TrainingPage;
