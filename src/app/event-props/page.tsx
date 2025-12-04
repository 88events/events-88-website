"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function EventPropsPage() {
  const services = [
    {
      title: "360 Spinning Booths",
      description: "Capture unforgettable moments with our state-of-the-art 360-degree photo booth experience",
      email: "contact@events-88.com?subject=88%20events%20Photobooth%20Quote!&body=Hello!%0A%0AI%20am%20interested%20in%20a%20Spinning%20PhotoBooth%20for%20my%20event.%20%0A%0ADate%20-%0ADuration%20-%0A%0A%23%20of%20People%20-%0ABudget-%20",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth={0.8} strokeDasharray="3 2" opacity="0.5" />
          <path d="M12 2.5 L13 4 M12 21.5 L13 20 M2.5 12 L4 13 M21.5 12 L20 13" stroke="currentColor" strokeWidth={0.8} opacity="0.4" />
        </svg>
      )
    },
    {
      title: "Marquee Lettering",
      description: "Illuminate your event with custom LED marquee letters and numbers",
      email: "contact@events-88.com?subject=88%20Events%20Marquee%20Lettering&body=Hello!%0A%0AI%20am%20interested%20in%20Marquee%20Lettering%20for%20my%20event.%20%0A%0ADate%20-%0ADuration%20-%0A%0A%23%20of%20People%20-%0ABudget-%20%0A%0ALetter%20or%20Numbers%20neeeded%20\(please%20spell%20out%20\)%20-%20",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20h6" opacity="0.5" />
        </svg>
      )
    },
    {
      title: "Flower Wall",
      description: "Create a stunning backdrop with our premium floral wall installations",
      email: "contact@events-88.com?subject=88%20events%20Flower%20Wall%20Quote&body=Hello!%0A%0AI%20am%20interested%20in%20a%20Flower%20Wall%20for%20my%20event.%20%0A%0ADate%20-%0ADuration%20-%0A%0A%23%20of%20People%20-%0ABudget-%20%0A%0APreferred%20flowers%20or%20color%20-%20",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.5} fill="currentColor" opacity="0.3" />
          <ellipse cx="12" cy="7" rx="2.5" ry="3.5" stroke="currentColor" strokeWidth={1.5} opacity="0.8" />
          <ellipse cx="12" cy="17" rx="2.5" ry="3.5" stroke="currentColor" strokeWidth={1.5} opacity="0.8" />
          <ellipse cx="7" cy="12" rx="3.5" ry="2.5" stroke="currentColor" strokeWidth={1.5} opacity="0.8" />
          <ellipse cx="17" cy="12" rx="3.5" ry="2.5" stroke="currentColor" strokeWidth={1.5} opacity="0.8" />
          <ellipse cx="8.5" cy="8.5" rx="2.2" ry="3" transform="rotate(-45 8.5 8.5)" stroke="currentColor" strokeWidth={1.5} opacity="0.6" />
          <ellipse cx="15.5" cy="8.5" rx="2.2" ry="3" transform="rotate(45 15.5 8.5)" stroke="currentColor" strokeWidth={1.5} opacity="0.6" />
          <ellipse cx="8.5" cy="15.5" rx="2.2" ry="3" transform="rotate(45 8.5 15.5)" stroke="currentColor" strokeWidth={1.5} opacity="0.6" />
          <ellipse cx="15.5" cy="15.5" rx="2.2" ry="3" transform="rotate(-45 15.5 15.5)" stroke="currentColor" strokeWidth={1.5} opacity="0.6" />
        </svg>
      )
    }
  ];

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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
              Event Props
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
              Get a Quote Today!
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-neutral-800/50 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]"
              >
                {/* Icon Header */}
                <div className="relative p-8 bg-gradient-to-br from-amber-400/10 to-amber-500/5 border-b border-amber-400/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-6 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-500/10 border border-amber-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]">
                      <div className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-light text-white group-hover:text-amber-400 transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-neutral-400 mb-6 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <motion.a
                    href={`mailto:${service.email}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-400/10 to-amber-500/10 border border-amber-400/20 rounded-full hover:border-amber-400/40 text-amber-400 hover:text-amber-300 font-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                  >
                    Get a Quote
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
