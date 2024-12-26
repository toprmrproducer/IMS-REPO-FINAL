import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoadmapStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  accent: string;
}

export default function RoadmapStep({
  number,
  title,
  description,
  icon: Icon,
  image,
  accent
}: RoadmapStepProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${accent} rounded-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#FF0000]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl font-display font-medium text-white/20">
                {number}
              </span>
              <h3 className="text-2xl font-display text-white">
                {title}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        <div className="mt-8 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
}