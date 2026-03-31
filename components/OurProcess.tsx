"use client";

function PhoneCallIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteMapProcessIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M26,1H6C4.9,1,4,1.9,4,3v26c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V3C28,1.9,27.1,1,26,1z M10,23 c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C11,22.552,10.552,23,10,23z M10,19c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C11,18.552,10.552,19,10,19z M10,15c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1 C11,14.552,10.552,15,10,15z M10,11c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C11,10.552,10.552,11,10,11z M22,23h-8 c-0.552,0-1-0.448-1-1s0.448-1,1-1h8c0.552,0,1,0.448,1,1S22.552,23,22,23z M22,19h-8c-0.552,0-1-0.448-1-1s0.448-1,1-1h8 c0.552,0,1,0.448,1,1S22.552,19,22,19z M22,15h-8c-0.552,0-1-0.448-1-1s0.448-1,1-1h8c0.552,0,1,0.448,1,1S22.552,15,22,15z M22,11 h-8c-0.552,0-1-0.448-1-1s0.448-1,1-1h8c0.552,0,1,0.448,1,1S22.552,11,22,11z"
        fill="currentColor"
      />
    </svg>
  );
}

function CodeBracketIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
        <path strokeLinejoin="round" d="M7 8l-4 4 4 4" />
        <path d="M10.5 18l3-12" />
        <path strokeLinejoin="round" d="M17 8l4 4-4 4" />
      </g>
    </svg>
  );
}

function RocketLaunchIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 14.9998L9 11.9998M12 14.9998C13.3968 14.4685 14.7369 13.7985 16 12.9998M12 14.9998V19.9998C12 19.9998 15.03 19.4498 16 17.9998C17.08 16.3798 16 12.9998 16 12.9998M9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998M9 11.9998H4C4 11.9998 4.55 8.96976 6 7.99976C7.62 6.91976 11 7.99976 11 7.99976M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0044 5.97223 15.9878C5.43516 15.9712 4.91088 16.1535 4.5 16.4998Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface StepData {
  title: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
}

const steps: StepData[] = [
  {
    title: "Consultation Call",
    description:
      "Kick things off with a discovery session to clarify your vision, goals, and requirements.",
    icon: PhoneCallIcon,
  },
  {
    title: "Planning & Roadmap",
    description:
      "In one week, we define scope, prioritize features, and craft a roadmap for your Product launch.",
    icon: RouteMapProcessIcon,
  },
  {
    title: "Development & Testing",
    description:
      "We build fast using AI-powered tools (Cursor, CodeRabbit, Lovable), ensuring lean, secure, and scalable code.",
    icon: CodeBracketIcon,
  },
  {
    title: "Launch",
    description:
      "Your Product goes live, ready to gather real user feedback or pitch confidently to investors.",
    icon: RocketLaunchIcon,
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-primary-orange mb-3 md:mb-4">
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
