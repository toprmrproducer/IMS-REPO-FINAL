import { useState, useEffect } from 'react';

export default function useRotatingWords(words: string[], interval: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % words.length);
        setIsVisible(true);
      }, 200);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return {
    currentWord: words[currentIndex],
    isVisible
  };
}