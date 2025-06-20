import React from 'react';
import MultiStepForm from '@/components/PackageCreator/MultiStepForm';

const PackageCreator: React.FC = () => {
  console.log('PackageCreator component loaded');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative">
      
      {/* Botón "Atrás" en la esquina superior izquierda */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => (window.location.href = '/')}
          className="flex items-center px-4 py-2 bg-white/20 text-white border border-white/30 rounded hover:bg-white/30 transition"
        >
          ← Atrás
        </button>
      </div>

      {/* Formulario multistep */}
      <MultiStepForm />
    </div>
  );
};

export default PackageCreator;
