import React from 'react';
import { Star, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import { getTestimonials } from '../translations';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const testimonials = getTestimonials(language);

  return (
    <section className="py-16 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-3 border border-brand-gold/20 transform -translate-y-24 md:-translate-y-24">
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={i < Math.floor(BUSINESS_INFO.rating) ? "currentColor" : "none"} strokeWidth={i < Math.floor(BUSINESS_INFO.rating) ? 0 : 2} />
              ))}
            </div>
            <span className="font-bold text-brand-brown">
              {t('testimonials.badge')}
            </span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-brown mb-4">{t('testimonials.title')}</h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-brand-gold relative">
              <Quote className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-brand-gold/20 h-10 w-10" />
              <div className="flex text-brand-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-bold text-brand-brown">{review.name}</span>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="text-brand-brown font-semibold hover:text-brand-gold underline decoration-brand-gold underline-offset-4">
                {t('testimonials.readAll')}
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;