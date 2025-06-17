
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock blog posts data (same as in Blog.tsx)
  const blogPosts = [
    {
      id: 1,
      title: 'Guía completa del DJI Mini 4 Pro: Características y ventajas',
      excerpt: 'Descubre todas las funcionalidades avanzadas del DJI Mini 4 Pro y por qué es la mejor opción para servicios profesionales de dron.',
      content: `
        <h2>Introducción</h2>
        <p>El DJI Mini 4 Pro representa la evolución más avanzada en la línea de drones compactos de DJI. Con su peso inferior a 249 gramos, este drone no requiere registro en muchos países, lo que lo convierte en la opción perfecta para profesionales que buscan calidad sin complicaciones burocráticas.</p>
        
        <h2>Características principales</h2>
        <ul>
          <li><strong>Cámara 4K/60fps:</strong> Calidad cinematográfica con capacidad de grabación en 4K a 60 fps</li>
          <li><strong>Sensor CMOS 1/1.3":</strong> Mayor tamaño de sensor para mejor calidad de imagen</li>
          <li><strong>Detección de obstáculos omnidireccional:</strong> Seguridad mejorada en vuelos complejos</li>
          <li><strong>Tiempo de vuelo extendido:</strong> Hasta 34 minutos de autonomía</li>
          <li><strong>Transmisión O4:</strong> Alcance de transmisión de hasta 20km</li>
        </ul>

        <h2>Ventajas para servicios profesionales</h2>
        <p>Para nuestros servicios de grabación aérea, el DJI Mini 4 Pro ofrece ventajas significativas:</p>
        <ul>
          <li>Portabilidad sin sacrificar calidad</li>
          <li>Configuración rápida para eventos</li>
          <li>Menor impacto visual en ceremonias</li>
          <li>Cumplimiento normativo simplificado</li>
        </ul>

        <h2>Conclusión</h2>
        <p>El DJI Mini 4 Pro es nuestra herramienta principal para bodas, eventos corporativos y producciones que requieren discreción sin comprometer la calidad profesional.</p>
      `,
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
      content: `
        <h2>1. Planificación previa del vuelo</h2>
        <p>La clave del éxito en fotografía aérea de eventos está en la planificación. Visita el lugar con anticipación, identifica las mejores posiciones y verifica las restricciones de vuelo.</p>

        <h2>2. Configuración de cámara optimal</h2>
        <ul>
          <li>ISO bajo (100-400) para minimizar ruido</li>
          <li>Apertura f/2.8 - f/5.6 para profundidad de campo adecuada</li>
          <li>Velocidad de obturación mínimo 1/120s</li>
        </ul>

        <h2>3. Momentos clave para capturar</h2>
        <p>En bodas y eventos, ciertos momentos son únicos desde perspectiva aérea:</p>
        <ul>
          <li>Llegada de invitados</li>
          <li>Ceremonia desde altura</li>
          <li>Fotos grupales</li>
          <li>Baile y celebración</li>
        </ul>

        <h2>4. Composición desde altura</h2>
        <p>La fotografía aérea permite composiciones únicas. Utiliza líneas naturales, patrones geométricos y la regla de tercios adaptada a la perspectiva cenital.</p>

        <h2>5. Gestión de batería y tiempo</h2>
        <p>Planifica tus vuelos considerando la duración de la batería. Lleva siempre baterías de repuesto y programa los momentos más importantes.</p>

        <p><em>Continúa leyendo para descubrir los 5 consejos restantes...</em></p>
      `,
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
      content: `
        <h2>La revolución del marketing inmobiliario</h2>
        <p>El uso de drones en marketing inmobiliario ha transformado completamente la forma en que se presentan las propiedades. Las tomas aéreas ofrecen una perspectiva única que las fotografías tradicionales no pueden igualar.</p>

        <h2>Caso de éxito: Residencial Premium</h2>
        <p>Nuestro trabajo con el desarrollo residencial "Vista Panorámica" resultó en un incremento del 40% en las consultas online después de integrar video aéreo en su campaña de marketing.</p>

        <h2>Beneficios comprobados</h2>
        <ul>
          <li><strong>Mayor engagement:</strong> Los videos aéreos generan 300% más interacciones en redes sociales</li>
          <li><strong>Mejor contexto:</strong> Los compradores entienden la ubicación y entorno</li>
          <li><strong>Diferenciación:</strong> Propiedades con video aéreo se destacan en portales</li>
          <li><strong>Ventas más rápidas:</strong> Reducción promedio del 23% en tiempo de venta</li>
        </ul>

        <h2>Técnicas específicas para inmobiliario</h2>
        <p>Cada tipo de propiedad requiere un enfoque diferente:</p>
        <ul>
          <li><strong>Casas unifamiliares:</strong> Enfoque en jardines y privacidad</li>
          <li><strong>Condominios:</strong> Mostrar amenidades y ubicación</li>
          <li><strong>Terrenos:</strong> Dimensiones y accesos</li>
          <li><strong>Comercial:</strong> Flujo vehicular y visibilidad</li>
        </ul>
      `,
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
      content: `
        <h2>Marco legal actual en México</h2>
        <p>La operación de drones en México está regulada por la Dirección General de Aeronáutica Civil (DGAC) y requiere cumplir con normativas específicas según el peso y uso del drone.</p>

        <h2>Categorías de drones</h2>
        <h3>Micro (menos de 2kg)</h3>
        <ul>
          <li>No requieren permiso para uso recreativo</li>
          <li>Uso comercial: Registro ante DGAC</li>
          <li>Altitud máxima: 122 metros</li>
        </ul>

        <h3>Pequeños (2kg - 25kg)</h3>
        <ul>
          <li>Permiso DGAC obligatorio</li>
          <li>Licencia de piloto requerida</li>
          <li>Seguro de responsabilidad civil</li>
        </ul>

        <h2>Requisitos para operación comercial</h2>
        <ol>
          <li><strong>Registro del drone:</strong> Obtener matrícula ante DGAC</li>
          <li><strong>Licencia de piloto:</strong> Curso teórico y examen</li>
          <li><strong>Seguro vigente:</strong> Cobertura mínima establecida</li>
          <li><strong>Manual de operaciones:</strong> Procedimientos documentados</li>
          <li><strong>Bitácora de vuelo:</strong> Registro de todas las operaciones</li>
        </ol>

        <h2>Espacios aéreos restringidos</h2>
        <p>Es fundamental conocer las zonas donde está prohibido volar:</p>
        <ul>
          <li>Aeropuertos y sus alrededores (radio de 9.5km)</li>
          <li>Zonas militares</li>
          <li>Áreas densamente pobladas</li>
          <li>Reservas naturales protegidas</li>
        </ul>

        <h2>Recomendaciones profesionales</h2>
        <p>En SkyVision Pro mantenemos todas nuestras certificaciones actualizadas y operamos siempre dentro del marco legal vigente, garantizando seguridad y profesionalismo en cada servicio.</p>
      `,
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
      content: `
        <h2>Revolución en inspecciones técnicas</h2>
        <p>Los drones han revolucionado las inspecciones técnicas industriales, ofreciendo acceso seguro a áreas de difícil alcance y proporcionando datos precisos de manera eficiente.</p>

        <h2>Ventajas sobre métodos tradicionales</h2>
        <ul>
          <li><strong>Seguridad:</strong> Eliminación de riesgos para personal</li>
          <li><strong>Rapidez:</strong> Inspecciones 10x más rápidas</li>
          <li><strong>Precisión:</strong> Cámaras de alta resolución y sensores especializados</li>
          <li><strong>Costo-efectividad:</strong> Reducción significativa de costos operativos</li>
          <li><strong>Documentación:</strong> Registro visual completo y detallado</li>
        </ul>

        <h2>Aplicaciones específicas</h2>
        
        <h3>Torres de telecomunicaciones</h3>
        <p>Inspección de antenas, cables y estructuras metálicas sin necesidad de escaladores especializados.</p>

        <h3>Paneles solares</h3>
        <p>Detección de paneles defectuosos mediante cámaras térmicas, identificando pérdidas de eficiencia.</p>

        <h3>Líneas eléctricas</h3>
        <p>Monitoreo de cables, aisladores y torres de transmisión en vastas extensiones de territorio.</p>

        <h3>Infraestructura petrolera</h3>
        <p>Inspección de tanques, ductos y plataformas con sensores especializados para detección de fugas.</p>

        <h2>Tecnología empleada</h2>
        <ul>
          <li><strong>Cámaras RGB de alta resolución:</strong> Inspección visual detallada</li>
          <li><strong>Cámaras térmicas:</strong> Detección de anomalías de temperatura</li>
          <li><strong>Sensores LiDAR:</strong> Modelado 3D preciso</li>
          <li><strong>Sensores de gas:</strong> Detección de emisiones</li>
        </ul>

        <h2>Casos de éxito</h2>
        <p>Hemos realizado más de 200 inspecciones técnicas, detectando problemas críticos que habrían pasado desapercibidos con métodos tradicionales, ahorrando a nuestros clientes millones en reparaciones mayores.</p>
      `,
      image: '/lovable-uploads/fe6b0dae-fc37-4ccd-b965-00f601f11e2d.png',
      category: 'Industrial',
      date: '2023-12-20',
      readTime: '6 min',
      author: 'SkyVision Pro Team'
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-drone-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Link to="/blog">
            <Button className="bg-drone-light text-drone-dark hover:bg-drone-light/90">
              Volver al Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-drone-dark text-white">
      <Navigation />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-drone-light hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-drone-light/90 text-drone-dark px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-drone-light text-sm mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div>
                Por {post.author}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-drone-gray/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-drone-light">
                <p>¿Te gustó este artículo? Compártelo con otros profesionales del sector.</p>
              </div>
              <Link to="/blog">
                <Button variant="outline" className="border-drone-light/30 text-drone-light hover:bg-drone-light/10">
                  Ver más artículos
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default BlogPost;
