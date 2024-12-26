import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Megaphone, Globe, Search } from 'lucide-react';

const coreServices = [
  {
    title: "Social Media & Content Management",
    items: [
      "Full-service social media management across all major platforms 📱",
      "Custom graphics, motion design, and video content creation 🎨",
      "Community engagement and audience growth strategies 🌱",
      "Professional copywriting and content planning 📝",
      "Performance tracking and analytics reporting 📊"
    ],
    icon: Layout
  },
  {
    title: "Digital Advertising",
    items: [
      "Facebook & Instagram (Meta) advertising 🎯",
      "TikTok campaign management 🎵",
      "LinkedIn B2B advertising 💼",
      "Comprehensive audience targeting and retargeting 🎯",
      "Campaign optimization for ROI 📈"
    ],
    icon: Megaphone
  },
  {
    title: "Web & App Development",
    items: [
      "Custom website design and development 🌐",
      "Mobile-responsive solutions 📱",
      "SEO-optimized architecture 🔍",
      "User experience (UX) optimization ✨",
      "Secure hosting and maintenance 🔒"
    ],
    icon: Globe
  },
  {
    title: "SEO Services",
    items: [
      "Comprehensive keyword research 🔍",
      "On-page optimization ⚡",
      "Technical SEO implementation 🛠️",
      "Content strategy and creation 📝",
      "Local SEO optimization 📍",
      "Link building and off-page SEO 🔗"
    ],
    icon: Search
  }
];

export default function CoreServices() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="text-white">Core </span>
          <span className="gradient-text">Services</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Comprehensive digital solutions to elevate your brand ✨
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {coreServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF0000]/10 rounded-xl group-hover:bg-[#FF0000]/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-[#FF0000]" />
              </div>
              <div>
                <h3 className="text-2xl font-display text-white mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                      whileHover={{ x: 10 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}