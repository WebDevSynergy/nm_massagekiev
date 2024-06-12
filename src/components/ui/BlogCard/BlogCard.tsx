import { BlogCardProps } from './type';
import Image from 'next/image';

export const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title = 'Sorry, the title did not load',
  text = 'Sorry, the text did not load',
  alt = '',
}) => {
  return (
    <div className="flex h-[483px] w-[548px] flex-1 flex-col items-center gap-6 self-stretch rounded-[40px] bg-white p-6">
      <Image src={imageUrl} alt={alt} width={300} height={300} />
      <h3>{title}</h3>
      <div className="smOnly:overflow-auto">
        <p className="text-[14px] leading-[1.4] tracking-[-0.28px] text-brown xl:text-[16px] xl:leading-[1.2] xl:tracking-[-0.32px]">
          {text}
        </p>
      </div>
    </div>
  );
};
