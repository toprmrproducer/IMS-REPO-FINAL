import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'AI & KOLs', path: '/ai-kols' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCalendar = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1D0_B6sxCy40djaqSCI7HgHOWfurFnn1wfkUKNaL8vGFgf6nvRlO0wTxL1mF4ldxk2DNaFjHUa', '_blank');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'h-16 bg-black/95 backdrop-blur-sm' : 'h-20 bg-transparent'
      }`}
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`text-white/90 hover:text-[#FF0000] transition-colors text-sm font-medium tracking-wide ${
                    location.pathname === item.path ? 'text-[#FF0000]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={openCalendar}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#FF0000] rounded-lg text-white font-medium flex items-center gap-2 hover:bg-[#CC0000] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Free Consultation</span>
            </motion.button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-white/90 hover:text-[#FF0000] transition-colors text-sm font-medium tracking-wide ${
                    location.pathname === item.path ? 'text-[#FF0000]' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={openCalendar}
                className="px-4 py-2 bg-[#FF0000] rounded-lg text-white font-medium flex items-center gap-2 hover:bg-[#CC0000] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Get a Free Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}