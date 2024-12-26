import React from 'react';
import { Share2 } from 'lucide-react';
import PortfolioHeader from '../shared/PortfolioHeader';
import SocialMediaGrid from './SocialMediaGrid';

export default function SocialMediaPortfolio() {
  return (
    <section className="py-20">
      <PortfolioHeader 
        icon={Share2}
        title="Social Media Management"
        description="Creative content that drives engagement and builds community 📱"
      />
      <SocialMediaGrid />
    </section>
  );
}