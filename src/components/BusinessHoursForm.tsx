
import React from 'react';
import { FormData } from '@/types/form';

interface BusinessHoursFormProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
}

export const BusinessHoursForm: React.FC<BusinessHoursFormProps> = ({ formData, updateFormData }) => {
  const daysOfWeek = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
  ];

  const handleDayToggle = (day: string) => {
    const currentDays = formData.working_days || [];
    const newDays = currentDays.includes(day)
      ? currentDays.filter(d => d !== day)
      : [...currentDays, day];
    updateFormData('working_days', newDays);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Horário de Funcionamento</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Dias de Funcionamento
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {daysOfWeek.map((day) => (
              <label key={day} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.working_days?.includes(day) || false}
                  onChange={() => handleDayToggle(day)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{day}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="start_time" className="block text-sm font-medium text-gray-700 mb-2">
              Horário de Abertura
            </label>
            <input
              type="time"
              id="start_time"
              value={formData.start_time}
              onChange={(e) => updateFormData('start_time', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="end_time" className="block text-sm font-medium text-gray-700 mb-2">
              Horário de Fechamento
            </label>
            <input
              type="time"
              id="end_time"
              value={formData.end_time}
              onChange={(e) => updateFormData('end_time', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="schedule_notes" className="block text-sm font-medium text-gray-700 mb-2">
            Observações sobre Horário
          </label>
          <textarea
            id="schedule_notes"
            value={formData.schedule_notes}
            onChange={(e) => updateFormData('schedule_notes', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Fechamos para almoço das 12h às 14h"
          />
        </div>
      </div>
    </div>
  );
};
