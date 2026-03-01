"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-gradient-to-r from-chai-foam from-20% via-chai-light/55 via-[65]% to-chai-foam">
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image 
              src="/Logo-without-Bg.png" 
              alt="The Chai Coder" 
              width={156}
              height={90}
              className="h-15 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center space-x-8">
            <Link href="/#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300">
              Home
            </Link>
            <Link href="/#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300">
              Testimonials
            </Link>
            <Link href="/#our-work" onClick={(e) => handleNavClick(e, 'our-work')} className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300">
              Our Work
            </Link>
            <Link href="/case-study" className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300">
              Case Study
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <button onClick={() => window.open('https://cal.com/chaitanya-shetty/the-chai-coder-discovery-call', '_blank')} className="bg-[#2A9D8F] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#238B7A] transition-colors duration-300 font-inter hover:cursor-pointer">
            Book Your Call
          </button>
        </div>  

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#3D2C20] hover:text-[#E07A5F] transition-colors duration-300 hover:cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <div className="flex flex-col py-4 px-8 space-y-4">
            <Link href="/#hero" onClick={() => setIsMenuOpen(false)} className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300 py-2 text-left block">
              Home
            </Link>
            <Link href="/#testimonials" onClick={() => setIsMenuOpen(false)} className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300 py-2 text-left block">
              Testimonials
            </Link>
            <Link href="/#our-work" onClick={() => setIsMenuOpen(false)} className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300 py-2 text-left block">
              Our Work
            </Link>
            <Link href="/case-study" onClick={() => setIsMenuOpen(false)} className="text-[#3D2C20] font-inter hover:text-[#E07A5F] transition-colors duration-300 py-2 text-left block">
              Case Study
            </Link>
            <button onClick={() => window.open('https://cal.com/chaitanya-shetty/the-chai-coder-discovery-call', '_blank')} className="bg-[#2A9D8F] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#238B7A] transition-colors duration-300 font-inter mt-4 self-start hover:cursor-pointer">
              Book Your Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;