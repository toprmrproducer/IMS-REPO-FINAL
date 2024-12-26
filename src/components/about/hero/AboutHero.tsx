import React from 'react';
import InteractiveText from './InteractiveText';

export default function AboutHero() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-24">
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#FF0000]/10">
        <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">
          <InteractiveText>Why Partner with Us? 🤝</InteractiveText>{' '}
          <span className="gradient-text">Discover IMS's Unique Approach ✨</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Experience how we manage your <InteractiveText>project/campaign 📊</InteractiveText> with{' '}
          <InteractiveText>precision ⚡</InteractiveText>, using tools for{' '}
          <InteractiveText>transparent communication 💬</InteractiveText>,{' '}
          <InteractiveText>efficient workflows 🔄</InteractiveText>, and delivering{' '}
          <InteractiveText>exceptional results 🎯</InteractiveText>.
        </p>
        
        <p className="text-lg text-gray-400 leading-relaxed">
          <InteractiveText>Efficiency ⚙️</InteractiveText>,{' '}
          <InteractiveText>transparency 🔍</InteractiveText>, and{' '}
          <InteractiveText>dedication 💪</InteractiveText> are at the core of everything we do. 
          From start to finish, these principles guide us in creating{' '}
          <InteractiveText>innovative strategies 🚀</InteractiveText> focused on achieving your success.
        </p>
      </div>
    </div>
  );
}