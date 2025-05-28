
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/5255123445678', '_blank'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Phone,
      label: 'Llamar',
      action: () => window.open('tel:+15551234567', '_self'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:info@skyvisionpro.com', '_self'),
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-4 space-y-3 animate-fade-in">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={option.label}
                className="flex items-center justify-end"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="bg-white text-drone-dark px-3 py-2 rounded-lg shadow-lg mr-3 text-sm font-medium whitespace-nowrap">
                  {option.label}
                </span>
                <Button
                  onClick={option.action}
                  className={`w-12 h-12 rounded-full ${option.color} text-white shadow-lg hover:scale-110 transition-all duration-300`}
                >
                  <Icon className="h-6 w-6" />
                </Button>
              </div>
            );
          })}
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-drone-light hover:bg-white text-drone-dark'
        }`}
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <MessageCircle className="h-8 w-8" />
        )}
      </Button>

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-drone-light animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default FloatingContact;
