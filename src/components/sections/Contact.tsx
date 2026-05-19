"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="section-spacing bg-cream relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-cream-light -z-10" />

      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-taupe mb-6">
              <span className="w-12 h-px bg-gold" />
              {t("contact.label")}
            </span>

            {/* Heading */}
            <h2 className="font-(--font-serif) text-4xl md:text-5xl lg:text-6xl text-wood-dark mb-6 leading-tight">
              {t("contact.title1")}
              <br />
              <span className="text-brown-warm">{t("contact.title2")}</span>
            </h2>

            {/* Description */}
            <p className="text-brown-soft leading-relaxed mb-10 max-w-md">
              {t("contact.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-beige flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
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
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-taupe mb-1">
                    {t("contact.studio")}
                  </p>
                  <p className="text-wood-dark">
                    Antalya, Türkiye
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-beige flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-taupe mb-1">
                    {t("contact.email")}
                  </p>
                  <a
                    href="mailto:info@bytufandesign.com"
                    className="text-wood-dark hover:text-gold transition-colors"
                  >
                    info@bytufandesign.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-xs uppercase tracking-wider text-taupe mb-4">
                {t("contact.followUs")}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/by.tufandesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brown-warm hover:text-gold transition-colors underline-hover inline-flex items-center gap-1.5"
                >
                  Instagram
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-beige focus:border-gold outline-none transition-colors text-wood-dark placeholder-transparent peer"
                    placeholder={t("contact.yourName")}
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      formState.name || focusedField === "name"
                        ? "-top-2 text-xs text-gold"
                        : "top-4 text-taupe"
                    }`}
                  >
                    {t("contact.yourName")}
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-beige focus:border-gold outline-none transition-colors text-wood-dark placeholder-transparent peer"
                    placeholder={t("contact.emailAddress")}
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      formState.email || focusedField === "email"
                        ? "-top-2 text-xs text-gold"
                        : "top-4 text-taupe"
                    }`}
                  >
                    {t("contact.emailAddress")}
                  </label>
                </div>
              </div>

              {/* Phone & Project Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-4 bg-transparent border-b border-beige focus:border-gold outline-none transition-colors text-wood-dark placeholder-transparent peer"
                    placeholder={t("contact.phoneOptional")}
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      formState.phone || focusedField === "phone"
                        ? "-top-2 text-xs text-gold"
                        : "top-4 text-taupe"
                    }`}
                  >
                    {t("contact.phoneOptional")}
                  </label>
                </div>

                <div className="relative">
                  <select
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("projectType")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-beige focus:border-gold outline-none transition-colors text-wood-dark appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      {t("contact.projectType")}
                    </option>
                    <option value="residential">{t("portfolio.residential")}</option>
                    <option value="commercial">{t("portfolio.commercial")}</option>
                    <option value="hospitality">{t("portfolio.hospitality")}</option>
                    <option value="renovation">{t("services.s3.title")}</option>
                    <option value="consultation">{t("services.s4.title")}</option>
                  </select>
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Budget */}
              <div className="relative">
                <select
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("budget")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-0 py-4 bg-transparent border-b border-beige focus:border-gold outline-none transition-colors text-wood-dark appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    {t("contact.budget")}
                  </option>
                  <option value="50-100k">$50,000 - $100,000</option>
                  <option value="100-250k">$100,000 - $250,000</option>
                  <option value="250-500k">$250,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
                <svg
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-beige focus:border-gold outline-none transition-colors text-wood-dark placeholder-transparent peer resize-none"
                  placeholder={t("contact.message")}
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    formState.message || focusedField === "message"
                      ? "-top-2 text-xs text-gold"
                      : "top-4 text-taupe"
                  }`}
                >
                  {t("contact.message")}
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center mt-8"
              >
                <span>{t("contact.send")}</span>
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
              </motion.button>

              <p className="text-xs text-taupe text-center mt-4">
                {t("contact.response")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
