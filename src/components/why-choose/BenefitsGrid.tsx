import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Responsive Team 👥',
    description: 'Our dedicated team of experts is always ready to respond to your needs and provide personalized solutions.'
  },
  {
    icon: Clock,
    title: 'Quick Turnaround ⚡',
    description: 'We understand the importance of time in business and deliver results with exceptional speed and efficiency.'
  },
  {
    icon: Target,
    title: 'Measurable Results 📊',
    description: 'Track your success with our comprehensive analytics and transparent reporting systems.'
  },
  {
    icon: TrendingUp,
    title: 'Years of Experience 🏆',
    description: 'Benefit from our extensive industry experience and proven track record of successful projects.'
  }
];

export default function BenefitsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            z: 50
          }}
          className="interactive-hover group bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="mb-6 p-4 bg-[#FF0000]/10 rounded-xl group-hover:bg-[#FF0000]/20 transition-colors duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <benefit.icon className="w-8 h-8 text-[#FF0000]" />
            </motion.div>
            <h3 className="text-2xl font-display font-medium text-white mb-4">
              {benefit.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}