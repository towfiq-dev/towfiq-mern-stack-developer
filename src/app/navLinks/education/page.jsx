import Education from "@/components/education/Education";

export const metadata = {
  title: "Education | Towfiqul Islam",
  description:
    "Academic background of Towfiqul Islam — SSC (GPA 4.22), HSC (GPA 4.17), and B.Sc in Social Work (Running). Full Stack MERN Developer from Bangladesh.",
  alternates: { canonical: "/navLinks/education" },
  openGraph: {
    title: "Education | Towfiqul Islam",
    description:
      "Academic qualifications of Towfiqul Islam — MERN Stack Developer from Bangladesh.",
    url: "https://towfiq-mern-stack-developer.vercel.app/navLinks/education",
    images: [
      {
        url: "https://towfiq-mern-stack-developer.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Education — Towfiqul Islam",
      },
    ],
  },
};

const BASE = "https://towfiq-mern-stack-developer.vercel.app";

const educationJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Education", item: `${BASE}/navLinks/education` },
  ],
};

const EducationPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationJsonLd) }}
      />
      <Education />
    </>
  );
};

export default EducationPage;
