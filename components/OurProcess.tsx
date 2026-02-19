"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { MessageCircle, MapPin, Code, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Types ───────────────────────────────────────────────

interface StepData {
  title: string;
  description: string;
  icon: LucideIcon;
  side: "left" | "right";
}

// ─── Step Data ───────────────────────────────────────────

const steps: StepData[] = [
  {
    title: "Consultation Call",
    description:
      "Kick things off with a discovery session to clarify your vision, goals, and requirements.",
    icon: MessageCircle,
    side: "left",
  },
  {
    title: "Planning & Roadmap",
    description:
      "In one week, we define scope, prioritize features, and craft a roadmap for your MVP launch.",
    icon: MapPin,
    side: "right",
  },
  {
    title: "Development & Testing",
    description:
      "We build fast using AI-powered tools (Cursor, CodeRabbit, Lovable), ensuring lean, secure, and scalable code.",
    icon: Code,
    side: "left",
  },
  {
    title: "Launch",
    description:
      "Your MVP goes live, ready to gather real user feedback or pitch confidently to investors.",
    icon: Rocket,
    side: "right",
  },
];

/* ── Commented out: Post-Launch Support (kept for reference) ──
  {
    number: "5",
    title: "Post-Launch Support",
    description:
      "We don't stop at launch. Expect bug fixes, iterations, and guidance to keep your MVP growing.",
    icon: Headphones, // import { Headphones } from "lucide-react"
    color: "bg-[#E5D4FF]",
  },
*/

// ─── SVG Configuration (viewBox: 0 0 1000 650) ──────────

// Card centers derived from CARD_POSITIONS (top 5/30/52/74%, left/right 3%, width 38%)
const CARD_CENTERS = [
  { x: 220, y: 75 },   // Card 0: top-left
  { x: 780, y: 195 },  // Card 1: top-right
  { x: 220, y: 338 },  // Card 2: middle-left
  { x: 780, y: 481 },  // Card 3: bottom-right
];

// Single serpentine path: start at card 0 → card 1 → card 2 → card 3 (ends at final card)
const SERPENTINE_PATH = [
  "M 220 75",                           // start at card 0 (top-left)
  "C 100 120, 900 170, 780 195",       // S-curve to card 1 (top-right)
  "C 900 260, 100 310, 220 338",       // S-curve to card 2 (middle-left)
  "C 100 380, 900 440, 780 481",       // to card 3 (bottom-right) — path ends here
].join(" ");

// Waypoints along path for junction dots (at each card)
const WAYPOINTS = CARD_CENTERS;

// ─── Animation Timing ────────────────────────────────────
const CYCLE_DURATION = 5;
const TRAIL_LENGTH = 0.1; // 10% of path for trailing head
// Hit fractions: when trailing line reaches each card (path ends at card 3)
const CARD_HIT_FRACTIONS = [0.25, 0.5, 0.75, 0.95];

const CARD_POSITIONS: { top: string; left?: string; right?: string }[] = [
  { top: "5%", left: "3%" },
  { top: "30%", right: "3%" },
  { top: "52%", left: "3%" },
  { top: "74%", right: "3%" },
];

// ─── StepCard ────────────────────────────────────────────

function StepCard({ step, isHighlighted = false }: { step: StepData; isHighlighted?: boolean }) {
  const Icon = step.icon;

  return (
    <div className="relative">
      {/* Backing layer — slightly darker, offset below/right for 3D bottom corner */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl bg-gray-400 translate-y-2"
        aria-hidden
      />
      {/* Main card — hover styles also applied when trail hits (isHighlighted) */}
      <div
        className={`
          relative z-0
          bg-white
          rounded-2xl
          p-5
          transition-all duration-300
          shadow-[0_1px_3px_rgba(0,0,0,0.04)]
          hover:shadow-[0_2px_6px_rgba(0,0,0,0.06)]
          hover:-translate-y-0.5
          ${isHighlighted ? "shadow-[0_2px_6px_rgba(0,0,0,0.06)] -translate-y-0.5" : ""}
        `}
        >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-teal/15 flex items-center justify-center">
            <Icon className="w-6 h-6 text-teal" strokeWidth={2} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 mb-1.5">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// ─── OurProcess Component ────────────────────────────────

const OurProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const progress = useMotionValue(0);
  const strokeDashOffsetMotion = useTransform(progress, (p) => -p);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  // Progress-driven animation loop: 0→1 over CYCLE_DURATION, looping
  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    let rafId: number;

    const tick = () => {
      const elapsed = (performance.now() - start) / 1000;
      const p = (elapsed % CYCLE_DURATION) / CYCLE_DURATION;
      progress.set(p);

      // Compute active card: trail hits when progress crosses hit fraction
      const hitWindow = 0.1;
      const idx = CARD_HIT_FRACTIONS.findIndex(
        (frac) => p >= frac - hitWindow && p <= frac + hitWindow
      );
      setActiveCardIndex(idx >= 0 ? idx : -1);

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, progress]);

  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-3 md:mb-4">
            Our 4-Step MVP Blueprint
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-dark max-w-4xl mx-auto px-2">
            A lean, market-ready MVP in 4 proven phases, designed to save time,
            cut costs, and maximize impact.
          </p>
        </div>

        {/* ── Desktop: Animated Journey Tree ── */}
        <div
          ref={containerRef}
          className="hidden lg:block relative border-[3px] border-gray-800 rounded-[28px] bg-chai-foam/60 shadow-[5px_5px_0px_0px_rgba(31,41,55,0.12)] overflow-visible"
          style={{ aspectRatio: "1000 / 650" }}
        >
          {/* SVG Paths Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 650"
            fill="none"
          >
            <defs>
              {/* Teal neon gradient — bright cyan head fading to teal tail */}
              <linearGradient id="tealTrail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5EEAD4" />
                <stop offset="40%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity={0} />
              </linearGradient>

              {/* Multi-layer neon glow: outer aura → inner glow → sharp core */}
              <filter
                id="neonGlow"
                x="-80%"
                y="-80%"
                width="260%"
                height="260%"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="14"
                  result="outerGlow"
                />
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="5"
                  result="innerGlow"
                />
                <feMerge>
                  <feMergeNode in="outerGlow" />
                  <feMergeNode in="innerGlow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Serpentine path — black dotted line (always visible) */}
            <path
              d={SERPENTINE_PATH}
              stroke="#1f2937"
              strokeWidth={4.5}
              strokeLinecap="round"
              strokeDasharray="8 8"
              fill="none"
            />

            {/* Solid teal trail — left behind as trailing line moves (progress-driven) */}
            <motion.path
              d={SERPENTINE_PATH}
              stroke="#2DD4BF"
              strokeWidth={4.5}
              strokeLinecap="round"
              fill="none"
              pathLength={1}
              style={{ pathLength: progress }}
            />

            {/* Trailing teal line — neon bloom (outer aura + inner glow + main stroke), progress-driven */}
            <motion.path
              d={SERPENTINE_PATH}
              stroke="url(#tealTrail)"
              strokeWidth={4}
              strokeLinecap="round"
              fill="none"
              filter="url(#neonGlow)"
              pathLength={1}
              style={{
                strokeDasharray: `${TRAIL_LENGTH} ${1 - TRAIL_LENGTH}`,
                strokeDashoffset: strokeDashOffsetMotion,
              }}
            />
            {/* Shiny white core — thin bright line on top for "hot" energy effect */}
            <motion.path
              d={SERPENTINE_PATH}
              stroke="#99F6E4"
              strokeWidth={2}
              strokeLinecap="round"
              fill="none"
              pathLength={1}
              style={{
                strokeDasharray: `${TRAIL_LENGTH} ${1 - TRAIL_LENGTH}`,
                strokeDashoffset: strokeDashOffsetMotion,
              }}
            />

            {/* Waypoint dots at each card */}
            {WAYPOINTS.map((w, i) => (
              <circle
                key={`waypoint-${i}`}
                cx={w.x}
                cy={w.y}
                r={7}
                fill="#1f2937"
                stroke="#ffffff"
                strokeWidth={2.5}
              />
            ))}
          </svg>

          {/* Step Cards */}
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="absolute"
              style={{ ...CARD_POSITIONS[i], width: "38%" }}
            >
              <StepCard step={step} isHighlighted={i === activeCardIndex} />
            </div>
          ))}
        </div>

        {/* ── Mobile / Tablet: Simple Timeline ── */}
        <div className="lg:hidden relative">
          {/* Vertical timeline connector */}
          <div className="absolute left-[19px] top-5 bottom-5 w-[2px] bg-teal/25 rounded-full" />

          <div className="space-y-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex items-start gap-4"
                >
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-teal flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 bg-white border-2 border-gray-800 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon
                        className="w-5 h-5 text-gray-800"
                        strokeWidth={2}
                      />
                      <h3 className="text-base font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
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
};

export default OurProcess;
