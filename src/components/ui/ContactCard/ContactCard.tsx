import { SectionTitle } from '../SectionTitle';
import { ButtonLink } from '../ButtonLink';

import { cn } from '@/utils';

import data from '@/data/common.json';

import SubwayIcon from '~/icons/subway-icon.svg';
import { MainLink } from '../MainLink';

export const ContactCard: React.FC = () => {
  const {
    schedule,
    address,
    phone,
    contactCard: { title, btnLabel, subwayStations },
  } = data;

  return (
    <div className="mb-4 flex flex-col items-center justify-center rounded-[24px] bg-whiteBeige p-6 md:mb-6 md:p-10 xl:mb-0 xl:h-[327px] xl:w-[568px] 2xl:w-[568px]">
      <SectionTitle isCentered>{title}</SectionTitle>

      <address
        className="flex flex-col items-center justify-center gap-2 py-4 text-[14px] not-italic leading-[1.4] tracking-[-0.28px] text-brownDark 
          md:text-[18px] md:tracking-[-0.36px] 2xl:py-10"
      >
        <p className="text-center">{address}</p>

        <ul className="flex flex-wrap justify-center gap-4 text-brown">
          {subwayStations &&
            subwayStations.map(({ name, line }, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center gap-x-2"
              >
                <SubwayIcon
                  width={16}
                  height={16}
                  className={cn(
                    line === 'blue' && 'text-subwayBlue',
                    line === 'red' && 'text-subwayRed',
                  )}
                />
                <p>{name}</p>
              </li>
            ))}
        </ul>

        <p className="text-center text-brown">{`${schedule.days} ${schedule.hours}`}</p>

        <MainLink path={phone.path} label={phone.label} tel />
      </address>

      <ButtonLink styleType="primary">{btnLabel}</ButtonLink>
    </div>
  );
};
