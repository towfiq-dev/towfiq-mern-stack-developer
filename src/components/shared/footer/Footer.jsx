import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-sky-500 text-white p-2 rounded-lg font-bold text-xl">T</div>
              <span className="text-white font-bold text-xl tracking-tight">towfiq-dev</span>
            </div>
            <p className="text-sm leading-relaxed">
              Full Stack Web Developer crafting modern, performant web applications 
              with clean code and pixel-perfect design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800/50 rounded-md hover:text-sky-400 transition-all"><FaGithub size={20} /></a>
              <a href="#" className="p-2 bg-slate-800/50 rounded-md hover:text-sky-400 transition-all"><FaLinkedin size={20} /></a>
              <a href="#" className="p-2 bg-slate-800/50 rounded-md hover:text-sky-400 transition-all"><FaTwitter size={20} /></a>
              <a href="#" className="p-2 bg-slate-800/50 rounded-md hover:text-sky-400 transition-all"><SiFacebook size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-sky-400 transition-colors">About</Link></li>
              <li><Link href="/skills" className="hover:text-sky-400 transition-colors">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-sky-400 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Column 3: More */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">More</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/certificates" className="hover:text-sky-400 transition-colors">Certificates</Link></li>
              <li><Link href="/testimonials" className="hover:text-sky-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-sky-500" />
                <span>towfiqulislam017399@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-sky-500" />
                <span>+8801739943577</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-sky-500" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px]">
          <p>© {new Date().getFullYear()} Towfiqul Islam. All rights reserved.</p>
          <p>Designed & Built by <span className="text-sky-500">Towfiqul Islam</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;