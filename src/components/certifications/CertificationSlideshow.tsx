import React from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import useSlideshow from './useSlideshow';

const certificates = [
  {
    id: 1,
    src: "https://static.wixstatic.com/media/4671a5_4402c882b46940f9adb75fa0291e7907~mv2.png",
    alt: "Professional Certification 1"
  },
  {
    id: 2,
    src: "https://static.wixstatic.com/media/4671a5_f095e578372a4ce7b3047cafdd2f7830~mv2.png",
    alt: "Professional Certification 2"
  },
  {
    id: 3,
    src: "https://static.wixstatic.com/media/4671a5_5d746265c0b648dd9f78ccdeb162814b~mv2.png",
    alt: "Professional Certification 3"
  }
];

export default function CertificationSlideshow() {
  const { currentSlide, nextSlide, prevSlide, setCurrentSlide } = useSlideshow(
    certificates.length,
    3000
  );

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/10">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Award className="w-6 h-6 text-[#FF0000]" />
        <h2 className="text-2xl font-display text-center">
          Your Business is in Safe, Highly Experienced and Qualified Hands
        </h2>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slideshow */}
        <div className="relative overflow-hidden rounded-lg aspect-[753/573]">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                transition: { duration: 0.5 }
              }}
              style={{ display: currentSlide === index ? 'block' : 'none' }}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#FF0000]' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}