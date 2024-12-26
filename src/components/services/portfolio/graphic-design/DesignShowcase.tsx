import React from 'react';
import { motion } from 'framer-motion';

const showcaseImages = [
  {
    src: "https://static.wixstatic.com/media/4671a5_7edbc8ea88e242918be40ea633126de6~mv2.png",
    alt: "Brand Design",
    className: "col-span-1 row-span-2"
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_cd83a40b6b634ff2a14e8b991d664f68~mv2.png",
    alt: "Marketing Design",
    className: "col-span-2"
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_b5c0576d4e944185945511aa7b7dbae4~mv2.png",
    alt: "Social Media Design",
    className: "col-span-2"
  }
];

export default function DesignShowcase() {
  return (
    <div className="grid grid-cols-3 gap-8 mb-16">
      {showcaseImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`${image.className} group relative overflow-hidden rounded-xl`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </div>
  );
}