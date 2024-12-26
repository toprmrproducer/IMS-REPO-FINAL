import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
  children: React.ReactNode;
}

export default function InteractiveText({ children }: InteractiveTextProps) {
  return (
    <motion.span
      className="inline-block text-white hover:text-[#FF0000] transition-colors duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.span>
  );
}