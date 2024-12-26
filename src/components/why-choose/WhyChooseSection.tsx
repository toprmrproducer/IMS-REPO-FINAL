import React from 'react';
import StatsGrid from './StatsGrid';
import BenefitsGrid from './BenefitsGrid';

export default function WhyChooseSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-medium mb-6 tracking-tight">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">IMS</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Delivering exceptional results through innovation, expertise, and dedication to your success
          </p>
        </div>
        
        <StatsGrid />
        <BenefitsGrid />
      </div>
    </section>
  );
}