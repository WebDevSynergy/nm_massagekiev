import Link from 'next/link';
import React from 'react';

import FacebookIcon from '~/icons/facebook.svg';
import InstagramIcon from '~/icons/instagram.svg';
import TelegramIcon from '~/icons/telegram.svg';
import ViberIcon from '~/icons/viber.svg';

import { SocialItemProps } from './types';

export const SocialItem: React.FC<SocialItemProps> = ({
  href,
  ariaLabel,
  name,
}) => {
  return (
    <li className="flex size-10 cursor-pointer items-center justify-center rounded-[100%] bg-greenLight text-green transition hover:bg-green hover:text-white focus:bg-green focus:text-white">
      <Link
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {name === 'instagram' && <InstagramIcon width={22} height={22} />}
        {name === 'viber' && <ViberIcon width={24} height={24} />}
        {name === 'telegram' && <TelegramIcon width={24} height={24} />}
        {name === 'facebook' && <FacebookIcon width={24} height={24} />}
      </Link>
    </li>
  );
};
