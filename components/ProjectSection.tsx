import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Strentor",
    tagline: "Wellness Platform",
    description: "Strentor is a wellness platform designed to help users stay consistent with their fitness journey. We built a scalable website where clients can subscribe to workout plans, get assigned trainers, and track progress. Features include client workout logs, trainer dashboards, admin oversight, and Razorpay payment integration.",
    image: "/strentor-hero.jpg",
    link: "https://www.strentor.com",
    inProgress: false,
  },
  {
    id: 2,
    title: "Spopeer",
    tagline: "Sports Networking",
    description: "Spopeer is a social platform built to connect sports professionals in one place. Tailored for athletes, coaches, and clubs, it focuses on scalable performance with features like media uploads, profile management, discovery, and connection requests. Designed to evolve with community needs while keeping usability at the center.",
    image: "/spopeer-hero.jpg",
    link: "https://www.spopeer.com/",
    inProgress: true,
  },
  {
    id: 3,
    title: "FootyNote",
    tagline: "Football Community",
    description: "FootyNote is a community-driven platform where fans can rate, review, and discuss matches. Users can log games they've watched, share opinions, and browse insights from others. The goal is to unite football enthusiasts in a dedicated space for engaging discussions and reviews.",
    image: "/footybox.png",
    link: "#",
    inProgress: true,
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
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left side - Content */}
              <div className={`space-y-6 p-2.5 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-3">
                    {project.title}
                  </h3>
                  <Badge className="bg-[#FFD700] text-text-dark hover:bg-[#FFD700]/90 rounded-full px-4 py-1">
                    {project.tagline}
                  </Badge>
                </div>
                
                <p className="text-text-brown/70 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>

                {project.link !== "#" && (
                  <Button 
                    className="bg-teal hover:bg-teal/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Check Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>

              {/* Right side - Image */}
              <div className={`relative p-2.5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1897}
                    height={864}
                    className="w-full h-auto object-contain"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
