"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50">
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/Logo-without-Bg.png" 
            alt="The Chai Coder" 
            className="h-15 w-auto"
          />
          {/* <h1 className="text-2xl font-bold text-[#E07A5F] font-sansation">
            TheChaiCoder
          </h1> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300">
              Home
            </a>
            <a href="#" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300">
              Pricing
            </a>
            <a href="#" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300">
              Testimonials
            </a>
            <a href="#" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300">
              Our Work
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <button className="bg-[#2A9D8F] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#238B7A] transition-colors duration-300 font-inter">
            Book My Slot
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#3D2C20] hover:text-[#E07A5F] transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <div className="flex flex-col py-4 px-8 space-y-4">
            <a href="#" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300 py-2">
              Home
            </a>
            <a href="#" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300 py-2">
              Pricing
            </a>
            <a href="#" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300 py-2">
              Testimonials
            </a>
            <a href="#" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300 py-2">
              Our Work
            </a>
            <button className="bg-[#2A9D8F] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#238B7A] transition-colors duration-300 font-inter mt-4 self-start">
              Book My Slot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;