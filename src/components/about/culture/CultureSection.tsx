import React from 'react';
import CultureCard from './CultureCard';
import { Lightbulb, Users, Clock, Award } from 'lucide-react';

const cultureItems = [
  {
    title: 'INNOVATIVE SPIRIT',
    description: 'Innovation is at the core of everything we do. We encourage out-of-the-box thinking and foster a culture that thrives on experimentation and creativity.',
    icon: Lightbulb,
    emoji: '💡'
  },
  {
    title: 'DIVERSE AND INCLUSIVE',
    description: 'We believe that diversity fuels creativity and innovation. Our inclusive environment ensures everyone feels valued and respected, creating a dynamic and inspiring workplace.',
    icon: Users,
    emoji: '🌈'
  },
  {
    title: 'FLEXIBILITY',
    description: 'We understand the importance of work-life balance. We offer flexible work arrangements that empower our team members to achieve their professional goals while maintaining a healthy personal life.',
    icon: Clock,
    emoji: '⚡'
  },
  {
    title: 'RECOGNITION',
    description: 'We value feedback and celebrate top performance. In our culture of recognition and appreciation, every effort is acknowledged and rewarded.',
    icon: Award,
    emoji: '🏆'
  }
];

export default function CultureSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="text-white">Our </span>
          <span className="gradient-text">Culture</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Building an environment where innovation and creativity thrive ✨
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {cultureItems.map((item) => (
          <CultureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}