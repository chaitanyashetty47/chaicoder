"use client";

import { MessageCircle, MapPin, Code, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StepData {
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: StepData[] = [
  {
    title: "Consultation Call",
    description:
      "Kick things off with a discovery session to clarify your vision, goals, and requirements.",
    icon: MessageCircle,
  },
  {
    title: "Planning & Roadmap",
    description:
      "In one week, we define scope, prioritize features, and craft a roadmap for your Product launch.",
    icon: MapPin,
  },
  {
    title: "Development & Testing",
    description:
      "We build fast using AI-powered tools (Cursor, CodeRabbit, Lovable), ensuring lean, secure, and scalable code.",
    icon: Code,
  },
  {
    title: "Launch",
    description:
      "Your Product goes live, ready to gather real user feedback or pitch confidently to investors.",
    icon: Rocket,
  },
];

// Col 1 & 3: icon top, text bottom. Col 2 & 4: text top, icon bottom.
const COL_LAYOUT: ("icon" | "text")[][] = [
  ["icon", "text"], // col 1
  ["text", "icon"], // col 2
  ["icon", "text"], // col 3
  ["text", "icon"], // col 4
];

export default function OurProcess() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-3 md:mb-4">
            Our 4-Step Product Build System
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-dark max-w-4xl mx-auto px-2">
            A lean, market-ready Product in 4 proven phases, designed to save time,
            cut costs, and maximize impact.
          </p>
        </div>

        {/* Desktop: 4-column grid, 2 rows — icon + text per column, no cards */}
        <div className="hidden lg:block relative">
          {/* Simple dotted line from node 1 to node 2 */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <style>
              {`
                @keyframes traceLine1 {
                  0% { opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { opacity: 0; }
                }
                @keyframes traceLine2 {
                  0%, 30% { opacity: 0; }
                  40% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { opacity: 0; }
                }
                @keyframes traceLine3 {
                  0%, 60% { opacity: 0; }
                  70% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { opacity: 0; }
                }
                .trace-line-1 {
                  animation: traceLine1 6s ease-in-out infinite;
                  opacity: 0;
                }
                .trace-line-2 {
                  animation: traceLine2 6s ease-in-out infinite;
                  opacity: 0;
                }
                .trace-line-3 {
                  animation: traceLine3 6s ease-in-out infinite;
                  opacity: 0;
                }
              `}
            </style>
            {/* Slight curve: col 1 row 1 right center → col 2 row 2 left center */}
            <path
              className="trace-line-1"
              d="M 13 27 Q 26 30 40 75"
              fill="none"
              stroke="oklch(0.24 0.04 56)"
              strokeWidth="0.6"
              strokeDasharray="1 2"
              strokeLinecap="round"
            />
            {/* Slight curve (opposite direction): col 2 row 2 right center → col 3 row 1 left center */}
            <path
              className="trace-line-2"
              d="M 38 70 Q 49 63 60 27"
              fill="none"
              stroke="oklch(0.24 0.04 56)"
              strokeWidth="0.6"
              strokeDasharray="1 2"
              strokeLinecap="round"
            />

            {/* Slight curve (same as 1→2): col 3 row 1 right center → col 4 row 2 left center */}
            <path
              className="trace-line-3"
              d="M 65 29 Q 77 38 88 75"
              fill="none"
              stroke="oklch(0.24 0.04 56)"
              strokeWidth="0.6"
              strokeDasharray="1 2"
              strokeLinecap="round"
            />
          </svg>
          <div className="relative grid grid-cols-4 gap-x-6 gap-y-8 border-2 border-gray-800 rounded-2xl bg-chai-foam/60 p-8 shadow-[5px_5px_0px_0px_rgba(31,41,55,0.12)] min-h-[280px]">
          {steps.map((step, colIndex) => {
            const Icon = step.icon;
            const layout = COL_LAYOUT[colIndex];
            return (
              <div
                key={step.title}
                className="grid grid-rows-[1fr_1fr] gap-4 min-h-[200px]"
              >
                {/* Row 1 */}
                <div
                  className={`flex flex-col p-4 min-h-[140px] ${
                    layout[0] === "icon"
                      ? "items-center justify-end"
                      : "items-start justify-start text-left"
                  }`}
                >
                  {layout[0] === "icon" ? (
                    <div className="w-full aspect-square max-w-[90px] rounded-full bg-[oklch(0.94_0.04_185)] border-[7px] border-teal flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7 text-teal" strokeWidth={2} />
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {String(colIndex + 1).padStart(2, "0")} {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </>
                  )}
                </div>
                {/* Row 2 */}
                <div
                  className={`flex flex-col p-4 min-h-[140px] ${
                    layout[1] === "icon"
                      ? "items-center justify-start"
                      : "items-start justify-start text-left"
                  }`}
                >
                  {layout[1] === "icon" ? (
                    <div className="w-full aspect-square max-w-[90px] rounded-full bg-[oklch(0.94_0.04_185)] border-[7px] border-teal flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7 text-teal" strokeWidth={2} />
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {String(colIndex + 1).padStart(2, "0")} {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden relative">
          {/* Vertical connecting lines for mobile */}
          <svg
            className="absolute left-6 top-0 w-0.5 h-full pointer-events-none"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <style>
              {`
                @keyframes traceLineMobile1 {
                  0% { opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { opacity: 0; }
                }
                @keyframes traceLineMobile2 {
                  0%, 30% { opacity: 0; }
                  40% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { opacity: 0; }
                }
                @keyframes traceLineMobile3 {
                  0%, 60% { opacity: 0; }
                  70% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { opacity: 0; }
                }
                .trace-line-mobile-1 {
                  animation: traceLineMobile1 6s ease-in-out infinite;
                  opacity: 0;
                }
                .trace-line-mobile-2 {
                  animation: traceLineMobile2 6s ease-in-out infinite;
                  opacity: 0;
                }
                .trace-line-mobile-3 {
                  animation: traceLineMobile3 6s ease-in-out infinite;
                  opacity: 0;
                }
              `}
            </style>
            {/* Line from step 1 to step 2 */}
            <path
              className="trace-line-mobile-1"
              d="M 1 12 L 1 37"
              fill="none"
              stroke="oklch(0.24 0.04 56)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              strokeLinecap="round"
            />
            {/* Line from step 2 to step 3 */}
            <path
              className="trace-line-mobile-2"
              d="M 1 37 L 1 62"
              fill="none"
              stroke="oklch(0.24 0.04 56)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              strokeLinecap="round"
            />
            {/* Line from step 3 to step 4 */}
            <path
              className="trace-line-mobile-3"
              d="M 1 62 L 1 87"
              fill="none"
              stroke="oklch(0.24 0.04 56)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              strokeLinecap="round"
            />
          </svg>
          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal flex items-center justify-center z-10 relative">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {String(i + 1).padStart(2, "0")} {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
