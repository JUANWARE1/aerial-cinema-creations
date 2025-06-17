
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
    <div className="min-h-screen bg-gradient-to-br from-drone-dark via-drone-dark/95 to-drone-gray/20 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-2">
              ¡Paquete Creado!
            </CardTitle>
            <p className="text-drone-light">
              Revisa los detalles de tu paquete personalizado
            </p>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            <div className="grid gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Servicio</h3>
                <p className="text-drone-light">{getServiceLabel()}</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Detalles del Evento</h3>
                <div className="space-y-1 text-drone-light">
                  <p><span className="font-medium">Fecha:</span> {formData.date}</p>
                  <p><span className="font-medium">Ubicación:</span> {formData.location}</p>
                  <p><span className="font-medium">Tipo:</span> {getEventTypeLabel()}</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Requerimientos Técnicos</h3>
                <div className="space-y-1 text-drone-light">
                  <p><span className="font-medium">Duración:</span> {getDurationLabel()}</p>
                  <p><span className="font-medium">Video editado:</span> {formData.editedVideo === 'yes' ? 'Sí' : 'No'}</p>
                  <p><span className="font-medium">Música:</span> {formData.music === 'yes' ? 'Sí' : formData.music === 'provide' ? 'Cliente la proporciona' : 'No'}</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Extras</h3>
                <div className="space-y-1 text-drone-light">
                  {formData.verticalVideo && <p>• Video vertical para redes sociales</p>}
                  {formData.logo && <p>• Agregado de logotipo</p>}
                  {formData.expressDelivery && <p>• Entrega express (48h)</p>}
                  {formData.otherExtras && <p>• {formData.otherExtras}</p>}
                  {!formData.verticalVideo && !formData.logo && !formData.expressDelivery && !formData.otherExtras && (
                    <p className="text-drone-gray">Sin extras seleccionados</p>
                  )}
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Datos de Contacto</h3>
                <div className="space-y-1 text-drone-light">
                  <p><span className="font-medium">Nombre:</span> {formData.fullName}</p>
                  <p><span className="font-medium">Email:</span> {formData.email}</p>
                  <p><span className="font-medium">Teléfono:</span> {formData.phone}</p>
                  {formData.comments && (
                    <p><span className="font-medium">Comentarios:</span> {formData.comments}</p>
                  )}
                </div>
              </div>
            </div>
            
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
  );
};

export default FormSummary;
