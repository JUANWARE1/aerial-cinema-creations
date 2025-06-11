
import React from 'react';
import { Camera, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';

const Footer: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'YouTube', url: '#', icon: '📹' },
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'TikTok', url: '#', icon: '🎵' }
  ];

  const quickLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.packages, href: '#packages' },
    { name: t.nav.contact, href: '#contact' }
  ];

  return (
    <footer className="bg-drone-dark border-t border-drone-gray/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Camera className="h-8 w-8 text-drone-light mr-3" />
              <h3 className="text-2xl font-cinematic font-bold text-white">
                ZEPHYR<span className="text-drone-light">DronMX</span>
              </h3>
            </div>
            <p className="text-drone-light mb-6 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-drone-light">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@zephyrdronmx.com</span>
              </div>
              <div className="flex items-center text-drone-light">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-drone-light">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-drone-light hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Síguenos</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center p-3 bg-drone-gray/10 rounded-xl hover:bg-drone-light/10 transition-colors duration-300 group"
                >
                  <span className="text-xl mr-2">{social.icon}</span>
                  <span className="text-drone-light group-hover:text-white text-sm">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-white font-medium mb-3">Newsletter</h5>
              <p className="text-drone-light text-sm mb-4">
                Recibe tips y novedades sobre drones
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-drone-gray/20 border border-drone-gray/30 rounded-l-lg text-white placeholder-drone-gray focus:outline-none focus:border-drone-light"
                />
                <button className="px-4 py-2 bg-drone-light text-drone-dark rounded-r-lg hover:bg-white transition-colors duration-300">
                  ✓
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-drone-gray/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-drone-gray text-sm mb-4 md:mb-0">
              © 2024 ZEPHYR DronMX. {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6 text-sm text-drone-gray">
              <a href="#" className="hover:text-drone-light transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-drone-light transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-drone-light transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
