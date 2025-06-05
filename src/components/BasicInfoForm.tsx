
import React from 'react';
import { FormData } from '@/types/form';

interface BasicInfoFormProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
}

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Informações Básicas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="responsible_name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome do Responsável *
          </label>
          <input
            type="text"
            id="responsible_name"
            value={formData.responsible_name}
            onChange={(e) => updateFormData('responsible_name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome do Negócio *
          </label>
          <input
            type="text"
            id="business_name"
            value={formData.business_name}
            onChange={(e) => updateFormData('business_name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="activity_area" className="block text-sm font-medium text-gray-700 mb-2">
            Área de Atividade *
          </label>
          <input
            type="text"
            id="activity_area"
            value={formData.activity_area}
            onChange={(e) => updateFormData('activity_area', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Restaurante, Loja de roupas, Salão de beleza"
            required
          />
        </div>

        <div>
          <label htmlFor="registration_type" className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Cadastro *
          </label>
          <select
            id="registration_type"
            value={formData.registration_type}
            onChange={(e) => updateFormData('registration_type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Selecione...</option>
            <option value="individual">Pessoa Física</option>
            <option value="company">Pessoa Jurídica</option>
          </select>
        </div>
      </div>
    </div>
  );
};
