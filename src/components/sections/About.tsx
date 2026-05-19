"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const stats = [
    { number: "150+", label: t("about.stat1") },
    { number: "12", label: t("about.stat2") },
    { number: "8", label: t("about.stat3") },
    { number: "98%", label: t("about.stat4") },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="section-spacing bg-cream relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream-light -z-10" />

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
              <motion.div style={{ y: imageY }} className="aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="Melek Tufan - Interior Architect"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Image Reveal Overlay */}
              <motion.div
                initial={{ scaleY: 1 }}
                animate={isInView ? { scaleY: 0 } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute inset-0 bg-cream origin-bottom"
              />
            </div>

            {/* Floating Accent Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-8 lg:-right-16 w-48 h-64 shadow-(--shadow-elevated)"
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
              className="absolute -top-6 -left-6 w-32 h-32 border border-gold/30"
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
              <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-taupe mb-6">
                <span className="w-12 h-px bg-gold" />
                {t("about.label")}
              </span>

              {/* Heading */}
              <h2 className="font-(--font-serif) text-4xl md:text-5xl lg:text-6xl text-wood-dark mb-6 leading-tight">
                {t("about.title1")}
                <br />
                <span className="text-brown-warm">{t("about.title2")}</span>
              </h2>

              {/* Description */}
              <p className="text-brown-soft leading-relaxed mb-6">
                {t("about.p1")}
              </p>

              <p className="text-brown-soft leading-relaxed mb-8">
                {t("about.p2")}
              </p>

              {/* Signature */}
              <div className="flex items-center gap-6 mb-12">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-16 h-px bg-gold origin-left"
                />
                <div>
                  <p className="font-(--font-serif) text-xl text-wood-dark italic">
                    {t("about.founderName")}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-taupe">
                    {t("about.founderRole")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-beige"
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
                  <p className="font-(--font-serif) text-3xl md:text-4xl text-wood-dark mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-taupe">
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
