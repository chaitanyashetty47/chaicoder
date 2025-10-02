"use client"

import React from 'react';
import RadarBadge from './RadarBadge';
import { Timer, Gauge, Headset} from 'lucide-react';


const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-start text-center min-h-screen px-4 pt-8">
      <RadarBadge />
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-orange font-sansation mb-4 leading-tight">
      Bring the Ideas, We&apos;ll Brew the MVP
      </h1>
      
      <p className="text-base md:text-lg lg:text-xl font-medium text-text-dark max-w-2xl mt-4 leading-relaxed font-inter">
        From concept to launch-ready product, we handle strategy, design, and code so you can focus on momentum (not meltdowns).
      </p>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button onClick={() => window.open('https://calendly.com/chaitanyashetty47/the-chaicoder-discovery-call', '_blank')} className="bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-hover transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-inter hover:cursor-pointer">
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
      <div className="mt-12 flex flex-row items-center justify-center gap-4 md:gap-12 max-w-4xl">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
            <Timer className="w-4 h-4 md:w-6 md:h-6 text-teal" />
          </div>
          <span className="text-xs md:text-sm font-medium text-text-dark font-inter">
            MVPs in 6 Weeks
          </span>
        </div>
        
        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-16 border-l-2 border-dotted border-gray-300"></div>
        
        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
            <Gauge className="w-4 h-4 md:w-6 md:h-6 text-teal" />
          </div>
          <span className="text-xs md:text-sm font-medium text-text-dark font-inter">
            Optimized for Cost Efficiency
          </span>
        </div>
        
        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-16 border-l-2 border-dotted border-gray-300"></div>
        
        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
            <Headset className="w-4 h-4 md:w-6 md:h-6 text-teal" />
          </div>
          <span className="text-xs md:text-sm font-medium text-text-dark font-inter">
            1 Month Free Support
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;