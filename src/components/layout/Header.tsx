"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-[var(--color-cream)]/95 backdrop-blur-md shadow-[var(--shadow-soft)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-luxury flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="#home" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              <span className="font-[var(--font-serif)] text-2xl lg:text-3xl tracking-wide text-[var(--color-wood-dark)]">
                Elena Voss
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-taupe)]">
                Interior Design
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={item.href}
                  className="relative text-sm tracking-wide text-[var(--color-brown-warm)] hover:text-[var(--color-wood-dark)] transition-colors duration-300 underline-hover"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <Link
              href="#contact"
              className="btn-secondary text-xs py-3 px-6"
            >
              <span>Book Consultation</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              className="w-6 h-[1.5px] bg-[var(--color-wood-dark)] block origin-center"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-[1.5px] bg-[var(--color-wood-dark)] block"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              className="w-6 h-[1.5px] bg-[var(--color-wood-dark)] block origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[var(--color-wood-dark)]/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[var(--color-cream)] shadow-[var(--shadow-elevated)]"
            >
              <div className="flex flex-col justify-center h-full px-10">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-[var(--font-serif)] text-3xl text-[var(--color-wood-dark)] hover:text-[var(--color-gold)] transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-12"
                >
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary"
                  >
                    <span>Book Consultation</span>
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
