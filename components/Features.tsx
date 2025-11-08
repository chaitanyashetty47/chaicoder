import { Clock, BadgeDollarSign, Gauge, Package, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "6-Week Delivery",
    description: "From idea to working product in just six weeks, on time, every time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Excellence",
    description: "Transparent pricing with no surprises. Quality work at a fixed monthly rate.",
  },
  {
    icon: Gauge,
    title: "Optimized for Efficiency",
    description: "Sleek, reliable, and scalable builds that keep your MVP lean and future-ready.",
  },
  {
    icon: Package,
    title: "End-to-End Solutions",
    description: "Design, development, deployment. We handle it all while you sip your chai.",
  },
  {
    icon: Headphones,
    title: "Post-Launch Support",
    description: "Free 30-day support to ensure a smooth transition and confident launch.",
  },
  {
    icon: RefreshCw,
    title: "Retainer Flexibility",
    description: "Scale without stress. Affordable retainers for ongoing maintenance, upgrades, and new features.",
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-3 md:mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-dark max-w-2xl mx-auto">
            Building MVPs shouldn&apos;t feel messy, here&apos;s how we make it smooth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 md:p-4 rounded-lg transition-all duration-300 hover:bg-secondary/50"
              >
                <div className="mb-3 md:mb-4">
                  <Icon className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#2A9D8F]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-text-dark mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-text-dark/80 leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
