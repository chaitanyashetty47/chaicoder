"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface PricingFeature {
  text: string;
  type?: 'check' | 'cross';
}

export interface PricingTier {
  id: string;
  title: string;
  price: string;
  priceSubtext?: string;
  priceSuffix?: string;
  buttonText: string;
  buttonUrl: string;
  features: (string | PricingFeature)[];
  badge?: {
    text: string;
    position: 'top-center' | 'top-right';
    variant: 'primary' | 'gradient';
  };
  variant?: 'default' | 'popular';
  buttonVariant?: 'default' | 'outline';
}

interface PricingCardProps {
  tier: PricingTier;
  className?: string;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={cn("w-5 h-5 text-green-500 mt-0.5 flex-shrink-0", className)} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path 
      fillRule="evenodd" 
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
      clipRule="evenodd" 
    />
  </svg>
);

const CrossIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={cn("w-5 h-5 text-red-500 mt-0.5 flex-shrink-0", className)} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path 
      fillRule="evenodd" 
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
      clipRule="evenodd" 
    />
  </svg>
);

export const PricingCard: React.FC<PricingCardProps> = ({ tier, className }) => {
  const isPopular = tier.variant === 'popular';
  const cardClasses = cn(
    "bg-white rounded-2xl p-8 relative transition-all duration-300",
    isPopular 
      ? "border-2 border-[#008080] shadow-xl transform scale-105 hover:shadow-2xl"
      : "border border-gray-200 hover:shadow-lg",
    className
  );

  const buttonClasses = cn(
    "w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 font-inter hover:cursor-pointer mb-8",
    isPopular
      ? "bg-[#008080] text-white hover:bg-[#006666]"
      : tier.buttonVariant === 'outline'
      ? "bg-white text-[#008080] border-2 border-[#008080] hover:bg-[#008080] hover:text-white"
      : "bg-[#008080] text-white hover:bg-[#006666]"
  );

  const handleButtonClick = () => {
    window.open(tier.buttonUrl, '_blank');
  };

  return (
    <div className={cardClasses}>
      {/* Badge */}
      {tier.badge && (
        <div
          className={cn(
            "absolute",
            tier.badge.position === 'top-center'
              ? "-top-4 left-1/2 transform -translate-x-1/2"
              : "-top-3 right-4"
          )}
        >
          <div
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold font-inter",
              tier.badge.variant === 'gradient'
                ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#3D2C20] shadow-sm text-xs px-3 py-1"
                : "bg-[#008080] text-white"
            )}
          >
            {tier.badge.text}
          </div>
        </div>
      )}

      {/* Header */}
      <div className={cn("text-center mb-6", isPopular && "mt-4")}>
        <h3 className="text-xl font-bold text-[#3D2C20] font-sansation mb-2">
          {tier.title}
        </h3>
        {tier.priceSubtext && (
          <div className="text-sm text-[#666666] font-inter">
            {tier.priceSubtext}
          </div>
        )}
        <div className="text-4xl font-bold text-[#E07A5F] font-sansation">
          {tier.price}
          {tier.priceSuffix && (
            <span className="text-lg text-[#3D2C20]">{tier.priceSuffix}</span>
          )}
        </div>
      </div>

      {/* Button */}
      <Button
        onClick={handleButtonClick}
        variant={tier.buttonVariant || (isPopular ? 'default' : 'outline')}
        className={buttonClasses}
      >
        {tier.buttonText}
      </Button>

      {/* Features */}
      <div className="space-y-4">
        {(() => {
          // Find the index of first cross feature to add separator before it
          const firstCrossIndex = tier.features.findIndex(f => {
            const fObj = typeof f === 'string' ? { text: f, type: 'check' } : f;
            return fObj.type === 'cross';
          });
          
          return tier.features.map((feature, index) => {
            // Normalize feature to object format
            const featureObj: PricingFeature = typeof feature === 'string' 
              ? { text: feature, type: 'check' }
              : feature;
            
            const isCross = featureObj.type === 'cross';
            const showSeparator = index === firstCrossIndex && firstCrossIndex > 0;
            
            return (
              <React.Fragment key={index}>
                {showSeparator && (
                  <hr className="border-t border-gray-200 my-4" />
                )}
                <div className="flex items-start gap-3">
                  {isCross ? <CrossIcon /> : <CheckIcon />}
                  <span className="text-sm text-[#3D2C20] font-inter">
                    {featureObj.text}
                  </span>
                </div>
              </React.Fragment>
            );
          });
        })()}
      </div>
    </div>
  );
};
