import Link from 'next/link';

import { Logo } from '@/components/ui';

import data from '@/data/footer.json';
import { FooterNav } from '@/components/base';

export const Footer: React.FC = () => {
  const { policy, copyright, creator } = data;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className=" bg-white">
      <div className="section container">
        <div>
          <Logo variant="green" />
        </div>

        <FooterNav />
      </div>

      <div className="bg-blackLight py-4 md:py-8">
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
