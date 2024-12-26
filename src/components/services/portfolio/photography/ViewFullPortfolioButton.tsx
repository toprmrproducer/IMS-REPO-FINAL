import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ViewFullPortfolioButton() {
  return (
    <motion.a
      href="https://drive.google.com/drive/folders/1CI21q9bxE_eLESxGRWFIdxYXNORcNnIa"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {/* Pulsating background */}
      <div className="absolute inset-0 bg-[#FF0000]/20 rounded-lg blur-xl animate-pulse" />
      
      {/* Moving gradient effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF0000]/30 to-transparent"
          style={{
            animation: 'wave 2s infinite linear',
            backgroundSize: '200% 100%'
          }}
        />
      </div>

      {/* Button content */}
      <button className="relative px-8 py-4 bg-[#FF0000] rounded-lg text-white font-medium flex items-center gap-3 group-hover:bg-[#CC0000] transition-colors duration-300">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.795 15.875l-4.795-2.777v.902c0 1.485-1.215 2.7-2.7 2.7s-2.7-1.215-2.7-2.7v-4.5c0-1.485 1.215-2.7 2.7-2.7s2.7 1.215 2.7 2.7v.902l4.795-2.777c.994-.575 2.205.143 2.205 1.308v5.634c0 1.165-1.211 1.883-2.205 1.308z"/>
        </svg>
        <span>View Full Portfolio</span>
        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg glow-effect" />
    </motion.a>
  );
}