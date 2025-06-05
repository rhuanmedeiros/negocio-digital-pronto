
import React, { useState } from 'react';
import { FormData } from '@/types/form';
import { BasicInfoForm } from '@/components/BasicInfoForm';
import { ContactInfoForm } from '@/components/ContactInfoForm';
import { AddressForm } from '@/components/AddressForm';
import { BusinessHoursForm } from '@/components/BusinessHoursForm';
import { PhotoUploadForm } from '@/components/PhotoUploadForm';
import { BusinessDescriptionForm } from '@/components/BusinessDescriptionForm';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const [formData, setFormData] = useState<FormData>({
    responsible_name: '',
    business_name: '',
    activity_area: '',
    registration_type: '',
    primary_email: '',
    optional_email: '',
    primary_phone: '',
    whatsapp: '',
    instagram: '',
    facebook: '',
    other_social: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    working_days: [],
    start_time: '',
    end_time: '',
    schedule_notes: '',
    short_description: '',
    detailed_description: '',
    service_areas: '',
    online_scheduling: '',
    scheduling_platform: '',
    keywords: '',
    additional_message: ''
  });

  const [photos, setPhotos] = useState<File[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const totalSteps = 6;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.responsible_name && formData.business_name && 
               formData.activity_area && formData.registration_type;
      case 2:
        return formData.primary_email && formData.primary_phone;
      case 3:
        return true;
      case 4:
        return true;
      case 5:
        return true;
      case 6:
        return formData.short_description;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (!validateCurrentStep()) {
      alert('Por favor, preencha todos os campos obrigatórios antes de continuar.');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCurrentStep()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: {
          formData,
          photos: photos.map(photo => ({
            name: photo.name,
            type: photo.type,
            size: photo.size
          }))
        }
      });

      if (error) throw error;

      alert('Cadastro realizado com sucesso!');
      
      // Reset form
      setFormData({
        responsible_name: '',
        business_name: '',
        activity_area: '',
        registration_type: '',
        primary_email: '',
        optional_email: '',
        primary_phone: '',
        whatsapp: '',
        instagram: '',
        facebook: '',
        other_social: '',
        cep: '',
        address: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        working_days: [],
        start_time: '',
        end_time: '',
        schedule_notes: '',
        short_description: '',
        detailed_description: '',
        service_areas: '',
        online_scheduling: '',
        scheduling_platform: '',
        keywords: '',
        additional_message: ''
      });
      setPhotos([]);
      setCurrentStep(1);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar cadastro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoForm formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <ContactInfoForm formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <AddressForm formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <BusinessHoursForm formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <PhotoUploadForm photos={photos} onPhotosChange={setPhotos} isUploading={isUploading} />;
      case 6:
        return <BusinessDescriptionForm formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  const stepTitles = [
    'Informações Básicas',
    'Contato',
    'Endereço',
    'Horário',
    'Fotos',
    'Descrição'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-blue-600 px-6 py-4">
            <div className="flex items-center justify-between text-white">
              <h1 className="text-2xl font-bold">Cadastro de Negócio</h1>
              <span className="text-blue-100">
                Passo {currentStep} de {totalSteps}
              </span>
            </div>
            <div className="mt-4">
              <div className="flex space-x-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded-full ${
                      i + 1 <= currentStep ? 'bg-blue-200' : 'bg-blue-800'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 text-blue-100 text-sm">
                {stepTitles[currentStep - 1]}
              </div>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6">
            {renderCurrentStep()}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Voltar
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Próximo
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Finalizar Cadastro'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
