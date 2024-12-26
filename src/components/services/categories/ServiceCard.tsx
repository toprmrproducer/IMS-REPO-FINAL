import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  emoji: string;
}

export default function ServiceCard({ title, description, image, icon: Icon, emoji }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#FF0000]/10 rounded-xl group-hover:bg-[#FF0000]/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-[#FF0000]" />
          </div>
          <div>
            <h3 className="text-2xl font-display text-white flex items-center gap-2">
              {title}
              <span className="text-2xl">{emoji}</span>
            </h3>
          </div>
        </div>

        <p className="text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>

        <button className="flex items-center gap-2 text-[#FF0000] group-hover:translate-x-2 transition-transform duration-300">
          <span className="font-medium">Discover Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}