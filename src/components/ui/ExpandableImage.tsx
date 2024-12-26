import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick: () => void;
}

export default function ExpandableImage({ src, alt, className = '', onClick }: ExpandableImageProps) {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-xl"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <img 
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 ${className}`}
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Maximize2 className="w-8 h-8 text-white" />
      </div>
    </motion.div>
  );
}