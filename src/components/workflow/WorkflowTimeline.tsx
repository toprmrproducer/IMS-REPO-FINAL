import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Workflow, ClipboardCheck, PackageCheck } from 'lucide-react';
import WorkflowStep from './WorkflowStep';

const workflowSteps = [
  {
    title: 'Discovery & Planning',
    description: 'Initial consultation and strategy development',
    icon: Workflow,
    duration: '1-2 weeks'
  },
  {
    title: 'Implementation',
    description: 'Executing the planned strategies',
    icon: ClipboardCheck,
    duration: '2-4 weeks'
  },
  {
    title: 'Review & Optimization',
    description: 'Analyzing results and optimizing performance',
    icon: PackageCheck,
    duration: 'Ongoing'
  }
];

export default function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative">
      {/* Progress bar */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF0000]/50 via-[#FF0000]/20 to-[#FF0000]/50" />
      
      <div className="space-y-12">
        {workflowSteps.map((step, index) => (
          <div key={step.title} className="relative">
            {/* Connection line */}
            {index < workflowSteps.length - 1 && (
              <div className="absolute left-1/2 top-full h-12 w-px bg-[#FF0000]/20" />
            )}
            
            <WorkflowStep
              {...step}
              status={index === activeStep ? 'active' : index < activeStep ? 'completed' : 'pending'}
              onClick={() => setActiveStep(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}