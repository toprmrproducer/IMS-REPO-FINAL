import React from 'react';
import { motion } from 'framer-motion';
import FormHeader from './FormHeader';
import FormFields from './FormFields';

export default function ContactForm() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-[#FF0000]/20"
      >
        <FormHeader />
        <FormFields />
      </motion.div>
    </section>
  );
}