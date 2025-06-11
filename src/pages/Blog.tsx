
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const Blog: React.FC = () => {
  const { language } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Guía completa del DJI Mini 4 Pro: Características y ventajas',
      excerpt: 'Descubre todas las funcionalidades avanzadas del DJI Mini 4 Pro y por qué es la mejor opción para servicios profesionales de dron.',
      image: '/lovable-uploads/501c3f4f-5927-4335-b524-f1113c74777c.png',
      category: 'Equipamiento',
      date: '2024-01-15',
      readTime: '5 min',
      author: 'SkyVision Pro Team'
    },
    {
      id: 2,
      title: '10 consejos para fotografía aérea en eventos',
      excerpt: 'Aprende las mejores técnicas y configuraciones para capturar momentos únicos desde el aire en bodas y eventos especiales.',
      image: '/lovable-uploads/bb05e63d-b8f3-4280-b786-aff9e95a7740.png',
      category: 'Técnicas',
      date: '2024-01-10',
      readTime: '7 min',
      author: 'SkyVision Pro Team'
    },
    {
      id: 3,
      title: 'Marketing inmobiliario con drones: Casos de éxito',
      excerpt: 'Cómo las tomas aéreas están revolucionando la venta de propiedades y generando mayor interés en los compradores.',
      image: '/lovable-uploads/c0d7f20b-adc1-486e-b72b-6d86e34952fe.png',
      category: 'Inmobiliario',
      date: '2024-01-05',
      readTime: '6 min',
      author: 'SkyVision Pro Team'
    },
    {
      id: 4,
      title: 'Regulaciones y permisos para vuelo de drones en México',
      excerpt: 'Todo lo que necesitas saber sobre la normativa vigente y los requisitos legales para operar drones comercialmente.',
      image: '/lovable-uploads/cee53865-9bbb-4cd9-b90b-4726b8bab2f7.png',
      category: 'Legal',
      date: '2023-12-28',
      readTime: '8 min',
      author: 'SkyVision Pro Team'
    },
    {
      id: 5,
      title: 'Inspecciones técnicas con drones: Eficiencia y precisión',
      excerpt: 'Descubre cómo los drones están transformando las inspecciones industriales y de infraestructura.',
      image: '/lovable-uploads/fe6b0dae-fc37-4ccd-b965-00f601f11e2d.png',
      category: 'Industrial',
      date: '2023-12-20',
      readTime: '6 min',
      author: 'SkyVision Pro Team'
    }
  ];

  const categories = ['Todos', 'Equipamiento', 'Técnicas', 'Inmobiliario', 'Legal', 'Industrial'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-drone-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-drone-dark via-drone-gray/10 to-drone-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-6">
              Blog SkyVision
            </h1>
            <p className="text-xl text-drone-light max-w-3xl mx-auto mb-12">
              Conocimiento, técnicas y novedades del mundo de los drones profesionales
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-drone-gray h-5 w-5" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-drone-gray/20 border-drone-gray/30 text-white placeholder:text-drone-gray"
              />
            </div>
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-drone-gray/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-drone-gray/20 hover:border-drone-light/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-drone-light/90 text-drone-dark px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-drone-light transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-drone-light text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-xs text-drone-gray mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('es-ES')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-drone-light hover:text-white hover:bg-drone-light/10 p-0"
                  >
                    Leer más
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
         
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Blog;
