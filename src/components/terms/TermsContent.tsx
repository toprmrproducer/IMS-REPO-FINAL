import React from 'react';
import TermsHeader from './TermsHeader';
import TermsSection from './TermsSection';
import { termsData } from './termsData';

export default function TermsContent() {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-[#FF0000]/10">
      <TermsHeader />
      {termsData.map((section, index) => (
        <TermsSection key={index} {...section} />
      ))}
    </div>
  );
}