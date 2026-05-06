import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact Towfiqul Islam | Hire a MERN Developer",
  description:
    "Get in touch with Towfiqul Islam — Full Stack MERN Developer from Bangladesh. Available for freelance projects, collaborations, and full-time opportunities. Email: towfiqulislam017399@gmail.com",
  alternates: { canonical: "/navLinks/contact" },
  openGraph: {
    title: "Contact Towfiqul Islam | Hire a MERN Developer",
    description:
      "Reach out to Towfiqul Islam for web development projects, collaborations, or job opportunities.",
    url: "https://towfiq-mern-stack-developer.vercel.app/navLinks/contact",
    images: [
      {
        url: "https://towfiq-mern-stack-developer.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Towfiqul Islam",
      },
    ],
  },
};

const BASE = "https://towfiq-mern-stack-developer.vercel.app";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${BASE}/navLinks/contact/#contactpage`,
      url: `${BASE}/navLinks/contact`,
      name: "Contact Towfiqul Islam",
      description: "Contact page of Towfiqul Islam — Full Stack MERN Developer.",
      mainEntity: { "@id": `${BASE}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE}/navLinks/contact` },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      name: "Towfiqul Islam",
      email: "towfiqulislam017399@gmail.com",
      telephone: "+8801739943577",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    },
  ],
};

const ContactSection = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Contact />
    </>
  );
};

export default ContactSection;
