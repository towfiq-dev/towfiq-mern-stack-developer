"use client";
import React, { useState } from "react";
import {
  FaGithub, FaLinkedin, FaTwitter, FaFacebookF,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { CheckCircle, AlertCircle } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_zep6yt9";     // ← আপনার Service ID
const EMAILJS_TEMPLATE_ID = "template_pcwnjcw";   // ← আপনার Template ID
const EMAILJS_PUBLIC_KEY = "1cTcoGJCCmhnPjFz2";      // ← আপনার Public Key

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const ContactSection = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "towfiqulislam017399@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="text-center pt-24 sm:pt-28 pb-10 sm:pb-14 px-4">
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

          {/* Right: Form */}
          <div className="lg:col-span-8 bg-[#0d0d0d] border border-gray-800 p-6 sm:p-8 md:p-10 rounded-3xl">
            <div className="mb-7">
              <h3 className="text-xl sm:text-2xl font-semibold mb-1.5">Send a Message</h3>
              <p className="text-gray-500 text-sm">I'll get back to you as soon as possible</p>
            </div>

            {/* Success Alert */}
            {status === "success" && (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-3.5 rounded-xl mb-6 text-sm font-medium">
                <CheckCircle size={18} className="flex-shrink-0" />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {/* Error Alert */}
            {status === "error" && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3.5 rounded-xl mb-6 text-sm font-medium">
                <AlertCircle size={18} className="flex-shrink-0" />
                Something went wrong. Please try again or email directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 block">Your Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="John Doe" required
                    className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 text-sm placeholder-gray-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 block">Your Email</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="john@example.com" required
                    className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 text-sm placeholder-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 block">Subject</label>
                <input
                  type="text" name="subject" value={formData.subject} onChange={handleChange}
                  placeholder="Project discussion" required
                  className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 text-sm placeholder-gray-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 block">Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  rows="5" placeholder="Tell me about your project..." required
                  className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500 transition-all text-gray-200 text-sm resize-none placeholder-gray-600"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-500/20 text-sm"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <IoSend size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;