
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Step1ServiceSelection from './Step1ServiceSelection';
import Step2EventDetails from './Step2EventDetails';
import Step3TechnicalRequirements from './Step3TechnicalRequirements';
import Step4OptionalExtras from './Step4OptionalExtras';
import Step5ClientData from './Step5ClientData';
import FormSummary from './FormSummary';

export interface FormData {
  // Step 1
  service: string;
  otherService: string;
  
  // Step 2
  date: string;
  location: string;
  eventType: string;
  
  // Step 3
  duration: string;
  editedVideo: string;
  music: string;
  
  // Step 4
  verticalVideo: boolean;
  logo: boolean;
  expressDelivery: boolean;
  otherExtras: string;
  
  // Step 5
  fullName: string;
  email: string;
  phone: string;
  comments: string;
}

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    service: '',
    otherService: '',
    date: '',
    location: '',
    eventType: '',
    duration: '',
    editedVideo: '',
    music: '',
    verticalVideo: false,
    logo: false,
    expressDelivery: false,
    otherExtras: '',
    fullName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const getStepTitle = () => {
    const titles = [
      'Selección de Servicio',
      'Detalles del Evento',
      'Requerimientos Técnicos',
      'Extras Opcionales',
      'Datos del Cliente'
    ];
    return titles[currentStep - 1];
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1ServiceSelection formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step2EventDetails formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Step3TechnicalRequirements formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Step4OptionalExtras formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step5ClientData formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  if (showSummary) {
    return <FormSummary formData={formData} onBack={() => setShowSummary(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-drone-dark via-drone-dark/95 to-drone-gray/20 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-4">
              Creador de Paquetes
            </CardTitle>
            <div className="space-y-2">
              <Progress value={progress} className="w-full h-2" />
              <p className="text-drone-light text-sm">
                Paso {currentStep} de {totalSteps}
              </p>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {getStepTitle()}
              </h3>
              
              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>
            </motion.div>
            
            <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft size={16} />
                Anterior
              </Button>
              
              <Button
                onClick={nextStep}
                className="flex items-center gap-2 bg-drone-light hover:bg-drone-light/80 text-drone-dark"
              >
                {currentStep === totalSteps ? 'Crear Paquete' : 'Siguiente'}
                {currentStep !== totalSteps && <ChevronRight size={16} />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MultiStepForm;
