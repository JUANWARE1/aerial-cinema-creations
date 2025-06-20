import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { FormData } from './MultiStepForm';

interface FormSummaryProps {
  formData: FormData;
  onBack: () => void;
}

const FormSummary: React.FC<FormSummaryProps> = ({ formData, onBack }) => {
  const handleSendPackage = () => {
    console.log('=== RESUMEN DEL PAQUETE CREADO ===');
    console.log('Servicio:', formData.service);
    if (formData.otherService) console.log('Servicio personalizado:', formData.otherService);
    console.log('Fecha:', formData.date);
    console.log('Ubicación:', formData.location);
    console.log('Tipo de evento:', formData.eventType);
    console.log('Duración:', formData.duration);
    console.log('Video editado:', formData.editedVideo);
    console.log('Música:', formData.music);
    console.log('Extras:');
    console.log('  - Video vertical:', formData.verticalVideo ? 'Sí' : 'No');
    console.log('  - Logotipo:', formData.logo ? 'Sí' : 'No');
    console.log('  - Entrega express:', formData.expressDelivery ? 'Sí' : 'No');
    if (formData.otherExtras) console.log('  - Otros:', formData.otherExtras);
    console.log('Cliente:', formData.fullName);
    console.log('Email:', formData.email);
    console.log('Teléfono:', formData.phone);
    if (formData.comments) console.log('Comentarios:', formData.comments);
    console.log('=== FIN DEL RESUMEN ===');

    alert('¡Paquete creado exitosamente! Revisa la consola para ver el resumen completo.');
  };

  const getServiceLabel = () => {
    const services = {
      'video-only': 'Grabación con drones (solo video)',
      'video-editing': 'Grabación + edición profesional',
      'photography': 'Fotografías aéreas únicamente',
      'other': formData.otherService || 'Otro'
    };
    return services[formData.service as keyof typeof services] || formData.service;
  };

  const getEventTypeLabel = () => {
    const types = {
      'wedding': 'Boda',
      'corporate': 'Empresarial',
      'sports': 'Deportivo',
      'other': 'Otro'
    };
    return types[formData.eventType as keyof typeof types] || formData.eventType;
  };

  const getDurationLabel = () => {
    const durations = {
      '30min': '30 minutos',
      '1hour': '1 hora',
      'more-1hour': 'Más de 1 hora'
    };
    return durations[formData.duration as keyof typeof durations] || formData.duration;
  };

  return (
    <>
      {/* Botón flotante "Atrás" visible siempre */}
      <div className="fixed top-4 left-4 z-50">
       
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-400" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-2">
                ¡Paquete Creado!
              </CardTitle>
              <p className="text-slate-300">
                Revisa los detalles de tu paquete personalizado
              </p>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              {/* El resto del contenido aquí como antes... */}
              {/* ... */}
              <div className="flex gap-4 pt-6 border-t border-white/20">
                <Button
                  onClick={onBack}
                  variant="outline"
                  className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <ArrowLeft size={16} />
                  Editar
                </Button>

                <Button
                  onClick={handleSendPackage}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                >
                  Enviar Paquete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FormSummary;
