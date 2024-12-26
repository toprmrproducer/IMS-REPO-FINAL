import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  platforms?: string[];
  comingSoon?: boolean;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  image, 
  platforms,
  comingSoon 
}: ServiceCardProps) {
  return (
    <div className="group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300 border border-[#FF0000]/10 hover:border-[#FF0000]/30">
      {comingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#FF0000] text-white text-sm px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <Icon className="w-8 h-8 text-[#FF0000]" />
          <h3 className="text-2xl font-display text-white">{title}</h3>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        {platforms && (
          <div className="flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <img 
                key={platform}
                src={platform}
                alt="Platform"
                className="h-6 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        )}
      </div>
      <div className="relative h-48 bg-gradient-to-b from-black/0 to-black/80">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
        />
      </div>
    </div>
  );
}