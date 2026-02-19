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
    // width: 501,  // 3x the default width (167 * 3)
    // height: 96,  // 3x the default height (32 * 3)
    // className: "h-24 w-auto object-contain"  // 3x the default height class (h-8 * 3 = h-24)
  },
  {
    id: 3,
    name: "Penaltyboxd",
    src: "/penaltyboxd-logo.png",
  },
  {
    id: 4,
    name: "Pytch",
    src: "/pytch-logo.png",
  }
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
        <LogoCarousel logos={trustedLogos} />
      </div>
    //   </CardContent>
    // </Card>
  );
}
