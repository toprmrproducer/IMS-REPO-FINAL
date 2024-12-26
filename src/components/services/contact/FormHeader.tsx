import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FormHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-6">
        <div className="p-3 bg-[#FF0000]/10 rounded-xl">
          <MessageSquare className="w-6 h-6 text-[#FF0000]" />
        </div>
      </div>
      
      <h2 className="text-3xl font-display font-medium mb-4">
        <span className="text-white">Get in </span>
        <span className="gradient-text">Touch</span>
      </h2>
      
      <p className="text-gray-400">
        We'll get back to you within 1-3 business days ✨
      </p>
    </div>
  );
}