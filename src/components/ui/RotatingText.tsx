import React, { useState, useEffect } from 'react';

interface RotatingTextProps {
  phrases: string[];
  interval?: number;
  fadeTime?: number;
}

export default function RotatingText({ 
  phrases, 
  interval = 3000, 
  fadeTime = 500 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [direction, setDirection] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection('exit');
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % phrases.length);
        setDirection('enter');
        setIsVisible(true);
      }, fadeTime);
    }, interval);

    return () => clearInterval(intervalId);
  }, [phrases.length, interval, fadeTime]);

  return (
    <span
      className={`inline-block gradient-text font-medium ${
        isVisible ? 'rotating-text-' + direction : 'opacity-0'
      }`}
    >
      {phrases[currentIndex]}
    </span>
  );
}