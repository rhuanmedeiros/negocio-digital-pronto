
import React from 'react';
import { Upload, X, Image } from 'lucide-react';

interface PhotoUploadFormProps {
  photos: File[];
  onPhotosChange: (photos: File[]) => void;
  isUploading: boolean;
}

export const PhotoUploadForm: React.FC<PhotoUploadFormProps> = ({ 
  photos, 
  onPhotosChange, 
  isUploading 
}) => {
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024
    );
    
    if (validFiles.length !== files.length) {
      alert('Alguns arquivos foram ignorados. Apenas imagens até 10MB são aceitas.');
    }
    
    onPhotosChange([...photos, ...validFiles]);
  };

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    onPhotosChange(newPhotos);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Fotos do Negócio</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adicionar Fotos
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="photo-upload"
              disabled={isUploading}
            />
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Clique para selecionar fotos ou arraste e solte aqui
              </p>
              <p className="text-sm text-gray-500 mt-2">
                PNG, JPG até 10MB cada
              </p>
            </label>
          </div>
        </div>

        {photos.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Fotos Selecionadas ({photos.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    disabled={isUploading}
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    <Image className="w-3 h-3 inline mr-1" />
                    {(photo.size / 1024 / 1024).toFixed(1)}MB
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
