import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useRotatingWords from './useRotatingWords';

const words = [
  'Innovative',
  'Measurable',
  'High ROI',
  'Powerful',
  'Up-to-Date',
  'Adaptive',
  'AI-Driven'
];

export default function RotatingHeadline() {
  const { currentWord, isVisible } = useRotatingWords(words, 2000);

  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
        <span className="text-white">Our </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="inline-block gradient-text"
          >
            {currentWord}
          </motion.span>
        </AnimatePresence>
        <span className="text-white"> Digital Marketing Services</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
        Transforming businesses through innovative digital solutions ✨
      </p>
    </div>
  );
}