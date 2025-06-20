import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Step1ServiceSelection from './Step1ServiceSelection';
import Step2EventDetails from './Step2EventDetails';
import Step3TechnicalRequirements from './Step3TechnicalRequirements';
import Step4OptionalExtras from './Step4OptionalExtras';
import Step5ClientData from './Step5ClientData';
import FormSummary from './FormSummary';
import { validateStep1, validateStep2, validateStep3, validateStep4, validateStep5 } from '@/utils/formValidation';

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
  const [validationError, setValidationError] = useState<string>('');
  const [isStepValid, setIsStepValid] = useState(false);
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

  // Validate current step whenever form data changes
  useEffect(() => {
    const validateCurrentStep = () => {
      let validation;
      switch (currentStep) {
        case 1:
          validation = validateStep1(formData);
          break;
        case 2:
          validation = validateStep2(formData);
          break;
        case 3:
          validation = validateStep3(formData);
          break;
        case 4:
          validation = validateStep4(formData);
          break;
        case 5:
          validation = validateStep5(formData);
          break;
        default:
          validation = { isValid: true };
      }
      
      setIsStepValid(validation.isValid);
      setValidationError(validation.message || '');
    };

    validateCurrentStep();
  }, [formData, currentStep]);

  const nextStep = () => {
    let validation;
    switch (currentStep) {
      case 1:
        validation = validateStep1(formData);
        break;
      case 2:
        validation = validateStep2(formData);
        break;
      case 3:
        validation = validateStep3(formData);
        break;
      case 4:
        validation = validateStep4(formData);
        break;
      case 5:
        validation = validateStep5(formData);
        break;
      default:
        validation = { isValid: true };
    }

    if (!validation.isValid) {
      setValidationError(validation.message || '');
      return;
    }

    setValidationError('');
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setValidationError('');
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-4">
              Creador de Paquetes
            </CardTitle>
            <div className="space-y-2">
              <Progress value={progress} className="w-full h-2 bg-slate-700" />
              <p className="text-slate-300 text-sm">
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
              
              {validationError && (
                <Alert className="mb-6 bg-red-500/20 border-red-500/50">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-100">
                    {validationError}
                  </AlertDescription>
                </Alert>
              )}
              
              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>
            </motion.div>
            
            <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
              >
                <ChevronLeft size={16} />
                Anterior
              </Button>
              
              <Button
                onClick={nextStep}
                disabled={!isStepValid}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
