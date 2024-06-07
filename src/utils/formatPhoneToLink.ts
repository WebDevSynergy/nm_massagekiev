export const formatPhoneToLink = (phone: string) => {
  return `tel:${phone.replace(/[()\s]/g, '')}`;
};
