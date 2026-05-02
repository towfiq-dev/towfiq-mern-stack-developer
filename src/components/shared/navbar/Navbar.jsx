"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Download,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/", icon: <Home size={15} /> },
  { name: "About", href: "/navLinks/about", icon: <User size={15} /> },
  { name: "Skills", href: "/navLinks/skills", icon: <Code2 size={15} /> },
  { name: "Projects", href: "/navLinks/projects", icon: <Briefcase size={15} /> },
  { name: "Contact", href: "/navLinks/contact", icon: <Mail size={15} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-black/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              width={42}
              height={42}
              alt="Towfiq Dev Logo"
              src={Logo}
              className="rounded-full"
            />
            <span className="text-white font-bold text-sm hidden sm:block tracking-wide">
              towfiq-dev
            </span>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? "bg-white/10 text-white shadow-inner"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/towfiq-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all text-sm font-medium"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
            <Link
              href="/navLinks/contact"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all active:scale-95"
            >
              <Zap size={14} fill="white" />
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#080808] border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/10 mt-4">
                <a
                  href="/towfiq-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition-all text-sm font-medium"
                >
                  <Download size={14} /> Resume
                </a>
                <Link
                  href="/navLinks/contact"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold"
                >
                  <Zap size={14} fill="white" /> Hire Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
