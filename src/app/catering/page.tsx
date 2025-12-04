"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CateringPage() {
  const features = [
    {
      title: "Personalized Catering",
      description: "Partnered with TOP local restaurants and vendors, we offer diverse and delicious options"
    },
    {
      title: "24/7 Human Approach",
      description: "Real people, not machines. Get timely and personalized support through calls, emails, and texts"
    },
    {
      title: "Flat Rate Pro-Courier",
      description: "Professional drivers pick up, deliver, and set up your meal perfectly every time"
    },
    {
      title: "Community Support",
      description: "Leftover food? We donate to local organizations and families in need"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-900 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-neutral-100 mb-8">
              Catering Services
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              From cozy happy hours and corporate events to weddings complete with an onsite chef,
              we've got all your occasions covered
            </p>
          </motion.div>

          {/* Features Grid with staggered animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-10 bg-gradient-to-br from-neutral-800/80 to-neutral-850/80 border border-neutral-700/50 hover:border-amber-400/60 rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(251,191,36,0.2)]"
              >
                <h3 className="text-2xl font-medium text-neutral-100 mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.a
              href="mailto:contact@events-88.com?subject=Catering%20Quote%20Request"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] hover:from-amber-300 hover:to-amber-400"
            >
              Request a Quote
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
