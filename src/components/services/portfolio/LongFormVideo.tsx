import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import Section from '../../layout/Section';
import LongFormVideoCard from './video/LongFormVideoCard';

const videos = [
  {
    id: "1042097517",
    title: "Brand Story Video",
    description: "Compelling brand storytelling through cinematic visuals",
    aspectRatio: "56.25" // 16:9 aspect ratio
  },
  {
    id: "1042097631",
    title: "Event Coverage",
    description: "Dynamic event documentation and highlights",
    aspectRatio: "56.25"
  },
  {
    id: "1042097549",
    title: "Customer Testimonial",
    description: "Authentic customer success stories",
    aspectRatio: "56.25"
  }
];

export default function LongFormVideo() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-[#FF0000]/10 rounded-xl">
              <Video className="w-6 h-6 text-[#FF0000]" />
            </div>
          </div>
          
          <h2 className="text-4xl font-display font-medium mb-6">
            <span className="text-white">Long-form </span>
            <span className="gradient-text">Video Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Professional video content crafted for maximum impact 🎥
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {videos.map((video, index) => (
          <LongFormVideoCard 
            key={video.id}
            {...video}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}