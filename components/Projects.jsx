"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Repodoc",
    description:
      "AI-powered repository analyzer that reads any GitHub repository and generates a detailed explanation of its architecture, tech stack, file structure, dependencies, functionality, and development workflow.",
      image:"/repodoc.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Nikkhillll/Repodoc",
    live: "https://repodoc-cinn.vercel.app/",
  },
  {
    title: "Spendly",
    description:
      "A MERN-ready React frontend for tracking expenses by category, with charts and user auth",
      image:"/spendly.png",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "n8n"],
    github: "https://github.com/Nikkhillll/Spendly",
    live: "https://spendly-brown.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative z-10 bg-background-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary-dark font-semibold text-sm uppercase tracking-widest mb-3 text-center">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="bg-card-bg rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 flex flex-col"
            >
              <div className="h-70 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover object-top"
  />
</div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className=" flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-foreground-muted hover:text-foreground text-sm font-medium transition-colors"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-primary-dark hover:bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md shadow-primary-dark/20"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
