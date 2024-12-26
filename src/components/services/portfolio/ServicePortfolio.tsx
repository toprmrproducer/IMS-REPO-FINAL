import React from 'react';
import PortfolioGrid from './PortfolioGrid';
import VideoPortfolio from './VideoPortfolio';
import { motion } from 'framer-motion';

export default function ServicePortfolio() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-medium mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Explore our successful projects and see how we've helped businesses achieve their goals ✨
          </p>
        </motion.div>
      </div>
      
      <VideoPortfolio />
      <div className="mt-20">
        <PortfolioGrid />
      </div>
    </section>
  );
}