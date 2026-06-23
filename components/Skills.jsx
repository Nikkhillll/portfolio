"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbAutomation } from "react-icons/tb";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Tools & Automation",
    skills: [
      { name: "n8n", icon: TbAutomation, color: "#EA4B71" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary-dark font-semibold text-sm uppercase tracking-widest mb-3 text-center">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Tech Stack
          </h2>
        </motion.div>

        <motion.div
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={
                catIndex < skillCategories.length - 1 ? "mb-10" : undefined
              }
            >
              <h3 className="text-foreground-muted font-semibold text-sm uppercase tracking-widest mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default"
                  >
                    <skill.icon size={20} style={{ color: skill.color }} />
                    <span className="text-foreground text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
