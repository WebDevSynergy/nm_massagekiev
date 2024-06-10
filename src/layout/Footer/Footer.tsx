import Link from 'next/link';

import { FooterNav, Subscription } from '@/components/base';
import { Logo } from '@/components/ui';

import data from '@/data/footer.json';

export const Footer: React.FC = () => {
  const { policy, copyright, creator } = data;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className=" bg-white">
      <div className="section container xl:flex xl:gap-6 2xl:gap-[165px]">
        <div className="mb-4 xl:w-[435px] 2xl:w-[392px]">
          <Logo variant="green" className="mx-auto mb-4 md:mb-6 xl:mx-0" />

          <Subscription />
        </div>

        <FooterNav />
      </div>

      <div className=" bg-blackLight py-4 md:py-8">
        <div className="container flex flex-col items-center md:flex-row md:justify-between smOnly:gap-[16px]">
          <Link
            className="leading-[1.4] tracking-[-0.32px] text-white"
            href={policy.path}
          >
            {policy.label}
          </Link>

          <p className="leading-[1.4] tracking-[-0.32px] text-white">{`© ${copyright} | ${year}`}</p>

          <Link
            className="leading-[1.4] tracking-[-0.32px] text-white underline"
            href={creator.path}
          >
            {creator.label}
          </Link>
        </div>
      </div>
    </footer>
  );
};
