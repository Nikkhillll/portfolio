"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-foreground-muted text-lg font-medium mb-4"
            >
              Hey, I'm Nikhil 👋
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-7xl lg:text-8xl font-bold font-black tracking-tight text-foreground leading-none"
            >
              FULL STACK
            </motion.h1>

            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-7xl lg:text-8xl font-bold font-black tracking-tight leading-none text-stroke-blue"
            >
              DEVELOPER
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-foreground-muted text-lg max-w-md mt-6 leading-relaxed"
            >
              Building end-to-end web experiences with React, Next.js, Node.js &
              more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.a
                href="#projects"
                className="bg-primary-dark hover:bg-primary text-white px-8 py-3.5 rounded-full font-semibold text-md flex items-center gap-2 transition-all duration-300 shadow-lg shadow-primary-dark/25 hover:shadow-xl hover:shadow-primary/30"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="/Resume.pdf"
                download="NJ_resume.pdf"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-3.5 rounded-full font-semibold text-md flex items-center gap-2 transition-all duration-300"
              >
                Download Resume
                <Download size={16} />
              </motion.a>
            </motion.div>

         {/* Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16  max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center lg:text-left">
            <div className="text-4xl md:text-7xl font-bold  font-black text-foreground">
              2+
            </div>
            <div className="text-foreground-muted text-sm font-medium mt-1 uppercase tracking-wider">
              Years Learning
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-4xl md:text-7xl font-bold font-black text-foreground">
              2
            </div>
            <div className="text-foreground-muted text-sm font-medium mt-1 uppercase tracking-wider">
              Projects Built
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-4xl md:text-7xl font-bold font-black text-foreground">
              10+
            </div>
            <div className="text-foreground-muted text-sm font-medium mt-1 uppercase tracking-wider">
              Technologies
            </div>
          </div>
        </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Dashed border ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary rounded-3xl animate-pulse-glow" />

              {/* Profile Card */}
    {/* Dashed border ring - outside the card */}
<div className="absolute inset-0 border-2 border-dashed border-blue-400 rounded-3xl" />

{/* Profile Card */}
<motion.div
  className="bg-white rounded-3xl relative z-10 w-100   overflow-hidden "
  style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Photo area - with padding and rounded corners on image */}
  <div className="py-10 px-13 pb-3">
    <div className="w-full h-98 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
      <img
        src="/profile.jpeg"
        alt="Nikhil"
        className="w-full h-full object-contain"
      />
    </div>
  </div>

  {/* Card Content */}
  <div className="px-6 py-4 text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-2">Nikhil Jaiswal</h2>

    <p className="text-gray-400 text-lg leading-relaxed mb-5 pt-10">
      A Full Stack Developer building intuitive and engaging web experiences.
    </p>

    {/* Social Icons */}
   <div className="flex justify-center gap-5 pb-2">
  <a href="https://github.com/nikkhillll" target="_blank"
    className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300">
    <FaGithub size={18} />
  </a>
  <a href="https://www.linkedin.com/in/nikhil-jaiswal-980a1132b/" 
    className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300">
    <FaLinkedinIn size={18} />
  </a>
  <a href="#"
    className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300">
    <FaTwitter size={18} />
  </a>
</div>
  </div>
</motion.div>
            </div>
          </div>
        </div>

       
       
      </div>
    </section>
  );
}
