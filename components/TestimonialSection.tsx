"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialSection: React.FC = () => {

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-orange font-sansation mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-text-dark font-inter">
            Hear from the founders who trusted us with their vision
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Testimonial - Text Review */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-teal/5">
              <CardContent className="p-4 md:p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg 
                    className="w-8 h-8 text-teal" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Review Text */}
                <blockquote className="text-base md:text-lg text-text-dark font-inter leading-relaxed mb-6 md:mb-8">
                  &ldquo;Working with Chaitanya was a fantastic experience. His enthusiasm, attention to detail, and ability to automate and integrate complex features into our site helped us tremendously. I highly recommend working with Chaitanya if you want to build a website or MVP tailored to your business needs.&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-primary-orange font-semibold font-inter text-base md:text-lg">
                    Aditya Mandan
                  </p>
                  <p className="text-text-dark/70 font-inter">
                    Founder, Strentor
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Testimonial - Tweet Embed */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-teal/5">
              <CardContent className="p-4 md:p-8">
                {/* Tweet Embed */}
                <div className="mb-6">
                  <blockquote className="twitter-tweet" data-theme="light">
                    <p lang="en" dir="ltr">
                      Working with <a href="https://twitter.com/thechaicoder">@thechaicoder</a> was an absolute game-changer for our project! 🚀 The attention to detail, speed of delivery, and technical expertise exceeded our expectations. Highly recommend for anyone looking to build an MVP or scale their product.
                    </p>
                    <a href="https://twitter.com/Spopeer/status/1972354853524697181?ref_src=twsrc%5Etfw">December 15, 2024</a>
                  </blockquote>
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>

                {/* Author Info */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-primary-orange font-semibold font-inter text-base md:text-lg">
                    Erdit Bushati
                  </p>
                  <p className="text-text-dark/70 font-inter">
                    Founder, Spopeer
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
