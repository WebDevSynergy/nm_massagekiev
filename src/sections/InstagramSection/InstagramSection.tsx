import { getInstagramPhotos } from '@/actions/sanity';
import {
  ArrowSlider,
  ButtonLink,
  InstagramCard,
  SectionTitle,
  Slider,
} from '@/components/ui';

import data from '@/data/common.json';

export const InstagramSection: React.FC = async () => {
  const { title, label } = data.instagramSection;

  const instagramPhotosData = await getInstagramPhotos();

  return (
    <>
      {instagramPhotosData && (
        <section className="section">
          <div className="container">
            <div className="md:mb-6 md:flex md:justify-between xl:mb-8 2xl:mb-10">
              <SectionTitle className="mb-4 md:mb-0">{title}</SectionTitle>

              <ArrowSlider section="instagram" wrapClassName="mb-4 md:mb-0" />
            </div>

            <Slider
              section="instagram"
              slidesData={instagramPhotosData}
              slideComponent={InstagramCard}
              wrapClassName="mb-4 md:mb-6 xl:mb-8 2xl:mb-10"
            />

            <ButtonLink
              styleType="secondary"
              tag="a"
              href="https://www.instagram.com/nm_massagekiev"
              className="mx-auto"
            >
              {label}
            </ButtonLink>
          </div>
        </section>
      )}
    </>
  );
};
