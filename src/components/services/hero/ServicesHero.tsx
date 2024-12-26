import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ServicesHero() {
  return (
    <div className="text-center mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#FF0000]/10"
      >
        <div className="flex justify-center mb-6">
          <Sparkles className="w-8 h-8 text-[#FF0000]" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-6">
          <span className="text-white">Innovative Digital Marketing </span>
          <span className="gradient-text">Solutions</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          We provide cutting-edge digital marketing solutions that drive growth, engage audiences, 
          and elevate your brand to new heights. Our tailored approach connects your brand with 
          its ideal audience to boost visibility and maximize impact. ✨
        </p>
      </motion.div>
    </div>
  );
}