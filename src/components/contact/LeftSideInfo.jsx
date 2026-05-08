import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';

const LeftSideInfo = () => {
  return (
    <div className="lg:col-span-4 bg-[#0d0d0d] border border-gray-800 p-6 sm:p-8 rounded-3xl flex flex-col">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-1.5">Contact Information</h3>
              <p className="text-gray-500 text-sm mb-8">Feel free to reach out through any channel</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-[#1a1a1a] rounded-2xl text-cyan-400 flex-shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Email</p>
                    <a href="mailto:towfiqulislam017399@gmail.com"
                      className="text-gray-200 font-medium text-sm break-all hover:text-cyan-400 transition-colors">
                      towfiqulislam017399@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-[#1a1a1a] rounded-2xl text-emerald-400 flex-shrink-0">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Phone</p>
                    <p className="text-gray-200 font-medium text-sm">+8801739943577</p>
                  </div>
                </div>

                <Link href={'https://wa.me/+8801739943577'} className="flex items-center gap-4">
                  <div className="p-3.5 bg-[#1a1a1a] rounded-2xl text-emerald-400 flex-shrink-0">
                    <FaSquareWhatsapp size={20}/>
                  </div>
                  <div >
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">WhatsApp</p>
                    <p className="text-sm font-medium  text-gray-200 hover:text-blue-400 hover:underline transition-all duration-300 flex items-center gap-1">+8801739943577</p>
                  </div>
                </Link>

                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-[#1a1a1a] rounded-2xl text-purple-400 flex-shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Location</p>
                    <p className="text-gray-200 font-medium text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 pt-8 border-t border-gray-800">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">Follow Me</p>
              <div className="flex gap-2.5">
                {[
                  { Icon: FaGithub, link: "https://github.com/towfiq-dev", label: "GitHub" },
                  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/towfiqul-islam1", label: "LinkedIn" },
                  { Icon: FaTwitter, link: "https://x.com/towfiqul6185", label: "Twitter" },
                  { Icon: FaSquareWhatsapp, link: "https://wa.me/+8801739943577", label: "WhatsApp" },
                  { Icon: FaFacebookF, link: "https://www.facebook.com/towfiqul6185", label: "Facebook" },
                ].map(({ Icon, link, label }, idx) => (
                  <a key={idx} href={link} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="p-3 bg-[#1a1a1a] rounded-xl hover:bg-gray-800 transition-all text-gray-400 hover:text-white border border-transparent hover:border-gray-700">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
  );
};

export default LeftSideInfo;