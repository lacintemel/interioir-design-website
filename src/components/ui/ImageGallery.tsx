"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectImage } from "@/data/projects";

interface ImageGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export default function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1]));

  const isOpen = selectedIndex !== null;

  // Preload adjacent images
  const preloadImage = useCallback((index: number) => {
    if (!loadedImages.has(index) && index >= 0 && index < images.length) {
      const img = new Image();
      img.src = images[index].url;
      setLoadedImages((prev) => new Set([...prev, index]));
    }
  }, [images, loadedImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          setSelectedIndex(null);
          setIsZoomed(false);
          break;
        case "ArrowLeft":
          setSelectedIndex((prev) =>
            prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : null
          );
          setIsZoomed(false);
          break;
        case "ArrowRight":
          setSelectedIndex((prev) =>
            prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : null
          );
          setIsZoomed(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  // Preload next/prev images when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      preloadImage(selectedIndex - 1);
      preloadImage(selectedIndex + 1);
    }
  }, [selectedIndex, preloadImage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : null
    );
    setIsZoomed(false);
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : null
    );
    setIsZoomed(false);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative cursor-pointer overflow-hidden ${
              index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
            }`}
            onClick={() => setSelectedIndex(index)}
            onMouseEnter={() => preloadImage(index)}
          >
            <motion.img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              loading={index < 2 ? "eager" : "lazy"}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-espresso)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Caption */}
            {image.caption && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[var(--color-cream)] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </motion.div>
            )}

            {/* Expand Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[var(--color-espresso)]/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => {
              if (!isZoomed) setSelectedIndex(null);
              setIsZoomed(false);
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedIndex(null);
                setIsZoomed(false);
              }}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close gallery"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-white/60 text-sm tracking-wider">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Project Title */}
            <div className="absolute bottom-6 left-6">
              <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-1">
                {projectTitle}
              </p>
              {images[selectedIndex].caption && (
                <p className="text-white text-sm max-w-md">
                  {images[selectedIndex].caption}
                </p>
              )}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 text-white"
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

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 text-white"
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

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`relative max-w-[90vw] max-h-[80vh] ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            >
              <motion.img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
                animate={{ scale: isZoomed ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
                draggable={false}
              />
            </motion.div>

            {/* Zoom Hint */}
            <div className="absolute bottom-6 right-6">
              <p className="text-white/40 text-xs">
                {isZoomed ? "Click to zoom out" : "Click to zoom in"} · ESC to close
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(index);
                    setIsZoomed(false);
                  }}
                  className={`w-16 h-12 overflow-hidden transition-all duration-300 ${
                    index === selectedIndex
                      ? "ring-2 ring-[var(--color-gold)] opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
