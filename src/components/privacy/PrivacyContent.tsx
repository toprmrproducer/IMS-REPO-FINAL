import React from 'react';
import PrivacyHeader from './PrivacyHeader';
import PrivacySection from './PrivacySection';
import { privacyData } from './privacyData';

export default function PrivacyContent() {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-[#FF0000]/10">
      <PrivacyHeader />
      {privacyData.map((section, index) => (
        <PrivacySection key={index} {...section} />
      ))}
    </div>
  );
}