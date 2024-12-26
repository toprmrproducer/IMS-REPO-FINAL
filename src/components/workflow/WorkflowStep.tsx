import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface WorkflowStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'pending' | 'active' | 'completed';
  duration: string;
  onClick: () => void;
}

export default function WorkflowStep({
  title,
  description,
  icon: Icon,
  status,
  duration,
  onClick
}: WorkflowStepProps) {
  const statusColors = {
    pending: 'border-gray-600',
    active: 'border-[#FF0000]',
    completed: 'border-green-500'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`relative p-6 rounded-xl border-2 ${statusColors[status]} cursor-pointer group`}
    >
      <div className="absolute -right-3 -top-3 bg-black px-3 py-1 rounded-full text-sm">
        {duration}
      </div>
      
      <div className="flex items-start gap-4">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-3 bg-[#FF0000]/10 rounded-xl"
        >
          <Icon className="w-6 h-6 text-[#FF0000]" />
        </motion.div>
        
        <div>
          <h3 className="text-xl font-display text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm text-[#FF0000]">Click to learn more</span>
      </div>
    </motion.div>
  );
}