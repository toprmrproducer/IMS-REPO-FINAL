import React from 'react';
import RotatingHeadline from './headline/RotatingHeadline';
import ServiceCard from './ServiceCard';
import { services } from './ServicesList';

export default function Services() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RotatingHeadline />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}