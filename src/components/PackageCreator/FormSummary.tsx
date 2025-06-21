
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { FormData } from './MultiStepForm';

interface FormSummaryProps {
  formData: FormData;
  onBack: () => void;
  onSendEmail: () => void;
}

const FormSummary: React.FC<FormSummaryProps> = ({ formData, onBack, onSendEmail }) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const handleSendPackage = () => {
    console.log('=== PACKAGE SUMMARY ===');
    console.log('Service:', formData.service);
    if (formData.otherService) console.log('Custom service:', formData.otherService);
    console.log('Date:', formData.date);
    console.log('Location:', formData.location);
    console.log('Event type:', formData.eventType);
    console.log('Duration:', formData.duration);
    console.log('Edited video:', formData.editedVideo);
    console.log('Music:', formData.music);
    console.log('Extras:');
    console.log('  - Vertical video:', formData.verticalVideo ? 'Yes' : 'No');
    console.log('  - Logo:', formData.logo ? 'Yes' : 'No');
    console.log('  - Express delivery:', formData.expressDelivery ? 'Yes' : 'No');
    if (formData.otherExtras) console.log('  - Other:', formData.otherExtras);
    console.log('Client:', formData.fullName);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    if (formData.comments) console.log('Comments:', formData.comments);
    console.log('=== END SUMMARY ===');

    onSendEmail();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t.packageCreator.summary.title}
            </CardTitle>
            <p className="text-slate-300">
              {t.packageCreator.summary.subtitle}
            </p>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="flex gap-4 pt-6 border-t border-white/20">
              <Button
                onClick={onBack}
                variant="outline"
                className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft size={16} />
                {t.packageCreator.summary.edit}
              </Button>

              <Button
                onClick={handleSendPackage}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                {t.packageCreator.summary.sendPackage}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormSummary;
