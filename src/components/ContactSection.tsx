
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { toast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+52 3321998403',
      action: 'tel:+523321998403'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'udigitalb.contacto@gmail.com',
      action: 'mailto:udigitalb.contacto@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Guadalajara Jal, México',
      action: '#'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+52 3321998403',
      action: 'https://wa.me/523321998403'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-drone-dark via-drone-dark/98 to-drone-gray/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-8 tracking-wide">
            {t.contact.title}
          </h2>
          <p className="text-xl text-drone-light/90 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-drone-gray/10 via-drone-gray/5 to-transparent backdrop-blur-sm border border-drone-light/20 rounded-3xl p-10 shadow-2xl shadow-drone-dark/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-drone-light text-base font-semibold mb-3 tracking-wide">
                      {t.contact.form.name}
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-drone-dark/60 border-drone-gray/50 text-white placeholder-drone-gray/70 focus:border-drone-light/60 h-14 text-lg rounded-xl shadow-inner"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-drone-light text-base font-semibold mb-3 tracking-wide">
                      {t.contact.form.email}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-drone-dark/60 border-drone-gray/50 text-white placeholder-drone-gray/70 focus:border-drone-light/60 h-14 text-lg rounded-xl shadow-inner"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-drone-light text-base font-semibold mb-3 tracking-wide">
                    {t.contact.form.phone}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-drone-dark/60 border-drone-gray/50 text-white placeholder-drone-gray/70 focus:border-drone-light/60 h-14 text-lg rounded-xl shadow-inner"
                    placeholder="+52 55 1234 5678"
                  />
                </div>

                <div>
                  <label className="block text-drone-light text-base font-semibold mb-3 tracking-wide">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-drone-dark/60 border-drone-gray/50 text-white placeholder-drone-gray/70 focus:border-drone-light/60 min-h-[140px] text-lg rounded-xl shadow-inner"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-drone-light to-white text-drone-dark hover:from-white hover:to-drone-light transition-all duration-300 text-xl py-6 rounded-xl font-semibold tracking-wide group shadow-xl hover:shadow-2xl hover:shadow-drone-light/20"
                >
                  <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  {t.contact.form.send}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center p-8 bg-gradient-to-r from-drone-gray/10 to-transparent backdrop-blur-sm border border-drone-light/20 rounded-2xl hover:border-drone-light/40 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-drone-light/10"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-drone-light/15 to-drone-light/5 rounded-2xl flex items-center justify-center mr-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <Icon className="h-10 w-10 text-drone-light" />
                    </div>
                    <div>
                      <h3 className="text-white font-cinematic font-semibold text-xl mb-2 tracking-wide">{info.title}</h3>
                      <p className="text-drone-light/90 text-lg font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}

              {/* Map placeholder */}
              <div className="mt-12 rounded-2xl overflow-hidden border border-drone-light/20 shadow-xl">
                <div className="h-72 bg-gradient-to-br from-drone-gray/20 to-drone-dark/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-drone-light/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MapPin className="h-8 w-8 text-drone-light" />
                    </div>
                    <p className="text-drone-light text-lg font-medium">Mapa interactivo próximamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
