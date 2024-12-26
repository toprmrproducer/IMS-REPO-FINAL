import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import Section from '../../layout/Section';
import VideoGrid from './video/VideoGrid';

export default function VideoPortfolio() {
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
            <span className="text-white">Short-form </span>
            <span className="gradient-text">Video Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Engaging content crafted for maximum impact on social media 🎥
          </p>
        </motion.div>
      </div>

      <VideoGrid />
    </Section>
  );
}