"use client";

import { motion } from "framer-motion";
import { Home, User, Layers, Briefcase, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const icons = {
  Home: Home,
  About: User,
  Skills: Layers,
  Projects: Briefcase,
  Contact: Mail,
};

export default function Navbar() {
  return (
    <>
     <motion.nav
  className="hidden md:flex fixed top-5 z-50"
  style={{ left: '12%', transform: 'translateX(-50%)' }}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
      
        <div className="flex items-center gap-5 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl px-4 py-3 shadow-lg">
          {navItems.map((item) => {
            const Icon = icons[item.label];
            return (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex items-center justify-center w-10 h-10 rounded-xl text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-all duration-200"
              >
                <Icon size={20} />
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-primary-dark text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </motion.nav>

      <motion.nav
        className="flex md:hidden fixed top-5 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-4 py-3 shadow-xl">
          {navItems.map((item) => {
            const Icon = icons[item.label];
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center justify-center w-12 h-10 rounded-xl text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-all duration-200"
              >
                <Icon size={20} />
                <span className="text-[9px] mt-0.5 text-gray-400">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}