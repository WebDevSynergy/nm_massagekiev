import { ReviewCardProps } from './type';

export const ReviewCard: React.FC<ReviewCardProps> = ({
  author = 'Author',
  review = 'Sorry, the review did not load',
}) => {
  return (
    <div
      className="flex h-[236px] max-w-[448px] flex-col justify-between rounded-[24px] bg-white p-6 md:h-[308px] 
    md:w-[336px] md:max-w-full md:rounded-[32px] xl:h-[336px] xl:w-[384px] xl:rounded-[40px] xl:p-8 2xl:h-[288px]
    2xl:w-[520px] 2xl:p-10 sm480:h-[348px]"
    >
      <div className="smOnly:overflow-auto">
        <p className="text-[14px] leading-[1.4] tracking-[-0.28px] text-brown xl:text-[16px] xl:leading-[1.2] xl:tracking-[-0.32px]">
          {review}
        </p>
      </div>

      <p
        className="text-right text-[14px] font-semibold uppercase leading-[1.2] tracking-[-0.28px] text-brownDark 
      xl:text-[16px] xl:font-bold xl:tracking-[-0.32px]"
      >
        {author}
      </p>
    </div>
  );
};
