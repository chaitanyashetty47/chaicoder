"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E07A5F] font-sansation mb-4 leading-tight">
          🚀 Simple, Transparent Pricing
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-medium text-[#3D2C20] max-w-3xl mx-auto leading-relaxed font-inter">
          Pick the plan that fits your launch goals, no hidden fees, no surprises.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        
        {/* Landing Page Starter - Left Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#3D2C20] font-sansation mb-2">
              Landing Page Starter
            </h3>
            <div className="text-4xl font-bold text-[#E07A5F] font-sansation">
              $1499
            </div>
          </div>

          <Button 
            onClick={() => window.open('https://calendly.com/chaitanyashetty47/the-chaicoder-discovery-call', '_blank')} 
            variant="outline"
            className="w-full mb-8 bg-white text-[#008080] border-2 border-[#008080] font-semibold py-3 px-6 rounded-lg hover:bg-[#008080] hover:text-white transition-all duration-300 font-inter hover:cursor-pointer"
          >
            Launch My Page
          </Button>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Launch-ready in 2 weeks</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">One revision included</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">One request at a time</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Conversion-optimized UX</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Designed for pitch & validation</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Fully responsive layout</span>
            </div>
          </div>

         
        </div>

        {/* MVP Starter - Center Card (Most Popular) */}
        <div className="bg-white rounded-2xl p-8 border-2 border-[#008080] shadow-xl relative transform scale-105 hover:shadow-2xl transition-all duration-300">
          {/* Most Popular Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#008080] text-white px-4 py-2 rounded-full text-sm font-semibold font-inter">
              Most Popular
            </div>
          </div>

          <div className="text-center mb-6 mt-4">
            <h3 className="text-xl font-bold text-[#3D2C20] font-sansation mb-2">
              MVP Starter
            </h3>
            <div className="text-sm text-[#666666] font-inter ">Starting at</div>
            <div className="text-4xl font-bold text-[#E07A5F] font-sansation">
              $2749
            </div>
          </div>

          <Button 
            onClick={() => window.open('https://calendly.com/chaitanyashetty47/the-chaicoder-discovery-call', '_blank')} 
            className="w-full bg-[#008080] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#006666] transition-all duration-300 font-inter space-y-4 mb-8 hover:cursor-pointer"
          >
            Start My MVP
          </Button>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Launch in 6 Weeks</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Post-Launch Care (14 Days)</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Focused Development – one request at a time</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Weekly Progress Sync</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Priority Features First</span>
            </div>
          </div>

          
        </div>

        {/* Custom Solutions - Right Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 relative">
          {/* Recommended Badge */}
          <div className="absolute -top-3 right-4">
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#3D2C20] px-3 py-1 rounded-full text-xs font-semibold font-inter shadow-sm">
              Recommended by Founders
            </div>
          </div>
          <div className="text-center mb-6 mt-2">
            <h3 className="text-xl font-bold text-[#3D2C20] font-sansation mb-2">
              Custom Solutions
            </h3>
            <div className="text-sm text-[#666666] font-inter mt-1">Starting at</div>
            <div className="text-4xl font-bold text-[#E07A5F] font-sansation">
              $1999<span className="text-lg text-[#3D2C20]">/mo</span>
            </div>
          </div>

          <Button 
            onClick={() => window.open('https://calendly.com/chaitanyashetty47/the-chaicoder-discovery-call', '_blank')} 
            variant="outline"
            className="w-full bg-white text-[#008080] mb-8 border-2 border-[#008080] font-semibold py-3 px-6 rounded-lg hover:bg-[#008080] hover:text-white transition-all duration-300 font-inter hover:cursor-pointer"
          >
            Book a Call
          </Button>

          <div className="space-y-4 ">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Everything in MVP Starter</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">One request at a time</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Unlimited requests per month</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Targeted 90-day delivery for initial launch</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#3D2C20] font-inter">Trusted by Strentor & Spopeer</span>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default PricingSection;