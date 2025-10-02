"use client";

import React from 'react';
import { Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-chai-foam to-chai-light border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center">
          
          {/* Left - Navigation Links */}
          <div className="flex flex-row gap-8">
            <button 
              onClick={() => scrollToSection('our-work')}
              className="text-text-dark hover:text-primary-orange transition-colors duration-300 font-inter font-medium"
            >
              Our Work
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-text-dark hover:text-primary-orange transition-colors duration-300 font-inter font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-text-dark hover:text-primary-orange transition-colors duration-300 font-inter font-medium"
            >
              Pricing
            </button>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-text-dark font-inter">
              © 2025 The Chai Coder. All rights reserved.
            </p>
          </div>

          {/* Right - Social Media */}
          <div className="flex justify-end">
            <a 
              href="https://twitter.com/chaitanyashetty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-dark hover:text-primary-orange transition-colors duration-300 group"
            >
              <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Twitter className="w-5 h-5" />
              </div>
              <span className="font-inter font-medium">Stay Connected</span>
            </a>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden mt-8 pt-8 border-t border-gray-200">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-6">
              <button 
                onClick={() => scrollToSection('our-work')}
                className="text-text-dark hover:text-primary-orange transition-colors duration-300 font-inter font-medium"
              >
                Our Work
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-text-dark hover:text-primary-orange transition-colors duration-300 font-inter font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-text-dark hover:text-primary-orange transition-colors duration-300 font-inter font-medium"
              >
                Pricing
              </button>
            </div>
            
            <a 
              href="https://x.com/thechaicoder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-dark hover:text-primary-orange transition-colors duration-300 group"
            >
              <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Twitter className="w-5 h-5" />
              </div>
              <span className="font-inter font-medium">Stay Connected</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
