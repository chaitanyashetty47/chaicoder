"use client"

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqsData = [
  {
    question: "Do you work with AI-tools like Lovable, Cursor and CodeRabbit?",
    answer: "Yes, we do use AI-powered tools like Lovable, Cursor and CodeRabbit to speed up the development process but we don't rely on them to the extent of not having an experienced engineer in the loop. Every step is validated by an experienced engineer to ensure the highest quality product.",
  },
  {
    question: "Do you work with vibe-coded prototypes (like Lovable)?",
    answer: "Yes. If you've built an early version with no-code or vibe-coded tools but it's buggy, we'll step in, stabilize it if its possible or else we'll build it from scratch.",
  },
  {
    question: "What happens after the MVP is shipped?",
    answer: `Once your MVP is live, you're in control of what comes next.

You have two clear paths:

**→ Continue with us**

We move into a monthly retainer where we act as your extended product team - shipping new features, refining UX, improving performance, and iterating based on real user feedback.

**→ Take the codebase and scale independently**

We hand over the complete codebase - clean, documented, and built with industry-standard tools. Any competent developer can step in without friction.

**Either way, you won't be left figuring things out.**

We ensure a smooth transition with:

• Structured code architecture
• Clear documentation
• Deployment access & environment setup
• Knowledge transfer walkthrough

You own the product.
We simply help you build it right.`
  },
  {
    question: "What's included in post-launch support?",
    answer: "Based on the plan you select, you'll get mentioned number of days of free bug fixes, improvements, and technical assistance to ensure a smooth handoff.",
  },
  {
    question: "How do feature requests work?",
    answer: "We work on one request at a time for maximum clarity, speed, and focus—avoiding scope creep.",
  },
  // {
  //   question: "What makes your agency different?",
  //   answer: "We specialize in fast, cost-effective MVPs for non-technical founders with a transparent process, lean builds, and scalability baked in.",
  // },
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
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-primary-orange mb-3 md:mb-4">
            Got Questions?<br/>We&apos;ve Got Answers.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-dark max-w-2xl mx-auto">
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
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-teal/5 transition-all duration-500 ease-in-out cursor-pointer"
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
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-sm md:text-base text-text-dark/80 font-inter leading-relaxed whitespace-pre-line [&>strong]:font-semibold [&>strong]:text-text-dark">
                    {faq.answer.split(/(\*\*.*?\*\*)/).map((part, i) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={i}>{part.slice(2, -2)}</strong>
                      ) : (
                        <React.Fragment key={i}>{part}</React.Fragment>
                      )
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
