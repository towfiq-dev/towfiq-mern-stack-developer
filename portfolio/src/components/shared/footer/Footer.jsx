import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import Logo from "@/assets/logo1.svg";

const Footer = () => {
  return (
    <footer
      className="bg-[#020617] text-slate-400 pt-14 pb-8 border-t border-slate-800/50"
      aria-label="Footer — Towfiqul Islam Portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Branding */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" aria-label="Towfiqul Islam — Home" className="flex items-center gap-2.5">
              <Image
                width={140}
                height={40}
                alt="Towfiqul Islam (তৌফিকুল ইসলাম) — MERN Stack Developer Logo"
                src={Logo}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              <strong className="text-slate-300">Towfiqul Islam</strong> — Full Stack MERN Developer from Dhaka, Bangladesh.
              Crafting modern, performant web applications with clean code and pixel-perfect design.
            </p>
            {/* Hidden SEO text with Bengali name */}
            <span className="sr-only">তৌফিকুল ইসলাম — বাংলাদেশের ঢাকার একজন ফুল স্ট্যাক ওয়েব ডেভেলপার</span>
            <div className="flex gap-3">
              {[
                { Icon: FaGithub, link: "https://github.com/towfiq-dev", label: "Towfiqul Islam on GitHub" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/towfiqul-islam1", label: "Towfiqul Islam on LinkedIn" },
                { Icon: FaTwitter, link: "https://x.com/towfiqul6185", label: "Towfiqul Islam on Twitter" },
                { Icon: SiFacebook, link: "https://www.facebook.com/towfiqul6185", label: "Towfiqul Islam on Facebook" },
              ].map(({ Icon, link, label }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 bg-slate-800/50 rounded-lg hover:text-sky-400 hover:bg-slate-800 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <nav aria-label="Quick navigation links">
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Towfiqul Islam", href: "/navLinks/about" },
                { label: "Skills", href: "/navLinks/skills" },
                { label: "Projects", href: "/navLinks/projects" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: More */}
          <nav aria-label="More navigation links">
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">
              More
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Education", href: "/navLinks/education" },
                { label: "Jobs", href: "/navLinks/contact" },
                { label: "Training", href: "/navLinks/training" },
                { label: "Contact", href: "/navLinks/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact Info */}
          <address aria-label="Contact information" className="not-italic">
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-sky-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:towfiqulislam017399@gmail.com" className="break-all hover:text-sky-400 transition-colors">
                  towfiqulislam017399@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-sky-500 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+8801739943577" className="hover:text-sky-400 transition-colors">+8801739943577</a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-sky-500 flex-shrink-0" aria-hidden="true" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} Towfiqul Islam. All rights reserved.
            <span className="sr-only"> তৌফিকুল ইসলাম</span>
          </p>
          <p>
            Designed & Built by{" "}
            <span className="text-sky-500">Towfiqul Islam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
