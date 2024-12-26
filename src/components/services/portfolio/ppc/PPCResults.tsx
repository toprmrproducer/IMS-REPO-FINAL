import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import ResultCard from './ResultCard';

const results = [
  {
    src: "https://static.wixstatic.com/media/4671a5_440a63ae2a3447c088d990f78e06f27a~mv2.png",
    title: "Campaign Performance",
    stats: { metric: "ROI", value: "+312%" }
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_9a3df84fd98141b3a2a2d76d744dfd02~mv2.png",
    title: "Conversion Rate",
    stats: { metric: "Increase", value: "+156%" }
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_d78efe4acf0d46d4b53f00a206f9f49f~mv2.png",
    title: "Click-Through Rate",
    stats: { metric: "Growth", value: "+245%" }
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_52c002413e9046539d23b6af23bff86a~mv2.png",
    title: "Cost Efficiency",
    stats: { metric: "CPC Reduction", value: "-42%" }
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_4ca21d3a897e4ba9bc367db49cc10a0b~mv2.png",
    title: "Lead Generation",
    stats: { metric: "Increase", value: "+189%" }
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_bf03e429ee474a78a902445200b38309~mv2.png",
    title: "Brand Awareness",
    stats: { metric: "Impressions", value: "+278%" }
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_0d12d17a478a4311946aebd9bf9d1c2b~mv2.png",
    title: "Market Reach",
    stats: { metric: "Expansion", value: "+412%" }
  }
];

export default function PPCResults() {
  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-[#FF0000]/10 rounded-xl">
            <TrendingUp className="w-6 h-6 text-[#FF0000]" />
          </div>
        </div>
        <h3 className="text-3xl font-display font-medium mb-4">
          <span className="text-white">Proven </span>
          <span className="gradient-text">Results</span>
        </h3>
        <p className="text-gray-400">Real campaign metrics showcasing our PPC expertise 📈</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {results.map((result, index) => (
          <ResultCard key={index} {...result} index={index} />
        ))}
      </div>
    </section>
  );
}