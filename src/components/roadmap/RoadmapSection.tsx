import React from 'react';
import RoadmapStep from './RoadmapStep';
import { Workflow, ClipboardCheck, PackageCheck } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Brand Audit & Strategy",
    description: "Claire and Innovative Account Strategist will perform in-depth research and audit for your company. During the free consultation, we'll identify your challenges, offer tailored advice, and develop a marketing plan aligned with your goals.",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    accent: "from-[#FF0000]/10 to-[#FF0000]/5"
  },
  {
    number: 2,
    title: "Onboarding & Project Kickoff",
    description: "After payment, we onboard you to the project. You'll be added to a WhatsApp group with Claire, Innovative Account Strategist, and Innovative Specialist. You'll also gain access to our Asana dashboard for real-time tracking. We also offer 24/7 support via WhatsApp, Asana, and email.",
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
    accent: "from-[#FF0000] to-transparent"
  },
  {
    number: 3,
    title: "Project Wrap-Up & Ownership",
    description: "Once we complete your project, we'll provide a final report summarizing everything and transfer all account information and assets to you, ensuring full control and ownership. However, if you'd like us to continue serving you, we are always more than happy to support your ongoing needs.",
    icon: PackageCheck,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1200",
    accent: "from-white/5 to-[#FF0000]/10"
  }
];

export default function RoadmapSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-medium mb-6">
            <span className="text-white">IMS Seamless Workflow: </span>
            <span className="gradient-text">Real-Time</span>
            <span className="text-white"> Progress, </span>
            <span className="gradient-text">Transparent</span>
            <span className="text-white"> Strategy</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Our streamlined process ensures clear communication and measurable results at every step
          </p>
        </div>
        
        <div className="grid gap-8">
          {steps.map((step) => (
            <RoadmapStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}