import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Users, Star, Globe } from 'lucide-react';

export default function KOLCommunity() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="text-white">Join Our </span>
          <span className="gradient-text">Global KOL Community</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Be part of a diverse and inclusive community of content creators making a real impact 🌟
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/10"
        >
          <Users className="w-8 h-8 text-[#FF0000] mb-4" />
          <h3 className="text-xl font-display text-white mb-2">Extensive Network</h3>
          <p className="text-gray-400">Access millions of influencers worldwide through our advanced platform</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/10"
        >
          <Star className="w-8 h-8 text-[#FF0000] mb-4" />
          <h3 className="text-xl font-display text-white mb-2">Premium Opportunities</h3>
          <p className="text-gray-400">Connect with top brands and access exclusive collaboration opportunities</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/10"
        >
          <Globe className="w-8 h-8 text-[#FF0000] mb-4" />
          <h3 className="text-xl font-display text-white mb-2">Global Reach</h3>
          <p className="text-gray-400">Expand your influence across borders with our international network</p>
        </motion.div>
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg">
          Join IMS KOL Community 🎥
        </Button>
        <p className="text-gray-400 mt-4">
          Open to all content creators - celebrating diversity in race, gender, nationality, and age ✨
        </p>
      </div>
    </section>
  );
}