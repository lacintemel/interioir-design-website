"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop')`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-wood-dark)]/30 via-[var(--color-wood-dark)]/20 to-[var(--color-cream)]" />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col justify-center container-luxury"
      >
        <div className="max-w-4xl">
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-[1px] bg-[var(--color-gold)] origin-left mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--color-cream)] mb-4"
          >
            Interior Design Studio
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-serif)] text-5xl md:text-7xl lg:text-8xl text-[var(--color-cream)] leading-[0.95] mb-6"
          >
            Where Elegance
            <br />
            <span className="text-[var(--color-gold)]">Meets Home</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[var(--color-beige)] max-w-xl leading-relaxed mb-10"
          >
            Transforming spaces into timeless sanctuaries through thoughtful
            design, refined aesthetics, and an unwavering commitment to quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a href="#portfolio" className="btn-primary">
              <span>View Portfolio</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="btn-secondary border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-wood-dark)]"
            >
              <span>Our Story</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-beige)]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-gold)] to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-beige)] transform -rotate-90 whitespace-nowrap">
          New York — Since 2015
        </p>
      </motion.div>
    </section>
  );
}
