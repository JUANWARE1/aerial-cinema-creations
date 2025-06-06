
import React, { useState } from 'react';
import { Play, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const Videos: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoItems = [
    {
      id: 1,
      title: 'DJI Mini 4 Pro - Demo Reel Profesional',
      thumbnail: '/lovable-uploads/501c3f4f-5927-4335-b524-f1113c74777c.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Demo',
      duration: '2:30',
      description: 'Showcase completo de las capacidades del DJI Mini 4 Pro en diferentes escenarios'
    },
    {
      id: 2,
      title: 'Cobertura Aérea de Bodas - Portfolio',
      thumbnail: '/lovable-uploads/bb05e63d-b8f3-4280-b786-aff9e95a7740.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Bodas',
      duration: '4:15',
      description: 'Los momentos más emotivos capturados desde las alturas'
    },
    {
      id: 3,
      title: 'Videos Inmobiliarios de Lujo',
      thumbnail: '/lovable-uploads/c0d7f20b-adc1-486e-b72b-6d86e34952fe.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Inmobiliario',
      duration: '3:45',
      description: 'Presentación cinematográfica de propiedades exclusivas'
    },
    {
      id: 4,
      title: 'Video Corporativo Empresarial',
      thumbnail: '/lovable-uploads/cee53865-9bbb-4cd9-b90b-4726b8bab2f7.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Corporativo',
      duration: '5:20',
      description: 'Promocionales corporativos con tomas aéreas impactantes'
    },
    {
      id: 5,
      title: 'Documentales de Naturaleza',
      thumbnail: '/lovable-uploads/fe6b0dae-fc37-4ccd-b965-00f601f11e2d.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Naturaleza',
      duration: '6:10',
      description: 'Captura la belleza natural desde perspectivas únicas'
    },
    {
      id: 6,
      title: 'Eventos Deportivos Extremos',
      thumbnail: '/lovable-uploads/501c3f4f-5927-4335-b524-f1113c74777c.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Deportes',
      duration: '3:30',
      description: 'Adrenalina pura capturada en 4K'
    }
  ];

  const categories = ['Todos', 'Demo', 'Bodas', 'Inmobiliario', 'Corporativo', 'Naturaleza', 'Deportes'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredVideos = activeCategory === 'Todos' 
    ? videoItems 
    : videoItems.filter(video => video.category === activeCategory);

  return (
    <div className="min-h-screen bg-drone-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-drone-dark via-drone-gray/10 to-drone-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-6">
              Portfolio de Videos
            </h1>
            <p className="text-xl text-drone-light max-w-3xl mx-auto">
              Descubre nuestro trabajo más reciente y experimenta la calidad cinematográfica que ofrecemos
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-3 rounded-full transition-all duration-300 font-medium
                  ${activeCategory === category 
                    ? 'bg-drone-light text-drone-dark shadow-lg scale-105' 
                    : 'border-drone-light/30 text-drone-light hover:bg-drone-light/10 hover:border-drone-light/50'
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-2xl bg-drone-gray/10 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-drone-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-10 w-10 text-drone-dark ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-drone-dark/80 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{video.duration}</span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium text-drone-light px-3 py-1 bg-drone-light/20 rounded-full border border-drone-light/30">
                      {video.category}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-drone-light transition-colors">
                    {video.title}
                  </h3>
                  
                  <p className="text-drone-light text-sm leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-drone-light hover:text-white hover:bg-drone-light/10 p-0"
                    >
                      Ver Video
                    </Button>
                    <ZoomIn className="h-4 w-4 text-drone-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Video Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-cinematic font-bold text-center text-white mb-12">
              Video Destacado del Mes
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-drone-gray/10 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Featured Video"
                  className="w-full h-full rounded-3xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="text-center mt-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Zephyr DronMX - Reel Cinematográfico 2024
                </h3>
                <p className="text-drone-light text-lg max-w-2xl mx-auto">
                  Una muestra de nuestros mejores trabajos realizados durante este año, 
                  demostrando la calidad cinematográfica y profesionalismo que nos caracteriza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl aspect-video">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-16 right-0 z-10 text-white hover:bg-white/20 border border-white/20"
            >
              <X className="h-6 w-6" />
              <span className="ml-2">Cerrar</span>
            </Button>
            <iframe
              src={selectedVideo}
              title="Video Player"
              className="w-full h-full rounded-xl shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Videos;
