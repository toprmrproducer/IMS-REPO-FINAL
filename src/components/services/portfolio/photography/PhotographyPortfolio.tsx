import React from 'react';
import { Camera } from 'lucide-react';
import PortfolioHeader from '../shared/PortfolioHeader';
import PhotographyGrid from './PhotographyGrid';
import ViewFullPortfolioButton from './ViewFullPortfolioButton';

export default function PhotographyPortfolio() {
  return (
    <section className="py-20">
      <PortfolioHeader 
        icon={Camera}
        title="Photography Portfolio"
        description="Professional photography that captures your brand's essence 📸"
      />
      <PhotographyGrid />
      <div className="mt-12 flex justify-center">
        <ViewFullPortfolioButton />
      </div>
    </section>
  );
}