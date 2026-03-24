"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
      <div className="container-luxury text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 404 Number */}
          <div className="relative mb-8">
            <span className="font-[var(--font-serif)] text-[150px] md:text-[200px] lg:text-[250px] text-[var(--color-beige)] leading-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
                Project Not Found
              </span>
            </div>
          </div>

          {/* Message */}
          <h1 className="font-[var(--font-serif)] text-3xl md:text-4xl text-[var(--color-wood-dark)] mb-4">
            This project doesn't exist
          </h1>

          <p className="text-[var(--color-brown-soft)] max-w-md mx-auto mb-8">
            The project you're looking for may have been moved or no longer
            exists. Explore our portfolio to discover more inspiring work.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects" className="btn-primary">
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

            <Link href="/" className="btn-secondary">
              <span>Return Home</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
