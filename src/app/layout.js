import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE = "https://towfiq-mern-stack-developer.vercel.app";

export const metadata = {
  // ── Title ──────────────────────────────────────────────────────────────────
  title: {
    default: "Towfiqul Islam | তৌফিকুল ইসলাম | MERN Stack Developer",
    template: "%s | Towfiqul Islam",
  },

  // ── Description ────────────────────────────────────────────────────────────
  description:
    "Towfiqul Islam (তৌফিকুল ইসলাম) is a Full Stack MERN Stack Developer from Bangladesh specializing in React, Next.js, Node.js, MongoDB, and modern web technologies. Explore my portfolio, projects, and skills.",

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    // English name variations
    "Towfiqul Islam",
    "Towfiq Islam",
    "Towfiqul Islam developer",
    "Towfiqul Islam portfolio",
    "Towfiqul Islam MERN",
    "Towfiqul Islam React",
    "Towfiqul Islam Next.js",
    "Towfiqul Islam Bangladesh",
    "Towfiqul Islam Dhaka",
    "Towfiqul Islam web developer",
    "Towfiqul Islam full stack",
    "Towfiqul Islam programmer",
    "Towfiqul Islam software developer",
    "Towfiqul Islam freelancer",
    "Towfiqul Islam hire",
    // Bengali name variations
    "তৌফিকুল ইসলাম",
    "তৌফিকুল ইসলাম ডেভেলপার",
    "তৌফিকুল ইসলাম পোর্টফোলিও",
    "তৌফিকুল ইসলাম বাংলাদেশ",
    "তৌফিকুল ইসলাম ওয়েব ডেভেলপার",
    "তৌফিকুল ইসলাম ঢাকা",
    "তৌফিক ইসলাম",
    // Tech keywords
    "MERN Stack Developer",
    "Full Stack Developer Bangladesh",
    "React Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Frontend Developer",
    "Backend Developer",
    "Hire MERN Developer Bangladesh",
    "Freelance Web Developer Bangladesh",
  ],

  // ── Author / Creator ───────────────────────────────────────────────────────
  authors: [{ name: "Towfiqul Islam", url: BASE }],
  creator: "Towfiqul Islam",
  publisher: "Towfiqul Islam",

  // ── Canonical / Robots ─────────────────────────────────────────────────────
  metadataBase: new URL(BASE),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "bn-BD": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "profile",
    firstName: "Towfiqul",
    lastName: "Islam",
    username: "towfiq-dev",
    locale: "en_US",
    url: BASE,
    siteName: "Towfiqul Islam | Portfolio",
    title: "Towfiqul Islam | তৌফিকুল ইসলাম | MERN Stack Developer",
    description:
      "Towfiqul Islam (তৌফিকুল ইসলাম) — Full Stack MERN Developer from Bangladesh building fast, elegant web applications with React, Next.js, Node.js & MongoDB.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Towfiqul Islam — MERN Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Towfiqul Islam | তৌফিকুল ইসলাম | MERN Stack Developer",
    description:
      "Full Stack Developer from Bangladesh specializing in React, Next.js, Node.js & MongoDB. Explore my projects and skills.",
    images: ["/og-image.png"],
    creator: "@towfiqul6185",
  },

  // ── Verification ───────────────────────────────────────────────────────────
  verification: {
    google: "qQ09-CX-hTaEdQ-HMEgPmo5WbpwWw0s8x-pVH96AwTI",
  },

  // ── Category ───────────────────────────────────────────────────────────────
  category: "technology",

  // ── App Links ──────────────────────────────────────────────────────────────
  applicationName: "Towfiqul Islam Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      //data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for social platforms */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        {/* Additional meta for Google Knowledge Panel */}
        <meta name="subject" content="Full Stack MERN Developer Portfolio" />
        <meta name="language" content="English, Bengali" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="BD-13" />
        <meta name="geo.placename" content="Dhaka, Bangladesh" />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
