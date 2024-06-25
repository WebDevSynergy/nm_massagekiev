import { BlogArticle } from '@/components/base';
import { GoBackBtn } from '@/components/ui';

import { BlockContentProps } from './types';

import data from '@/data/post.json';

import Arrow from '~/icons/arrow-left.svg';

export const PostSection: React.FC<BlockContentProps> = ({ post }) => {
  const { goBackBtnText } = data;

  return (
    <section className="section">
      <div className="container">
        <GoBackBtn className="mb-4 flex cursor-pointer items-center gap-2 text-[16px]/[1.5] tracking-[-0.02em] text-brown md:mb-6 xl:ml-[153px] xl:text-[18px] 2xl:ml-[277px]">
          <Arrow
            className="flex rotate-[90deg] items-center justify-center xl:size-[32px]"
            width="24"
            height="24"
          />
          {goBackBtnText}
        </GoBackBtn>

        <BlogArticle post={post} />
      </div>
    </section>
  );
};
