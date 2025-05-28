
import React from 'react';
import { Camera, Video, Users, Building, MapPin, Search } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';

const ServicesSection: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const services = [
    {
      icon: Users,
      key: 'events',
      image: '/lovable-uploads/bb05e63d-b8f3-4280-b786-aff9e95a7740.png'
    },
    {
      icon: Video,
      key: 'marketing',
      image: '/lovable-uploads/c0d7f20b-adc1-486e-b72b-6d86e34952fe.png'
    },
    {
      icon: Camera,
      key: 'social',
      image: '/lovable-uploads/cee53865-9bbb-4cd9-b90b-4726b8bab2f7.png'
    },
    {
      icon: Building,
      key: 'real_estate',
      image: '/lovable-uploads/fe6b0dae-fc37-4ccd-b965-00f601f11e2d.png'
    },
    {
      icon: MapPin,
      key: 'tourism',
      image: '/lovable-uploads/501c3f4f-5927-4335-b524-f1113c74777c.png'
    },
    {
      icon: Search,
      key: 'inspection',
      image: '/lovable-uploads/bb05e63d-b8f3-4280-b786-aff9e95a7740.png'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-drone-dark to-drone-gray/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-drone-light max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t.services[service.key as keyof typeof t.services] as { title: string; description: string };
            
            return (
              <div
                key={service.key}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-drone-gray/10 to-transparent backdrop-blur-sm border border-drone-light/10 hover:border-drone-light/30 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={service.image}
                    alt={serviceData.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-drone-dark/90 via-drone-dark/50 to-transparent"></div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-end">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-drone-light/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-drone-light/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-drone-light" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl font-cinematic font-semibold text-white mb-4 group-hover:text-drone-light transition-colors duration-300">
                    {serviceData.title}
                  </h3>
                  <p className="text-drone-light/80 leading-relaxed">
                    {serviceData.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-0.5 bg-drone-light rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-drone-light/10 backdrop-blur-md border border-drone-light/20 text-drone-light">
            <span className="mr-2">¿Tienes un proyecto específico?</span>
            <a href="#contact" className="text-white font-semibold hover:text-drone-light transition-colors">
              Conversemos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
