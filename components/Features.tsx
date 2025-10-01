import { Clock, BadgeDollarSign, Gauge, Package, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "6-Week Delivery",
    description: "From idea to working product in just six weeks—on time, every time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Excellence",
    description: "Transparent pricing with no surprises—quality work at a fixed monthly rate.",
  },
  {
    icon: Gauge,
    title: "Optimized for Efficiency",
    description: "Sleek, reliable, and scalable builds that keep your MVP lean and future-ready.",
  },
  {
    icon: Package,
    title: "End-to-End Solutions",
    description: "Design, development, deployment—we handle it all while you sip your chai.",
  },
  {
    icon: Headphones,
    title: "Post-Launch Support",
    description: "Free 14-day support to ensure a smooth transition and confident launch.",
  },
  {
    icon: RefreshCw,
    title: "Retainer Flexibility",
    description: "Scale without stress—affordable retainers for ongoing maintenance, upgrades, and new features.",
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="py-12 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-orange mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg md:text-xl text-text-dark max-w-3xl mx-auto">
            Building MVPs shouldn't feel messy, here's how we make it smooth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 hover:bg-secondary/50"
              >
                <div className="mb-4">
                  <Icon className="w-16 h-16 text-[#2A9D8F]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-text-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
