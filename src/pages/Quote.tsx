
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import QuoteCalculator from '@/components/QuoteCalculator';

const Quote: React.FC = () => {
  const { language } = useTheme();

  return (
    <div className="min-h-screen bg-drone-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-gradient-to-br from-drone-dark via-drone-gray/10 to-drone-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-6">
              Cotiza tu Proyecto
            </h1>
            <p className="text-xl text-drone-light max-w-3xl mx-auto">
              Obtén una cotización personalizada para los servicios de dron que necesitas
            </p>
          </div>
        </div>
      </section>

      <QuoteCalculator />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Quote;
