import { SubscriptionForm } from '@/components/base';

import data from '@/data/footer.json';

export const Subscription: React.FC = () => {
  const { text } = data.subscription;
  return (
    <div className="md:flex xl:flex-col mdOnly:gap-6">
      <p
        className="mb-2 text-[14px] leading-[1.4] tracking-[-0.28px] text-brownDark md:w-[332px] 2xl:w-[392px] 2xl:text-[16px]
                    2xl:tracking-[-0.32px] smOnly:text-center"
      >
        {text}
      </p>

      <SubscriptionForm />
    </div>
  );
};
