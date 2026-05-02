"use client";
import React, { useState } from "react";
import {
  FaGithub, FaLinkedin, FaTwitter, FaFacebookF,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Add your form submission logic here
    setTimeout(() => setSending(false), 2000);
  };

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="text-center pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">
          Have a project in mind? Let's work together
        </p>
        <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* Left: Contact Info */}
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
                    <a
                      href="mailto:towfiqulislam017399@gmail.com"
                      className="text-gray-200 font-medium text-sm break-all hover:text-cyan-400 transition-colors"
                    >
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
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">
                Follow Me
              </p>
              <div className="flex gap-2.5">
                {[
                  { Icon: FaGithub, link: "https://github.com/towfiq-dev", label: "GitHub" },
                  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/towfiqul-islam1", label: "LinkedIn" },
                  { Icon: FaTwitter, link: "#", label: "Twitter" },
                  { Icon: FaFacebookF, link: "https://www.facebook.com/towfiqul6185", label: "Facebook" },
                ].map(({ Icon, link, label }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 bg-[#1a1a1a] rounded-xl hover:bg-gray-800 transition-all text-gray-400 hover:text-white border border-transparent hover:border-gray-700"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8 bg-[#0d0d0d] border border-gray-800 p-6 sm:p-8 md:p-10 rounded-3xl">
            <div className="mb-7">
              <h3 className="text-xl sm:text-2xl font-semibold mb-1.5">Send a Message</h3>
              <p className="text-gray-500 text-sm">I'll get back to you as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 text-sm placeholder-gray-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 block">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 text-sm placeholder-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  required
                  className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 text-sm placeholder-gray-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 text-sm resize-none placeholder-gray-600"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 disabled:opacity-60 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-500/20 text-sm"
              >
                {sending ? "Sending..." : "Send Message"}
                <IoSend size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
