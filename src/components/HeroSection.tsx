
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';

const HeroSection: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Images */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Main drone image */}
          <img
            src="/lovable-uploads/501c3f4f-5927-4335-b524-f1113c74777c.png"
            alt="DJI Mini 4 Pro Drone"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-drone-dark/90 via-drone-dark/70 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-drone-gray/20 backdrop-blur-md border border-drone-light/20 mb-8 animate-fade-in">
            <span className="text-drone-light text-sm font-medium">DJI Mini 4 Pro • Tecnología Cinematográfica</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinematic font-bold text-white mb-6 leading-tight animate-slide-in">
            {t.hero.title}
            <br />
            <span className="text-drone-light">{t.hero.subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-drone-light mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t.hero.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-drone-light text-sm md:text-base">{t.stats.projects}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4K</div>
              <div className="text-drone-light text-sm md:text-base">{t.stats.quality}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-drone-light text-sm md:text-base">{t.stats.delivery}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-drone-light text-sm md:text-base">{t.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-drone-light rounded-full flex justify-center">
          <div className="w-1 h-3 bg-drone-light rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
