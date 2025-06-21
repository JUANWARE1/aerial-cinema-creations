
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { FormData } from './MultiStepForm';

interface Step2Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step2EventDetails: React.FC<Step2Props> = ({ formData, updateFormData }) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="date" className="text-white mb-2 block">
          {t.packageCreator.step2.eventDate}
        </Label>
        <Input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => updateFormData({ date: e.target.value })}
          className="bg-white/10 border-white/20 text-white"
        />
      </div>
      
      <div>
        <Label htmlFor="location" className="text-white mb-2 block">
          {t.packageCreator.step2.location}
        </Label>
        <Input
          id="location"
          type="text"
          placeholder={t.packageCreator.step2.locationPlaceholder}
          value={formData.location}
          onChange={(e) => updateFormData({ location: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
        />
      </div>
      
      <div>
        <Label htmlFor="event-type" className="text-white mb-2 block">
          {t.packageCreator.step2.eventType}
        </Label>
        <Select
          value={formData.eventType}
          onValueChange={(value) => updateFormData({ eventType: value })}
        >
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder={t.packageCreator.step2.selectEventType} />
          </SelectTrigger>
          <SelectContent className="bg-drone-dark border-white/20">
            <SelectItem value="wedding" className="text-white hover:bg-white/10">
              {t.packageCreator.step2.wedding}
            </SelectItem>
            <SelectItem value="corporate" className="text-white hover:bg-white/10">
              {t.packageCreator.step2.corporate}
            </SelectItem>
            <SelectItem value="sports" className="text-white hover:bg-white/10">
              {t.packageCreator.step2.sports}
            </SelectItem>
            <SelectItem value="other" className="text-white hover:bg-white/10">
              {t.packageCreator.step2.other}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Step2EventDetails;
