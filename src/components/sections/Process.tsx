"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with an in-depth consultation to understand your vision, lifestyle, and aspirations for the space.",
    details: ["Initial Meeting", "Site Analysis", "Budget Discussion", "Timeline Planning"],
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Our team develops comprehensive design concepts, including mood boards, sketches, and preliminary layouts.",
    details: ["Mood Boards", "Space Planning", "Material Exploration", "Style Direction"],
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Refining the approved concept into detailed drawings, material specifications, and custom furniture designs.",
    details: ["3D Renderings", "Material Samples", "Furniture Selection", "Lighting Design"],
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "Overseeing every aspect of the installation process to ensure the design vision is realized with precision.",
    details: ["Contractor Coordination", "Quality Control", "On-site Management", "Final Styling"],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="process"
      className="section-spacing bg-[var(--color-cream-light)] relative overflow-hidden"
    >
      {/* Blueprint Background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="container-luxury relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--color-taupe)] mb-6">
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
            How We Work
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
          </span>

          <h2 className="font-[var(--font-serif)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-wood-dark)] mb-6">
            Our Process
          </h2>

          <p className="text-[var(--color-brown-soft)] max-w-2xl mx-auto">
            A methodical approach that ensures every project is executed with precision,
            creativity, and unwavering attention to detail.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--color-beige)]">
            <motion.div
              className="w-full bg-[var(--color-gold)] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Step Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[var(--color-cream)] border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center z-10"
                >
                  <span className="font-[var(--font-serif)] text-xl text-[var(--color-gold)]">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content - alternating sides */}
                <div
                  className={`pl-24 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 lg:pr-24 md:text-right"
                      : "md:col-start-2 md:pl-16 lg:pl-24"
                  }`}
                >
                  {/* Title */}
                  <h3 className="font-[var(--font-serif)] text-3xl lg:text-4xl text-[var(--color-wood-dark)] mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-brown-soft)] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.2 + detailIndex * 0.1,
                        }}
                        className={`flex items-center gap-3 text-sm text-[var(--color-taupe)] ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full flex-shrink-0" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.7 + index * 0.2,
                  }}
                  className={`hidden md:block absolute top-8 w-8 lg:w-16 h-[1px] bg-[var(--color-gold)] ${
                    index % 2 === 0
                      ? "right-1/2 mr-8 origin-right"
                      : "left-1/2 ml-8 origin-left"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-20 lg:mt-28"
        >
          <p className="text-[var(--color-brown-soft)] mb-6">
            Ready to begin your design journey?
          </p>
          <a href="#contact" className="btn-primary">
            <span>Start Your Project</span>
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
        </motion.div>
      </div>
    </section>
  );
}
