import { SanityImage } from '../SanityImage';

import { CertificateCardProps } from './types';

export const CertificateCard: React.FC<CertificateCardProps> = props => {
  return (
    <SanityImage
      image={props}
      width={752}
      height={530}
      loading="lazy"
      className="size-full object-cover"
    />
  );
};
