import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const AboutLocation: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-0 flex flex-col lg:flex-row bg-brand-brown text-white" dir={dir}>
      {/* Content Side */}
      <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2">{t('about.story')}</span>
        <h2 className="font-serif text-4xl font-bold mb-6">{t('about.title')}</h2>
        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          {t('about.p1')}
        </p>
        <p className="text-gray-300 mb-10 leading-relaxed text-lg">
          {t('about.p2')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-brand-gold/20 p-3 rounded-full text-brand-gold">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">{t('about.hoursTitle')}</h4>
              <p className="text-gray-400">{t('about.days')}</p>
              <p className="text-white font-semibold">{t('about.hours')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-brand-gold/20 p-3 rounded-full text-brand-gold">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">{t('about.findTitle')}</h4>
              <p className="text-gray-400">{t('about.address1')}</p>
              <p className="text-white font-semibold">{t('about.address2')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Side */}
      <div id="contact" className="lg:w-1/2 min-h-[400px] bg-gray-200 relative">
        <iframe
          title="Mini Brioche Location"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '500px' }}
          src={BUSINESS_INFO.mapEmbedUrl}
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
        
        {/* Floating CTA for Mobile Map */}
        <a 
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-8 right-8 rtl:right-auto rtl:left-8 bg-brand-gold text-white px-6 py-3 rounded-full shadow-xl font-bold hover:bg-white hover:text-brand-brown transition-colors lg:hidden flex items-center gap-2"
        >
            <MapPin size={18} /> {t('about.openMaps')}
        </a>
      </div>
    </section>
  );
};

export default AboutLocation;