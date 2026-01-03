import React from 'react';
import { Facebook, Instagram, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-950 text-white/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left rtl:md:text-right">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">{BUSINESS_INFO.name}</h3>
          <p className="text-sm">{t('footer.subtitle')}</p>
        </div>

        <div className="flex flex-col items-center">
             <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 text-2xl font-bold text-brand-gold hover:text-white transition-colors mb-4">
                <Phone className="fill-current" />
                {BUSINESS_INFO.phone}
             </a>
             <div className="flex gap-6">
                <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={24} /></a>
             </div>
        </div>

        <div className="text-center md:text-right rtl:md:text-left text-sm">
          <p>&copy; {new Date().getFullYear()} Mini Brioche.</p>
          <p>{t('footer.madeWith')}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;