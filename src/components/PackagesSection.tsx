
import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';

const PackagesSection: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const packages = [
    {
      key: 'basic',
      popular: false,
      color: 'from-drone-gray/20 to-drone-gray/10'
    },
    {
      key: 'professional',
      popular: true,
      color: 'from-drone-light/20 to-drone-light/10'
    },
    {
      key: 'premium',
      popular: false,
      color: 'from-drone-dark/40 to-drone-dark/20'
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-drone-dark via-drone-gray/10 to-drone-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-6">
            {t.packages.title}
          </h2>
          <p className="text-xl text-drone-light max-w-3xl mx-auto">
            {t.packages.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const packageData = t.packages[pkg.key as keyof typeof t.packages] as {
              title: string;
              price: string;
              features: string[];
            };

            return (
              <div
                key={pkg.key}
                className={`
                  relative rounded-3xl p-8 border backdrop-blur-sm
                  ${pkg.popular 
                    ? 'border-drone-light/50 bg-gradient-to-br from-drone-light/10 to-transparent scale-105 md:scale-110' 
                    : 'border-drone-gray/30 bg-gradient-to-br from-drone-gray/5 to-transparent hover:border-drone-light/30'
                  }
                  transition-all duration-500 hover:scale-105 group
                `}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-drone-light text-drone-dark px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-2 fill-current" />
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-cinematic font-bold text-white mb-4">
                    {packageData.title}
                  </h3>
                  <div className="text-4xl md:text-5xl font-bold text-drone-light mb-2">
                    {packageData.price}
                  </div>
                  <p className="text-drone-gray text-sm">USD por proyecto</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {packageData.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-drone-light/20 rounded-full flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-drone-light" />
                      </div>
                      <span className="text-drone-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`
                    w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300
                    ${pkg.popular
                      ? 'bg-drone-light text-drone-dark hover:bg-white hover:scale-105'
                      : 'bg-transparent border-2 border-drone-light text-drone-light hover:bg-drone-light hover:text-drone-dark'
                    }
                  `}
                >
                  Seleccionar Plan
                </Button>

                {/* Background Accent */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pkg.color} blur-xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-drone-gray/10 to-drone-light/10 backdrop-blur-sm border border-drone-light/20">
            <h3 className="text-2xl font-cinematic font-bold text-white mb-4">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-drone-light mb-6">
              Creamos paquetes únicos adaptados a tus necesidades específicas. Cuéntanos tu proyecto y te haremos una propuesta personalizada.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-drone-light text-drone-light hover:bg-drone-light hover:text-drone-dark transition-all duration-300"
            >
              Solicitar Cotización Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
