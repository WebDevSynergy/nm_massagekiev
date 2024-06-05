import { ModalCard, SanityImage } from '@/components/ui';

import { getMasseurs } from '@/actions/sanity';

import data from '@/data/common.json';

export type Masseurs = {
  id: string;
  certificateArray:
    | (TImage & {
        id: string;
      })[]
    | null;
  resume: string;
  image: TImage;
  name: string;
}[];

export const MasseursSection: React.FC = async () => {
  const masseurs: Masseurs | null = await getMasseurs();

  const { buttonLabel } = data.reviews;

  return (
    <>
      {masseurs && (
        <section className="section">
          <div className="container">
            MasseursSection
            <ul className="flex gap-8">
              {masseurs.map(({ id, certificateArray, resume, image, name }) => {
                return (
                  <li key={id} className="w-[400px] border border-solid p-8">
                    <div className="size-[334px]">
                      <SanityImage
                        image={image}
                        width={520}
                        height={520}
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    </div>

                    <p>name: {name}</p>

                    <p>resume: {resume}</p>

                    {certificateArray && (
                      <ModalCard
                        buttonLabel={buttonLabel}
                        buttonStyle="unstyled"
                        buttonStyles="text-green font-bold"
                      >
                        <ul className="flex gap-8">
                          {certificateArray.map(el => (
                            <li key={el.id}>
                              <SanityImage
                                image={el}
                                width={520}
                                height={520}
                                loading="lazy"
                                className="size-full object-cover"
                              />
                            </li>
                          ))}
                        </ul>
                      </ModalCard>
                    )}
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
