"use client"

import React from 'react';
import RadarBadge from './RadarBadge';
import { Timer, Gauge, Headset} from 'lucide-react';
import { DottedStaticBackground } from '@/components/ui/dotted-static-background';


const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-start text-center px-4 pt-8 pb-8 min-h-[500px] overflow-hidden">
      {/* Static dotted background - same dot count as animated version, no performance cost */}
      <DottedStaticBackground
        className="pointer-events-none absolute inset-0"
        opacity={0.7}
        gap={14}
        radius={1.5}
        colorLightVar="--color-dot-orange"
        glowColorLightVar="--color-glow-orange"
        colorDarkVar="--color-dot-orange"
        glowColorDarkVar="--color-glow-orange"
      />
      
      {/* Content - above background */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <RadarBadge />
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-orange font-sansation mb-4 leading-tight text-center">
          Bring the Ideas.<br /> We&apos;ll Brew the Product
        </h1>
        
        <p className="text-base text-center md:text-lg lg:text-xl font-medium text-text-dark max-w-2xl mt-4 leading-relaxed font-inter mx-auto">
        Your trusted tech partner handling strategy, design, and engineering from concept to launch-ready product.
        </p>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button onClick={() => window.open('https://cal.com/chaitanya-shetty/the-chai-coder-discovery-call', '_blank')} className="bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-hover transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-inter hover:cursor-pointer">
          Book Your Call
        </button>
        
        <button onClick={() => {
          const element = document.getElementById('our-work');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }} className="bg-white text-teal border-2 border-teal font-semibold px-6 py-3 rounded-lg hover:bg-teal/10 hover:border-teal-hover hover:text-teal transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-inter hover:cursor-pointer">
          See Our Work
        </button>
      </div>
      
      </div>
    </section>
  );
};

export default HeroSection;