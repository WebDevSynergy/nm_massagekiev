import { SanityImage } from '../SanityImage';

import { CertificateCardProps } from './types';

export const CertificateCard: React.FC<CertificateCardProps> = props => {
  return (
    <div className=" bg-transparent pb-14">
      <div
        className=" mb-4 h-[305px] w-[400px] overflow-hidden rounded-[4px] 
                    md:h-[429px] 
                  md:w-[608px] md:rounded-[8px] xl:h-[530px]
                  xl:w-[752px] xl:rounded-[24px] sm480:size-full"
      >
        <SanityImage
          image={props}
          width={752}
          height={530}
          loading="lazy"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};
