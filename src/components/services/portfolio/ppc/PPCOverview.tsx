import React from 'react';
import { motion } from 'framer-motion';

export default function PPCOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <img 
        src="https://static.wixstatic.com/media/4671a5_707ba80f08b941e5a6dd4751e5312206~mv2.png/v1/fill/w_1165,h_818,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/google%20ppc%20example.png"
        alt="PPC Campaign Overview"
        className="w-full rounded-xl shadow-lg"
      />
    </motion.div>
  );
}