"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-[var(--color-cream)] min-h-screen">
      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-espresso)]">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] mb-6">
              <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
              Our Work
              <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
            </span>

            <h1 className="font-[var(--font-serif)] text-5xl md:text-6xl lg:text-7xl text-[var(--color-cream)] mb-6">
              Portfolio
            </h1>

            <p className="text-[var(--color-beige)] max-w-2xl mx-auto text-lg">
              Explore our complete collection of residential, commercial, and
              hospitality design projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={containerRef} className="section-spacing">
        <div className="container-luxury">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center gap-2 md:gap-8 mb-16 flex-wrap"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 text-sm tracking-wide transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-[var(--color-wood-dark)]"
                    : "text-[var(--color-taupe)] hover:text-[var(--color-brown-warm)]"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeFilterPage"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-gold)]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Projects Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[var(--color-taupe)] text-sm mb-12"
          >
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </motion.p>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden aspect-[16/10] mb-6">
                      <motion.img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === project.id ? 1.05 : 1,
                        }}
                        transition={{
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        loading={index < 4 ? "eager" : "lazy"}
                      />

                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-[var(--color-espresso)]/0 group-hover:bg-[var(--color-espresso)]/30 transition-colors duration-500"
                      />

                      {/* View Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="px-6 py-3 bg-[var(--color-cream)] text-[var(--color-wood-dark)] text-sm uppercase tracking-wider">
                          View Project
                        </span>
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[var(--color-cream)]/90 backdrop-blur-sm text-xs uppercase tracking-wider text-[var(--color-wood-dark)]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h2 className="font-[var(--font-serif)] text-2xl md:text-3xl text-[var(--color-wood-dark)] group-hover:text-[var(--color-brown-warm)] transition-colors">
                          {project.title}
                        </h2>
                        <span className="text-sm text-[var(--color-taupe)]">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-[var(--color-brown-soft)]">
                        {project.tagline}
                      </p>

                      <p className="text-sm text-[var(--color-taupe)] flex items-center gap-1">
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {project.location}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-[var(--color-cream-light)] border-t border-[var(--color-beige)]">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl text-[var(--color-wood-dark)] mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-[var(--color-brown-soft)] mb-8 max-w-xl mx-auto">
              Let's discuss how we can transform your space into something
              extraordinary.
            </p>
            <Link href="/#contact" className="btn-primary inline-flex">
              <span>Get In Touch</span>
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
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
