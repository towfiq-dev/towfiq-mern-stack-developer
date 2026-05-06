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
    default: "Towfiqul Islam | MERN Stack Developer",
    template: "%s | Towfiqul Islam",
  },

  // ── Description ────────────────────────────────────────────────────────────
  description:
    "Towfiqul Islam is a Full Stack MERN Stack Developer from Bangladesh specializing in React, Next.js, Node.js, MongoDB, and modern web technologies. Explore my portfolio, projects, and skills.",

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    "Towfiqul Islam",
    "Towfiq Islam",
    "Towfiqul Islam developer",
    "Towfiqul Islam portfolio",
    "Towfiqul Islam MERN",
    "Towfiqul Islam React",
    "Towfiqul Islam Next.js",
    "Towfiqul Islam Bangladesh",
    "MERN Stack Developer",
    "Full Stack Developer Bangladesh",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Frontend Developer",
    "Backend Developer",
    "Hire MERN Developer",
  ],

  // ── Author / Creator ───────────────────────────────────────────────────────
  authors: [{ name: "Towfiqul Islam", url: BASE }],
  creator: "Towfiqul Islam",
  publisher: "Towfiqul Islam",

  // ── Canonical / Robots ─────────────────────────────────────────────────────
  metadataBase: new URL(BASE),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    title: "Towfiqul Islam | MERN Stack Developer",
    description:
      "Towfiqul Islam — Full Stack MERN Developer building fast, elegant web applications with React, Next.js, Node.js & MongoDB.",
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
    title: "Towfiqul Islam | MERN Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Explore my projects and skills.",
    images: ["/og-image.png"],
    creator: "@towfiqul6185",
  },

  // ── Verification ───────────────────────────────────────────────────────────
  verification: {
    google: "qQ09-CX-hTaEdQ-HMEgPmo5WbpwWw0s8x-pVH96AwTI",
  },

  // ── Category ───────────────────────────────────────────────────────────────
  category: "technology",
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
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
