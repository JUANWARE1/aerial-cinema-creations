
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      gallery: 'Galería',
      packages: 'Paquetes',
      blog: 'Blog',
      contact: 'Contacto'
    },
    hero: {
      title: 'Captura la Grandeza',
      subtitle: 'desde las Alturas',
      description: 'Servicios profesionales de dron con DJI Mini 4 Pro. Transformamos tus eventos y proyectos en contenido audiovisual cinematográfico de alto impacto.',
      cta: 'Explorar Servicios',
      contact: 'Contactar Ahora'
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones aéreas profesionales para cada necesidad',
      events: {
        title: 'Cobertura de Eventos',
        description: 'Bodas, festivales, conciertos y celebraciones capturadas desde perspectivas únicas.'
      },
      marketing: {
        title: 'Videos Promocionales',
        description: 'Contenido cinematográfico para empresas, hoteles, restaurantes e inmobiliarias.'
      },
      social: {
        title: 'Contenido para Redes',
        description: 'Tomas aéreas impactantes para influencers y creadores de contenido.'
      },
      real_estate: {
        title: 'Inmobiliario',
        description: 'Fotografía y video aéreo de propiedades que destacan cada detalle.'
      },
      tourism: {
        title: 'Turismo y Paisajes',
        description: 'Promoción visual de destinos turísticos y bellezas naturales.'
      },
      inspection: {
        title: 'Inspecciones Técnicas',
        description: 'Revisiones aéreas para construcción, agricultura y proyectos industriales.'
      }
    },
    gallery: {
      title: 'Galería de Proyectos',
      subtitle: 'Descubre la calidad cinematográfica de nuestro trabajo'
    },
    packages: {
      title: 'Paquetes y Precios',
      subtitle: 'Soluciones adaptadas a tu presupuesto',
      basic: {
        title: 'Básico',
        price: 'Desde $150',
        features: ['1-2 horas de vuelo', 'Edición básica', 'Entrega en 48h', '5 fotos editadas']
      },
      professional: {
        title: 'Profesional',
        price: 'Desde $300',
        features: ['3-4 horas de vuelo', 'Edición cinematográfica', 'Video promocional', '15 fotos editadas', 'Entrega en 24h']
      },
      premium: {
        title: 'Premium',
        price: 'Desde $500',
        features: ['Día completo', 'Múltiples locaciones', 'Edición avanzada', 'Videos personalizados', 'Entrega inmediata', 'Revisiones ilimitadas']
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Comencemos tu proyecto',
      form: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        service: 'Tipo de Servicio',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      description: 'Servicios profesionales de dron con tecnología DJI Mini 4 Pro'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      packages: 'Packages',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      title: 'Capture Greatness',
      subtitle: 'from Above',
      description: 'Professional drone services with DJI Mini 4 Pro. Transform your events and projects into high-impact cinematic audiovisual content.',
      cta: 'Explore Services',
      contact: 'Contact Now'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional aerial solutions for every need',
      events: {
        title: 'Event Coverage',
        description: 'Weddings, festivals, concerts and celebrations captured from unique perspectives.'
      },
      marketing: {
        title: 'Promotional Videos',
        description: 'Cinematic content for businesses, hotels, restaurants and real estate.'
      },
      social: {
        title: 'Social Media Content',
        description: 'Impactful aerial shots for influencers and content creators.'
      },
      real_estate: {
        title: 'Real Estate',
        description: 'Aerial photography and video of properties highlighting every detail.'
      },
      tourism: {
        title: 'Tourism & Landscapes',
        description: 'Visual promotion of tourist destinations and natural beauty.'
      },
      inspection: {
        title: 'Technical Inspections',
        description: 'Aerial reviews for construction, agriculture and industrial projects.'
      }
    },
    gallery: {
      title: 'Project Gallery',
      subtitle: 'Discover the cinematic quality of our work'
    },
    packages: {
      title: 'Packages & Pricing',
      subtitle: 'Solutions adapted to your budget',
      basic: {
        title: 'Basic',
        price: 'From $150',
        features: ['1-2 hours flight', 'Basic editing', '48h delivery', '5 edited photos']
      },
      professional: {
        title: 'Professional',
        price: 'From $300',
        features: ['3-4 hours flight', 'Cinematic editing', 'Promotional video', '15 edited photos', '24h delivery']
      },
      premium: {
        title: 'Premium',
        price: 'From $500',
        features: ['Full day', 'Multiple locations', 'Advanced editing', 'Custom videos', 'Immediate delivery', 'Unlimited revisions']
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s start your project',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Service Type',
        message: 'Message',
        send: 'Send Message'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      description: 'Professional drone services with DJI Mini 4 Pro technology'
    }
  }
};

export const useTranslation = (language: 'es' | 'en') => {
  return translations[language];
};
