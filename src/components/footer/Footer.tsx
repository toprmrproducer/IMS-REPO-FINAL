import React from 'react';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#FF0000]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FooterLinks />
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Innovate Marketing Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}