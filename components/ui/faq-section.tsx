"use client"

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqsData = [
  {
    question: "How long does it take to build an MVP?",
    answer: "We follow a strict 6-week delivery timeline to take your idea from concept to a fully functional MVP.",
  },
  {
    question: "Do you work with vibe-coded prototypes (like Lovable)?",
    answer: "Yes. If you've built an early version with no-code or vibe-coded tools but it's buggy, we'll step in, stabilize it, and turn it into a scalable MVP.",
  },
  {
    question: "What's included in post-launch support?",
    answer: "You'll get 14 days of free bug fixes, improvements, and technical assistance to ensure a smooth handoff.",
  },
  {
    question: "How do feature requests work?",
    answer: "We work on one request at a time for maximum clarity, speed, and focus—avoiding scope creep.",
  },
  {
    question: "What makes your agency different?",
    answer: "We specialize in fast, cost-effective MVPs for non-technical founders with a transparent process, lean builds, and scalability baked in.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-orange font-sansation mb-4">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-lg text-text-dark font-inter">
            Here&apos;s everything you need to know about how we work and what to expect.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:bg-teal/5 transition-all duration-500 ease-in-out"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-teal/5 transition-all duration-500 ease-in-out"
              >
                <h3 className={`text-base md:text-lg font-medium font-inter ${
                  openIndex === index ? 'text-teal' : 'text-text-dark'
                }`}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'rotate-180 text-teal' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-2'
                }`}
                style={{
                  transitionProperty: 'max-height, opacity, transform',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="px-6 pb-4">
                  <p className="text-sm md:text-base text-text-dark/80 font-inter leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
