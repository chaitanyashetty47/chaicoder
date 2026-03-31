"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Strentor",
    description: "We rebuilt Strentor's digital presence from the ground up - turning a generic landing page into a full-stack product ecosystem that supported growth toward $5M+ in 8 months.",
    logo: "/logos/white/strentor.png",
    link: "https://www.strentor.com",
    caseStudySlug: "strentor",
    stats: [
      { value: "$5M", label: "revenue generated" },
      { value: "100k+", label: "monthly users" },
      { value: "100+", label: "monthly calls" }
    ]
  },
  {
    id: 2,
    title: "Spopeer",
    description: "We architected Spopeer - a production ready sports networking platform, onboarding 3,000+ beta users with strong early engagement before full public launch.",
    logo: "/logos/white/spopeer-white-logo.png",
    link: "https://www.spopeer.com",
    caseStudySlug: "spopeer",
    stats: [
      { value: "3k+", label: "beta users" },
      { value: "500+", label: "profiles in 10 days" },
      { value: "7m", label: "avg session" }
    ]
  },
  {
    id: 3,
    title: "Ztraél",
    description: "We transformed Ztraél's dull Shopify experience into a cleaner, more conversion-focused product journey, lifting the conversion rate from ~1.8% to 3.2% and driving ~78% more orders.",
    logo: "/logos/white/ztrael.png",
    caseStudySlug: "ztrael",
    stats: [
      { value: "+78%", label: "in orders" },
      { value: "3.2%", label: "conversion rate" },
      { value: "2.3k+", label: "monthly visitors" }
    ]
  },
];

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <section id="our-work" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary-orange mb-4">
            Our Work
          </h2>
          <p className="text-lg text-text-dark/80 max-w-2xl mx-auto">
            Real projects, real impact. Here&apos;s how we&apos;ve helped businesses bring their vision to life.
          </p>
        </div>

        <div className="w-[90%] md:w-[80%] mx-auto relative overflow-hidden rounded-3xl transition-all duration-500 bg-teal border border-white/10 shadow-2xl">
          {/* Lighter Glow for Teal Background */}
          <div
            className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-3xl rounded-full pointer-events-none"
            aria-hidden
          />
          
          <div className="relative p-6 md:p-12 z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side - Logo & Mobile Nav */}
              <div className="flex flex-col justify-center md:justify-start items-center  pt-4 md:pt-16 h-full min-h-[120px] md:min-h-[300px] relative">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={400}
                  height={160}
                  className="w-auto h-20 md:h-36 object-contain"
                />
                
                {/* Mobile Navigation Arrows - Below Logo */}
                <div className="flex md:hidden gap-3 mt-6">
                  <button 
                    onClick={prevProject}
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={nextProject}
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6 md:space-y-8 relative">
                {/* Desktop Navigation Arrows - Top Right */}
                <div className="hidden md:flex gap-3 mb-4">
                  <button 
                    onClick={prevProject}
                    className="p-3 rounded-full bg-black/20 hover:bg-black/40 hover:cursor-pointer text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextProject}
                    className="p-3 rounded-full bg-black/20 hover:bg-black/40 hover:cursor-pointer text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-lg md:text-xl font-medium text-white leading-relaxed text-left">
                  "{project.description}"
                </p>

                <div className="grid grid-cols-3 gap-2 md:gap-4 pt-2 md:pt-4">
                  {project.stats.map((stat, i) => {
                    // Split label into two lines if it contains a space
                    const labelParts = stat.label.split(' ');
                    const firstLine = labelParts[0];
                    const secondLine = labelParts.slice(1).join(' ');

                    return (
                      <div key={i} className="space-y-1 text-left">
                        <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-white tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] lg:text-sm text-white/70 uppercase tracking-wider font-medium leading-tight">
                          <div>{firstLine}</div>
                          {secondLine && <div>{secondLine}</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 md:pt-6 flex flex-col gap-3 md:gap-4 w-full">
                  {project.caseStudySlug && (
                    <Button
                      className="bg-white hover:bg-white/90 text-teal rounded-full px-6 md:px-8 py-5 md:py-6 font-semibold transition-all duration-300 text-sm md:text-base w-full"
                      asChild
                    >
                      <Link href={`/case-study/${project.caseStudySlug}`}>
                        Read Case Study <ChevronRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      className="bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full px-6 md:px-8 py-5 md:py-6 font-semibold transition-all duration-300 text-sm md:text-base w-full"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
