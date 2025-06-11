
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import GallerySection from '@/components/GallerySection';

const Gallery: React.FC = () => {
  const { language } = useTheme();

  return (
    <div className="min-h-screen bg-drone-dark text-white">
      <Navigation />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Gallery;
