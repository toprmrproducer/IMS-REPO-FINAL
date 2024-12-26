import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function VideoCaption() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative mt-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Arrow animation */}
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 transform transition-all duration-300 ${
        isHovered ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-0'
      }`}>
        <div className="flex items-center gap-2 text-[#FF0000]">
          <ArrowUp className="w-5 h-5" />
          <span className="text-sm font-medium whitespace-nowrap">Watch the video</span>
        </div>
      </div>

      {/* Caption text */}
      <p className="text-xl font-light text-center text-white/90 transition-colors duration-300 group-hover:text-[#FF0000]">
        <span className="inline-block animate-pulse">✨</span>
        <span className="mx-3">Discover how IMS can transform your marketing</span>
        <span className="inline-block animate-pulse">✨</span>
      </p>
    </div>
  );
}