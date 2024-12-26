import React from 'react';
import { Target } from 'lucide-react';
import PortfolioHeader from '../shared/PortfolioHeader';
import PPCOverview from './PPCOverview';
import PPCTypes from './PPCTypes';
import PPCResults from './PPCResults';

export default function PPCPortfolio() {
  return (
    <section className="py-20">
      <PortfolioHeader 
        icon={Target}
        title="Google PPC Management"
        description="Strategic advertising campaigns that deliver measurable results 🎯"
      />
      <PPCOverview />
      <PPCTypes />
      <PPCResults />
    </section>
  );
}