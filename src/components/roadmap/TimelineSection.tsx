import React from 'react';
import TimelineStep from './TimelineStep';
import { Workflow, ClipboardCheck, PackageCheck } from 'lucide-react';

const steps = [
  {
    title: "Brand Audit & Strategy",
    description: "Claire and Innovative Account Strategist will perform in-depth research and audit for your company. During the free consultation, we'll identify your challenges, offer tailored advice, and develop a marketing plan aligned with your goals.",
    icon: Workflow,
    items: [
      "Business analysis",
      "Pain point identification",
      "Goal setting",
      "Opportunity mapping"
    ],
    gradient: "from-[#FF0000]/20 to-black"
  },
  {
    title: "Onboarding & Project Kickoff",
    description: "After payment, we onboard you to the project. You'll be added to a WhatsApp group with Claire, Innovative Account Strategist, and Innovative Specialist. You'll also gain access to our Asana dashboard for real-time tracking. We also offer 24/7 support via WhatsApp, Asana, and email.",
    icon: ClipboardCheck,
    items: [
      "Team introduction",
      "Project setup",
      "Communication channels",
      "Timeline planning"
    ],
    gradient: "from-[#FF0000]/10 via-[#FF0000]/5 to-black"
  },
  {
    title: "Project Wrap-Up & Ownership",
    description: "Once we complete your project, we'll provide a final report summarizing everything and transfer all account information and assets to you, ensuring full control and ownership. However, if you'd like us to continue serving you, we are always more than happy to support your ongoing needs.",
    icon: PackageCheck,
    items: [
      "Final deliverables",
      "Asset transfer",
      "Documentation",
      "Support options"
    ],
    gradient: "from-black via-[#FF0000]/5 to-[#FF0000]/20"
  }
];

export default function TimelineSection() {
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

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#FF0000]/50 via-[#FF0000]/20 to-[#FF0000]/50" />
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.title}
                {...step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}