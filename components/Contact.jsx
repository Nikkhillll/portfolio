"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary-dark font-semibold text-sm uppercase tracking-widest mb-3 text-center">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-foreground-muted text-lg text-center max-w-lg mx-auto mb-16">
            I&apos;m currently open to internship opportunities. Feel free to
            reach out — let&apos;s build something amazing together!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3.5 rounded-xl bg-background-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-foreground-muted/60 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3.5 rounded-xl bg-background-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-foreground-muted/60 text-sm"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full px-5 py-3.5 rounded-xl bg-background-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-foreground-muted/60 text-sm mb-6 min-h-[150px] resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary-dark hover:bg-primary text-white py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-primary-dark/25 hover:shadow-xl hover:shadow-primary/30"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <a
              href="mailto:nikhiljais9984@gmail.com"
              className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors duration-300 text-sm"
            >
              <Mail size={18} />
              nikhiljais9984@gmail.com
            </a>
            <a
              href="https://github.com/nikkhillll"
              target="_blank"
              className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors duration-300 text-sm"
            >
              <FaGithub size={18} />
              nikkhillll
            </a>
          </div>
        </div>

        <div className="text-center py-8 mt-16 border-t border-border">
          <p className="text-foreground-muted text-sm">
            © 2026 Nikhil. Built with Next.js & Framer Motion.
          </p>
        </div>
      </div>
    </section>
  );
}
