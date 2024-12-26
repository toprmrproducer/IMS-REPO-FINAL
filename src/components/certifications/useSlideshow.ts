import { useState, useEffect, useCallback } from 'react';

export default function useSlideshow(totalSlides: number, interval: number) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((current) => (current - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    setCurrentSlide
  };
}