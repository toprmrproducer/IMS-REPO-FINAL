import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  icon: LucideIcon;
}

export default function TeamMember({ name, role, bio, image, icon: Icon }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300 group"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-[#FF0000]/10 rounded-lg">
            <Icon className="w-5 h-5 text-[#FF0000]" />
          </div>
          <div>
            <h3 className="text-xl font-display text-white">{name}</h3>
            <p className="text-sm text-[#FF0000]">{role}</p>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}