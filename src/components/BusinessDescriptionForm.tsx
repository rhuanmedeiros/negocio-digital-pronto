
import React from 'react';
import { FormData } from '@/types/form';

interface BusinessDescriptionFormProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
}

export const BusinessDescriptionForm: React.FC<BusinessDescriptionFormProps> = ({ 
  formData, 
  updateFormData 
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Descrição do Negócio</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="short_description" className="block text-sm font-medium text-gray-700 mb-2">
            Descrição Curta *
          </label>
          <textarea
            id="short_description"
            value={formData.short_description}
            onChange={(e) => updateFormData('short_description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Breve descrição do seu negócio em até 160 caracteres"
            maxLength={160}
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            {formData.short_description.length}/160 caracteres
          </p>
        </div>

        <div>
          <label htmlFor="detailed_description" className="block text-sm font-medium text-gray-700 mb-2">
            Descrição Detalhada
          </label>
          <textarea
            id="detailed_description"
            value={formData.detailed_description}
            onChange={(e) => updateFormData('detailed_description', e.target.value)}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Descrição completa dos seus produtos/serviços, diferenciais, história da empresa, etc."
          />
        </div>

        <div>
          <label htmlFor="service_areas" className="block text-sm font-medium text-gray-700 mb-2">
            Áreas de Atendimento
          </label>
          <textarea
            id="service_areas"
            value={formData.service_areas}
            onChange={(e) => updateFormData('service_areas', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Bairros, cidades ou regiões onde você atende"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="online_scheduling" className="block text-sm font-medium text-gray-700 mb-2">
              Agendamento Online
            </label>
            <select
              id="online_scheduling"
              value={formData.online_scheduling}
              onChange={(e) => updateFormData('online_scheduling', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione...</option>
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>
          </div>

          <div>
            <label htmlFor="scheduling_platform" className="block text-sm font-medium text-gray-700 mb-2">
              Plataforma de Agendamento
            </label>
            <input
              type="text"
              id="scheduling_platform"
              value={formData.scheduling_platform}
              onChange={(e) => updateFormData('scheduling_platform', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: WhatsApp, Site próprio, App"
            />
          </div>
        </div>

        <div>
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-2">
            Palavras-chave
          </label>
          <input
            type="text"
            id="keywords"
            value={formData.keywords}
            onChange={(e) => updateFormData('keywords', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Palavras-chave separadas por vírgula"
          />
        </div>

        <div>
          <label htmlFor="additional_message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensagem Adicional
          </label>
          <textarea
            id="additional_message"
            value={formData.additional_message}
            onChange={(e) => updateFormData('additional_message', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Informações adicionais que gostaria de compartilhar"
          />
        </div>
      </div>
    </div>
  );
};
