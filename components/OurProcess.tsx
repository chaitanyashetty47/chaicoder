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
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-3 md:mb-4">
            Our 5-Step MVP Blueprint
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-dark max-w-4xl mx-auto px-2">
            A lean, market-ready MVP in 5 proven phases, designed to save time, cut costs, and maximize impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline steps */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex items-start gap-3 md:gap-6 lg:gap-8">
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-3 md:border-4 border-background bg-teal flex items-center justify-center shadow-lg">
                      <span className="text-sm md:text-lg lg:text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-2xl md:rounded-3xl lg:rounded-full ${step.color} p-4 md:p-6 lg:p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    <div className="flex items-start md:items-center justify-between gap-3 md:gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-text-dark mb-1 md:mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm lg:text-base text-text-dark/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 hidden sm:block">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-text-brown/60" strokeWidth={1.5} />
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
