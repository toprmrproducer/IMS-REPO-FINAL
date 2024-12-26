import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialData';

export default function TestimonialGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={testimonial.client}
          {...testimonial}
          index={index}
        />
      ))}
    </div>
  );
}