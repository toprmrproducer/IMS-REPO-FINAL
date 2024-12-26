import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PortfolioHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function PortfolioHeader({ icon: Icon, title, description }: PortfolioHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-[#FF0000]/10 rounded-xl">
            <Icon className="w-6 h-6 text-[#FF0000]" />
          </div>
        </div>
        
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="gradient-text">{title}</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
}