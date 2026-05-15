import Education from "@/components/education/Education";

const BASE = "https://towfiq-mern-stack-developer.vercel.app";

export const metadata = {
  title: "Education | Towfiqul Islam | তৌফিকুল ইসলাম",
  description:
    "Academic background of Towfiqul Islam (তৌফিকুল ইসলাম) — SSC (GPA 4.22), HSC (GPA 4.17), and B.Sc in Social Work (Running). Full Stack MERN Developer from Bangladesh.",
  keywords: [
    "Towfiqul Islam education",
    "তৌফিকুল ইসলাম শিক্ষা",
    "Towfiqul Islam academic",
    "Towfiqul Islam Bangladesh developer",
  ],
  alternates: { canonical: "/navLinks/education" },
  openGraph: {
    title: "Education | Towfiqul Islam | তৌফিকুল ইসলাম",
    description:
      "Academic qualifications of Towfiqul Islam (তৌফিকুল ইসলাম) — MERN Stack Developer from Bangladesh.",
    url: `${BASE}/navLinks/education`,
    images: [
      {
        url: `${BASE}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Education — Towfiqul Islam",
      },
    ],
  },
};

const educationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Education", item: `${BASE}/navLinks/education` },
      ],
    },
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      name: "Towfiqul Islam",
      alternateName: ["তৌফিকুল ইসলাম", "Towfiq Islam"],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "National University Bangladesh",
          address: {
            "@type": "PostalAddress",
            addressCountry: "BD",
          },
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "SSC",
          description: "Secondary School Certificate — GPA 4.22",
          credentialCategory: "degree",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "HSC",
          description: "Higher Secondary Certificate — GPA 4.17",
          credentialCategory: "degree",
        },
      ],
    },
  ],
};

const EducationPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationJsonLd) }}
      />
      <div className="mt-20">
        <Education />
      </div>
    </>
  );
};

export default EducationPage;
