import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  gradient: string;
  index: number;
}

export default function TimelineStep({
  title,
  description,
  icon: Icon,
  items,
  gradient,
  index
}: TimelineStepProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center justify-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={`bg-gradient-to-br ${gradient} p-8 rounded-2xl backdrop-blur-sm border border-[#FF0000]/20`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#FF0000]/10 rounded-xl">
              <Icon className="w-6 h-6 text-[#FF0000]" />
            </div>
            <h3 className="text-2xl font-display text-white">{title}</h3>
          </div>
          <p className="text-gray-300 mb-6">{description}</p>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Timeline dot */}
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF0000] to-[#CC0000]" />
      </motion.div>
    </div>
  );
}