import React from 'react';
import Scene from './3d/Scene';
import RotatingText from './ui/RotatingText';
import MarketingVideo from './ui/MarketingVideo';
import FounderCard from './founder/FounderCard';
import CertificationSlideshow from './certifications/CertificationSlideshow';
import AnimatedHeroButton from './ui/AnimatedHeroButton';
import AnimatedHeroText from './ui/AnimatedHeroText';
import { rotatingPhrases } from '../config/heroConfig';

export default function Hero() {
  const openCalendar = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1D0_B6sxCy40djaqSCI7HgHOWfurFnn1wfkUKNaL8vGFgf6nvRlO0wTxL1mF4ldxk2DNaFjHUa', '_blank');
  };

  return (
    <div className="relative min-h-screen">
      <Scene />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF0000]/10 via-black to-black" />
      
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 min-h-screen flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-medium mb-8 tracking-tight leading-tight font-display">
              <span className="text-white">Empower Your Brand with </span>
              <br className="hidden sm:block" />
              <RotatingText 
                phrases={rotatingPhrases}
                interval={3000}
                fadeTime={500}
              />
            </h1>
            
            <div className="flex justify-center mb-16">
              <AnimatedHeroButton 
                variant="consultation" 
                onClick={openCalendar}
              />
            </div>

            <AnimatedHeroText />
            
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-6xl mx-auto">
              <div className="flex-1">
                <MarketingVideo />
              </div>
              <div className="flex-1 space-y-8">
                <FounderCard />
                <CertificationSlideshow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}