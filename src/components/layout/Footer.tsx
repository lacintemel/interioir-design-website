"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Residential Design", href: "#services" },
      { name: "Commercial Spaces", href: "#services" },
      { name: "Renovation", href: "#services" },
      { name: "Consultation", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Instagram", href: "#" },
      { name: "Pinterest", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Houzz", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-espresso)] text-[var(--color-cream)]">
      {/* Main Footer */}
      <div className="container-luxury section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1"
          >
            <Link href="#home" className="inline-block mb-6">
              <span className="font-[var(--font-serif)] text-3xl text-[var(--color-cream)]">
                Elena Voss
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[var(--color-taupe)] mt-1">
                Interior Design
              </span>
            </Link>
            <p className="text-[var(--color-beige)] text-sm leading-relaxed max-w-xs">
              Crafting timeless, elegant interiors that harmonize luxury with
              livability. Based in New York City.
            </p>
            <div className="mt-8">
              <p className="text-[var(--color-taupe)] text-xs uppercase tracking-wider mb-2">
                Studio
              </p>
              <p className="text-[var(--color-beige)] text-sm">
                245 Park Avenue South
                <br />
                New York, NY 10003
              </p>
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1 * (columnIndex + 1),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-beige)] hover:text-[var(--color-gold)] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-wood-dark)]">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-taupe)] text-xs">
            © 2024 Elena Voss Interior Design. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[var(--color-taupe)] hover:text-[var(--color-gold)] transition-colors duration-300 text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[var(--color-taupe)] hover:text-[var(--color-gold)] transition-colors duration-300 text-xs"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent"
      />
    </footer>
  );
}
