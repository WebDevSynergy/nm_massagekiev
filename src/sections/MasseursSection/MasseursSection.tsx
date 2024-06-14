import {
  ArrowSlider,
  MasseurCard,
  SectionTitle,
  Slider,
} from '@/components/ui';

import { getMasseurs } from '@/actions/sanity';

import { MasseursData } from './types';

import data from '@/data/common.json';

export const MasseursSection: React.FC = async () => {
  const { title } = data.masseursSection;

  const masseurs: MasseursData | null = await getMasseurs();

  return (
    <>
      {masseurs && (
        <section className="section">
          <div className="container">
            <div className="md:mb-6 md:flex md:justify-between xl:mb-8 2xl:mb-10">
              <SectionTitle className="mb-4 md:mb-0">{title}</SectionTitle>

              <ArrowSlider section="masseurs" wrapClassName="mb-4 md:mb-0" />
            </div>

            <Slider
              section="masseurs"
              slidesData={masseurs}
              slideComponent={MasseurCard}
            />
          </div>
        </section>
      )}
    </>
  );
};
