import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, BarChart2, MessageSquare, Phone } from 'lucide-react';

const supportFeatures = [
  {
    icon: Users,
    title: "Dedicated Account Management",
    description: "Personal support from experienced account managers"
  },
  {
    icon: Clock,
    title: "Quick Response Time",
    description: "1-3 day response time for all inquiries"
  },
  {
    icon: BarChart2,
    title: "Regular Strategy Reviews",
    description: "Monthly performance reviews and optimization"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Support",
    description: "Instant messaging support via WhatsApp"
  }
];

const contactInfo = {
  phone: "+65 8428 1714",
  email: "hello@innovatemarketingstudio.com",
  address: "22 Sin Ming Lane #06-76, Midview City Singapore 573969"
};

export default function ClientSupport() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="text-white">Client </span>
          <span className="gradient-text">Support</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Dedicated support to ensure your success 🌟
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {supportFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all duration-300"
          >
            <div className="p-3 bg-[#FF0000]/10 rounded-xl w-fit mb-4 group-hover:bg-[#FF0000]/20 transition-colors duration-300">
              <feature.icon className="w-6 h-6 text-[#FF0000]" />
            </div>
            <h3 className="text-xl font-display text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-[#FF0000]/10 max-w-2xl mx-auto text-center"
      >
        <div className="p-4 bg-[#FF0000]/10 rounded-full w-fit mx-auto mb-6">
          <Phone className="w-6 h-6 text-[#FF0000]" />
        </div>
        <h3 className="text-2xl font-display text-white mb-6">Contact Us</h3>
        <div className="space-y-3 text-gray-300">
          <p>Phone: {contactInfo.phone} (WhatsApp)</p>
          <p>Email: {contactInfo.email}</p>
          <p>Address: {contactInfo.address}</p>
        </div>
      </motion.div>
    </section>
  );
}