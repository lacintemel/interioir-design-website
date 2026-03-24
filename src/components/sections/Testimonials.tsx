"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Elena transformed our cramped apartment into a spacious sanctuary. Her ability to understand our lifestyle and translate it into design was remarkable. Every detail was considered.",
    author: "Sarah & Michael Chen",
    role: "Tribeca Loft Owners",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Working with Elena Voss was an absolute pleasure. She brings not only exceptional taste but also a deep understanding of architectural spaces. Our hotel lobby has become a destination in itself.",
    author: "James Hartwell",
    role: "Director, Nolita Boutique Hotel",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "The attention to detail and the seamless project management exceeded all expectations. Elena's vision elevated our space while maintaining the warmth our family needed.",
    author: "The Morrison Family",
    role: "Hamptons Estate",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    quote:
      "Elena has an extraordinary gift for balancing aesthetics with functionality. Our office redesign has improved both employee satisfaction and client impressions tenfold.",
    author: "Victoria Reyes",
    role: "CEO, Reyes Architects",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={containerRef}
      className="section-spacing bg-[var(--color-espresso)] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-overlay" />
      </div>

      <div className="container-luxury relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--color-taupe)] mb-6">
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
            Testimonials
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
          </span>

          <h2 className="font-[var(--font-serif)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] mb-6">
            Client Stories
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -top-8 -left-4 md:-left-12"
          >
            <svg
              className="w-24 h-24 md:w-32 md:h-32 text-[var(--color-gold)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </motion.div>

          {/* Main Content */}
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="text-center">
                  {/* Quote */}
                  <blockquote className="font-[var(--font-serif)] text-xl md:text-2xl lg:text-3xl text-[var(--color-cream)] leading-relaxed mb-10 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-gold)]/30">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[var(--color-cream)] font-medium">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-[var(--color-taupe)]">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="group w-12 h-12 rounded-full border border-[var(--color-taupe)]/30 flex items-center justify-center transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-[var(--color-taupe)] group-hover:text-[var(--color-gold)] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="group relative"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[var(--color-gold)]"
                        : "bg-[var(--color-taupe)]/30 hover:bg-[var(--color-taupe)]/50"
                    }`}
                  />
                  {index === currentIndex && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute inset-0 w-2 h-2 rounded-full ring-4 ring-[var(--color-gold)]/20"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="group w-12 h-12 rounded-full border border-[var(--color-taupe)]/30 flex items-center justify-center transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-[var(--color-taupe)] group-hover:text-[var(--color-gold)] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent"
      />
    </section>
  );
}
