import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CultureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  emoji: string;
}

export default function CultureCard({ title, description, icon: Icon, emoji }: CultureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#FF0000]/10 rounded-xl group-hover:bg-[#FF0000]/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-[#FF0000]" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-display text-white">{title}</h3>
            <span className="text-2xl animate-bounce">{emoji}</span>
          </div>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}