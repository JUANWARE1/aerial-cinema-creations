
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FormData } from './MultiStepForm';

interface Step3Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step3TechnicalRequirements: React.FC<Step3Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="duration" className="text-white mb-2 block">
          Duración del servicio
        </Label>
        <Select
          value={formData.duration}
          onValueChange={(value) => updateFormData({ duration: value })}
        >
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Seleccione la duración" />
          </SelectTrigger>
          <SelectContent className="bg-drone-dark border-white/20">
            <SelectItem value="30min" className="text-white hover:bg-white/10">
              30 minutos
            </SelectItem>
            <SelectItem value="1hour" className="text-white hover:bg-white/10">
              1 hora
            </SelectItem>
            <SelectItem value="more-1hour" className="text-white hover:bg-white/10">
              Más de 1 hora
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label className="text-white mb-4 block">
          ¿Desea video final editado?
        </Label>
        <RadioGroup
          value={formData.editedVideo}
          onValueChange={(value) => updateFormData({ editedVideo: value })}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="edited-yes" />
            <Label htmlFor="edited-yes" className="text-white cursor-pointer">
              Sí
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="edited-no" />
            <Label htmlFor="edited-no" className="text-white cursor-pointer">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <Label className="text-white mb-4 block">
          ¿Desea música incluida?
        </Label>
        <RadioGroup
          value={formData.music}
          onValueChange={(value) => updateFormData({ music: value })}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="music-yes" />
            <Label htmlFor="music-yes" className="text-white cursor-pointer">
              Sí
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="music-no" />
            <Label htmlFor="music-no" className="text-white cursor-pointer">
              No
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="provide" id="music-provide" />
            <Label htmlFor="music-provide" className="text-white cursor-pointer">
              Yo la proporciono
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default Step3TechnicalRequirements;
