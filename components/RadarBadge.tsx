"use client"

import React from 'react';

const RadarBadge: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center mb-8">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-emerald-200">
        {/* Radar Pulse Container */}
        <div className="relative w-4 h-4 flex items-center justify-center">
          {/* Pulsing Radar Waves */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="radar-pulse" />
            <div className="radar-pulse" style={{ animationDelay: "1s" }} />
            <div className="radar-pulse" style={{ animationDelay: "2s" }} />
          </div>

          {/* Center Dot */}
          <div className="relative w-2.5 h-2.5 bg-emerald-500 rounded-full z-10" />
        </div>

        {/* Badge Text */}
        <span className="text-sm font-medium text-[#3D2C20] font-inter">
          Available for New Projects
        </span>
      </div>
    </div>
  );
};

export default RadarBadge;