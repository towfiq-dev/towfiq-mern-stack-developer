import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    { id: 1, icon: <FaGithub />, url: 'https://github.com/towfiq-dev', label: 'GitHub' },
    { id: 2, icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/towfiqul-islam1', label: 'LinkedIn' },
    { id: 3, icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { id: 4, icon: <FaFacebookF />, url: 'https://www.facebook.com/towfiqul6185', label: 'Facebook' },
  ];

  return (
    <div className="flex items-center -mt-10 mb-11 gap-4 p-6 bg-[#050505]">
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.url}
          target="_blank"
          aria-label={social.label}
          className="relative group flex items-center justify-center w-12 h-12 rounded-xl 
                     bg-white/5 border border-white/10 text-gray-400 
                     transition-all duration-300 ease-in-out
                     hover:bg-white/10 hover:border-white/20 hover:text-white hover:-translate-y-1
                     backdrop-blur-md shadow-lg overflow-hidden"
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative z-10 text-xl">
            {social.icon}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;