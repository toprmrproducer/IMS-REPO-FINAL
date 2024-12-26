import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormInput({ label, ...props }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        className="w-full px-4 py-3 bg-black/50 border border-[#FF0000]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF0000]/50 transition-colors"
        {...props}
      />
    </div>
  );
}