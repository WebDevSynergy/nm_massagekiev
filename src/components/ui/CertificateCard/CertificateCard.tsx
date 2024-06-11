import { SanityImage } from '../SanityImage';
import { CertificateCardProps } from './types';

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
}) => {
  return (
    <div className="xl:flex xl:items-center xl:gap-x-6">
      {/* arrow */}
      <p className="hidden items-center justify-center border border-slate-600 xl:flex xl:size-10">
        L
      </p>
      {/* /arrow */}

      <div
        className="mb-4 h-[305px] w-[432px] overflow-hidden rounded-[4px] 
        md:h-[429px] md:w-[608px] md:rounded-[8px] 
        xl:mb-0 xl:h-[530px] xl:w-[752px] xl:rounded-[24px]
        sm480:size-full"
        style={{ boxShadow: '0px 0px 40px 0px rgba(41, 23, 11, 0.10)' }}
      >
        <SanityImage
          image={certificate}
          width={752}
          height={530}
          loading="lazy"
          className="size-full object-cover"
        />
      </div>

      <div className="flex justify-between md:mx-auto md:w-[140px] xl:w-auto">
        {/* arrow */}
        <p className="flex size-6 items-center justify-center border border-slate-600 md:size-8 xl:hidden 2xl:size-10">
          L
        </p>
        {/* /arrow */}

        {/* arrow */}
        <p className="flex size-6 items-center justify-center border border-slate-600 md:size-8 2xl:size-10">
          R
        </p>
        {/* /arrow */}
      </div>
    </div>
  );
};
