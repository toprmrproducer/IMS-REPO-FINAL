import React from 'react';

interface TermsSectionProps {
  title: string;
  content: string | string[];
  subsections?: {
    title: string;
    content: string;
  }[];
}

export default function TermsSection({ title, content, subsections }: TermsSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-display text-white mb-4">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-decimal pl-5 space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-gray-300">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-300 mb-4">{content}</p>
      )}
      
      {subsections && subsections.map((subsection, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-xl font-display text-white mb-2">{subsection.title}</h3>
          <p className="text-gray-300">{subsection.content}</p>
        </div>
      ))}
    </div>
  );
}