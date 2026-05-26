'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps: Step[] = [
    {
      number: 1,
      title: 'Tell Us About Your Rental',
      description: 'Share details about your rental property, contents, and coverage needs. Takes less than 2 minutes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-3m0 0l7-4 7 4M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Compare Top Insurers',
      description:
        'We compare quotes from our leading rental insurers to find you the best deal.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6zM3 16a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Get Covered Today',
      description:
        'Choose your preferred insurer and get instant protection. We handle the paperwork.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="py-16 lg:py-20 bg-gradient-to-br from-emerald-800 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-700 text-emerald-200 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            From quote request to covered — takes less than 2 minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-emerald-600/50 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => { stepRefs.current[index] = el; }}
              className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transition-all duration-700 hover:bg-white/15 ${
                visibleSteps.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: visibleSteps.has(index) ? `${index * 150}ms` : '0ms' }}
            >
              {/* Step badge */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-800 font-extrabold text-xl shadow-lg flex-shrink-0">
                  {step.number}
                </div>
                <div className="h-0.5 flex-1 bg-white/20 lg:hidden" />
              </div>

              {/* Icon */}
              <div className="text-emerald-300 mb-5">{step.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-emerald-200 leading-relaxed">{step.description}</p>

              {/* Down arrow on mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-6 flex justify-center">
                  <svg className="w-5 h-6 text-emerald-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-800 font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
          >
            Start Your Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-emerald-300 text-sm mt-3">No fees · No obligation · Takes 2 minutes</p>
        </div>
      </div>
    </div>
  );
}
