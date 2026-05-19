"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { ProjectDetail } from "@/data/projects";
import ImageGallery from "@/components/ui/ImageGallery";
import BeforeAfter from "@/components/ui/BeforeAfter";
import ProjectNavigation from "@/components/ui/ProjectNavigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectDetailClientProps {
  project: ProjectDetail;
  prev: ProjectDetail | null;
  next: ProjectDetail | null;
}

export default function ProjectDetailClient({
  project,
  prev,
  next,
}: ProjectDetailClientProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const { t } = useLanguage();

  // Parallax effect for hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Compact header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderCompact(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-cream">
      {/* Sticky Project Title Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: isHeaderCompact ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-[80px] left-0 right-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-beige"
      >
        <div className="container-luxury py-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-taupe">
              {project.category}
            </p>
            <h2 className="font-(--font-serif) text-xl text-wood-dark">
              {project.title}
            </h2>
          </div>
          <Link
            href="/#portfolio"
            className="text-xs uppercase tracking-wider text-brown-warm hover:text-gold transition-colors"
          >
            {t("projectDetail.allProjects")}
          </Link>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[90vh] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/60" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative h-full flex flex-col justify-end"
          style={{ opacity: heroOpacity }}
        >
          <div className="container-luxury pb-16 md:pb-24">
            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold mb-4">
                <span className="w-12 h-px bg-gold" />
                {project.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-(--font-serif) text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream mb-6 max-w-4xl"
            >
              {project.title}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-beige max-w-2xl mb-8"
            >
              {project.tagline}
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-gold mb-1">
                  {t("projectDetail.location")}
                </p>
                <p className="text-cream">{project.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gold mb-1">
                  {t("projectDetail.year")}
                </p>
                <p className="text-cream">{project.year}</p>
              </div>
              {project.size && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold mb-1">
                    {t("projectDetail.size")}
                  </p>
                  <p className="text-cream">{project.size}</p>
                </div>
              )}
              {project.duration && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold mb-1">
                    {t("projectDetail.duration")}
                  </p>
                  <p className="text-cream">{project.duration}</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-2 bg-cream rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-spacing">
        <div className="container-luxury">
          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
            {/* Description */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="font-(--font-serif) text-3xl md:text-4xl text-wood-dark mb-6">
                  {t("projectDetail.overview")}
                </h2>
                <p className="text-brown-soft leading-relaxed text-lg">
                  {project.description}
                </p>
              </SectionReveal>
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-1">
              <SectionReveal delay={0.2}>
                <div className="bg-cream-light p-8 border border-beige">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-taupe mb-6">
                    {t("projectDetail.projectDetails")}
                  </h3>

                  <div className="space-y-4">
                    {project.client && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-taupe mb-1">
                          {t("projectDetail.client")}
                        </p>
                        <p className="text-wood-dark">{project.client}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-taupe mb-1">
                        {t("projectDetail.location")}
                      </p>
                      <p className="text-wood-dark">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-taupe mb-1">
                        {t("projectDetail.year")}
                      </p>
                      <p className="text-wood-dark">{project.year}</p>
                    </div>
                    {project.size && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-taupe mb-1">
                          {t("projectDetail.size")}
                        </p>
                        <p className="text-wood-dark">{project.size}</p>
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-taupe mb-1">
                          {t("projectDetail.duration")}
                        </p>
                        <p className="text-wood-dark">{project.duration}</p>
                      </div>
                    )}
                  </div>

                  {project.awards && project.awards.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-beige">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                        {t("projectDetail.awards")}
                      </h3>
                      <ul className="space-y-2">
                        {project.awards.map((award, index) => (
                          <li key={index} className="text-sm text-brown-soft">
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <SectionReveal>
              <div className="relative pl-8 border-l-2 border-gold">
                <h3 className="font-(--font-serif) text-2xl text-wood-dark mb-4">
                  {t("projectDetail.challenge")}
                </h3>
                <p className="text-brown-soft leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="relative pl-8 border-l-2 border-sage">
                <h3 className="font-(--font-serif) text-2xl text-wood-dark mb-4">
                  {t("projectDetail.solution")}
                </h3>
                <p className="text-brown-soft leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-spacing bg-cream-light">
        <div className="container-luxury">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-taupe mb-4">
                <span className="w-12 h-px bg-gold" />
                {t("projectDetail.gallery")}
                <span className="w-12 h-px bg-gold" />
              </span>
              <h2 className="font-(--font-serif) text-3xl md:text-4xl text-wood-dark">
                {t("projectDetail.projectImages")}
              </h2>
            </div>
          </SectionReveal>

          <ImageGallery images={project.gallery} projectTitle={project.title} />
        </div>
      </section>

      {/* Design Approach */}
      <section className="section-spacing">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Concept */}
            <SectionReveal>
              <div>
                <h3 className="font-(--font-serif) text-3xl text-wood-dark mb-6">
                  {t("projectDetail.designConcept")}
                </h3>
                <p className="text-brown-soft leading-relaxed mb-8">
                  {project.concept}
                </p>

                {/* Features */}
                <h4 className="text-xs uppercase tracking-[0.2em] text-taupe mb-4">
                  {t("projectDetail.keyFeatures")}
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      <span className="text-brown-soft">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            {/* Materials */}
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-(--font-serif) text-3xl text-wood-dark mb-6">
                  {t("projectDetail.materialPalette")}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.materials.map((material, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-6 bg-cream-light border border-beige hover:border-gold transition-colors duration-300"
                    >
                      <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
                      <span className="text-wood-dark">{material}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      {project.beforeAfter && (
        <section className="section-spacing bg-espresso">
          <div className="container-luxury">
            <SectionReveal>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-taupe mb-4">
                  <span className="w-12 h-px bg-gold" />
                  {t("projectDetail.transformation")}
                  <span className="w-12 h-px bg-gold" />
                </span>
                <h2 className="font-(--font-serif) text-3xl md:text-4xl text-cream">
                  {t("projectDetail.beforeAfter")}
                </h2>
              </div>
            </SectionReveal>

            <BeforeAfter
              before={project.beforeAfter.before}
              after={project.beforeAfter.after}
            />
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-spacing bg-cream-light">
          <div className="container-luxury">
            <SectionReveal>
              <div className="max-w-4xl mx-auto text-center">
                <svg
                  className="w-16 h-16 text-gold/20 mx-auto mb-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="font-(--font-serif) text-2xl md:text-3xl text-wood-dark leading-relaxed mb-8 italic">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>

                <div>
                  <p className="text-wood-dark font-medium">
                    {project.testimonial.author}
                  </p>
                  <p className="text-sm text-taupe">
                    {project.testimonial.role}
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Credits */}
      {project.credits && project.credits.length > 0 && (
        <section className="py-16 border-t border-beige">
          <div className="container-luxury">
            <SectionReveal>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                {project.credits.map((credit, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-1">
                      {credit.role}
                    </p>
                    <p className="text-wood-dark">{credit.name}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <ProjectNavigation prev={prev} next={next} />
    </div>
  );
}

// Reusable section reveal component
function SectionReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
