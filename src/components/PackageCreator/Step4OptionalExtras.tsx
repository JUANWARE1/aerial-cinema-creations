
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { FormData } from './MultiStepForm';

interface Step4Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step4OptionalExtras: React.FC<Step4Props> = ({ formData, updateFormData }) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <Checkbox
            id="vertical-video"
            checked={formData.verticalVideo}
            onCheckedChange={(checked) => updateFormData({ verticalVideo: checked as boolean })}
          />
          <Label htmlFor="vertical-video" className="text-white cursor-pointer flex-1">
            {t.packageCreator.step4.verticalVideo}
          </Label>
        </div>
        
        <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <Checkbox
            id="logo"
            checked={formData.logo}
            onCheckedChange={(checked) => updateFormData({ logo: checked as boolean })}
          />
          <Label htmlFor="logo" className="text-white cursor-pointer flex-1">
            {t.packageCreator.step4.logo}
          </Label>
        </div>
        
        <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <Checkbox
            id="express-delivery"
            checked={formData.expressDelivery}
            onCheckedChange={(checked) => updateFormData({ expressDelivery: checked as boolean })}
          />
          <Label htmlFor="express-delivery" className="text-white cursor-pointer flex-1">
            {t.packageCreator.step4.expressDelivery}
          </Label>
        </div>
      </div>
      
      <div>
        <Label htmlFor="other-extras" className="text-white mb-2 block">
          {t.packageCreator.step4.otherRequirements}
        </Label>
        <Textarea
          id="other-extras"
          placeholder={t.packageCreator.step4.requirementsPlaceholder}
          value={formData.otherExtras}
          onChange={(e) => updateFormData({ otherExtras: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default Step4OptionalExtras;
