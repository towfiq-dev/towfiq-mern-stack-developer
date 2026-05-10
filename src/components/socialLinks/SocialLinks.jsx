import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';

const SocialLinks = () => {
  const socials = [
    { id: 1, icon: <FaGithub />, url: 'https://github.com/towfiq-dev', label: 'Towfiqul Islam on GitHub' },
    { id: 2, icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/towfiqul-islam1', label: 'Towfiqul Islam on LinkedIn' },
    { id: 3, icon: <FaTwitter />, url: 'https://x.com/towfiqul6185', label: 'Towfiqul Islam on Twitter / X' },
    { id: 4, icon: <FaFacebookF />, url: 'https://www.facebook.com/towfiqul6185', label: 'Towfiqul Islam on Facebook' },
    { id: 5, icon: <FaSquareWhatsapp />, url: 'https://wa.me/+8801739943577', label: 'Contact Towfiqul Islam on WhatsApp' },
  ];

  return (
    <nav
      className="flex items-center gap-4 px-4 sm:px-6 lg:px-8 py-6 bg-[#050505] max-w-7xl mx-auto w-full"
      aria-label="Towfiqul Islam social media links"
    >
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="relative group flex items-center justify-center w-11 h-11 rounded-xl
                     bg-white/5 border border-white/10 text-gray-400
                     transition-all duration-300 ease-in-out
                     hover:bg-white/10 hover:border-white/20 hover:text-white hover:-translate-y-1
                     backdrop-blur-md shadow-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 text-lg" aria-hidden="true">
            {social.icon}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default SocialLinks;
