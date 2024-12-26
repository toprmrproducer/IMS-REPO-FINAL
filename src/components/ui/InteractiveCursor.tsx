import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function InteractiveCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [trail, setTrail] = useState<{ x: number; y: number; }[]>([]);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Update trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        if (newTrail.length > 5) newTrail.shift();
        return newTrail;
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive-hover')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 pointer-events-none z-50"
          style={{
            x: point.x,
            y: point.y,
            scale: 1 - (index * 0.15),
            opacity: 1 - (index * 0.2),
          }}
        >
          <div className="w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF0000]/30 glow-effect" />
        </motion.div>
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isClicking ? 0.8 : 1,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-[#FF0000] blur-md opacity-30 scale-150" />
          {/* Main dot */}
          <div className="relative w-4 h-4 rounded-full bg-[#FF0000] glow-effect" />
        </div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.5 : 1,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FF0000] glow-effect" />
      </motion.div>
    </>
  );
}