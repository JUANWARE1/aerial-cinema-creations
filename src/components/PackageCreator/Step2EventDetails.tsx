
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormData } from './MultiStepForm';

interface Step2Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step2EventDetails: React.FC<Step2Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="date" className="text-white mb-2 block">
          Fecha del evento
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
          Ubicación
        </Label>
        <Input
          id="location"
          type="text"
          placeholder="Ciudad, dirección o lugar específico"
          value={formData.location}
          onChange={(e) => updateFormData({ location: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-drone-light"
        />
      </div>
      
      <div>
        <Label htmlFor="event-type" className="text-white mb-2 block">
          Tipo de evento
        </Label>
        <Select
          value={formData.eventType}
          onValueChange={(value) => updateFormData({ eventType: value })}
        >
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Seleccione el tipo de evento" />
          </SelectTrigger>
          <SelectContent className="bg-drone-dark border-white/20">
            <SelectItem value="wedding" className="text-white hover:bg-white/10">
              Boda
            </SelectItem>
            <SelectItem value="corporate" className="text-white hover:bg-white/10">
              Empresarial
            </SelectItem>
            <SelectItem value="sports" className="text-white hover:bg-white/10">
              Deportivo
            </SelectItem>
            <SelectItem value="other" className="text-white hover:bg-white/10">
              Otro
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Step2EventDetails;
