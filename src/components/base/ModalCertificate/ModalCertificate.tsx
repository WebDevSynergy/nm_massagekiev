import Image from 'next/image';

import { ModalCard, SectionTitle } from '@/components/ui';
import { CertificateForm } from '@/components/base';

import { getServicesList } from '@/actions/sanity';

import data from '@/data/certificate-form.json';

import CertificateImage from '~/images/certificate/certificate@2x.webp';

export const ModalCertificate: React.FC = async () => {
  const servicesList = await getServicesList();

  const { title, image, buttonLabel } = data;

  return (
    <ModalCard
      buttonLabel={buttonLabel}
      buttonStyle="primary"
      buttonStyles="mx-auto"
    >
      <div className="xl:grid xl:w-[880px] xl:grid-cols-2 xl:gap-6">
        <div className="relative hidden overflow-hidden rounded-5xl xl:block">
          <Image
            className="object-cover"
            src={CertificateImage}
            alt={image.alt}
            fill
          />
        </div>

        <div>
          <SectionTitle className="mb-4">{title}</SectionTitle>

          <CertificateForm options={servicesList} />
        </div>
      </div>
    </ModalCard>
  );
};
