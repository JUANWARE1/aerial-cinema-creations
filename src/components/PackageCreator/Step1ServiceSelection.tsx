
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { FormData } from './MultiStepForm';

interface Step1Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step1ServiceSelection: React.FC<Step1Props> = ({ formData, updateFormData }) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  return (
    <div className="space-y-6">
      <RadioGroup
        value={formData.service}
        onValueChange={(value) => updateFormData({ service: value })}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <RadioGroupItem value="video-only" id="video-only" />
          <Label htmlFor="video-only" className="text-white cursor-pointer flex-1">
            {t.packageCreator.step1.videoOnly}
          </Label>
        </div>
        
        <div className="flex items-center space-x-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <RadioGroupItem value="video-editing" id="video-editing" />
          <Label htmlFor="video-editing" className="text-white cursor-pointer flex-1">
            {t.packageCreator.step1.videoEditing}
          </Label>
        </div>
        
        <div className="flex items-center space-x-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <RadioGroupItem value="photography" id="photography" />
          <Label htmlFor="photography" className="text-white cursor-pointer flex-1">
            {t.packageCreator.step1.photography}
          </Label>
        </div>
        
        <div className="flex items-center space-x-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <RadioGroupItem value="other" id="other" />
          <Label htmlFor="other" className="text-white cursor-pointer flex-1">
            {t.packageCreator.step1.other}
          </Label>
        </div>
      </RadioGroup>
      
      {formData.service === 'other' && (
        <div className="mt-4">
          <Label htmlFor="other-service" className="text-white mb-2 block">
            {t.packageCreator.step1.specifyService}
          </Label>
          <Input
            id="other-service"
            type="text"
            placeholder={t.packageCreator.step1.customServicePlaceholder}
            value={formData.otherService}
            onChange={(e) => updateFormData({ otherService: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
          />
        </div>
      )}
    </div>
  );
};

export default Step1ServiceSelection;
