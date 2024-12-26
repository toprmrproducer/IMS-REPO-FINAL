import React from 'react';
import TestimonialGrid from './TestimonialGrid';

export default function TestimonialsSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-medium mb-6">
            <span className="text-white">Client </span>
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Real results and experiences from businesses we've helped transform 🌟
          </p>
        </div>
        
        <TestimonialGrid />
      </div>
    </section>
  );
}