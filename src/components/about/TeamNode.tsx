import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TeamNodeProps {
  member: {
    name: string;
    role: string;
    bio: string;
    image: string;
    icon: LucideIcon;
  };
  isFounder?: boolean;
}

export default function TeamNode({ member, isFounder = false }: TeamNodeProps) {
  const Icon = member.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative ${isFounder ? 'w-[300px]' : 'w-[250px]'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#FF0000]/20 group-hover:border-[#FF0000] transition-colors duration-300">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mb-2 p-2 bg-[#FF0000]/10 rounded-lg group-hover:bg-[#FF0000]/20 transition-colors duration-300">
            <Icon className="w-5 h-5 text-[#FF0000]" />
          </div>
          
          <h3 className={`font-display text-white mb-1 ${isFounder ? 'text-2xl' : 'text-xl'}`}>
            {member.name}
          </h3>
          
          <p className="text-[#FF0000] text-sm mb-3">
            {member.role}
          </p>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}