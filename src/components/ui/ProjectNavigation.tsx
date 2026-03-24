"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ProjectDetail } from "@/data/projects";

interface ProjectNavigationProps {
  prev: ProjectDetail | null;
  next: ProjectDetail | null;
}

export default function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="border-t border-[var(--color-beige)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Previous Project */}
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <motion.img
                src={prev.thumbnailImage}
                alt={prev.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-[var(--color-espresso)]/60 group-hover:bg-[var(--color-espresso)]/70 transition-colors duration-500" />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16 min-h-[200px] md:min-h-[300px] flex flex-col justify-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="flex items-center gap-2 text-[var(--color-gold)] mb-4"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <span className="text-xs uppercase tracking-[0.2em]">
                  Previous Project
                </span>
              </motion.div>

              <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl lg:text-4xl text-[var(--color-cream)] mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {prev.title}
              </h3>

              <p className="text-[var(--color-beige)] text-sm">
                {prev.category} · {prev.location}
              </p>
            </div>
          </Link>
        ) : (
          <div className="bg-[var(--color-cream-light)] p-8 md:p-12 lg:p-16 min-h-[200px] md:min-h-[300px] flex items-center justify-center">
            <p className="text-[var(--color-taupe)] text-sm">
              This is the first project
            </p>
          </div>
        )}

        {/* Next Project */}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group relative overflow-hidden border-t md:border-t-0 md:border-l border-[var(--color-beige)]"
          >
            <div className="absolute inset-0">
              <motion.img
                src={next.thumbnailImage}
                alt={next.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-[var(--color-espresso)]/60 group-hover:bg-[var(--color-espresso)]/70 transition-colors duration-500" />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16 min-h-[200px] md:min-h-[300px] flex flex-col justify-center items-end text-right">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="flex items-center gap-2 text-[var(--color-gold)] mb-4"
              >
                <span className="text-xs uppercase tracking-[0.2em]">
                  Next Project
                </span>
                <svg
                  className="w-5 h-5"
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

              <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl lg:text-4xl text-[var(--color-cream)] mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {next.title}
              </h3>

              <p className="text-[var(--color-beige)] text-sm">
                {next.category} · {next.location}
              </p>
            </div>
          </Link>
        ) : (
          <div className="bg-[var(--color-cream-light)] p-8 md:p-12 lg:p-16 min-h-[200px] md:min-h-[300px] flex items-center justify-center border-t md:border-t-0 md:border-l border-[var(--color-beige)]">
            <p className="text-[var(--color-taupe)] text-sm">
              This is the last project
            </p>
          </div>
        )}
      </div>

      {/* Back to All Projects */}
      <div className="border-t border-[var(--color-beige)] py-8 text-center">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-3 text-[var(--color-brown-warm)] hover:text-[var(--color-gold)] transition-colors group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <span className="text-sm uppercase tracking-[0.15em]">
            Back to All Projects
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
