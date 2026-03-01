"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openBooking = () => {
    window.open("https://cal.com/chaitanya-shetty/the-chai-coder-discovery-call", "_blank");
  };

  return (
    <footer
      className="mt-20 bg-teal text-white rounded-t-3xl"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        {/* Top CTA + navigation */}
        <section
          className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between"
          aria-label="Footer primary actions and navigation"
        >
          {/* Left: Logo + CTA */}
          <div className="max-w-md space-y-4">
            <div className="flex items-center">
              <Image
                src="/chaicoder_logo_whitet_bg.png"
                alt="The Chai Coder"
                width={312}
                height={180}
                className="h-12 w-auto object-left"
                priority
              />
            </div>
            <div className="mt-4 inline-flex flex-col items-start gap-4 rounded-2xl bg-neutral-900/95 px-6 py-5 shadow-lg">
              <h2
                id="footer-heading"
                className="text-2xl md:text-3xl font-bold tracking-tight text-white"
              >
                Start Your Project Today
              </h2>
              <button
                type="button"
                onClick={openBooking}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 font-inter text-sm md:text-base font-semibold text-neutral-900 shadow-sm transition-colors duration-300 hover:bg-neutral-100 hover:cursor-pointer"
              >
                Book Your Call
              </button>
            </div>
          </div>

          {/* Right: Navigation links - aligned slightly below logo, equidistant from right edge */}
          <nav
            className="flex flex-col items-end gap-2 pt-10 text-sm md:text-base md:pt-12 md:pr-0"
            aria-label="Footer site links"
          >
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-teal-50/90 hover:text-white hover:font-bold transition-colors duration-300 font-inter cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("our-work")}
              className="text-teal-50/90 hover:text-white hover:font-bold transition-colors duration-300 font-inter cursor-pointer"
            >
              Our Work
            </button>
            <Link
              href="/case-study"
              className="text-teal-50/90 hover:text-white hover:font-bold transition-colors duration-300 font-inter"
            >
              Case Study
            </Link>
          </nav>
        </section>

        {/* Divider */}
        <div className="mt-10 border-t border-teal-200/40" />

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col items-center justify-between gap-4 text-xs md:flex-row md:text-sm">
          <p className="font-inter text-teal-50/80">
            © {new Date().getFullYear()} The Chai Coder. All rights reserved.
          </p>
          <a
            href="https://x.com/thechaicoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 group"
          >
            <div className="p-2 bg-black/80 rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <Twitter className="w-4 h-4 text-white" />
            </div>
            <span className="font-inter font-medium">Follow on X</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
