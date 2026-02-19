"use client";

import React from 'react';
import { PricingCard, PricingTier } from '@/components/ui/pricing-card';

const pricingTiers: PricingTier[] = [
  {
    id: 'the-prototype',
    title: 'The Prototype',
    priceSubtext: 'Starting at',
    price: '$2749',
    buttonText: 'Book a Call',
    buttonUrl: 'https://cal.com/chaitanya-shetty-mabufa/30min',
    buttonVariant: 'outline',
    features: [
      'Launch in 4-5 weeks',
      'Core Feature Development Only',
      'Rapid Product Strategy Sprint',
      'Basic UI Design',
      'Designed for Pitch & Validation',
      'Production Deployment',
      '14 Days Post-Launch Support',
      { text: 'No Revisions Allowed', type: 'cross' }
    ],
  },
  {
    id: 'mvp-launchpad',
    title: 'The Launchpad',
    price: '$4449',
    priceSubtext: 'Starting at',
    buttonText: 'Start My MVP',
    buttonUrl: 'https://cal.com/chaitanya-shetty-mabufa/30min',
    variant: 'popular',
    badge: {
      text: 'Most Popular',
      position: 'top-center',
      variant: 'primary',
    },
    features: [
      'Everything in The Prototype',
      'Launch in 6-10 Weeks',
      'Focused Development – one request at a time',
      'Weekly Progress Sync',
      'Priority Features First',
      '30 Days Post-Launch Support',
    ],
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    price: '$2499',
    priceSubtext: 'Starting at',
    priceSuffix: '/mo',
    buttonText: 'Book a Call',
    buttonUrl: 'https://cal.com/chaitanya-shetty-mabufa/30min',
    buttonVariant: 'outline',
    badge: {
      text: 'Recommended by Founders',
      position: 'top-right',
      variant: 'gradient',
    },
    features: [
      'Everything in The Launchpad',
      'Launch in 12-16 weeks',
      'Advanced Feature Development',
      'AI-powered Custom UI/UX Design',
      '60 Days Post-Launch Optimization Window',
      'Trusted by Strentor & Spopeer',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E07A5F] font-sansation mb-4 leading-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-medium text-[#3D2C20] max-w-3xl mx-auto leading-relaxed font-inter">
          Pick the plan that fits your launch goals, no hidden fees, no surprises.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;