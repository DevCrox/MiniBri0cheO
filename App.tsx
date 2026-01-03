import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import MenuGallery from './components/MenuGallery';
import AboutLocation from './components/AboutLocation';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-brand-cream transition-all duration-300">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Testimonials />
          <MenuGallery />
          <AboutLocation />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;