import { ButtonLinkProps } from '../ButtonLink/types';

export type ModalCardProps = {
  buttonLabel: string;
  buttonStyle: ButtonLinkProps['styleType'];
  buttonStyles?: string;
  children?: React.ReactNode;
};
