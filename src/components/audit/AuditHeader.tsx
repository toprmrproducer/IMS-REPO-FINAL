import React from 'react';
import { Sparkles, Search, Gauge, Rocket } from 'lucide-react';
import AuditForm from './AuditForm';
import CountdownTimer from './CountdownTimer';

const benefits = [
  {
    icon: Search,
    text: 'In-depth SEO Analysis'
  },
  {
    icon: Gauge,
    text: 'Performance Optimization'
  },
  {
    icon: Sparkles,
    text: 'UX Enhancement Plan'
  },
  {
    icon: Rocket,
    text: 'Growth Strategy'
  }
];

export default function AuditHeader() {
  return (
    <section className="bg-gradient-to-b from-black to-[#1a0000] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#FF0000]/10 rounded-full px-4 py-2 mb-6">
            <p className="text-[#FF0000] font-medium">
              🚀 Limited Time Offer - Book Before January 31st, 2025! 🚀
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            <span className="text-white">Book Your </span>
            <span className="gradient-text">Free Audit Call</span>
            <span className="text-white"> Now! 📈</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule a personalized consultation to skyrocket your company's performance! 🎯
          </p>
        </div>

        <CountdownTimer />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-black/40 transition-all duration-300"
            >
              <benefit.icon className="w-8 h-8 text-[#FF0000] mx-auto mb-3" />
              <p className="text-white font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>

        <AuditForm />
      </div>
    </section>
  );
}