import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Star } from 'lucide-react';

interface TestimonialCardProps {
  client: string;
  role: string;
  testimonial: string;
  service: string;
  icon: LucideIcon;
  image: string;
  index: number;
}

export default function TestimonialCard({ 
  client, 
  role, 
  testimonial, 
  service,
  icon: Icon,
  image,
  index 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF0000]/20 group-hover:border-[#FF0000] transition-colors duration-300">
            <img 
              src={image} 
              alt={client}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 p-1.5 bg-[#FF0000]/10 rounded-lg group-hover:bg-[#FF0000]/20 transition-colors duration-300">
            <Icon className="w-3.5 h-3.5 text-[#FF0000]" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">{client}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#FF0000] text-[#FF0000]" />
        ))}
      </div>

      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {testimonial}
      </p>

      <div className="text-sm font-medium text-[#FF0000]">
        {service}
      </div>
    </motion.div>
  );
}