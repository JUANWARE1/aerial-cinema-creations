
import React from 'react';
import MultiStepForm from '@/components/PackageCreator/MultiStepForm';

const PackageCreator: React.FC = () => {
  console.log('PackageCreator component loaded');
  
  return (
    <div className="min-h-screen">
      <MultiStepForm />
    </div>
  );
};

export default PackageCreator;
