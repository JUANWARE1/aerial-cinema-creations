
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
      title: 'DJI Mini 4 Pro - Demo Reel',
      thumbnail: '/lovable-uploads/501c3f4f-5927-4335-b524-f1113c74777c.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Demo',
      duration: '2:30'
    },
    {
      id: 2,
      title: 'Wedding Aerial Coverage',
      thumbnail: '/lovable-uploads/bb05e63d-b8f3-4280-b786-aff9e95a7740.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Events',
      duration: '4:15'
    },
    {
      id: 3,
      title: 'Real Estate Showcase',
      thumbnail: '/lovable-uploads/c0d7f20b-adc1-486e-b72b-6d86e34952fe.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Real Estate',
      duration: '3:45'
    },
    {
      id: 4,
      title: 'Corporate Promotional Video',
      thumbnail: '/lovable-uploads/cee53865-9bbb-4cd9-b90b-4726b8bab2f7.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Corporate',
      duration: '5:20'
    },
    {
      id: 5,
      title: 'Nature Documentary',
      thumbnail: '/lovable-uploads/fe6b0dae-fc37-4ccd-b965-00f601f11e2d.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'Nature',
      duration: '6:10'
    }
  ];

  const categories = ['All', 'Demo', 'Events', 'Real Estate', 'Corporate', 'Nature'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = activeCategory === 'All' 
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
              Videos Profesionales
            </h1>
            <p className="text-xl text-drone-light max-w-3xl mx-auto">
              Descubre nuestro portafolio de videos aéreos profesionales capturados con DJI Mini 4 Pro
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

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-2xl aspect-video bg-drone-gray/10 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-drone-dark ml-1" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-drone-dark/90 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{video.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-drone-light text-sm px-3 py-1 bg-drone-light/20 rounded-full">
                      {video.category}
                    </span>
                    <span className="text-drone-light text-sm">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Video Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-cinematic font-bold text-center text-white mb-12">
              Video Destacado
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-drone-gray/10">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Featured Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  SkyVision Pro - Reel Profesional 2024
                </h3>
                <p className="text-drone-light">
                  Una muestra de nuestros mejores trabajos realizados durante este año
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 z-10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
            <iframe
              src={selectedVideo}
              title="Video Player"
              className="w-full h-full rounded-lg"
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
