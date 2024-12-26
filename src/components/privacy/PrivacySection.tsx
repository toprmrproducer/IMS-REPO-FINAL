import React from 'react';

interface PrivacySectionProps {
  title: string;
  content: string | string[];
  subsections?: {
    title: string;
    items?: string[];
    content?: string;
  }[];
}

export default function PrivacySection({ title, content, subsections }: PrivacySectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-display text-white mb-4">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-disc pl-5 space-y-2">
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
          {subsection.items ? (
            <ul className="list-disc pl-5 space-y-2">
              {subsection.items.map((item, idx) => (
                <li key={idx} className="text-gray-300">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">{subsection.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}