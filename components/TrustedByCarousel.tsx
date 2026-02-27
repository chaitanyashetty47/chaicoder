"use client";

import { LogoCarousel } from "@/components/ui/logo-carousel";

// Actual company logos
const trustedLogos = [
  { 
    id: 1, 
    name: "Spopeer", 
    src: "/spopeer-no-logo.png" 
  },
  { 
    id: 2, 
    name: "Strentor", 
    src: "/str-compressed.png",
 
  },
  {
    id: 3,
    name: "Pytch",
    src: "/pytch-logo.png",
  },
  {
    id: 4,
    name: "Ztreal",
    src: "/ztreal-logo.png",
    scale: 1.5,
  },
  {
    id: 5,
    name: "Penaltyboxd",
    src: "/penaltyboxd-logo.png",
  },
  
];

export default function TrustedByCarousel() {
  return (

      <div className="mx-4 mt-4 mb-8 border-chai-cream  backdrop-blur-sm">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm font-medium tracking-widest text-text-dark">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </p>
          <h2 className="text-3xl md:text-[3rem] font-bold tracking-tight leading-none text-primary-orange">
            The best are already here
          </h2>
        </div>
        <LogoCarousel logos={trustedLogos} />
      </div>

  );
}
