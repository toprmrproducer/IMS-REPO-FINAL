import React from 'react';
import { motion } from 'framer-motion';

const ppcTypes = [
  {
    title: "Search Ads",
    image: "https://static.wixstatic.com/media/4671a5_eda7b36fcb4841e1a029deb3cd86e16c~mv2.png/v1/fill/w_383,h_383,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/google%20search%20ads.png"
  },
  {
    title: "Display Ads",
    image: "https://static.wixstatic.com/media/4671a5_815b457e0d694b91aeec27dd23c2d1ac~mv2.png/v1/fill/w_383,h_383,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(5).png"
  },
  {
    title: "Shopping Ads",
    image: "https://static.wixstatic.com/media/4671a5_0abe34db834e4a00967bbc24b415df11~mv2.png/v1/fill/w_383,h_383,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(7).png"
  },
  {
    title: "Video Ads",
    image: "https://static.wixstatic.com/media/4671a5_68c1aa1b66b84726bc9657134354b75c~mv2.png/v1/fill/w_383,h_383,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(8).png"
  }
];

export default function PPCTypes() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {ppcTypes.map((type, index) => (
        <motion.div
          key={type.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
        >
          <img 
            src={type.image} 
            alt={type.title}
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="p-4">
            <h3 className="text-xl font-display text-white text-center">{type.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}