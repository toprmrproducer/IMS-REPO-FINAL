import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare } from 'lucide-react';

interface AnimatedHeroButtonProps {
  variant: 'consultation' | 'contact';
  onClick: () => void;
}

export default function AnimatedHeroButton({ variant, onClick }: AnimatedHeroButtonProps) {
  const content = {
    consultation: {
      text: 'Get a Free Consultation',
      icon: Calendar,
      emoji: '✨'
    },
    contact: {
      text: 'Contact Us',
      icon: MessageSquare,
      emoji: '👋'
    }
  };

  const { text, icon: Icon, emoji } = content[variant];

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {/* Pulsating background */}
      <div className="absolute inset-0 bg-[#FF0000]/20 rounded-lg blur-xl animate-pulse" />
      
      {/* Moving gradient */}
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
      <div className={`relative px-8 py-4 ${variant === 'consultation' ? 'bg-[#FF0000]' : 'bg-black border-2 border-[#FF0000]'} rounded-lg text-white font-medium flex items-center gap-3 group-hover:bg-[#CC0000] transition-colors duration-300`}>
        <Icon className="w-5 h-5 group-hover:animate-bounce" />
        <span>{text}</span>
        <span className="text-xl group-hover:animate-bounce">{emoji}</span>
      </div>
    </motion.button>
  );
}