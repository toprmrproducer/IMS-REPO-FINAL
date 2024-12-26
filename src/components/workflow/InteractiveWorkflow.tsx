import React from 'react';
import { motion } from 'framer-motion';
import WorkflowTimeline from './WorkflowTimeline';

export default function InteractiveWorkflow() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-medium mb-6">
            <span className="text-white">IMS </span>
            <span className="gradient-text">Seamless</span>
            <span className="text-white"> Workflow</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Our proven process ensures clear communication and measurable results at every step
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <WorkflowTimeline />
      </div>
    </section>
  );
}