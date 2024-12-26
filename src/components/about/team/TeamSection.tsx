import React from 'react';
import TeamTree from '../TeamTree';

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="text-white">Meet Our </span>
          <span className="gradient-text">Innovative</span>
          <span className="text-white"> Team</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          A diverse group of creative minds and technical experts dedicated to transforming your digital presence
        </p>
      </div>
      
      <TeamTree />
    </section>
  );
}