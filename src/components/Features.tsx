import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Campaigns',
    description: 'Automate and optimize marketing strategies using advanced AI technology for unprecedented results'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track and measure performance with sophisticated analytics tools for data-driven decisions'
  },
  {
    icon: Target,
    title: 'Customized Solutions',
    description: 'Tailored marketing strategies designed to maximize your ROI and achieve business goals'
  }
];

export default function Features() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-12 h-12 text-[#FF0000] group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {feature.description}
              </p>
              
              {/* Interactive hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}