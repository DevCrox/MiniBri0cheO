import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { getMenuItems } from '../translations';
import { MenuItem } from '../types';

const MenuGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('cake'); // Default to highlighting cakes per user request
  const { t, language } = useLanguage();
  const menuItems = getMenuItems(language);

  const categories = [
    { id: 'all', label: t('menu.categories.all') },
    { id: 'cake', label: t('menu.categories.cake') },
    { id: 'moroccan', label: t('menu.categories.moroccan') },
    { id: 'french', label: t('menu.categories.french') },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">{t('menu.specialties')}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mt-2 mb-6">{t('menu.title')}</h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-brand-brown text-white shadow-lg scale-105'
                  : 'bg-brand-cream text-brand-brown hover:bg-brand-gold/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: MenuItem) => (
            <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                {item.tags && (
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex flex-col gap-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="bg-white/90 backdrop-blur-sm text-brand-brown text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-brand-brown mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <p className="text-gray-500 mb-4 line-clamp-3 text-sm leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">{item.category}</span>
                  <button className="text-brand-brown text-sm font-bold border-b-2 border-brand-gold/30 hover:border-brand-gold transition-colors">
                    {t('menu.inquire')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGallery;