
import React, { useState } from 'react';
import { MapPin, Navigation as NavigationIcon, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';

const MapSection: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const [mapboxToken, setMapboxToken] = useState('');

  const serviceAreas = [
    { name: 'Ciudad de México', coords: [19.4326, -99.1332] },
    { name: 'Guadalajara', coords: [20.6597, -103.3496] },
    { name: 'Monterrey', coords: [25.6866, -100.3161] },
    { name: 'Puebla', coords: [19.0414, -98.2063] },
    { name: 'Cancún', coords: [21.1619, -86.8515] }
  ];

  return (
    <section id="map" className="py-20 bg-gradient-to-br from-drone-gray/5 to-drone-dark/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-6">
            Área de Cobertura
          </h2>
          <p className="text-xl text-drone-light max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de dron en las principales ciudades de México
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <div className="relative">
            {!mapboxToken ? (
              <div className="bg-drone-gray/10 rounded-2xl p-8 border border-drone-light/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Configurar Mapa Interactivo
                </h3>
                <p className="text-drone-light mb-6">
                  Para mostrar el mapa interactivo, necesitas un token de Mapbox. 
                  Puedes obtener uno gratis en <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-drone-light underline">mapbox.com</a>
                </p>
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Ingresa tu Mapbox Access Token..."
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="bg-drone-gray/20 border-drone-gray/30 text-white placeholder:text-drone-gray"
                  />
                  <Button 
                    onClick={() => {
                      if (mapboxToken) {
                        // Here we would initialize the map with the token
                        console.log('Initializing map with token:', mapboxToken);
                      }
                    }}
                    className="w-full bg-drone-light text-drone-dark hover:bg-white"
                  >
                    Activar Mapa
                  </Button>
                </div>
                
                {/* Placeholder Map */}
                <div className="mt-8 aspect-video bg-drone-dark/40 rounded-xl flex items-center justify-center border border-drone-light/10">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-drone-light mx-auto mb-4" />
                    <p className="text-drone-light">Mapa Interactivo</p>
                    <p className="text-drone-gray text-sm">Token requerido</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-drone-dark/40 rounded-xl flex items-center justify-center border border-drone-light/10">
                <div className="text-center">
                  <NavigationIcon className="h-16 w-16 text-drone-light mx-auto mb-4" />
                  <p className="text-drone-light">Mapa se cargaría aquí</p>
                  <p className="text-drone-gray text-sm">Con token: {mapboxToken.substring(0, 20)}...</p>
                </div>
              </div>
            )}
          </div>

          {/* Service Areas and Contact Info */}
          <div className="space-y-8">
            {/* Service Areas */}
            <div className="bg-drone-gray/10 rounded-2xl p-8 border border-drone-light/20 backdrop-blur-sm">
              <h3 className="text-2xl font-cinematic font-bold text-white mb-6">
                Ciudades de Servicio
              </h3>
              <div className="space-y-4">
                {serviceAreas.map((area, index) => (
                  <div 
                    key={area.name}
                    className="flex items-center p-4 bg-drone-dark/20 rounded-xl hover:bg-drone-light/10 transition-colors cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <MapPin className="h-5 w-5 text-drone-light mr-3" />
                    <span className="text-white font-medium">{area.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-drone-light/10 rounded-xl">
                <p className="text-drone-light text-sm">
                  <strong className="text-white">¿Tu ciudad no está en la lista?</strong><br />
                  Contáctanos para consultar disponibilidad en otras ubicaciones.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-drone-gray/10 rounded-2xl p-8 border border-drone-light/20 backdrop-blur-sm">
              <h3 className="text-2xl font-cinematic font-bold text-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-drone-light mr-4" />
                  <div>
                    <p className="text-white font-semibold">+52 55 1234 5678</p>
                    <p className="text-drone-gray text-sm">Lun - Vie, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-drone-light mr-4" />
                  <div>
                    <p className="text-white font-semibold">info@skyvisionpro.com</p>
                    <p className="text-drone-gray text-sm">Respuesta en 24 horas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-drone-light mr-4" />
                  <div>
                    <p className="text-white font-semibold">Oficina Principal</p>
                    <p className="text-drone-gray text-sm">Ciudad de México, México</p>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full mt-6 bg-drone-light text-drone-dark hover:bg-white transition-all duration-300"
                onClick={() => window.open('https://wa.me/5255123445678', '_blank')}
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
