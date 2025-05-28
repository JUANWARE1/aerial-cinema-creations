
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@skyvisionpro.com',
      action: 'mailto:info@skyvisionpro.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Ciudad de México, México',
      action: '#'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+52 55 1234 5678',
      action: 'https://wa.me/5255123445678'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-drone-dark to-drone-gray/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-drone-light max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-drone-gray/10 to-transparent backdrop-blur-sm border border-drone-light/20 rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-drone-light text-sm font-medium mb-2">
                      {t.contact.form.name}
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-drone-dark/50 border-drone-gray text-white placeholder-drone-gray focus:border-drone-light"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-drone-light text-sm font-medium mb-2">
                      {t.contact.form.email}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-drone-dark/50 border-drone-gray text-white placeholder-drone-gray focus:border-drone-light"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-drone-light text-sm font-medium mb-2">
                      {t.contact.form.phone}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-drone-dark/50 border-drone-gray text-white placeholder-drone-gray focus:border-drone-light"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-drone-light text-sm font-medium mb-2">
                      {t.contact.form.service}
                    </label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="bg-drone-dark/50 border-drone-gray text-white">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent className="bg-drone-dark border-drone-gray">
                        <SelectItem value="events">Cobertura de Eventos</SelectItem>
                        <SelectItem value="marketing">Videos Promocionales</SelectItem>
                        <SelectItem value="social">Contenido para Redes</SelectItem>
                        <SelectItem value="real-estate">Inmobiliario</SelectItem>
                        <SelectItem value="tourism">Turismo y Paisajes</SelectItem>
                        <SelectItem value="inspection">Inspecciones Técnicas</SelectItem>
                        <SelectItem value="custom">Proyecto Personalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-drone-light text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-drone-dark/50 border-drone-gray text-white placeholder-drone-gray focus:border-drone-light min-h-[120px]"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-drone-light text-drone-dark hover:bg-white transition-all duration-300 text-lg py-4 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {t.contact.form.send}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center p-6 bg-gradient-to-r from-drone-gray/10 to-transparent backdrop-blur-sm border border-drone-light/20 rounded-2xl hover:border-drone-light/40 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-drone-light/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-drone-light/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-drone-light" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-drone-light">{info.value}</p>
                    </div>
                  </a>
                );
              })}

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-drone-light/20">
                <div className="h-64 bg-gradient-to-br from-drone-gray/20 to-drone-dark/40 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-drone-light mx-auto mb-4" />
                    <p className="text-drone-light">Mapa interactivo próximamente</p>
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
