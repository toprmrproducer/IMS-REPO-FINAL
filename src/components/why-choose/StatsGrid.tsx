import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '98%', label: 'Client Satisfaction 🌟' },
  { value: '24/7', label: 'Support Available 🚀' },
  { value: '3x', label: 'Average ROI 📈' },
  { value: '500+', label: 'Projects Completed ✨' },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="interactive-hover group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
        >
          <div className="text-center">
            <div className="text-5xl font-display font-medium gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm font-light">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}