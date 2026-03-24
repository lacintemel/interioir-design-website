"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

// Map projects for display with size information
const displayProjects = projects.map((project, index) => ({
  ...project,
  size: index === 0 || index === 5 ? "large" : index === 3 || index === 4 ? "medium" : "small",
}));

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? displayProjects
      : displayProjects.filter((project) => project.category === activeCategory);

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="section-spacing bg-[var(--color-cream-light)] relative"
    >
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--color-taupe)] mb-6">
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
            Portfolio
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
          </span>

          <h2 className="font-[var(--font-serif)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-wood-dark)] mb-6">
            Selected Works
          </h2>

          <p className="text-[var(--color-brown-soft)] max-w-2xl mx-auto">
            A curated collection of our most distinguished projects, showcasing our
            commitment to exceptional design and meticulous craftsmanship.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center gap-2 md:gap-8 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 ${
                activeCategory === category
                  ? "text-[var(--color-wood-dark)]"
                  : "text-[var(--color-taupe)] hover:text-[var(--color-brown-warm)]"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-gold)]"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative ${
                  project.size === "large"
                    ? "md:col-span-2 md:row-span-2"
                    : project.size === "medium"
                    ? "md:col-span-1 md:row-span-2"
                    : ""
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    {/* Image */}
                    <motion.img
                      src={project.thumbnailImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      loading={index < 3 ? "eager" : "lazy"}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[var(--color-espresso)]/80 via-[var(--color-espresso)]/20 to-transparent"
                      initial={{ opacity: 0.5 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 0.9 : 0.5,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      {/* Category */}
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0.7,
                          y: 0,
                        }}
                        className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-2"
                      >
                        {project.category}
                      </motion.span>

                      {/* Title */}
                      <motion.h3
                        className="font-[var(--font-serif)] text-2xl md:text-3xl text-[var(--color-cream)] mb-2"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description - shows on hover */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[var(--color-beige)] text-sm mb-4"
                      >
                        {project.tagline}
                      </motion.p>

                      {/* View Project Link */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          x: hoveredProject === project.id ? 0 : -20,
                        }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-2 text-[var(--color-cream)]"
                      >
                        <span className="text-xs uppercase tracking-wider">
                          View Project
                        </span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                      </motion.div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="text-xs text-[var(--color-beige)]/60">
                        {project.year}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-6 left-6"
                    >
                      <span className="text-xs text-[var(--color-beige)]/80 flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
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
                      </span>
                    </motion.div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <Link href="/projects" className="btn-secondary inline-flex">
            <span>View All Projects</span>
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
  );
}
