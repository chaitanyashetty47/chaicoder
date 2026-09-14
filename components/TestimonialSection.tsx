"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import VideoTestimonialCard, { VideoTestimonial } from '@/components/VideoTestimonialCard';

const videoTestimonials: VideoTestimonial[] = [
  {
    src: '/testimonials/mandan.mp4',
    poster: '/testimonials/mandan-poster.jpg',
    name: 'Aditya Mandan',
    title: 'Founder, Strentor',
  },
  {
    src: '/testimonials/moghe.mp4',
    poster: '/testimonials/moghe-poster.jpg',
    name: 'Aditya Moghe',
    title: 'Founder, Ztraél',
  },
];

interface TextTestimonial {
  quote: string;
  name: string;
  title: string;
  /** Optional photo. Falls back to an initials avatar when absent. */
  avatar?: string;
}

const textTestimonials: TextTestimonial[] = [
  {
    quote:
      'Working with Chaitanya was an absolute game-changer for us. The attention to detail, speed of delivery, and technical expertise far exceeded our expectations. I would highly recommend him to anyone looking to build or scale a product.',
    name: 'Erdit Bushati',
    title: 'Founder, Spopeer',
  },
  {
    quote:
      'Chaitanya built us an internal tool with automation baked in that let us replace several SaaS subscriptions and cut a recurring 16-hour manual workflow down to just 2 hours. A massive win for our team’s productivity.',
    name: 'Dhwaj Kenny',
    title: 'Co-Founder, Pytch',
  },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const TestimonialSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-teal mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-primary-orange mb-3 md:mb-4">
            What Clients Say
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-dark/80 max-w-2xl mx-auto">
            Hear from the founders who trusted us with their vision
          </p>
        </motion.div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8 max-w-4xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <VideoTestimonialCard
                {...testimonial}
                isActive={activeVideo === index}
                onPlay={() => setActiveVideo(index)}
              />
            </motion.div>
          ))}
        </div>

        {/* Text Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {textTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border border-border/70 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-base md:text-lg text-text-dark font-inter leading-relaxed mb-6 md:mb-8 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-6 flex items-center gap-3">
                    {testimonial.avatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-teal/20 ring-offset-2 ring-offset-white"
                      />
                    ) : (
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/15 text-teal font-semibold font-inter text-sm ring-2 ring-teal/20 ring-offset-2 ring-offset-white">
                        {getInitials(testimonial.name)}
                      </span>
                    )}
                    <div>
                      <p className="text-primary-orange font-semibold font-inter text-base md:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-text-dark/60 font-inter text-sm md:text-base">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
