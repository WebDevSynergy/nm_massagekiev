import Image from 'next/image';

import { ButtonLink } from '@/components/ui';

import data from '@/data/not-found.json';

import NotFoundImage from '~/images/not-found/404@2x.webp';

export const NotFoundSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-6 text-center text-2xl/[1.4] font-bold text-blackLight md:text-[32px] xl:text-4xl/[1.4] 2xl:text-[40px]">
          {data.title}
        </h1>

        <div className="relative mx-auto mb-6 aspect-square w-full overflow-hidden rounded-3xl md:rounded-4xl xl:aspect-auto xl:h-[588px] xl:max-w-[894px] xl:rounded-5xl 2xl:h-[808px] 2xl:max-w-[1084px]">
          <Image
            className="object-cover"
            src={NotFoundImage}
            alt={data.image.alt}
            fill
          ></Image>
        </div>

        <ButtonLink styleType="primary" className="mx-auto">
          {data.button.label}
        </ButtonLink>
      </div>
    </section>
  );
};
