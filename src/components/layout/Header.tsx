"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: t("nav.home"), href: "/#home" },
    { name: t("nav.about"), href: "/#about" },
    { name: t("nav.portfolio"), href: "/#portfolio" },
    { name: t("nav.services"), href: "/#services" },
    { name: t("nav.process"), href: "/#process" },
    { name: t("nav.contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle navigation - properly navigate to homepage sections from any page
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      const isHomePage = pathname === "/";
      const hash = href.replace("/", "");

      if (isHomePage) {
        // On homepage, just scroll to section
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages, navigate to homepage with hash
        router.push(href);
      }
    },
    [pathname, router]
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-(--shadow-soft)"
            : "bg-transparent"
        }`}
      >
        <nav className="container-luxury flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10"
            onClick={(e) => handleNavClick(e, "/#home")}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              <span className="font-(--font-serif) text-2xl lg:text-3xl tracking-wide text-wood-dark">
                By Tufan Design
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-taupe">
                Interior Architecture
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-sm tracking-wide text-brown-warm hover:text-wood-dark transition-colors duration-300 underline-hover"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Right Side - Language Switcher + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <LanguageSwitcher />
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="btn-secondary text-xs py-3 px-6"
              >
                <span>{t("nav.bookConsultation")}</span>
              </a>
            </motion.div>
          </div>

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
              className="w-6 h-[1.5px] bg-wood-dark block origin-center"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-[1.5px] bg-wood-dark block"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              className="w-6 h-[1.5px] bg-wood-dark block origin-center"
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
              className="absolute inset-0 bg-wood-dark/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-cream shadow-(--shadow-elevated)"
            >
              <div className="flex flex-col justify-center h-full px-10">
                {/* Mobile Language Switcher */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mb-8"
                >
                  <LanguageSwitcher />
                </motion.div>

                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="font-(--font-serif) text-3xl text-wood-dark hover:text-gold transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-12"
                >
                  <a
                    href="/#contact"
                    onClick={(e) => handleNavClick(e, "/#contact")}
                    className="btn-primary"
                  >
                    <span>{t("nav.bookConsultation")}</span>
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
