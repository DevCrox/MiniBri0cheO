import React from 'react';
import { MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" dir={dir}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/835/1920/1080" 
          alt="Artisanal Breads and Cakes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-brown/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6 bg-black/20 backdrop-blur-sm animate-fade-in-up">
          {t('hero.est')}
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight shadow-sm">
          {t('hero.title')} <br/><span className="text-brand-gold">{t('hero.titleHighlight')}</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-white rounded-full font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-brand-gold/50 flex items-center justify-center gap-2 group"
          >
            {t('hero.ctaOrder')}
            <ArrowIcon size={20} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </a>
          
          <a 
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white hover:text-brand-brown transition-all flex items-center justify-center gap-2"
          >
            <MapPin size={20} />
            {t('hero.ctaDirections')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;