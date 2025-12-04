"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const images = [
    { url: "/gallery/IMG_0493.jpeg", alt: "Outdoor taco bar buffet with colorful Mexican-style setup", rotate: 0, caption: "Taco Bar at Corporate Event" },
    { url: "/gallery/IMG_2954.jpeg", alt: "Chocolate fountain Valentine's Day dessert station", rotate: 0, caption: "Valentine's Day Dessert Station" },
    { url: "/gallery/IMG_0489.jpeg", alt: "Fresh taco served at outdoor event", rotate: 0, caption: "Artisan Taco Presentation" },
    { url: "/gallery/IMG_8910.jpeg", alt: "Birthday yogurt and ice cream bar setup", rotate: 0, caption: "Birthday Yogurt & Ice Cream Bar" },
    { url: "/gallery/IMG_9500.jpeg", alt: "Professional cooking preparation with fresh pasta", rotate: 180, caption: "Fresh Pasta Preparation" },
    { url: "/gallery/IMG_2963.jpeg", alt: "Colorful fruit display tray", rotate: 0, caption: "Fresh Fruit Display" },
    { url: "/gallery/IMG_3778.jpeg", alt: "Outdoor buffet with taco toppings and condiments", rotate: 0, caption: "Outdoor Buffet Setup" },
    { url: "/gallery/IMG_3785.jpeg", alt: "Chocolate fountain with fresh strawberries", rotate: 0, caption: "Chocolate Fountain Feature" },
    { url: "/gallery/IMG_3773.jpeg", alt: "Team serving at outdoor yogurt bar", rotate: 0, caption: "Full-Service Yogurt Bar" },
    { url: "/gallery/IMG_3774.jpeg", alt: "Guest enjoying dessert station", rotate: 0, caption: "Interactive Dessert Experience" },
    { url: "/gallery/IMG_8903.jpeg", alt: "Happy guest with taco plate at outdoor event", rotate: 0, caption: "Outdoor Taco Event" },
    { url: "/gallery/IMG_1178.jpeg", alt: "Catering staff at yogurt bar service", rotate: 90, caption: "Professional Service Team" },
    { url: "/gallery/IMG_1186.jpeg", alt: "Guest selecting from yogurt bar", rotate: 90, caption: "Custom Yogurt Creations" },
    { url: "/gallery/IMG_0490.jpeg", alt: "Behind the scenes cooking setup with ramen", rotate: 0, caption: "Behind the Scenes Cooking" },
    { url: "/gallery/IMG_0496.jpeg", alt: "Cooking preparation water straining technique", rotate: 0, caption: "Culinary Preparation" },
    { url: "/gallery/IMG_1264.jpeg", alt: "Dia De Los Tacos themed salsa bar", rotate: 180, caption: "Dia De Los Tacos Theme" },
    { url: "/gallery/IMG_0497.jpeg", alt: "Overhead view of birthday party sushi spread", rotate: 0, caption: "Birthday Sushi Spread" },
    { url: "/gallery/IMG_8907.jpeg", alt: "Artistic platter with decorative radish presentation", rotate: 0, caption: "Artistic Garnish Details" },
    { url: "/gallery/IMG_1277.jpeg", alt: "Salsa bar with fresh condiments and toppings", rotate: 0, caption: "Fresh Salsa Bar" },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  // Subtle particle effects (only 8 particles, very subtle)
  const particles = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    xMovement: Math.random() * 15 - 7.5,
    duration: Math.random() * 40 + 30,
    delay: Math.random() * 10,
  })), []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-900 pt-32 pb-24 relative overflow-hidden">
        {/* Minimal Particle Background - Very Subtle */}
        <div className="absolute inset-0 pointer-events-none opacity-12">
          {mounted && particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-amber-400/30"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                boxShadow: "0 0 10px rgba(251, 191, 36, 0.2)",
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, particle.xMovement, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6">
              Event Gallery
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed mb-4">
              Explore our portfolio of unforgettable events and delicious catering experiences
            </p>
            <p className="text-sm text-neutral-400 font-light">
              Click any image to view full size
            </p>
          </motion.div>

          {/* Image Grid - All Photos Visible */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900/50 border border-neutral-800/50 hover:border-amber-400/60 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-2xl hover:shadow-amber-400/20"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ transform: `rotate(${image.rotate}deg)` }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={85}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-900/90 border-2 border-neutral-700 hover:border-amber-400 flex items-center justify-center text-white hover:text-amber-400 transition-all z-50"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image counter */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-700 text-white text-sm font-medium z-50">
                {selectedImage + 1} / {images.length}
              </div>

              {/* Previous button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-neutral-900/90 backdrop-blur-md border-2 border-neutral-700 hover:border-amber-400 flex items-center justify-center text-white hover:text-amber-400 transition-all hover:scale-110 shadow-xl z-50"
                aria-label="Previous image"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-neutral-900/90 backdrop-blur-md border-2 border-neutral-700 hover:border-amber-400 flex items-center justify-center text-white hover:text-amber-400 transition-all hover:scale-110 shadow-xl z-50"
                aria-label="Next image"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Main Image with seamless transition */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              >
                <div className="relative max-w-full max-h-full">
                  <Image
                    src={images[selectedImage].url}
                    alt={images[selectedImage].alt}
                    width={1600}
                    height={1200}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    style={{ transform: `rotate(${images[selectedImage].rotate}deg)` }}
                    quality={100}
                    priority
                  />
                </div>
              </motion.div>

              {/* Caption */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-neutral-900/90 border border-neutral-700 text-white text-base font-medium z-50 max-w-2xl text-center">
                {images[selectedImage].caption}
              </div>

              {/* Helper text */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-neutral-400 text-xs font-light">
                Use arrow keys to navigate • Press ESC to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
