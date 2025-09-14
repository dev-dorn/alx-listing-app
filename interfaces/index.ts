// interfaces/index.ts
import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  // Additional button properties can be added here, such as:
  // variant?: 'primary' | 'secondary';
  // type?: 'submit' | 'button';
  // disabled?: boolean;
}
