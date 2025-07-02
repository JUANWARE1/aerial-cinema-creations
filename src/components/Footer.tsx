
import React from 'react';
import { Camera, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';

const Footer: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/skyrion.dronmx/', 
      target: '_blank', 
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@ZephirDronMX', 
      target: '_blank', 
      icon: Youtube,
      color: 'hover:text-red-400'
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61576687060723', 
      target: '_blank', 
      icon: Facebook,
      color: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.packages, href: '#creador-de-paquetes' },
    { name: t.nav.contact, href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-drone-dark via-drone-dark/95 to-drone-gray/30 border-t border-drone-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-drone-light to-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Camera className="h-6 w-6 text-drone-dark" />
              </div>
              <h3 className="text-3xl font-cinematic font-bold text-white tracking-wide">
                ZEPHYR<span className="text-drone-light">DronMX</span>
              </h3>
            </div>
            <p className="text-drone-light/90 mb-8 max-w-md leading-relaxed text-lg font-light">
              {t.footer.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-drone-light/90 group hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-drone-light/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-drone-light/20 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium">udigitalb.contacto@gmail.com</span>
              </div>
              <div className="flex items-center text-drone-light/90 group hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-drone-light/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-drone-light/20 transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-medium">(+52) 33-21-99-84-03</span>
              </div>
              <div className="flex items-center text-drone-light/90 group hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-drone-light/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-drone-light/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-medium">Guadalajara Jal, México</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-cinematic font-semibold text-xl mb-8 tracking-wide">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-drone-light/80 hover:text-white transition-all duration-300 font-medium text-lg hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-cinematic font-semibold text-xl mb-8 tracking-wide">{t.footer.followUs}</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.target}
                    className={`flex items-center p-4 bg-gradient-to-r from-drone-gray/10 to-transparent backdrop-blur-sm border border-drone-light/10 rounded-2xl hover:border-drone-light/30 transition-all duration-300 group hover:shadow-lg hover:shadow-drone-light/5 ${social.color}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-drone-light/10 to-transparent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-lg group-hover:translate-x-1 transition-transform duration-300">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-drone-light/10 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-drone-gray/80 text-base font-medium">
              © 2024 ZEPHYR DronMX. {t.footer.rights}
            </p>
            <div className="flex items-center space-x-8 text-base text-drone-gray/80">
              <a href="#" className="hover:text-drone-light transition-colors duration-300 font-medium">{t.footer.privacyPolicy}</a>
              <a href="#" className="hover:text-drone-light transition-colors duration-300 font-medium">{t.footer.termsOfService}</a>
              <a href="#" className="hover:text-drone-light transition-colors duration-300 font-medium">{t.footer.cookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
