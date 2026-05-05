import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // ── Basic ──────────────────────────────────────────────────────────────
  title: {
    default: "Towfiqul Islam | MERN Stack Developer",
    template: "%s | Towfiqul Islam",
  },
  description:
    "Towfiqul Islam is a Full Stack MERN Stack Developer specializing in React, Next.js, Node.js, MongoDB, and modern web technologies. Explore my portfolio, projects, and skills.",
  keywords: [
    "Towfiqul Islam",
    "Towfiqul",
    "Towfiq",
    "Toufiq",
    "Toufik",
    "Towfik",
    "TOWFIQ",
    "TOWFIQUL ISLAM",
    "TOWFIQUL",
    "Towfiq Islam",
    "Towfiqul Islam developer",
    "Towfiqul Islam portfolio",
    "Towfiqul Islam MERN",
    "MERN Stack Developer",
    "MERN Stack Web Developer",
    "Full Stack Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Towfiqul Islam", url: "https://towfiq-mern-stack-developer.vercel.app" }],
  creator: "Towfiqul Islam",
  publisher: "Towfiqul Islam",

  // ── Canonical / robots ─────────────────────────────────────────────────
  metadataBase: new URL("https://towfiq-mern-stack-developer.vercel.app"),
  alternates: {
    canonical: "/",
  },
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

  // ── Open Graph ─────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://towfiq-mern-stack-developer.vercel.app",
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
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Towfiqul Islam | MERN Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Check out my portfolio and projects.",
    images: ["/og-image.png"],
    creator: "@towfiqul_islam",
  },

  // ── Verification (add your actual codes when ready) ────────────────────
  verification: {
    google: "qQ09-CX-hTaEdQ-HMEgPmo5WbpwWw0s8x-pVH96AwTI"
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
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}




// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/shared/navbar/Navbar";
// import Footer from "@/components/shared/footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Towfiqul Islam | MERN Stack Developer",
//   description: "Towfiqul Islam - Full Stack MERN Stack Developer specializing in React & Next.js",
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       data-theme="dark"
//       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//     >
//       <body className="bg-black text-white overflow-x-hidden">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
