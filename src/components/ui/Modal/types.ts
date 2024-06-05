import React from 'react';

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalStyle?: string;
  backdropStyle?: string;
  animation?: 'opacity' | 'translateX';
};
