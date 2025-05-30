
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ArrowRight, ArrowLeft, Download, Send } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface QuoteData {
  eventType: string;
  location: string;
  isOutdoor: string;
  hasRestrictions: string;
  duration: string;
  captureType: string[];
  additionalServices: string[];
  drones: string;
  eventDate: Date | undefined;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  comments: string;
}

const QuoteCalculator: React.FC = () => {
  const { language } = useTheme();
  const t = useTranslation(language);
  const [currentStep, setCurrentStep] = useState(1);
  const [quote, setQuote] = useState<QuoteData>({
    eventType: '',
    location: '',
    isOutdoor: '',
    hasRestrictions: '',
    duration: '',
    captureType: [],
    additionalServices: [],
    drones: '',
    eventDate: undefined,
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    comments: ''
  });

  const totalSteps = 8;

  const calculatePrice = () => {
    let basePrice = 0;
    
    // Base price by event type
    const eventPrices = {
      'wedding': 15000,
      'private': 8000,
      'corporate': 12000,
      'sports': 10000,
      'concert': 18000,
      'other': 8000
    };
    
    basePrice = eventPrices[quote.eventType as keyof typeof eventPrices] || 8000;
    
    // Duration multiplier
    const durationMultipliers = {
      '1h': 1,
      '2-3h': 1.5,
      'half-day': 2.5,
      'full-day': 4
    };
    
    basePrice *= durationMultipliers[quote.duration as keyof typeof durationMultipliers] || 1;
    
    // Additional services
    const servicesPrices = {
      'urgent': 3000,
      'social-clips': 2000,
      'promotional': 5000,
      'music': 1500,
      'ground-recording': 4000
    };
    
    quote.additionalServices.forEach(service => {
      basePrice += servicesPrices[service as keyof typeof servicesPrices] || 0;
    });
    
    // Multiple drones
    if (quote.drones === '2-drones') basePrice *= 1.8;
    if (quote.drones === 'pilot-assistant') basePrice *= 1.3;
    
    return Math.round(basePrice);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCaptureTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setQuote(prev => ({
        ...prev,
        captureType: [...prev.captureType, type]
      }));
    } else {
      setQuote(prev => ({
        ...prev,
        captureType: prev.captureType.filter(t => t !== type)
      }));
    }
  };

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setQuote(prev => ({
        ...prev,
        additionalServices: [...prev.additionalServices, service]
      }));
    } else {
      setQuote(prev => ({
        ...prev,
        additionalServices: prev.additionalServices.filter(s => s !== service)
      }));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">1</h2>
              <h3 className="text-xl font-semibold text-white mb-4">¿Qué tipo de evento necesitas cubrir?</h3>
              <p className="text-drone-light mb-8">Selecciona la opción que más se acerque a tus necesidades.</p>
            </div>
            
            <RadioGroup value={quote.eventType} onValueChange={(value) => setQuote(prev => ({ ...prev, eventType: value }))}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="wedding" id="wedding" className="mb-4" />
                    <label htmlFor="wedding" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">Boda</h4>
                      <p className="text-sm text-muted-foreground">Captura los momentos más especiales</p>
                    </label>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="private" id="private" className="mb-4" />
                    <label htmlFor="private" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">Fiesta Privada</h4>
                      <p className="text-sm text-muted-foreground">Celebraciones íntimas y personales</p>
                    </label>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="corporate" id="corporate" className="mb-4" />
                    <label htmlFor="corporate" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">Evento Corporativo</h4>
                      <p className="text-sm text-muted-foreground">Conferencias, lanzamientos, reuniones</p>
                    </label>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="sports" id="sports" className="mb-4" />
                    <label htmlFor="sports" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">Deportivo</h4>
                      <p className="text-sm text-muted-foreground">Competencias y eventos deportivos</p>
                    </label>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="concert" id="concert" className="mb-4" />
                    <label htmlFor="concert" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">Concierto/Festival</h4>
                      <p className="text-sm text-muted-foreground">Eventos musicales y festivales</p>
                    </label>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="other" id="other" className="mb-4" />
                    <label htmlFor="other" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">Otro</h4>
                      <p className="text-sm text-muted-foreground">Especifica tu tipo de evento</p>
                    </label>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">2</h2>
              <h3 className="text-xl font-semibold text-white mb-4">¿Dónde se realizará el evento?</h3>
              <p className="text-drone-light mb-8">La ubicación nos ayuda a determinar permisos y logística.</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2">Ciudad / Estado</label>
                <Input
                  value={quote.location}
                  onChange={(e) => setQuote(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Ej: Ciudad de México, CDMX"
                  className="bg-drone-gray/20 border-drone-gray"
                />
              </div>
              
              <div>
                <label className="block text-white mb-4">¿El evento será interior o exterior?</label>
                <RadioGroup value={quote.isOutdoor} onValueChange={(value) => setQuote(prev => ({ ...prev, isOutdoor: value }))}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="outdoor" id="outdoor" />
                    <label htmlFor="outdoor" className="text-white">Exterior</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="indoor" id="indoor" />
                    <label htmlFor="indoor" className="text-white">Interior</label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <label className="block text-white mb-4">¿Conoces de restricciones aéreas en la zona?</label>
                <RadioGroup value={quote.hasRestrictions} onValueChange={(value) => setQuote(prev => ({ ...prev, hasRestrictions: value }))}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="restrictions-yes" />
                    <label htmlFor="restrictions-yes" className="text-white">Sí</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="restrictions-no" />
                    <label htmlFor="restrictions-no" className="text-white">No</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unknown" id="restrictions-unknown" />
                    <label htmlFor="restrictions-unknown" className="text-white">No lo sé</label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">3</h2>
              <h3 className="text-xl font-semibold text-white mb-4">¿Cuánto tiempo necesitas nuestros servicios?</h3>
              <p className="text-drone-light mb-8">La duración afecta directamente el costo del servicio.</p>
            </div>
            
            <RadioGroup value={quote.duration} onValueChange={(value) => setQuote(prev => ({ ...prev, duration: value }))}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="1h" id="1h" className="mb-4" />
                    <label htmlFor="1h" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">1 hora</h4>
                      <p className="text-sm text-muted-foreground">Ideal para eventos cortos</p>
                    </label>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="2-3h" id="2-3h" className="mb-4" />
                    <label htmlFor="2-3h" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">2-3 horas</h4>
                      <p className="text-sm text-muted-foreground">Eventos medianos</p>
                    </label>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="half-day" id="half-day" className="mb-4" />
                    <label htmlFor="half-day" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">Medio día</h4>
                      <p className="text-sm text-muted-foreground">4-6 horas de cobertura</p>
                    </label>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <RadioGroupItem value="full-day" id="full-day" className="mb-4" />
                    <label htmlFor="full-day" className="block cursor-pointer">
                      <h4 className="font-semibold text-lg mb-2">Día completo</h4>
                      <p className="text-sm text-muted-foreground">8+ horas de cobertura</p>
                    </label>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">4</h2>
              <h3 className="text-xl font-semibold text-white mb-4">¿Qué tipo de captura necesitas?</h3>
              <p className="text-drone-light mb-8">Puedes seleccionar múltiples opciones.</p>
            </div>
            
            <div className="space-y-4">
              {[
                { id: 'aerial-photos', label: 'Fotos aéreas', desc: 'Fotografía aérea profesional' },
                { id: 'hd-4k-video', label: 'Video aéreo HD/4K', desc: 'Video de alta calidad' },
                { id: 'fpv-drone', label: 'Dron FPV (tomas dinámicas)', desc: 'Tomas cinematográficas únicas' },
                { id: 'live-stream', label: 'Transmisión en vivo', desc: 'Streaming en tiempo real' },
                { id: 'editing', label: 'Edición incluida', desc: 'Post-producción profesional' }
              ].map((option) => (
                <Card key={option.id} className="hover:border-drone-light transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={option.id}
                        checked={quote.captureType.includes(option.id)}
                        onCheckedChange={(checked) => handleCaptureTypeChange(option.id, checked as boolean)}
                      />
                      <label htmlFor={option.id} className="flex-1 cursor-pointer">
                        <h4 className="font-semibold text-white">{option.label}</h4>
                        <p className="text-sm text-drone-light">{option.desc}</p>
                      </label>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">5</h2>
              <h3 className="text-xl font-semibold text-white mb-4">Servicios adicionales (Opcionales)</h3>
              <p className="text-drone-light mb-8">Mejora tu experiencia con estos servicios extra.</p>
            </div>
            
            <div className="space-y-4">
              {[
                { id: 'urgent', label: 'Entrega urgente (24-48h)', desc: 'Recibe tu material rápidamente' },
                { id: 'social-clips', label: 'Clips para redes sociales', desc: 'Material optimizado para RRSS' },
                { id: 'promotional', label: 'Video promocional', desc: 'Video editado para marketing' },
                { id: 'music', label: 'Música o voz en off', desc: 'Audio profesional incluido' },
                { id: 'ground-recording', label: 'Grabación en tierra', desc: 'Cámara adicional terrestre' }
              ].map((option) => (
                <Card key={option.id} className="hover:border-drone-light transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={option.id}
                        checked={quote.additionalServices.includes(option.id)}
                        onCheckedChange={(checked) => handleAdditionalServiceChange(option.id, checked as boolean)}
                      />
                      <label htmlFor={option.id} className="flex-1 cursor-pointer">
                        <h4 className="font-semibold text-white">{option.label}</h4>
                        <p className="text-sm text-drone-light">{option.desc}</p>
                      </label>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">6</h2>
              <h3 className="text-xl font-semibold text-white mb-4">¿Cuántos drones o pilotos necesitas?</h3>
              <p className="text-drone-light mb-8">Más drones permiten capturas desde múltiples ángulos.</p>
            </div>
            
            <RadioGroup value={quote.drones} onValueChange={(value) => setQuote(prev => ({ ...prev, drones: value }))}>
              <div className="space-y-4">
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="1-drone" id="1-drone" />
                      <label htmlFor="1-drone" className="flex-1 cursor-pointer">
                        <h4 className="font-semibold text-white text-lg">1 dron</h4>
                        <p className="text-drone-light">Ideal para eventos pequeños a medianos</p>
                      </label>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="2-drones" id="2-drones" />
                      <label htmlFor="2-drones" className="flex-1 cursor-pointer">
                        <h4 className="font-semibold text-white text-lg">2 drones</h4>
                        <p className="text-drone-light">Cobertura completa con múltiples ángulos</p>
                      </label>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:border-drone-light transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="pilot-assistant" id="pilot-assistant" />
                      <label htmlFor="pilot-assistant" className="flex-1 cursor-pointer">
                        <h4 className="font-semibold text-white text-lg">Piloto + asistente técnico</h4>
                        <p className="text-drone-light">Soporte técnico completo y profesional</p>
                      </label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">7</h2>
              <h3 className="text-xl font-semibold text-white mb-4">¿Cuándo es tu evento?</h3>
              <p className="text-drone-light mb-8">Selecciona la fecha para verificar disponibilidad.</p>
            </div>
            
            <div className="flex justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full max-w-md justify-start text-left font-normal bg-drone-gray/20 border-drone-gray hover:bg-drone-gray/30",
                      !quote.eventDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {quote.eventDate ? format(quote.eventDate, "PPP") : <span>Selecciona una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={quote.eventDate}
                    onSelect={(date) => setQuote(prev => ({ ...prev, eventDate: date }))}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">8</h2>
              <h3 className="text-xl font-semibold text-white mb-4">Datos de contacto</h3>
              <p className="text-drone-light mb-8">Información para enviarte la cotización oficial.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-white mb-2">Nombre completo</label>
                <Input
                  value={quote.clientName}
                  onChange={(e) => setQuote(prev => ({ ...prev, clientName: e.target.value }))}
                  placeholder="Tu nombre"
                  className="bg-drone-gray/20 border-drone-gray"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Email</label>
                <Input
                  type="email"
                  value={quote.clientEmail}
                  onChange={(e) => setQuote(prev => ({ ...prev, clientEmail: e.target.value }))}
                  placeholder="tu@email.com"
                  className="bg-drone-gray/20 border-drone-gray"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Teléfono</label>
                <Input
                  type="tel"
                  value={quote.clientPhone}
                  onChange={(e) => setQuote(prev => ({ ...prev, clientPhone: e.target.value }))}
                  placeholder="+52 55 1234 5678"
                  className="bg-drone-gray/20 border-drone-gray"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-white mb-2">Comentarios adicionales</label>
                <Textarea
                  value={quote.comments}
                  onChange={(e) => setQuote(prev => ({ ...prev, comments: e.target.value }))}
                  placeholder="Cuéntanos más detalles sobre tu evento..."
                  className="bg-drone-gray/20 border-drone-gray"
                  rows={4}
                />
              </div>
            </div>
            
            {/* Quote Summary */}
            <Card className="bg-gradient-to-r from-drone-light/10 to-drone-light/5 border-drone-light">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-2xl font-bold text-white">Cotización Estimada</span>
                  <div className="text-4xl font-bold text-drone-light mt-2">
                    ${calculatePrice().toLocaleString()} MXN
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-drone-light">Tipo de evento:</span>
                    <span className="text-white">{quote.eventType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-drone-light">Duración:</span>
                    <span className="text-white">{quote.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-drone-light">Servicios adicionales:</span>
                    <span className="text-white">{quote.additionalServices.length}</span>
                  </div>
                </div>
                <p className="text-xs text-drone-light mt-4 text-center">
                  *Este es un precio estimado. El costo final puede variar según los detalles específicos del evento.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-drone-dark via-drone-gray/10 to-drone-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white mb-6">
            Cotizador de Servicios
          </h2>
          <p className="text-xl text-drone-light max-w-3xl mx-auto">
            Obtén una cotización personalizada para tu evento en simples pasos
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-drone-light text-sm">Paso {currentStep} de {totalSteps}</span>
            <span className="text-drone-light text-sm">{Math.round((currentStep / totalSteps) * 100)}% completado</span>
          </div>
          <div className="w-full bg-drone-gray/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-drone-light to-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-drone-gray/10 border-drone-gray backdrop-blur-sm">
            <CardContent className="p-8">
              {renderStep()}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="bg-transparent border-drone-gray text-white hover:bg-drone-gray/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </Button>
            )}
            
            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                className="bg-drone-light hover:bg-drone-light/90 text-drone-dark ml-auto"
                disabled={
                  (currentStep === 1 && !quote.eventType) ||
                  (currentStep === 2 && !quote.location) ||
                  (currentStep === 3 && !quote.duration) ||
                  (currentStep === 6 && !quote.drones) ||
                  (currentStep === 7 && !quote.eventDate)
                }
              >
                Siguiente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <div className="flex gap-4 ml-auto">
                <Button
                  variant="outline"
                  className="bg-transparent border-drone-gray text-white hover:bg-drone-gray/20"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Descargar PDF
                </Button>
                <Button className="bg-drone-light hover:bg-drone-light/90 text-drone-dark">
                  <Send className="mr-2 h-4 w-4" />
                  Solicitar Cotización
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
