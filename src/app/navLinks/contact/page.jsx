import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

const ContactSection = () => {
  return (
    <section className="bg-black text-white">
      {/* Header */}
      <div className="text-center pt-40 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg">Have a project in mind? Let's work together</p>
        <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 pb-25 lg:grid-cols-12 gap-8 max-w-300 mx-auto">
        
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-4 bg-[#0d0d0d] border border-gray-800 p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-500 mb-10">Feel free to reach out through any channel</p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="p-4 bg-[#1a1a1a] rounded-2xl text-cyan-400">
                  <FaEnvelope size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-gray-200 font-medium">towfiqulislam017399@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="p-4 bg-[#1a1a1a] rounded-2xl text-emerald-400">
                  <FaPhoneAlt size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-gray-200 font-medium">+8801739943577</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="p-4 bg-[#1a1a1a] rounded-2xl text-purple-400">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-gray-200 font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Follow Me</p>
            <div className="flex gap-3">
              {[
                { Icon: FaGithub, link: "#" },
                { Icon: FaLinkedin, link: "#" },
                { Icon: FaTwitter, link: "#" },
                { Icon: FaFacebookF, link: "#" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  className="p-3 bg-[#1a1a1a] rounded-xl hover:bg-gray-800 transition-all text-gray-400 hover:text-white border border-transparent hover:border-gray-700"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-8 bg-[#0d0d0d] border border-gray-800 p-8 md:p-10 rounded-3xl">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
            <p className="text-gray-500">I'll get back to you as soon as possible</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[#141414] border border-gray-800 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 transition-all text-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-[#141414] border border-gray-800 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 transition-all text-gray-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Subject</label>
              <input 
                type="text" 
                placeholder="Project discussion" 
                className="w-full bg-[#141414] border border-gray-800 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 transition-all text-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                rows="5" 
                placeholder="Tell me about your project..." 
                className="w-full bg-[#141414] border border-gray-800 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 resize-none"
              ></textarea>
            </div>

            <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 px-8 py-4 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-500/20">
              Send Message <IoSend size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;