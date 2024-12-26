import React from 'react';
import { motion } from 'framer-motion';
import DesignCard from './DesignCard';

const designs = [
  {
    src: "https://static.wixstatic.com/media/4671a5_4191b13be68b4d749a4e272d043b07aa~mv2.png",
    title: "Brand Identity",
    description: "Comprehensive branding solutions"
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_48ef94e5a34d4fe2b961f4fac4d8894d~mv2.png",
    title: "Marketing Materials",
    description: "Eye-catching promotional designs"
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_a3fc20b5fd80410298692352459ba229~mv2.png",
    title: "Social Media",
    description: "Engaging social content"
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_ce09021915d54959ae8614fe06773ad2~mv2.png",
    title: "Digital Assets",
    description: "Web and digital graphics"
  },
  {
    src: "https://static.wixstatic.com/media/4671a5_cdaf77d6cea04e22a66ecf0378b6f0c2~mv2.png",
    title: "UI/UX Design",
    description: "User-centered interface design"
  }
];

export default function DesignCategories() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {designs.map((design, index) => (
        <DesignCard key={index} {...design} index={index} />
      ))}
    </div>
  );
}