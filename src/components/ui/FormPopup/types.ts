export type FormPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  section: 'services' | 'contactUs' | 'certificate' | 'review' | 'subscription';
};
