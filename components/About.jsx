"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative z-10 bg-background-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column — Image Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent-cyan/10 rounded-3xl blur-2xl" />

           {/* Photo */}
<div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden">
  <img
    src="/profile2.jpeg"
    alt="Nikhil"
    className="w-full h-full object-cover object-bottom"
  />
</div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            <p className="text-primary-dark font-semibold text-sm uppercase tracking-widest mb-3">
              Who I Am
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
            I'm a passionate Full Stack Developer and IT student from India who enjoys building modern web applications that solve real-world problems. Currently, I'm expanding my skills in Machine Learning and Data Structures & Algorithms while continuing to deepen my expertise in React, Next.js, Node.js, and related technologies. I believe in learning by building, staying curious, and constantly challenging myself to grow as a developer and problem-solver.

            </p>

            {/* Highlight Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary-dark font-medium text-sm">
                📍 India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary-dark font-medium text-sm">
                🎓 IT Student
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary-dark font-medium text-sm">
                🚀 Open to Internships
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
