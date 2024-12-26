import React from 'react';
import ServiceCard from './ServiceCard';
import { Megaphone, Video, Target, Share2 } from 'lucide-react';

const services = [
  {
    title: 'Social Media Management',
    description: 'We handle your social media and community engagement, freeing you up to focus on what matters most to your business.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200',
    icon: Share2,
    emoji: '📱'
  },
  {
    title: 'Influencer Management',
    description: 'Our most popular solution, the Influencer Management Service, uses cutting-edge AI to source, manage, and track influencer content and live stream performance analytics.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    icon: Megaphone,
    emoji: '🌟'
  },
  {
    title: 'Google PPC Management',
    description: 'Our Google PPC Management service drives qualified leads using Google Search Ads, Display Network, Shopping, and YouTube. With a dedicated team of expert media planners and buyers, we strategically manage and optimize campaigns.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200',
    icon: Target,
    emoji: '🎯'
  },
  {
    title: 'Social Media Advertising',
    description: 'We help amplify your brand\'s reach by boosting posts to a wider audience across key social media platforms like Instagram, Facebook, TikTok, YouTube, LinkedIn, and more.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200',
    icon: Video,
    emoji: '🚀'
  }
];

export default function ServiceCategories() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}