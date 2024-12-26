import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChooseSection from '../components/why-choose/WhyChooseSection';
import MissionSection from '../components/mission/MissionSection';
import Services from '../components/services/Services';
import TimelineSection from '../components/roadmap/TimelineSection';
import Brands from '../components/brands/Brands';
import AuditHeader from '../components/audit/AuditHeader';
import CaseStudies from '../components/case-studies/CaseStudies';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyChooseSection />
      <MissionSection />
      <Services />
      <CaseStudies />
      <TestimonialsSection />
      <TimelineSection />
      <Brands />
      <AuditHeader />
    </>
  );
}