"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Residential Design",
    description:
      "Transform your home into a personalized sanctuary that reflects your lifestyle and aspirations. From concept to completion.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    features: ["Space Planning", "Material Selection", "Custom Furniture", "Art Curation"],
  },
  {
    id: 2,
    title: "Commercial Spaces",
    description:
      "Create inspiring workplaces and retail environments that enhance brand identity and elevate the customer experience.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    features: ["Brand Integration", "Workplace Design", "Retail Concepts", "Hospitality"],
  },
  {
    id: 3,
    title: "Renovation",
    description:
      "Breathe new life into existing spaces while preserving architectural integrity and enhancing functionality.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    features: ["Historic Restoration", "Modern Updates", "Structural Changes", "Code Compliance"],
  },
  {
    id: 4,
    title: "Consultation",
    description:
      "Expert guidance on design decisions, color palettes, and material selections to refine your vision.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    features: ["Design Review", "Color Consultation", "Vendor Relations", "Project Management"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      id="services"
      className="section-spacing bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      <div className="container-luxury relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--color-taupe)] mb-6">
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
            What We Do
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
          </span>

          <h2 className="font-[var(--font-serif)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-wood-dark)] mb-6">
            Our Services
          </h2>

          <p className="text-[var(--color-brown-soft)] max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your unique needs, from initial
            concept through final installation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative"
            >
              <motion.div
                className={`relative p-8 lg:p-10 bg-[var(--color-cream-light)] border border-[var(--color-beige)] transition-all duration-500 ${
                  hoveredService === service.id
                    ? "shadow-[var(--shadow-medium)]"
                    : "shadow-none"
                }`}
                animate={{
                  y: hoveredService === service.id ? -8 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon */}
                <motion.div
                  className="text-[var(--color-gold)] mb-6"
                  animate={{
                    scale: hoveredService === service.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-[var(--font-serif)] text-2xl lg:text-3xl text-[var(--color-wood-dark)] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-brown-soft)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        hoveredService === service.id
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0.7, x: 0 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: featureIndex * 0.05,
                      }}
                      className="flex items-center gap-3 text-sm text-[var(--color-taupe)]"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[var(--color-brown-warm)] hover:text-[var(--color-gold)] transition-colors duration-300"
                  animate={{
                    x: hoveredService === service.id ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More
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
                </motion.a>

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-[var(--color-gold)]" />
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-[var(--color-gold)]" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
