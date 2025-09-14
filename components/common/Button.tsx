// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '../../interfaces';

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
