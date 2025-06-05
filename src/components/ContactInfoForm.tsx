
import React from 'react';
import { FormData } from '@/types/form';

interface ContactInfoFormProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Informações de Contato</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="primary_email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Principal *
          </label>
          <input
            type="email"
            id="primary_email"
            value={formData.primary_email}
            onChange={(e) => updateFormData('primary_email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="optional_email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Secundário
          </label>
          <input
            type="email"
            id="optional_email"
            value={formData.optional_email}
            onChange={(e) => updateFormData('optional_email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="primary_phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefone Principal *
          </label>
          <input
            type="tel"
            id="primary_phone"
            value={formData.primary_phone}
            onChange={(e) => updateFormData('primary_phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp
          </label>
          <input
            type="tel"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={(e) => updateFormData('whatsapp', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            value={formData.instagram}
            onChange={(e) => updateFormData('instagram', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="@seuinstagram"
          />
        </div>

        <div>
          <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-2">
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            value={formData.facebook}
            onChange={(e) => updateFormData('facebook', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="other_social" className="block text-sm font-medium text-gray-700 mb-2">
            Outras Redes Sociais
          </label>
          <input
            type="text"
            id="other_social"
            value={formData.other_social}
            onChange={(e) => updateFormData('other_social', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
