import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function MissionCard({ icon: Icon, title, description, index }: MissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300 h-full">
        <div className="flex flex-col h-full">
          <div className="mb-6 p-4 bg-[#FF0000]/10 rounded-xl w-fit group-hover:bg-[#FF0000]/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-[#FF0000]" />
          </div>
          
          <h3 className="text-2xl font-display text-white mb-4">
            {title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}