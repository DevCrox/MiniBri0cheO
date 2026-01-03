import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Cake} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.cakes'), href: '#menu' },
    // "Visit Us" redirects to "Our Story" (#about) per user request
    { name: t('nav.visit'), href: '#about' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'عربي' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2 backdrop-blur-sm' : 'bg-transparent py-4'}`} dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-brand-gold p-2 rounded-full text-white">
                <Cake size={24} />
              </div>
              <div>
                <h1 className={`font-serif text-xl font-bold tracking-wide ${scrolled ? 'text-brand-brown' : 'text-brand-brown md:text-white'}`}>
                  {BUSINESS_INFO.name}
                </h1>
                <p className={`text-xs uppercase tracking-wider ${scrolled ? 'text-brand-gold' : 'text-brand-gold md:text-gray-200'}`}>Agadir</p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-widest hover:text-brand-gold transition-colors ${scrolled ? 'text-brand-brown' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-r border-gray-300/30 px-4">
               {languages.map((lang) => (
                 <button
                   key={lang.code}
                   onClick={() => setLanguage(lang.code)}
                   className={`text-xs font-bold px-1 transition-colors ${language === lang.code ? 'text-brand-gold scale-110' : (scrolled ? 'text-brand-brown hover:text-brand-gold' : 'text-white hover:text-brand-gold')}`}
                 >
                   {lang.label}
                 </button>
               ))}
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-brand-gold text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={16} />
              <span>{t('nav.order')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Lang Switcher (Mini) */}
             <button onClick={() => setLanguage(language === 'en' ? 'fr' : (language === 'fr' ? 'ar' : 'en'))} className={`font-bold text-sm ${scrolled ? 'text-brand-brown' : 'text-brand-brown md:text-white'}`}>
                {language.toUpperCase()}
             </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-brand-brown' : 'text-brand-brown md:text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-brand-brown hover:text-brand-gold hover:bg-gray-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
          
           <div className="flex justify-center gap-4 py-2">
               {languages.map((lang) => (
                 <button
                   key={lang.code}
                   onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                   className={`text-sm font-bold px-3 py-1 rounded-full ${language === lang.code ? 'bg-brand-brown text-white' : 'text-brand-brown bg-gray-100'}`}
                 >
                   {lang.label}
                 </button>
               ))}
           </div>

          <div className="pt-4">
             <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="block w-full bg-brand-brown text-white px-6 py-3 rounded-md font-bold flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              {t('nav.call')} {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
