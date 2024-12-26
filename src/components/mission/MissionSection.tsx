import React from 'react';
import MissionCard from './MissionCard';
import { Target, Zap, Binary, Shield, TrendingUp } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: 'Strategic Marketing Solutions',
    description: 'In today\'s competitive digital landscape, strategic marketing isn\'t just an option—it\'s essential for growth and market leadership.'
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'We deliver quick, efficient marketing solutions that integrate seamlessly with your existing business operations.'
  },
  {
    icon: Binary,
    title: 'Data-Driven Approach',
    description: 'Our solutions are built on concrete data and analytics, ensuring measurable results and ROI for every campaign.'
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    description: 'We help organizations stay ahead of market trends while maintaining and strengthening their core brand identity.'
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description: 'Modernize your marketing strategy while preserving the unique values and strengths that make your business special.'
  }
];

export default function MissionSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-medium mb-6 tracking-tight">
            <span className="text-white">Our </span>
            <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Empowering businesses with innovative marketing strategies for sustainable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <MissionCard key={index} {...mission} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}