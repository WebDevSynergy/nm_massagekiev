import { ModalCertificate } from '@/components/base';
import { SectionTitle, VideoPlayer } from '@/components/ui';

import data from '@/data/certificate.json';

export const CertificateSection: React.FC = () => {
  const { title, text, description, url } = data;

  return (
    <section className="section">
      <div className="container flex flex-col items-center gap-[16px] md:gap-[24px] xl:flex-row">
        <div className="xl:w-[588px] 2xl:w-[930px]">
          <SectionTitle className="mb-[8px]">{title}</SectionTitle>
          <p className="mb-[8px] leading-[1.4] tracking-[-0.32px] text-brownDark md:text-[18px] md:tracking-[-0.36px]">
            {text}
          </p>
          <p
            className="mb-[16px] font-semibold leading-[1.4] tracking-[-0.32px] text-brownDark md:mb-[24px] md:text-[18px]
                        md:tracking-[-0.36px] xl:font-bold"
          >
            {description}
          </p>

          <ModalCertificate/>
        </div>

        <VideoPlayer url={url} />
      </div>
    </section>
  );
};
