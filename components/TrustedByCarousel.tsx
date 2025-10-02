"use client";

import { LogoCarousel } from "@/components/ui/logo-carousel";

// Actual company logos
const trustedLogos = [
  { 
    id: 1, 
    name: "Spopeer", 
    src: "/spopeer-logo.svg" 
  },
  { 
    id: 2, 
    name: "Strentor", 
    src: "/strentor-logo.svg" 
  },
];

export default function TrustedByCarousel() {
  return (
    // <Card className="mx-4 my-8 border-chai-cream  backdrop-blur-sm">
    //   <CardContent className="pt-6">
      <div className="mx-4 mt-4 mb-8 border-chai-cream  backdrop-blur-sm">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm font-medium tracking-widest text-text-dark">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </p>
          <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tight leading-none text-primary-orange">
            The best are already here
          </h2>
        </div>
        <LogoCarousel logos={trustedLogos} columns={1} />
      </div>
    //   </CardContent>
    // </Card>
  );
}
