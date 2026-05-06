"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GPABar({ gpa, gradient }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const percent = gpa === "Running" ? 100 : (parseFloat(gpa) / 5) * 100;

  return (
    <div ref={ref} className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${percent}%` } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className={`h-full rounded-full bg-gradient-to-r ${gradient} ${gpa === "Running" ? "animate-pulse" : ""}`}
      />
    </div>
  );
}
