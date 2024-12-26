import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, MessageCircle, Linkedin } from 'lucide-react';

const platforms = [
  {
    name: 'YouTube Ads',
    icon: Youtube,
    image: 'https://static.wixstatic.com/media/4671a5_0d1c5f2709f04b809dc808348806f690~mv2.png/v1/crop/x_302,y_19,w_535,h_681/fill/w_338,h_430,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/youtube-ad-pods.png',
    description: 'Strategic video advertising campaigns on YouTube'
  },
  {
    name: 'Quora Ads',
    icon: MessageCircle,
    image: 'https://static.wixstatic.com/media/4671a5_a364819a5ca64ad9a05a7a52fce14147~mv2.png/v1/crop/x_0,y_227,w_1080,h_1471/fill/w_386,h_525,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Iphone_Image_1_edited.png',
    description: 'Targeted Q&A platform advertising'
  },
  {
    name: 'LinkedIn Ads',
    icon: Linkedin,
    image: 'https://static.wixstatic.com/media/4671a5_ec6c460361394e00850622067d8ccc21~mv2.png/v1/crop/x_266,y_186,w_504,h_659/fill/w_386,h_505,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LinkedIn-CC-mockup-1024x1024.png',
    description: 'Professional B2B advertising solutions'
  }
];

export default function AdPlatforms() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="text-white">Expertise in </span>
          <span className="gradient-text">Different Fields</span>
          <span className="text-white"> of Advertising</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Strategic advertising across major platforms for maximum impact 🎯
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <platform.icon className="w-6 h-6 text-[#FF0000]" />
                <h3 className="text-xl font-display text-white">{platform.name}</h3>
              </div>
              <p className="text-gray-400 mb-6">{platform.description}</p>
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={platform.image}
                alt={platform.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}