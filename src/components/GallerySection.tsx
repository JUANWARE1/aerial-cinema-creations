
import React, { useState } from 'react';
import { Play, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';

const GallerySection: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: '/lovable-uploads/501c3f4f-5927-4335-b524-f1113c74777c.png',
      title: 'DJI Mini 4 Pro Setup',
      category: 'Equipment'
    },
    {
      id: 2,
      type: 'image',
      src: '/lovable-uploads/cee53865-9bbb-4cd9-b90b-4726b8bab2f7.png',
      title: 'Urban Aerial Shot',
      category: 'City'
    },
    {
      id: 3,
      type: 'image',
      src: '/lovable-uploads/bb05e63d-b8f3-4280-b786-aff9e95a7740.png',
      title: 'Event Coverage',
      category: 'Events'
    },
    {
      id: 4,
      type: 'image',
      src: '/lovable-uploads/c0d7f20b-adc1-486e-b72b-6d86e34952fe.png',
      title: 'Landscape View',
      category: 'Nature'
    },
    {
      id: 5,
      type: 'image',
      src: '/lovable-uploads/fe6b0dae-fc37-4ccd-b965-00f601f11e2d.png',
      title: 'Forest Inspection',
      category: 'Technical'
    }
  ];

  const categories = ['All', 'Equipment', 'City', 'Events', 'Nature', 'Technical'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-drone-gray/5 to-drone-dark/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-drone-light max-w-3xl mx-auto mb-12">
            {t.gallery.subtitle}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-2 rounded-full transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-drone-light text-drone-dark' 
                    : 'border-drone-light/30 text-drone-light hover:bg-drone-light/10'
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl aspect-video bg-drone-gray/10 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(item.src)}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-drone-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <span className="text-drone-light text-sm px-3 py-1 bg-drone-light/20 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Play className="h-5 w-5 text-white" />
                    ) : (
                      <ZoomIn className="h-5 w-5 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size images */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Gallery item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-drone-light text-drone-dark hover:bg-white transition-all duration-300 text-lg px-8 py-4"
          >
            Ver Portafolio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
