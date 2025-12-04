"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyUs() {
  const [inView, setInView] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setInView(true);
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animationTriggered]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: "01",
      title: "Curate",
      description: "We source from top-tier local kitchens and craft custom menus tailored to your team's preferences and dietary needs."
    },
    {
      number: "02",
      title: "Custom",
      description: "Every order is personalized - from portion sizes to special accommodations. No cookie-cutter solutions here."
    },
    {
      number: "03",
      title: "Reliable",
      description: "On-time delivery, consistent quality, and seamless coordination. We handle the logistics so you can focus on your team."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-gradient-to-b from-orange-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className={`absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full blur-3xl animate-pulse transition-all duration-1000 ${
          inView ? 'opacity-40 scale-100' : 'opacity-0 scale-75'
        }`} />
        <div className={`absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full blur-3xl animate-pulse transition-all duration-1000 delay-300 ${
          inView ? 'opacity-40 scale-100' : 'opacity-0 scale-75'
        }`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse transition-all duration-1000 delay-600 ${
          inView ? 'opacity-40 scale-100' : 'opacity-0 scale-75'
        }`} style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-6 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            How We Work
          </h2>
          <p
            className={`text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-light transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Three simple steps to exceptional office catering
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: inView ? `${400 + index * 200}ms` : '0ms'
              }}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-pink-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 to-orange-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Step number */}
                  <div className="text-6xl sm:text-7xl font-light text-pink-300 group-hover:text-orange-400 transition-all duration-500 mb-4 transform group-hover:scale-110">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4 group-hover:text-pink-700 transition-colors duration-500">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 transform group-hover:scale-125" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-200 to-pink-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-110" />
              </div>

              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-px bg-gradient-to-r from-pink-400 to-orange-300 transform -translate-y-1/2 z-20 transition-all duration-1000 ${
                  inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }} />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className={`group relative inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 text-lg sm:text-xl font-medium text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 transition-all duration-300 tracking-wide rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: inView ? '1200ms' : '0ms',
              transitionDuration: '1000ms'
            }}
          >
            <span className="relative z-10">Start Your Catering Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
