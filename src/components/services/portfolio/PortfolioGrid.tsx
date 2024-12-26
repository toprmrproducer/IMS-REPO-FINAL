import React from 'react';
import PortfolioCard from './PortfolioCard';
import { Megaphone, BarChart2, Target, Globe } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Social Media Growth Campaign',
    description: 'Increased social media engagement by 312% for a leading fashion retailer through strategic content and community management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    icon: Megaphone,
    stats: [
      { label: 'Engagement Rate', value: '+312%' },
      { label: 'Follower Growth', value: '25K+' },
      { label: 'ROI', value: '4.8x' }
    ]
  },
  {
    title: 'E-commerce PPC Campaign',
    description: 'Optimized Google Ads campaign resulting in significant ROI improvement and reduced cost per conversion.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200',
    icon: BarChart2,
    stats: [
      { label: 'ROI Increase', value: '+245%' },
      { label: 'Cost Reduction', value: '-42%' },
      { label: 'Conversions', value: '850+' }
    ]
  },
  {
    title: 'Influencer Marketing Program',
    description: 'Managed successful influencer campaigns reaching millions of targeted users across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    icon: Target,
    stats: [
      { label: 'Reach', value: '2.8M+' },
      { label: 'Engagement', value: '8.4%' },
      { label: 'Sales Growth', value: '+156%' }
    ]
  },
  {
    title: 'Global Brand Expansion',
    description: 'Helped a regional business successfully expand into new markets through targeted digital campaigns.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    icon: Globe,
    stats: [
      { label: 'New Markets', value: '5+' },
      { label: 'Revenue Growth', value: '+278%' },
      { label: 'Brand Mentions', value: '12K+' }
    ]
  }
];

export default function PortfolioGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {portfolioItems.map((item) => (
        <PortfolioCard key={item.title} {...item} />
      ))}
    </div>
  );
}