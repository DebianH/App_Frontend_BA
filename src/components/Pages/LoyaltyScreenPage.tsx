// src/screens/NewLoyaltyScreen.tsx

import React, { useState } from 'react';
import LoyaltyTemplate from '../templates/LoyaltyTemplate';

const LoyaltyScreen: React.FC = () => {
  const [selectedSatisfaction, setSelectedSatisfaction] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const feedbackOptions = [
    'El camión se demoró más de lo esperado',
    'Nunca llegó el camión',
    'El operador no fue cordial',
    'El operador fue irrespetuoso',
    'La aplicación presentó errores',
    'No funciona la aplicación',
  ];

  const handleSatisfactionSelect = (iconName: string, message: string) => {
    setSelectedSatisfaction(iconName);
    setFeedbackMessage(message);
  };

  const handleOptionSelect = (option: string) => {
    // Lógica para manejar la opción seleccionada
  };

  const handleConfirm = () => {
    // Lógica para confirmar la respuesta
  };

  return (
    <LoyaltyTemplate
      selectedSatisfaction={selectedSatisfaction}
      feedbackMessage={feedbackMessage}
      feedbackOptions={feedbackOptions}
      onSatisfactionSelect={handleSatisfactionSelect}
      onOptionSelect={handleOptionSelect}
      onConfirm={handleConfirm}
    />
  );
};

export default LoyaltyScreen; 
