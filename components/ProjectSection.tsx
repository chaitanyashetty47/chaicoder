import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Strentor",
    tagline: "Wellness Platform",
    description: "Strentor is a wellness platform designed to help users stay consistent with their fitness journey. We built a scalable website where clients can subscribe to workout plans, get assigned trainers, and track progress. Features include client workout logs, trainer dashboards, admin oversight, and Razorpay payment integration.",
    image: "/strentor-hero.jpg",
    link: "https://www.strentor.com",
    caseStudySlug: "strentor",
    inProgress: false,
  },
  {
    id: 2,
    title: "Spopeer",
    tagline: "Social Networking",
    description: "Spopeer is a social platform built to connect sports professionals in one place. Tailored for athletes, coaches, and clubs, it focuses on scalable performance with features like media uploads, profile management, discovery, and connection requests. Designed to evolve with community needs while keeping usability at the center.",
    image: "/spopeer-hero.jpg",
    link: "https://www.spopeer.com",
    caseStudySlug: "spopeer-case-study",
    inProgress: true,
  },
  {
    id: 3,
    title: "Penaltyboxd",
    tagline: "Football Community",
    description: "Penaltyboxd is a community-driven platform where fans can rate, review, and discuss matches. Users can log games they've watched, share opinions, and browse insights from others. The goal is to unite football enthusiasts in a dedicated space for engaging discussions and reviews.",
    image: "/penatyboxd-hero.jpg",
    link: "https://www.penaltyboxd.com",
    caseStudySlug: "penaltyboxd-case-study",
    inProgress: false,
  },
  
];

const ProjectShowcase = () => {
  return (
    <section id="our-work" className="py-20 px-4 ">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-orange mb-4">
            Our Work
          </h2>
          <p className="text-lg text-text-dark/80 max-w-2xl mx-auto">
            Real projects, real impact. Here&apos;s how we&apos;ve helped businesses bring their vision to life.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group w-[80%] mx-auto relative overflow-hidden rounded-2xl transition-all duration-500 shadow-[0_8px_30px_rgba(61,44,32,0.12),0_20px_60px_rgba(61,44,32,0.15)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(61,44,32,0.18),0_30px_80px_rgba(61,44,32,0.22),0_0_0_1px_rgba(0,128,128,0.1)] hover:-translate-y-1"
            >
              {/* Background: gradient darker on left, at 35% opacity */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-chai-light via-chai-foam to-chai-foam opacity-0"
                aria-hidden
              />
              {/* Liquid glass layer */}
              <div
                className="relative p-6 md:p-8 rounded-2xl backdrop-blur-md bg-chai-foam/30 border border-white/50 shadow-[inset_0_1px_0px_rgba(255,255,255,0.8),0_0_12px_rgba(61,44,32,0.08),0_4px_16px_rgba(61,44,32,0.1)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/50 before:via-transparent before:to-transparent before:opacity-80 before:pointer-events-none before:content-[''] after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-tl after:from-white/25 after:via-transparent after:to-transparent after:opacity-60 after:pointer-events-none after:content-[''] group-hover:border-teal/30 transition-all duration-500"
              >
                <div
                  className={`relative z-10 grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                {/* Left side - Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-text-dark">
                      {project.title}
                    </h3>
                    <Badge className="bg-teal/15 text-teal hover:bg-teal/20 border-0 rounded-full px-4 py-1 font-medium">
                      {project.tagline}
                    </Badge>
                    <div className="text-base">
                      <span className="font-bold text-text-dark">2025</span>
                      <span className="text-text-dark/60 ml-1">
                        {project.inProgress ? "  In Progress" : "  Completed"}
                      </span>
                    </div>
                    <hr className="border-t border-text-dark/20 mt-3" />
                  </div>
                  
                  <p className="text-text-dark/70 leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                  {project.caseStudySlug && (
                    <Button
                      className="bg-white border border-teal text-teal hover:bg-teal/5 rounded-lg shadow-sm transition-all duration-300 w-fit"
                      asChild
                    >
                      <Link href={`/case-study/${project.caseStudySlug}`}>
                        Read Case Study
                      </Link>
                    </Button>
                  )}
                  {project.link && project.link !== "#" && (
                    <Button 
                      className="bg-teal hover:bg-teal/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-fit"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Check Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  </div>
                </div>

                {/* Right side - Image */}
                <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={364}
                      sizes="(max-width: 768px) 80vw, 640px"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0}
                    />
                    
                    {/* Work In Progress Badge */}
                    {project.inProgress && (
                      <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-l-[80px] border-t-[#FFD700] border-l-transparent">
                        <span className="absolute -top-[68px] right-[5px] text-black text-xs font-bold rotate-45 origin-center">
                          Work In Progress
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
