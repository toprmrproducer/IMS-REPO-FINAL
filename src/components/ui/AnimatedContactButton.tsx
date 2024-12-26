import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function AnimatedContactButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      {/* Pulsating background */}
      <div className="absolute inset-0 bg-[#FF0000]/20 rounded-lg blur-xl animate-pulse" />
      
      {/* Moving wave effect */}
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
      <button className="relative px-6 py-2 bg-[#FF0000] rounded-lg text-white font-medium flex items-center gap-2 group">
        <MessageSquare className="w-4 h-4 group-hover:animate-bounce" />
        <span>Contact</span>
      </button>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg glow-effect" />
    </motion.div>
  );
}