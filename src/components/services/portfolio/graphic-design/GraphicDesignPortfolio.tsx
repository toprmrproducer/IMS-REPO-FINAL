import React from 'react';
import { Palette } from 'lucide-react';
import PortfolioHeader from '../shared/PortfolioHeader';
import DesignShowcase from './DesignShowcase';
import DesignCategories from './DesignCategories';

export default function GraphicDesignPortfolio() {
  return (
    <section className="py-20">
      <PortfolioHeader 
        icon={Palette}
        title="Graphic Design Portfolio"
        description="Creative designs that bring your brand vision to life ✨"
      />
      <DesignShowcase />
      <DesignCategories />
    </section>
  );
}