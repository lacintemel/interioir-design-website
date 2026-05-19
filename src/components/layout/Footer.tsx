"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t("footer.navigation"),
      links: [
        { name: t("nav.home"), href: "/#home" },
        { name: t("nav.about"), href: "/#about" },
        { name: t("nav.portfolio"), href: "/#portfolio" },
        { name: t("nav.services"), href: "/#services" },
        { name: t("nav.contact"), href: "/#contact" },
      ],
    },
    {
      title: t("footer.services"),
      links: [
        { name: t("services.s1.title"), href: "/#services" },
        { name: t("services.s2.title"), href: "/#services" },
        { name: t("services.s3.title"), href: "/#services" },
        { name: t("services.s4.title"), href: "/#contact" },
      ],
    },
    {
      title: t("footer.connect"),
      links: [
        {
          name: "Instagram",
          href: "https://www.instagram.com/by.tufandesign/",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="bg-espresso text-cream">
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
            <Link href="/" className="inline-block mb-6">
              <span className="font-(--font-serif) text-3xl text-cream">
                By Tufan Design
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-taupe mt-1">
                Interior Architecture
              </span>
            </Link>
            <p className="text-beige text-sm leading-relaxed max-w-xs">
              {t("footer.brand.desc")}
            </p>
            <div className="mt-8">
              <p className="text-taupe text-xs uppercase tracking-wider mb-2">
                {t("contact.studio")}
              </p>
              <p className="text-beige text-sm">
                Based in Türkiye, Antalya
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
              <h4 className="text-xs uppercase tracking-[0.2em] text-taupe mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-beige hover:text-gold transition-colors duration-300 text-sm inline-flex items-center gap-1.5"
                      >
                        {link.name}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-beige hover:text-gold transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-wood-dark">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-taupe text-xs">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-taupe hover:text-gold transition-colors duration-300 text-xs"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="#"
              className="text-taupe hover:text-gold transition-colors duration-300 text-xs"
            >
              {t("footer.terms")}
            </Link>
            <a
              href="https://www.lacintemel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:text-gold transition-colors duration-300 text-xs"
            >
              {t("footer.createdBy")}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </footer>
  );
}
