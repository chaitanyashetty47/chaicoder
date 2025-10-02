import { MessageCircle, MapPin, Code, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Consultation Call",
    description: "Kick things off with a discovery session to clarify your vision, goals, and requirements.",
    icon: MessageCircle,
    color: "bg-[#FFD4C2]",
  },
  {
    number: "2",
    title: "Planning & Roadmap",
    description: "In one week, we define scope, prioritize features, and craft a roadmap for your MVP launch.",
    icon: MapPin,
    color: "bg-[#B5E5DD]",
  },
  {
    number: "3",
    title: "Development & Testing",
    description: "We build fast using AI-powered tools (Cursor, CodeRabbit, Lovable), ensuring lean, secure, and scalable code.",
    icon: Code,
    color: "bg-[#FFB5D8]",
  },
  {
    number: "4",
    title: "Launch",
    description: "Your MVP goes live, ready to gather real user feedback or pitch confidently to investors.",
    icon: Rocket,
    color: "bg-[#FFF4B5]",
  },
  {
    number: "5",
    title: "Post-Launch Support",
    description: "We don't stop at launch. Expect bug fixes, iterations, and guidance to keep your MVP growing.",
    icon: Headphones,
    color: "bg-[#E5D4FF]",
  },
];

const OurProcess = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-orange mb-4">
            Our 5-Step MVP Blueprint
          </h2>
          <p className="text-lg md:text-xl text-text-dark max-w-4xl mx-auto">
            A lean, market-ready MVP in 5 proven phases, designed to save time, cut costs, and maximize impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-border" />

          {/* Timeline steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex items-start gap-6 md:gap-8">
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-background bg-teal flex items-center justify-center shadow-lg">
                      <span className="text-lg md:text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-full ${step.color} p-6 md:p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm md:text-base text-text-dark/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 hidden md:block">
                        <Icon className="w-12 h-12 text-text-brown/60" strokeWidth={1.5} />
                      </div>
                    </div>
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
