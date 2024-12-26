import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/company/fusion-vision-innovate-marketing-studio/?_l=en_US',
    hoverColor: 'hover:text-[#0077B5]'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/profile.php?id=61561517103239&mibextid=JRoKGi',
    hoverColor: 'hover:text-[#1877F2]'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/ims_worldwide?igsh=MW02ajhyYTU4OTM5MA%3D%3D&utm_source=qr',
    hoverColor: 'hover:text-[#E4405F]'
  },
  {
    name: 'TikTok',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.138-1.009 6.268 6.268 0 0 1-1.362-2.618h.004C16.189.892 16.202 0 16.202 0h-3.36v16.532c0 .892-.481 1.673-1.198 2.097-.424.251-.921.397-1.455.397a2.865 2.865 0 0 1-2.867-2.867c0-1.586 1.281-2.867 2.867-2.867.315 0 .618.051.901.146v-3.437c-.296-.047-.599-.071-.901-.071C6.696 9.93 4 12.626 4 15.989c0 3.362 2.696 6.058 6.059 6.058 3.362 0 6.058-2.696 6.058-6.058V8.258a9.566 9.566 0 0 0 3.36.602V5.564l-.156-.002z"/>
      </svg>
    ),
    url: 'https://www.tiktok.com/@ims_worldwide?_t=8nrhUsPjvBH&_r=1',
    hoverColor: 'hover:text-[#000000]'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/@ims_worldwide',
    hoverColor: 'hover:text-[#FF0000]'
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    url: 'https://x.com/ims_worldwide',
    hoverColor: 'hover:text-[#1DA1F2]'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-colors duration-300 ${social.hoverColor}`}
          title={social.name}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}