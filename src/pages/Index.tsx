
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import QuoteCalculator from '@/components/QuoteCalculator';
import MapSection from '@/components/MapSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const Index = () => {
  return (
    <div className="min-h-screen bg-drone-dark text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <QuoteCalculator />
      <MapSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
