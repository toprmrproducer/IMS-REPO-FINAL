import React from 'react';
import { motion } from 'framer-motion';

const socialMediaImages = [
  {
    src: "https://static.wixstatic.com/media/4671a5_4448434c58ff4ce0bfe10becf1bb5b63f000.jpg/v1/fill/w_291,h_529,al_t,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/4671a5_4448434c58ff4ce0bfe10becf1bb5b63f000.jpg",
    alt: "Social Media Example 1"
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_21a35688d0a042938181c983a89a3240~mv2.png/v1/fill/w_364,h_661,fp_0.17_0.68,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Simple%20Phone%20Reminder%20Valentine's%20Day%20Instagram%20Story.png",
    alt: "Social Media Example 2"
  }
];

export default function SocialMediaGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {socialMediaImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </div>
  );
}