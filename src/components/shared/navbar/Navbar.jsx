"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Download, Home, User, Code2, Briefcase, Award, MessageSquare, Mail, Zap 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/', icon: <Home size={16} /> },
  { name: 'About', href: '/navLinks/about', icon: <User size={16} /> },
  { name: 'Skills', href: '/navLinks/skills', icon: <Code2 size={16} /> },
  { name: 'Projects', href: '/navLinks/projects', icon: <Briefcase size={16} /> },
  { name: 'Certificates', href: '/navLinks/certificates', icon: <Award size={16} /> },
  { name: 'Testimonials', href: '/navLinks/testimonials', icon: <MessageSquare size={16} /> },
  { name: 'Contact', href: '/navLinks/contact', icon: <Mail size={16} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
            T
          </div>
          <span className="text-white font-bold text-xl hidden sm:block">
            Tanim<span className="text-gray-400 text-lg">.dev</span>
          </span>
        </Link>

        {/* Desktop Menu - Laptop & PC */}
        <div className="hidden lg:flex items-center bg-[#111] border border-white/5 rounded-full px-2 py-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive 
                    ? 'bg-[#222] text-white shadow-[inset_0px_0px_8px_rgba(255,255,255,0.1)]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons - Tablet & Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 transition-all text-sm font-medium">
            <Download size={16} /> Resume
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all active:scale-95">
            <Zap size={16} fill="white" /> Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 text-lg font-medium transition-colors ${
                    pathname === link.href ? 'text-blue-500' : 'text-gray-400'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;