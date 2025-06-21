
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { FormData } from './MultiStepForm';

interface Step3Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step3TechnicalRequirements: React.FC<Step3Props> = ({ formData, updateFormData }) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="duration" className="text-white mb-2 block">
          {t.packageCreator.step3.duration}
        </Label>
        <Select
          value={formData.duration}
          onValueChange={(value) => updateFormData({ duration: value })}
        >
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder={t.packageCreator.step3.selectDuration} />
          </SelectTrigger>
          <SelectContent className="bg-drone-dark border-white/20">
            <SelectItem value="30min" className="text-white hover:bg-white/10">
              {t.packageCreator.step3.thirtyMin}
            </SelectItem>
            <SelectItem value="1hour" className="text-white hover:bg-white/10">
              {t.packageCreator.step3.oneHour}
            </SelectItem>
            <SelectItem value="more-1hour" className="text-white hover:bg-white/10">
              {t.packageCreator.step3.moreThanOneHour}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label className="text-white mb-4 block">
          {t.packageCreator.step3.editedVideo}
        </Label>
        <RadioGroup
          value={formData.editedVideo}
          onValueChange={(value) => updateFormData({ editedVideo: value })}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="edited-yes" />
            <Label htmlFor="edited-yes" className="text-white cursor-pointer">
              {t.packageCreator.step3.yes}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="edited-no" />
            <Label htmlFor="edited-no" className="text-white cursor-pointer">
              {t.packageCreator.step3.no}
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <Label className="text-white mb-4 block">
          {t.packageCreator.step3.music}
        </Label>
        <RadioGroup
          value={formData.music}
          onValueChange={(value) => updateFormData({ music: value })}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="music-yes" />
            <Label htmlFor="music-yes" className="text-white cursor-pointer">
              {t.packageCreator.step3.yes}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="music-no" />
            <Label htmlFor="music-no" className="text-white cursor-pointer">
              {t.packageCreator.step3.no}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="provide" id="music-provide" />
            <Label htmlFor="music-provide" className="text-white cursor-pointer">
              {t.packageCreator.step3.provide}
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default Step3TechnicalRequirements;
