import React from 'react';
import BrandLogo from './BrandLogo';
import { brands } from './BrandList';

export default function Brands() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-medium mb-6 gradient-text">
            Collaborations with Innovative Brands
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We value our clients as integral partners on a shared journey, collaborating to create innovative and lasting solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <BrandLogo 
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}