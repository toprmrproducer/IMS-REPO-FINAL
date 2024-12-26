import React from 'react';
import { motion } from 'framer-motion';

const words = [
  { text: 'reach' },
  { text: 'engage' },
  { text: 'convert' }
];

export default function AnimatedHeroText() {
  return (
    <p className="text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
      <span className="text-[#FFFFFF] font-medium">Revolutionizing</span> how you{' '}
      {words.map((word, index) => (
        <React.Fragment key={word.text}>
          <motion.span
            className="inline-block font-display text-[#FF0000] font-bold relative px-1"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
              {word.text}
            </span>
            <motion.span 
              className="absolute inset-0 bg-white/10 rounded-md -z-0"
              layoutId="highlight"
            />
          </motion.span>
          {index < words.length - 1 ? ', ' : ' '}
        </React.Fragment>
      ))}
      customers using{' '}
      <motion.span
        className="inline-block font-bold text-[#FF0000] drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
        whileHover={{ scale: 1.05 }}
      >
        cutting-edge AI technology
      </motion.span>
    </p>
  );
}