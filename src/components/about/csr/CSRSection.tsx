import React from 'react';
import CSRInitiative from './CSRInitiative';

const initiatives = [
  {
    title: "Project GivexGift: Initiative 1",
    description: "At Innovate Marketing Studio, we believe in the power of giving back. Through our CSR initiative, Project GivexGift, we aim to collaborate and partner with non-profit organizations and social enterprises to support their marketing efforts. As innovators with unique gifts in the field of marketing, we are dedicated to using our expertise to make a positive impact on society. By providing strategic marketing support, we aim to help both non-profits and social enterprises amplify their message, reach a wider audience, and achieve their goals. Our commitment is to leverage our skills to contribute meaningfully to the community and drive social change."
  },
  {
    title: "Project GivexGift: Initiative 2",
    description: "Building on our commitment to giving back, the second initiative of Project GivexGift is focused on sharing resources and spreading kindness through giving. We are dedicated to donating pre-loved items in excellent condition or brand new, unused items to those who will treasure them. This initiative is designed to instill the values of saving, sharing, and thoughtful giving, helping people recognize the joy and impact of gifting items with purpose. Through this initiative, we hope to remind everyone that each of us is gifted in our own way and that sharing what we have can inspire connection and kindness. By giving these items to those who need them, we aim to bring warmth and appreciation into our community, spreading love and joy, one thoughtful gift at a time."
  }
];

export default function CSRSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-medium mb-6">
          <span className="text-white">Corporate Social </span>
          <span className="gradient-text">Responsibility</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Making a positive impact in our community through meaningful initiatives 💝
        </p>
      </div>

      <div className="space-y-8 max-w-6xl mx-auto">
        {initiatives.map((initiative, index) => (
          <CSRInitiative 
            key={initiative.title}
            {...initiative}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}