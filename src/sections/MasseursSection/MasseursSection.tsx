import { MasseurCard, SectionTitle } from '@/components/ui';

import { getMasseurs } from '@/actions/sanity';

import { MasseursData } from './types';

import data from '@/data/common.json';

export const MasseursSection: React.FC = async () => {
  const { title } = data.masseurs;

  const masseurs: MasseursData | null = await getMasseurs();

  return (
    <>
      {masseurs && (
        <section className="section">
          <div className="container">
            <SectionTitle>{title}</SectionTitle>

            <ul className="md:flex md:flex-wrap md:gap-6 xl:gap-[42px] 2xl:gap-10">
              {masseurs.map(masseur => {
                return (
                  <li key={masseur.id}>
                    <MasseurCard masseur={masseur} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
