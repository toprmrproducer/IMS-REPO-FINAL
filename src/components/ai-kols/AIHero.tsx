import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';

export default function AIHero() {
  return (
    <div className="text-center mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#FF0000]/10"
      >
        <div className="flex justify-center gap-4 mb-6">
          <Brain className="w-8 h-8 text-[#FF0000]" />
          <Sparkles className="w-8 h-8 text-[#FF0000]" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-6">
          <span className="text-white">Revolutionize Your Marketing with </span>
          <span className="gradient-text">AI-Powered Influence</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          Experience the future of influencer marketing with IMS and Hiip's cutting-edge AI technology. 
          Transform your campaigns with real-time analytics, precise influencer matching, and data-driven results. 🚀
        </p>
        
        <div className="inline-block bg-[#FF0000]/10 rounded-full px-6 py-3">
          <p className="text-[#FF0000] font-medium">
            Powered by Hiip's Advanced AI Technology ⚡
          </p>
        </div>
      </motion.div>
    </div>
  );
}