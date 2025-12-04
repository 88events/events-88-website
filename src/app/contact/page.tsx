"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-900 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-neutral-100 mb-8">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to create something extraordinary? Let's talk about your event.
            </p>
          </motion.div>

          {/* Contact Options with staggered animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-10 bg-gradient-to-br from-neutral-800/80 to-neutral-850/80 border border-neutral-700/50 hover:border-amber-400/60 rounded-2xl text-center transition-all duration-500 hover:shadow-[0_0_50px_rgba(251,191,36,0.2)]"
            >
              <div className="mb-6 text-amber-400">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-neutral-100 mb-6 group-hover:text-amber-400 transition-colors duration-300">Email Us</h3>
              <div className="space-y-3">
                <motion.a
                  href="mailto:contact@events-88.com"
                  whileHover={{ scale: 1.05 }}
                  className="block text-lg text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  contact@events-88.com
                </motion.a>
                <motion.a
                  href="mailto:arina@events-88.com"
                  whileHover={{ scale: 1.05 }}
                  className="block text-lg text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  arina@events-88.com
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-10 bg-gradient-to-br from-neutral-800/80 to-neutral-850/80 border border-neutral-700/50 hover:border-amber-400/60 rounded-2xl text-center transition-all duration-500 hover:shadow-[0_0_50px_rgba(251,191,36,0.2)]"
            >
              <div className="mb-6 text-amber-400">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-neutral-100 mb-6 group-hover:text-amber-400 transition-colors duration-300">Call or Text</h3>
              <motion.a
                href="tel:6507047978"
                whileHover={{ scale: 1.05 }}
                className="block text-3xl text-amber-400 hover:text-amber-300 font-semibold transition-colors mb-4"
              >
                (650) 704-7978
              </motion.a>
              <div className="text-neutral-300 font-light space-y-1">
                <p>📱 Text: 24 hours</p>
                <p>📞 Call: 12-7 PM</p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <motion.a
              href="mailto:contact@events-88.com?subject=Event%20Inquiry"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] hover:from-amber-300 hover:to-amber-400"
            >
              Send Us a Message
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
