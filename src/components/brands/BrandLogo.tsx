import React from 'react';

interface BrandLogoProps {
  src: string;
  alt: string;
}

export default function BrandLogo({ src, alt }: BrandLogoProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center group hover:bg-white/10 transition-all duration-300">
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
      />
    </div>
  );
}