
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormData } from './MultiStepForm';

interface Step5Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step5ClientData: React.FC<Step5Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="full-name" className="text-white mb-2 block">
          Nombre completo
        </Label>
        <Input
          id="full-name"
          type="text"
          placeholder="Su nombre completo"
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
        />
      </div>
      
      <div>
        <Label htmlFor="email" className="text-white mb-2 block">
          Correo electrónico
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="su.email@ejemplo.com"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
        />
      </div>
      
      <div>
        <Label htmlFor="phone" className="text-white mb-2 block">
          Teléfono o WhatsApp
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 234 567 8900"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
        />
      </div>
      
      <div>
        <Label htmlFor="comments" className="text-white mb-2 block">
          Comentarios adicionales
        </Label>
        <Textarea
          id="comments"
          placeholder="Cualquier información adicional que considere importante..."
          value={formData.comments}
          onChange={(e) => updateFormData({ comments: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default Step5ClientData;
