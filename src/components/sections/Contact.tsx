"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
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
      className="section-spacing bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[var(--color-cream-light)] -z-10" />

      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[var(--color-taupe)] mb-6">
              <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
              Get In Touch
            </span>

            {/* Heading */}
            <h2 className="font-[var(--font-serif)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-wood-dark)] mb-6 leading-tight">
              Let's Create
              <br />
              <span className="text-[var(--color-brown-warm)]">Together</span>
            </h2>

            {/* Description */}
            <p className="text-[var(--color-brown-soft)] leading-relaxed mb-10 max-w-md">
              Ready to transform your space? We'd love to hear about your project.
              Reach out to schedule a complimentary consultation.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[var(--color-beige)] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--color-gold)]"
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
                  <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)] mb-1">
                    Studio
                  </p>
                  <p className="text-[var(--color-wood-dark)]">
                    245 Park Avenue South
                    <br />
                    New York, NY 10003
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[var(--color-beige)] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--color-gold)]"
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
                  <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:studio@elenavoss.com"
                    className="text-[var(--color-wood-dark)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    studio@elenavoss.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[var(--color-beige)] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--color-gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)] mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+12125551234"
                    className="text-[var(--color-wood-dark)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    +1 (212) 555-1234
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
              <p className="text-xs uppercase tracking-wider text-[var(--color-taupe)] mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm text-[var(--color-brown-warm)] hover:text-[var(--color-gold)] transition-colors underline-hover"
                  >
                    {social}
                  </a>
                ))}
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
                    className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-beige)] focus:border-[var(--color-gold)] outline-none transition-colors text-[var(--color-wood-dark)] placeholder-transparent peer"
                    placeholder="Your Name"
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      formState.name || focusedField === "name"
                        ? "-top-2 text-xs text-[var(--color-gold)]"
                        : "top-4 text-[var(--color-taupe)]"
                    }`}
                  >
                    Your Name
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
                    className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-beige)] focus:border-[var(--color-gold)] outline-none transition-colors text-[var(--color-wood-dark)] placeholder-transparent peer"
                    placeholder="Email Address"
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      formState.email || focusedField === "email"
                        ? "-top-2 text-xs text-[var(--color-gold)]"
                        : "top-4 text-[var(--color-taupe)]"
                    }`}
                  >
                    Email Address
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
                    className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-beige)] focus:border-[var(--color-gold)] outline-none transition-colors text-[var(--color-wood-dark)] placeholder-transparent peer"
                    placeholder="Phone Number"
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      formState.phone || focusedField === "phone"
                        ? "-top-2 text-xs text-[var(--color-gold)]"
                        : "top-4 text-[var(--color-taupe)]"
                    }`}
                  >
                    Phone Number (Optional)
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
                    className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-beige)] focus:border-[var(--color-gold)] outline-none transition-colors text-[var(--color-wood-dark)] appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Project Type
                    </option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Consultation Only</option>
                  </select>
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-taupe)] pointer-events-none"
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
                  className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-beige)] focus:border-[var(--color-gold)] outline-none transition-colors text-[var(--color-wood-dark)] appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Estimated Budget
                  </option>
                  <option value="50-100k">$50,000 - $100,000</option>
                  <option value="100-250k">$100,000 - $250,000</option>
                  <option value="250-500k">$250,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
                <svg
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-taupe)] pointer-events-none"
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
                  className="w-full px-0 py-4 bg-transparent border-b border-[var(--color-beige)] focus:border-[var(--color-gold)] outline-none transition-colors text-[var(--color-wood-dark)] placeholder-transparent peer resize-none"
                  placeholder="Tell us about your project"
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    formState.message || focusedField === "message"
                      ? "-top-2 text-xs text-[var(--color-gold)]"
                      : "top-4 text-[var(--color-taupe)]"
                  }`}
                >
                  Tell us about your project
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center mt-8"
              >
                <span>Send Message</span>
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

              <p className="text-xs text-[var(--color-taupe)] text-center mt-4">
                We typically respond within 24-48 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
