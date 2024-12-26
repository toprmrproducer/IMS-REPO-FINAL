import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { Target, Users, TrendingUp, ShoppingCart } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-commerce PPC Campaign',
    description: 'Optimized Google Ads campaign for a luxury fashion retailer, resulting in significant ROI improvement.',
    metrics: [
      { prefix: '+', value: '312', suffix: '%', label: 'ROI Increase' },
      { prefix: '-', value: '42', suffix: '%', label: 'Cost per Conversion' },
      { value: '2.8', suffix: 'M', label: 'Impressions' },
      { prefix: '$', value: '850K', label: 'Revenue Generated' }
    ],
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'B2C Lead Generation',
    description: 'Strategic social media campaign for a retail brand that exceeded target metrics across all KPIs.',
    metrics: [
      { prefix: '+', value: '245', suffix: '%', label: 'Lead Generation' },
      { value: '4.2', suffix: '%', label: 'Conversion Rate' },
      { prefix: '+', value: '12K', label: 'New Customers' },
      { prefix: '+', value: '89', suffix: '%', label: 'Engagement' }
    ],
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Brand Awareness Campaign',
    description: 'Comprehensive digital marketing strategy that significantly increased brand visibility and engagement.',
    metrics: [
      { prefix: '+', value: '156', suffix: '%', label: 'Brand Mentions' },
      { value: '8.4M', label: 'Reach' },
      { prefix: '+', value: '92', suffix: '%', label: 'Website Traffic' },
      { value: '4.8', suffix: '/5', label: 'Customer Rating' }
    ],
    icon: Target,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Market Expansion Strategy',
    description: 'Helped a regional business successfully expand into new markets through targeted digital campaigns.',
    metrics: [
      { prefix: '+', value: '5', label: 'New Markets' },
      { prefix: '+', value: '278', suffix: '%', label: 'Revenue Growth' },
      { value: '125K', label: 'New Customers' },
      { prefix: '+', value: '412', suffix: '%', label: 'Online Presence' }
    ],
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function CaseStudies() {
  return (
    <section className="bg-black py-32" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-medium mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Success</span>
            <span className="text-white"> Stories</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Real results from real clients. Discover how our innovative strategies drive exceptional outcomes across different industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard 
              key={study.title}
              {...study}
            />
          ))}
        </div>
      </div>
    </section>
  );
}