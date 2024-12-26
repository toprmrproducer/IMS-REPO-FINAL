import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';

const contactInfo = {
  email: 'hello@innovatemarketingstudio.com',
  phone: '+65 8428 1714',
  address: '22 Sin Ming Lane #06-76, Midview City Singapore 573969'
};

const links = [
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Terms & Conditions', href: '/terms' },
  { title: 'Cookie Policy', href: '/cookie-policy' }
];

export default function FooterLinks() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Contact Us</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li>
          <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </li>
          <li className="flex items-start gap-2 text-gray-400">
            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>{contactInfo.address}</span>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
        <ul className="space-y-2">
          {links.map(link => (
            <li key={link.title}>
              <a 
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
        <SocialLinks />
      </div>
    </div>
  );
}