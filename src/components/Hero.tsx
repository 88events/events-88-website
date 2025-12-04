"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [showBurst, setShowBurst] = useState(true);
  const [showSlowBubbles, setShowSlowBubbles] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Start slow bubbles IMMEDIATELY - NO GAP
    setShowSlowBubbles(true);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const services = [
    { name: "Gallery", href: "/gallery" },
    { name: "Catering", href: "/catering" },
    { name: "Event Props", href: "/event-props" },
    { name: "Photo Booths", href: "/photobooths" },
  ];

  // Initial BURST - TRULY RANDOM champagne bubbles with better distribution!
  // DRASTICALLY reduced count on mobile for performance (200 -> 30)
  const burstBubbles = Array.from({ length: isMobile ? 30 : 200 }, (_, i) => {
    // Better randomization - combine multiple operations to break patterns
    const seed1 = (i * 73 + 31) * (i * 97 + 17);
    const seed2 = (i * 41 + 7) * (i * 53 + 23);
    const seed3 = (i * 61 + 13) * (i * 89 + 11);

    const x = ((seed1 % 181) + (seed2 % 97)) % 90 + 5; // 5-95%
    const size = (seed2 % 5) + 2; // 2-7px
    const opacity = ((seed3 % 60) + 40) / 100; // 0.4-1.0
    const blur = (seed1 % 3) === 0 ? 1.5 : (seed1 % 3) === 1 ? 0.5 : 0;
    const duration = (seed2 % 5) + 5; // 5-10 seconds
    const delay = (i * 0.018);
    const wobble = (seed3 % 15) + 5; // 5-20

    // Color variations for depth
    const colorVariant = i % 5;
    const hasSparkle = !isMobile && (i % 7 === 0); // Disable sparkles on mobile

    return {
      id: i,
      x: x,
      size: size,
      opacity: opacity,
      blur: blur,
      delay: delay,
      duration: duration,
      wobble: wobble,
      colorVariant: colorVariant,
      hasSparkle: hasSparkle,
    };
  });

  // MANY slow champagne bubbles - continuous and visible!
  // Reduced on mobile for performance (50 -> 15)
  const champagneBubbles = Array.from({ length: isMobile ? 15 : 50 }, (_, i) => {
    const layers = ['back', 'mid', 'front'] as const;
    const layer = layers[i % 3];
    const seed = (i * 67 + 19) * (i * 43 + 29);

    // Color variations
    const colorVariant = i % 4;
    const hasSparkle = !isMobile && (i % 5 === 0); // Disable sparkles on mobile

    return {
      id: i + 1,
      x: 10 + ((seed % 80)), // 10-90%
      size: layer === 'front' ? 5 + (i % 2) : layer === 'mid' ? 4 + (i % 2) : 3.5 + (i % 2),
      delay: (i * 0.12), // Delay spread over 6 seconds (50 * 0.12 = 6s)
      duration: 10, // Faster rise - 10 seconds
      wobble: 2 + (i % 3) * 0.5,
      layer: layer,
      opacity: layer === 'front' ? 0.85 : layer === 'mid' ? 0.75 : 0.65,
      colorVariant: colorVariant,
      hasSparkle: hasSparkle,
    };
  });

  // Helper function to get bubble color gradient
  const getBubbleColor = (colorVariant: number, opacity: number) => {
    const colors = [
      // Classic champagne gold
      `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${opacity}), rgba(251, 191, 36, ${opacity * 0.9}), rgba(251, 146, 60, ${opacity * 0.7}))`,
      // Rose gold
      `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${opacity}), rgba(251, 191, 36, ${opacity * 0.85}), rgba(236, 72, 153, ${opacity * 0.5}))`,
      // Pale amber
      `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${opacity}), rgba(252, 211, 77, ${opacity * 0.9}), rgba(245, 158, 11, ${opacity * 0.6}))`,
      // Peachy champagne
      `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${opacity}), rgba(254, 215, 170, ${opacity * 0.9}), rgba(251, 146, 60, ${opacity * 0.7}))`,
      // Pure golden
      `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${opacity}), rgba(234, 179, 8, ${opacity * 0.9}), rgba(202, 138, 4, ${opacity * 0.7}))`,
    ];
    return colors[colorVariant % colors.length];
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Subtle accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Clean Professional Background with minimal accents */}
      <div className="absolute inset-0">
        {/* Subtle gradient accent - bottom left */}
        <motion.div
          className="absolute w-[600px] h-[600px] -bottom-48 -left-48 bg-amber-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.22, 0.15]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Subtle gradient accent - top right */}
        <motion.div
          className="absolute w-[500px] h-[500px] -top-32 -right-32 bg-amber-500/12 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.18, 0.12]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Center subtle accent */}
        <motion.div
          className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.10, 0.15, 0.10]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* BURST Bubbles - TRULY RANDOM */}
        {showBurst && burstBubbles.map((bubble) => (
          <motion.div
            key={`burst-${bubble.id}`}
            className="absolute rounded-full"
            style={{
              left: `${bubble.x}%`,
              bottom: 0,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: getBubbleColor(bubble.colorVariant, bubble.opacity < 0.6 ? 0.6 : bubble.opacity < 0.8 ? 0.85 : 1),
              filter: `blur(${bubble.blur}px)`,
              zIndex: bubble.opacity > 0.8 ? 3 : bubble.opacity > 0.6 ? 2 : 1,
              willChange: 'transform',
            }}
            initial={{
              y: 0,
              opacity: 0,
            }}
            animate={{
              y: '-110vh',
              x: [
                0,
                Math.sin(bubble.id * 0.5) * bubble.wobble,
                Math.cos(bubble.id * 0.7) * bubble.wobble * 0.8,
                Math.sin(bubble.id * 1.1) * bubble.wobble * 0.6,
                Math.cos(bubble.id * 1.3) * bubble.wobble * 0.4,
                Math.sin(bubble.id * 1.7) * bubble.wobble * 0.2,
                0
              ],
              scale: [1, 1.08, 1.15, 1.22, 1.3],
              opacity: [0, bubble.opacity * 0.8, bubble.opacity, bubble.opacity * 0.9, 0],
              boxShadow: isMobile 
                ? [
                    `0 0 ${bubble.size * 2}px rgba(251, 191, 36, ${bubble.opacity * 0.3})`,
                    `0 0 ${bubble.size * 2.5}px rgba(251, 191, 36, ${bubble.opacity * 0.4})`,
                    `0 0 ${bubble.size * 2}px rgba(251, 191, 36, ${bubble.opacity * 0.3})`,
                  ]
                : [
                    `0 0 ${bubble.size * 2.5}px rgba(251, 191, 36, ${bubble.opacity * 0.4}), 0 0 ${bubble.size * 7}px rgba(251, 191, 36, ${bubble.opacity * 0.15})`,
                    `0 0 ${bubble.size * 3}px rgba(251, 191, 36, ${bubble.opacity * 0.5}), 0 0 ${bubble.size * 9}px rgba(251, 191, 36, ${bubble.opacity * 0.2})`,
                    `0 0 ${bubble.size * 3.5}px rgba(251, 191, 36, ${bubble.opacity * 0.6}), 0 0 ${bubble.size * 11}px rgba(251, 191, 36, ${bubble.opacity * 0.25})`,
                    `0 0 ${bubble.size * 3}px rgba(251, 191, 36, ${bubble.opacity * 0.5}), 0 0 ${bubble.size * 9}px rgba(251, 191, 36, ${bubble.opacity * 0.2})`,
                    `0 0 ${bubble.size * 2.5}px rgba(251, 191, 36, ${bubble.opacity * 0.4}), 0 0 ${bubble.size * 7}px rgba(251, 191, 36, ${bubble.opacity * 0.15})`,
                  ],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              ease: "linear",
              times: isMobile ? [0, 0.5, 1] : [0, 0.15, 0.35, 0.6, 0.8, 0.95, 1],
            }}
          >
            {bubble.hasSparkle && !isMobile && (
              <>
                <motion.div
                  className="absolute rounded-full bg-white"
                  style={{
                    top: '20%',
                    left: '25%',
                    width: `${bubble.size * 0.25}px`,
                    height: `${bubble.size * 0.25}px`,
                  }}
                  animate={{
                    opacity: [0, 0.9, 0.6, 0.9, 0.4, 0.8, 0],
                    scale: [0.5, 1.2, 0.8, 1.3, 0.7, 1.1, 0.5],
                  }}
                  transition={{
                    duration: bubble.duration,
                    delay: bubble.delay + 0.5,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
                  }}
                />
                <motion.div
                  className="absolute rounded-full bg-white"
                  style={{
                    top: '35%',
                    left: '15%',
                    width: `${bubble.size * 0.18}px`,
                    height: `${bubble.size * 0.18}px`,
                  }}
                  animate={{
                    opacity: [0, 0.7, 0.5, 0.8, 0.3, 0.6, 0],
                    scale: [0.4, 1, 0.7, 1.2, 0.6, 0.9, 0.4],
                  }}
                  transition={{
                    duration: bubble.duration,
                    delay: bubble.delay + 0.7,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.35, 0.55, 0.75, 0.9, 1],
                  }}
                />
              </>
            )}
          </motion.div>
        ))}

        {/* Slow Calm Bubbles - normal rise from bottom */}
        {showSlowBubbles && champagneBubbles.map((bubble) => (
          <motion.div
            key={`slow-${bubble.id}`}
            className="absolute rounded-full"
            style={{
              left: `${bubble.x}%`,
              bottom: 0,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: getBubbleColor(
                bubble.colorVariant,
                bubble.layer === 'back' ? 0.5 : bubble.layer === 'mid' ? 0.7 : 0.9
              ),
              filter: bubble.layer === 'back' ? 'blur(2.5px)' : bubble.layer === 'mid' ? 'blur(0.8px)' : 'blur(0px)',
              willChange: 'transform',
            }}
            animate={{
              y: ['0vh', '-110vh'],
              x: [
                0,
                Math.sin(bubble.id * 0.3) * bubble.wobble,
                Math.cos(bubble.id * 0.5) * bubble.wobble * 0.9,
                Math.sin(bubble.id * 0.8) * bubble.wobble * 0.7,
                Math.cos(bubble.id * 1.1) * bubble.wobble * 0.5,
                Math.sin(bubble.id * 1.4) * bubble.wobble * 0.3,
                0
              ],
              scale: [1, 1.05, 1.1, 1.15, 1.2, 1.25],
              opacity: [0, bubble.opacity * 0.5, bubble.opacity * 0.8, bubble.opacity, bubble.opacity * 0.7, 0],
              boxShadow: isMobile
                ? [
                    `0 0 ${bubble.size * 2}px rgba(251, 191, 36, 0.25)`,
                    `0 0 ${bubble.size * 2.5}px rgba(251, 191, 36, 0.3)`,
                    `0 0 ${bubble.size * 2}px rgba(251, 191, 36, 0.25)`,
                  ]
                : bubble.layer === 'back'
                ? [
                    `0 0 ${bubble.size * 3}px rgba(251, 191, 36, 0.2), 0 0 ${bubble.size * 8}px rgba(251, 191, 36, 0.08)`,
                    `0 0 ${bubble.size * 3.5}px rgba(251, 191, 36, 0.25), 0 0 ${bubble.size * 10}px rgba(251, 191, 36, 0.1)`,
                    `0 0 ${bubble.size * 4}px rgba(251, 191, 36, 0.3), 0 0 ${bubble.size * 12}px rgba(251, 191, 36, 0.12)`,
                    `0 0 ${bubble.size * 3.5}px rgba(251, 191, 36, 0.25), 0 0 ${bubble.size * 10}px rgba(251, 191, 36, 0.1)`,
                    `0 0 ${bubble.size * 3}px rgba(251, 191, 36, 0.2), 0 0 ${bubble.size * 8}px rgba(251, 191, 36, 0.08)`,
                    `0 0 ${bubble.size * 2}px rgba(251, 191, 36, 0.15), 0 0 ${bubble.size * 6}px rgba(251, 191, 36, 0.06)`
                  ]
                : bubble.layer === 'mid'
                ? [
                    `0 0 ${bubble.size * 2.5}px rgba(251, 191, 36, 0.35), 0 0 ${bubble.size * 6}px rgba(251, 191, 36, 0.15)`,
                    `0 0 ${bubble.size * 3}px rgba(251, 191, 36, 0.45), 0 0 ${bubble.size * 8}px rgba(251, 191, 36, 0.18)`,
                    `0 0 ${bubble.size * 3.5}px rgba(251, 191, 36, 0.55), 0 0 ${bubble.size * 10}px rgba(251, 191, 36, 0.2)`,
                    `0 0 ${bubble.size * 3}px rgba(251, 191, 36, 0.45), 0 0 ${bubble.size * 8}px rgba(251, 191, 36, 0.18)`,
                    `0 0 ${bubble.size * 2.5}px rgba(251, 191, 36, 0.35), 0 0 ${bubble.size * 6}px rgba(251, 191, 36, 0.15)`,
                    `0 0 ${bubble.size * 2}px rgba(251, 191, 36, 0.25), 0 0 ${bubble.size * 5}px rgba(251, 191, 36, 0.12)`
                  ]
                : [
                    `0 0 ${bubble.size * 3}px rgba(251, 191, 36, 0.5), 0 0 ${bubble.size * 8}px rgba(251, 191, 36, 0.2)`,
                    `0 0 ${bubble.size * 3.5}px rgba(251, 191, 36, 0.65), 0 0 ${bubble.size * 10}px rgba(251, 191, 36, 0.25)`,
                    `0 0 ${bubble.size * 4}px rgba(251, 191, 36, 0.75), 0 0 ${bubble.size * 12}px rgba(251, 191, 36, 0.28)`,
                    `0 0 ${bubble.size * 3.5}px rgba(251, 191, 36, 0.65), 0 0 ${bubble.size * 10}px rgba(251, 191, 36, 0.25)`,
                    `0 0 ${bubble.size * 3}px rgba(251, 191, 36, 0.5), 0 0 ${bubble.size * 8}px rgba(251, 191, 36, 0.2)`,
                    `0 0 ${bubble.size * 2.5}px rgba(251, 191, 36, 0.35), 0 0 ${bubble.size * 6}px rgba(251, 191, 36, 0.15)`
                  ],
            }}
            transition={{
              duration: bubble.duration * 2,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "linear",
              times: isMobile ? [0, 0.5, 1] : [0, 0.15, 0.35, 0.6, 0.85, 1]
            }}
          >
            {bubble.hasSparkle && !isMobile && bubble.layer !== 'back' && (
              <>
                <motion.div
                  className="absolute rounded-full bg-white"
                  style={{
                    top: '22%',
                    left: '28%',
                    width: `${bubble.size * 0.3}px`,
                    height: `${bubble.size * 0.3}px`,
                  }}
                  animate={{
                    opacity: [0, 0.85, 0.5, 0.9, 0.4, 0.75, 0.5, 0.8, 0],
                    scale: [0.6, 1.3, 0.9, 1.4, 0.8, 1.2, 0.9, 1.1, 0.6],
                  }}
                  transition={{
                    duration: bubble.duration * 2,
                    delay: bubble.delay + 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {bubble.layer === 'front' && (
                  <motion.div
                    className="absolute rounded-full bg-white"
                    style={{
                      top: '38%',
                      left: '18%',
                      width: `${bubble.size * 0.22}px`,
                      height: `${bubble.size * 0.22}px`,
                    }}
                    animate={{
                      opacity: [0, 0.7, 0.4, 0.75, 0.3, 0.65, 0.4, 0.7, 0],
                      scale: [0.5, 1.1, 0.8, 1.3, 0.7, 1, 0.8, 1.05, 0.5],
                    }}
                    transition={{
                      duration: bubble.duration * 2,
                      delay: bubble.delay + 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </>
            )}
          </motion.div>
        ))}

        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-8 sm:py-12 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-10 md:mb-12 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/88-logo.png"
              alt="88 Events"
              width={240}
              height={240}
              className="w-28 sm:w-36 md:w-40 h-auto drop-shadow-2xl"
              priority
              quality={100}
            />
          </div>
        </motion.div>

        {/* Main heading - Stronger weight */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-4 sm:mb-5 md:mb-6 tracking-tight"
        >
          Eighty-Ate Events
        </motion.h1>

        {/* Tagline - Better contrast */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-200 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Your one-stop solution for unforgettable events
        </motion.p>

        {/* Service Buttons - Stronger styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <Link key={service.name} href={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-amber-400/15 to-amber-500/15 border-2 border-amber-400/30 rounded-full overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-amber-400/60 hover:shadow-[0_0_40px_rgba(251,191,36,0.25)] hover:bg-amber-400/20"
              >
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text - Better weight */}
                <span className="relative z-10 text-amber-400 group-hover:text-amber-300 font-medium tracking-wide transition-colors duration-300 text-sm sm:text-base">
                  {service.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}