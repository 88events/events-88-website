"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PhotoboothsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
              Photo Booths
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              Capture unforgettable moments with our state-of-the-art photobooth experiences.
              From 360 spinning booths to traditional setups, we bring the fun to your event.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="group p-10 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-400/30 rounded-2xl text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-xl font-light text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">High Quality</h3>
              <p className="text-neutral-400 font-light leading-relaxed">Professional-grade cameras and instant prints</p>
            </div>

            <div className="group p-10 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-400/30 rounded-2xl text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
              <div className="text-5xl mb-6">🎭</div>
              <h3 className="text-xl font-light text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">Fun Props</h3>
              <p className="text-neutral-400 font-light leading-relaxed">Extensive collection of props and backdrops</p>
            </div>

            <div className="group p-10 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-400/30 rounded-2xl text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
              <div className="text-5xl mb-6">💫</div>
              <h3 className="text-xl font-light text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">360° Experience</h3>
              <p className="text-neutral-400 font-light leading-relaxed">Cutting-edge 360 spinning booth technology</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <motion.a
              href="mailto:contact@events-88.com?subject=Photobooth%20Quote%20Request"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]"
            >
              Book Your Photo Booth
            </motion.a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
