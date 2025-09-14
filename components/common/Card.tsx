// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces';

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {children}
    </div>
  );
};
