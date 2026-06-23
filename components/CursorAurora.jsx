"use client";

import { useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorAurora() {
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Blob 1 — Sky Blue (follows closest)
  const springX1 = useSpring(cursorX, { stiffness: 100, damping: 20, mass: 1 });
  const springY1 = useSpring(cursorY, { stiffness: 100, damping: 20, mass: 1 });

  // Blob 2 — Violet
  const blob2X = useMotionValue(-200);
  const blob2Y = useMotionValue(-200);
  const springX2 = useSpring(blob2X, { stiffness: 100, damping: 20, mass: 1 });
  const springY2 = useSpring(blob2Y, { stiffness: 100, damping: 20, mass: 1 });

  // Blob 3 — Cyan
  const blob3X = useMotionValue(-200);
  const blob3Y = useMotionValue(-200);
  const springX3 = useSpring(blob3X, { stiffness: 100, damping: 20, mass: 1 });
  const springY3 = useSpring(blob3Y, { stiffness: 100, damping: 20, mass: 1 });

  // Blob 4 — Rose / Pink
  const blob4X = useMotionValue(-200);
  const blob4Y = useMotionValue(-200);
  const springX4 = useSpring(blob4X, { stiffness: 100, damping: 18, mass: 1 });
  const springY4 = useSpring(blob4Y, { stiffness: 100, damping: 18, mass: 1 });

  // Blob 5 — Amber / Orange
  const blob5X = useMotionValue(-200);
  const blob5Y = useMotionValue(-200);
  const springX5 = useSpring(blob5X, { stiffness: 90, damping: 22, mass: 1 });
  const springY5 = useSpring(blob5Y, { stiffness: 90, damping: 22, mass: 1 });

  // Blob 6 — Emerald / Green
  const blob6X = useMotionValue(-200);
  const blob6Y = useMotionValue(-200);
  const springX6 = useSpring(blob6X, { stiffness: 45, damping: 32, mass: 1 });
  const springY6 = useSpring(blob6Y, { stiffness: 45, damping: 32, mass: 1 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      blob2X.set(e.clientX + 100);
      blob2Y.set(e.clientY - 80);
      blob3X.set(e.clientX - 120);
      blob3Y.set(e.clientY + 100);
      blob4X.set(e.clientX + 60);
      blob4Y.set(e.clientY + 130);
      blob5X.set(e.clientX - 150);
      blob5Y.set(e.clientY - 50);
      blob6X.set(e.clientX + 140);
      blob6Y.set(e.clientY + 40);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY, blob2X, blob2Y, blob3X, blob3Y, blob4X, blob4Y, blob5X, blob5Y, blob6X, blob6Y]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blob 1 — Sky Blue */}
      <motion.div
        className="rounded-full pointer-events-none"
        style={{
          position: "fixed",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, #38bdf8 0%, #7dd3fc 100%)",
          filter: "blur(50px)",
          opacity: 0.5,
          x: springX1,
          y: springY1,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blob 2 — Violet / Purple */}
      <motion.div
        className="rounded-full pointer-events-none"
        style={{
          position: "fixed",
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, #8b5cf6 0%, #a78bfa 100%)",
          filter: "blur(50px)",
          opacity: 0.5,
          x: springX2,
          y: springY2,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blob 3 — Cyan / Teal */}
      <motion.div
        className="rounded-full pointer-events-none"
        style={{
          position: "fixed",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, #06b6d4 0%, #67e8f9 100%)",
          filter: "blur(50px)",
          opacity: 0.5,
          x: springX3,
          y: springY3,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blob 4 — Rose / Pink */}
      <motion.div
        className="rounded-full pointer-events-none"
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #f43f5e 0%, #fb7185 100%)",
          filter: "blur(50px)",
          opacity: 0.14,
          x: springX4,
          y: springY4,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blob 5 — Amber / Orange */}
      <motion.div
        className="rounded-full pointer-events-none"
        style={{
          position: "fixed",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, #f59e0b 0%, #fbbf24 100%)",
          filter: "blur(55px)",
          opacity: 0.2,
          x: springX5,
          y: springY5,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blob 6 — Emerald / Green */}
      <motion.div
        className="rounded-full pointer-events-none"
        style={{
          position: "fixed",
          width: "360px",
          height: "360px",
          background: "radial-gradient(circle, #10b981 0%, #34d399 100%)",
          filter: "blur(50px)",
          opacity: 0.5,
          x: springX6,
          y: springY6,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
