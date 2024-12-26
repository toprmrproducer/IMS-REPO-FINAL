import React from 'react';
import { Scale } from 'lucide-react';

export default function TermsHeader() {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="p-3 bg-[#FF0000]/10 rounded-xl">
          <Scale className="w-6 h-6 text-[#FF0000]" />
        </div>
      </div>
      <h1 className="text-4xl font-display font-medium mb-4">Terms & Conditions</h1>
      <p className="text-gray-400">Last Updated: 25 June 2024</p>
    </div>
  );
}