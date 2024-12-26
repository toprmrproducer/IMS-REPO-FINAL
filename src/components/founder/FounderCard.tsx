import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FounderCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-[#FF0000]" />
        <h3 className="text-xl font-display gradient-text">Meet Our Innovator</h3>
      </div>

      <div className="space-y-4">
        <p className="text-2xl font-display text-white">
          Hi! I'm Claire, the founder of IMS
        </p>
        
        <p className="text-gray-300 leading-relaxed">
          My mission is to redefine digital marketing through AI innovation. We've partnered with HIIP to deliver data-driven, impactful marketing solutions that drive real results.
        </p>

        <Link to="/about" className="block">
          <div className={`flex items-center gap-2 text-[#FF0000] transition-all duration-300 ${
            isHovered ? 'translate-x-2' : ''
          }`}>
            <span className="font-medium">Learn more about Claire & the team</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}