import React from 'react';
import Scene from '../3d/Scene';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="relative min-h-screen bg-black">
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF0000]/10 via-black to-black" />
      <div className="relative pt-32 pb-24">
        {children}
      </div>
    </div>
  );
}