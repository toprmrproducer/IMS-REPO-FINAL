import React from 'react';
import { motion } from 'framer-motion';

interface DesignCardProps {
  src: string;
  title: string;
  description: string;
  index: number;
}

export default function DesignCard({ src, title, description, index }: DesignCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img 
          src={src}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <motion.div 
        className="p-6"
        initial={{ y: 20 }}
        whileHover={{ y: 0 }}
      >
        <h3 className="text-xl font-display text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>

      {/* Animated corner decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-12 h-12 bg-[#FF0000]/10 transform rotate-45 translate-x-6 -translate-y-6 group-hover:bg-[#FF0000]/20 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}