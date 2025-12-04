"use client";

import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      title: "Versatile Excellence",
      description: "From intimate corporate gatherings to grand celebrations with onsite chefs, we bring expertise to every occasion."
    },
    {
      title: "Curated Partnerships",
      description: "Collaborating exclusively with top-tier local restaurants and vendors to deliver uncompromising quality and diverse culinary experiences."
    },
    {
      title: "Personal Touch",
      description: "Direct access to real people, real support. We respond via calls, emails, and texts—because your event deserves personalized attention, not automated responses."
    },
    {
      title: "Seamless Execution",
      description: "Professional courier service ensures your catering arrives perfectly prepared and beautifully presented, every single time."
    },
    {
      title: "Complete Solutions",
      description: "One partner for all your event needs—catering, photo booths, event props, floral installations, and logistics. Streamlined planning, exceptional results."
    },
    {
      title: "Community Commitment",
      description: "Supporting local businesses and giving back through food donation programs, ensuring nothing goes to waste and everyone is served."
    }
  ];

  return (
    <section className="relative py-32 bg-neutral-900 overflow-hidden">
      {/* Warm amber accent glows - slightly stronger for visual interest */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[600px] h-[600px] top-1/3 left-0 -translate-x-1/2 bg-amber-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bottom-1/3 right-0 translate-x-1/2 bg-amber-400/18 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.25, 0.18]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Top border accent with animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-neutral-100 mb-6">
            Elevating Events Through Experience
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto font-light leading-relaxed">
            Eighty-Ate Events represents a refined approach to event planning and execution.
            With a foundation built on culinary excellence and meticulous attention to detail,
            we transform occasions into unforgettable experiences through our comprehensive suite of services.
          </p>
        </motion.div>

        {/* Features Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 bg-gradient-to-br from-neutral-800/80 to-neutral-850/80 backdrop-blur-sm border border-neutral-700/50 hover:border-amber-400/60 rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(251,191,36,0.2)]"
            >
              <h3 className="text-xl font-medium text-neutral-100 mb-4 group-hover:text-amber-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-neutral-300 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-normal text-neutral-200 italic max-w-4xl mx-auto">
            "More than caterers—we're your event partners,
            <br className="hidden md:block" />
            crafting stress-free moments and genuine connections."
          </p>
        </motion.div>
      </div>

      {/* Bottom border accent with animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />
    </section>
  );
}
