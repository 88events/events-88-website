"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Catering", href: "/catering" },
    { name: "Event Props", href: "/event-props" },
    { name: "Photo Booths", href: "/photobooths" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-xl border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative flex-shrink-0">
              <Image
                src="/88-logo.png"
                alt="88 Events"
                width={44}
                height={44}
                className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-white font-normal text-lg sm:text-xl transition-colors duration-300 group-hover:text-amber-400">
              Eighty-Ate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition-colors duration-300 text-sm font-medium tracking-wide group ${
                  isActive(link.href)
                    ? "text-amber-400"
                    : "text-neutral-300 hover:text-amber-400"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                    isActive(link.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-300 hover:text-amber-400 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900/95 backdrop-blur-lg border-b border-neutral-800/50"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors duration-300 py-2 text-base font-medium ${
                    isActive(link.href)
                      ? "text-amber-400"
                      : "text-neutral-300 hover:text-amber-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
