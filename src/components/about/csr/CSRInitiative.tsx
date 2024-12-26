import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';

interface CSRInitiativeProps {
  title: string;
  description: string;
  index: number;
}

export default function CSRInitiative({ title, description, index }: CSRInitiativeProps) {
  const Icon = index === 0 ? Gift : Heart;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
    >
      <div className="flex items-start gap-6">
        <div className="p-4 bg-[#FF0000]/10 rounded-xl group-hover:bg-[#FF0000]/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-[#FF0000]" />
        </div>
        <div>
          <h3 className="text-2xl font-display text-white mb-4">
            {title} <span className="text-2xl">🎁</span>
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}