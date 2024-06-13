import { ButtonLinkProps } from '../ButtonLink/types';

export type ModalCardProps = {
  buttonLabel: string;
  buttonStyle: ButtonLinkProps['styleType'];
  buttonStyles?: string;
  backdropStyle?: string;
  children?: React.ReactNode;
};
