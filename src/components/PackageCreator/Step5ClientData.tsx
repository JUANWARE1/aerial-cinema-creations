
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/utils/translations';
import { FormData } from './MultiStepForm';

interface Step5Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step5ClientData: React.FC<Step5Props> = ({ formData, updateFormData }) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="full-name" className="text-white mb-2 block">
          {t.packageCreator.step5.fullName}
        </Label>
        <Input
          id="full-name"
          type="text"
          placeholder={t.packageCreator.step5.fullNamePlaceholder}
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
        />
      </div>
      
      <div>
        <Label htmlFor="email" className="text-white mb-2 block">
          {t.packageCreator.step5.email}
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={t.packageCreator.step5.emailPlaceholder}
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
        />
      </div>
      
      <div>
        <Label htmlFor="phone" className="text-white mb-2 block">
          {t.packageCreator.step5.phone}
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder={t.packageCreator.step5.phonePlaceholder}
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
        />
      </div>
      
      <div>
        <Label htmlFor="comments" className="text-white mb-2 block">
          {t.packageCreator.step5.comments}
        </Label>
        <Textarea
          id="comments"
          placeholder={t.packageCreator.step5.commentsPlaceholder}
          value={formData.comments}
          onChange={(e) => updateFormData({ comments: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default Step5ClientData;
