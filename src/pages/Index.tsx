
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import PackagesSection from '@/components/PackagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-drone-dark text-white">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <PackagesSection />
        <ContactSection />
        <Footer />
        <FloatingContact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
