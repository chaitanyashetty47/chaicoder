"use client";

import { ArrowRight, Building2, Rocket } from "lucide-react";

const CAL_LINK = "https://cal.com/chaitanya-shetty/the-chai-coder-discovery-call";

const offerings = [
  {
    icon: Building2,
    title: "Internal Tools for Agencies & Businesses",
    description:
      "Your team is duct-taping 6 SaaS tools together. We build one custom dashboard that does the job of all of them.",
    steps: [
      "You walk us through your workflow and where it breaks",
      "We map what overlaps and what's wasting hours",
      "We build one system that replaces the mess",
      "You see progress daily, not a handoff in 3 weeks",
    ],
    cta: "Tell us what you're duct-taping together",
  },
  {
    icon: Rocket,
    title: "MVPs for Founders & Creators",
    description:
      "You've got the audience and the idea. We build the product so you can sell it this month, not next year.",
    steps: [
      "You bring the idea (napkin sketch, voice note, Google Sheet)",
      "We scope and sometimes prototype on the first call",
      "We build and ship in days, not weeks",
      "You launch to the audience you already have",
    ],
    cta: "Tell us about your idea",
  },
];

export default function TwoWaysSection() {
  return (
    <section
      id="two-ways"
      className="relative mx-auto w-full max-w-5xl px-4 md:px-1 mt-24"
      aria-labelledby="two-ways-heading"
    >
      <header className="mb-8 md:mb-10 text-center">
        <h2
          id="two-ways-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-primary-orange mb-3 md:mb-4"
        >
          Two Ways We Work With You
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-text-dark max-w-2xl mx-auto">
          Whether you need software built inside your business or a product to take to market.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {offerings.map((offering) => {
          const Icon = offering.icon;
          return (
            <div
              key={offering.title}
              className="group relative overflow-hidden rounded-2xl border bg-background px-6 pt-8 pb-6 flex flex-col"
            >
              <div className="flex size-12 items-center justify-center rounded-full border bg-card shadow-xs outline outline-border/80 outline-offset-2 mb-6">
                <Icon className="size-5 text-teal" strokeWidth={2} />
              </div>

              <h3 className="font-medium text-foreground text-lg mb-2">
                {offering.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {offering.description}
              </p>

              <ol className="space-y-3 mb-6 flex-1 list-none">
                {offering.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-text-dark/90"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-xs font-semibold text-teal">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              <button
                type="button"
                onClick={() => window.open(CAL_LINK, "_blank")}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-hover transition-colors duration-300 font-inter hover:cursor-pointer group/btn"
              >
                {offering.cta}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
