
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useTheme();
  const t = useTranslation(language);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '/', path: '/' },
    { key: 'services', href: '/#services', path: '/#services' },
    { key: 'gallery', href: '/gallery', path: '/gallery' },
    { key: 'videos', href: '/videos', path: '/videos' },
    { key: 'blog', href: '/blog', path: '/blog' },
    { key: 'contact', href: '/#contact', path: '/#contact' }
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === item.path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-drone-dark/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="/lovable-uploads/498563c0-ac4c-4d4b-87af-788f9615161d.png" 
                alt="Zephyr DronMX" 
                className="h-16 md:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.key}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                      isActive(item) ? 'text-white' : 'text-drone-light hover:text-white'
                    }`}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-drone-light transform transition-transform duration-200 ${
                      isActive(item) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </a>
                ) : (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                      isActive(item) ? 'text-white' : 'text-drone-light hover:text-white'
                    }`}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-drone-light transform transition-transform duration-200 ${
                      isActive(item) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Language Control */}
          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-drone-light hover:text-white hover:bg-drone-gray/20"
            >
              <Globe size={18} />
              <span className="ml-1 text-xs">{language.toUpperCase()}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-drone-light hover:text-white"
            >
              <Globe size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-drone-light hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-drone-dark/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-drone-light hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </a>
                ) : (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="text-drone-light hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
