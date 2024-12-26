import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, ShoppingBag } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "AI-Powered Influencer Discovery",
    description: "Leverage advanced algorithms to identify the perfect influencers for your brand. Our AI analyzes engagement rates, audience authenticity, and content performance to ensure optimal matches.",
    metrics: ["100% Data-Driven Selection", "Real-Time Performance Tracking", "Audience Authenticity Verification"]
  },
  {
    icon: BarChart2,
    title: "Smart Campaign Analytics",
    description: "Get deep insights into your campaign performance with our AI-driven analytics. Track ROI, engagement metrics, and audience behavior in real-time to optimize your marketing strategy.",
    metrics: ["Live Performance Monitoring", "Predictive Analytics", "ROI Optimization"]
  },
  {
    icon: ShoppingBag,
    title: "Automated Commerce Integration",
    description: "Seamlessly integrate influencer content with e-commerce platforms. Our AI helps track sales attribution, manage affiliate links, and optimize conversion rates.",
    metrics: ["Direct Sales Tracking", "Automated Attribution", "Conversion Optimization"]
  }
];

export default function AIFeatures() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
          >
            <div className="p-4 bg-[#FF0000]/10 rounded-xl w-fit mb-6 group-hover:bg-[#FF0000]/20 transition-colors duration-300">
              <feature.icon className="w-6 h-6 text-[#FF0000]" />
            </div>
            
            <h3 className="text-2xl font-display text-white mb-4">{feature.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
            
            <ul className="space-y-2">
              {feature.metrics.map((metric) => (
                <li key={metric} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" />
                  {metric}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}