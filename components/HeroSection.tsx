"use client"

import React from 'react';
import RadarBadge from './RadarBadge';
import { Timer, Gauge, Headset} from 'lucide-react';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';


const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-start text-center px-4 pt-8 pb-8 min-h-[500px] overflow-hidden">
      {/* Dotted glow background - fills hero, repeats via canvas */}
      <DottedGlowBackground
        className="pointer-events-none absolute inset-0"
        opacity={0.7}
        gap={14}
        radius={1.5}
        colorLightVar="--color-dot-orange"
        glowColorLightVar="--color-glow-orange"
        colorDarkVar="--color-dot-orange"
        glowColorDarkVar="--color-glow-orange"
        backgroundOpacity={0}
        speedMin={0.2}
        speedMax={1}
        speedScale={1}
      />
      
      {/* Content - above background */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <RadarBadge />
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-orange font-sansation mb-4 leading-tight text-center">
          Bring the Ideas.<br /> We&apos;ll Brew the MVP
        </h1>
        
        <p className="text-base text-center md:text-lg lg:text-xl font-medium text-text-dark max-w-2xl mt-4 leading-relaxed font-inter mx-auto">
        Your trusted tech partner handling strategy, design, and engineering from concept to launch-ready product.
        </p>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button onClick={() => window.open('https://cal.com/chaitanya-shetty-mabufa/30min', '_blank')} className="bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-hover transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-inter hover:cursor-pointer">
          Book Your Call
        </button>
        
        <button onClick={() => {
          const element = document.getElementById('our-work');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }} className="bg-white text-teal border-2 border-teal font-semibold px-6 py-3 rounded-lg hover:bg-teal hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-inter hover:cursor-pointer">
          See Our Work
        </button>
      </div>
      
      {/* Features Section */}
      {/* Features Section - commented out
      <div className="mt-12 flex flex-row items-center justify-center gap-4 md:gap-12 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
            <Timer className="w-4 h-4 md:w-6 md:h-6 text-teal" />
          </div>
          <span className="text-xs md:text-sm font-medium text-text-dark font-inter">
            MVPs in 6 Weeks
          </span>
        </div>
        <div className="hidden md:block w-px h-16 border-l-2 border-dotted border-gray-300"></div>
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
            <Gauge className="w-4 h-4 md:w-6 md:h-6 text-teal" />
          </div>
          <span className="text-xs md:text-sm font-medium text-text-dark font-inter">
            Optimized for Cost Efficiency
          </span>
        </div>
        <div className="hidden md:block w-px h-16 border-l-2 border-dotted border-gray-300"></div>
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
            <Headset className="w-4 h-4 md:w-6 md:h-6 text-teal" />
          </div>
          <span className="text-xs md:text-sm font-medium text-text-dark font-inter">
            1 Month Free Support
          </span>
        </div>
      </div>
      */}
      </div>
    </section>
  );
};

export default HeroSection;