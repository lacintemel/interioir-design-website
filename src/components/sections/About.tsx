"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "12", label: "Design Awards" },
  { number: "8", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="section-spacing bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-cream-light)] -z-10" />

      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden">
              <motion.div style={{ y: imageY }} className="aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="Elena Voss - Interior Designer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Image Reveal Overlay */}
              <motion.div
                initial={{ scaleY: 1 }}
                animate={isInView ? { scaleY: 0 } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute inset-0 bg-[var(--color-cream)] origin-bottom"
              />
            </div>

            {/* Floating Accent Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-8 lg:-right-16 w-48 h-64 shadow-[var(--shadow-elevated)]"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop"
                alt="Interior detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -top-6 -left-6 w-32 h-32 border border-[var(--color-gold)]/30"
            />
          </motion.div>

          {/* Content Column */}
          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Label */}
              <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--color-taupe)] mb-6">
                <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
                About Us
              </span>

              {/* Heading */}
              <h2 className="font-[var(--font-serif)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-wood-dark)] mb-6 leading-tight">
                Crafting Spaces
                <br />
                <span className="text-[var(--color-brown-warm)]">That Inspire</span>
              </h2>

              {/* Description */}
              <p className="text-[var(--color-brown-soft)] leading-relaxed mb-6">
                With over eight years of experience in luxury interior design, Elena
                Voss brings a refined sensibility to every project. Our approach
                blends timeless elegance with contemporary functionality, creating
                spaces that are both beautiful and livable.
              </p>

              <p className="text-[var(--color-brown-soft)] leading-relaxed mb-8">
                We believe that exceptional design should feel effortless—each
                element thoughtfully curated to complement the whole, resulting in
                interiors that stand the test of time.
              </p>

              {/* Signature */}
              <div className="flex items-center gap-6 mb-12">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-16 h-[1px] bg-[var(--color-gold)] origin-left"
                />
                <div>
                  <p className="font-[var(--font-serif)] text-xl text-[var(--color-wood-dark)] italic">
                    Elena Voss
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)]">
                    Founder & Principal Designer
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[var(--color-beige)]"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center md:text-left"
                >
                  <p className="font-[var(--font-serif)] text-3xl md:text-4xl text-[var(--color-wood-dark)] mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
