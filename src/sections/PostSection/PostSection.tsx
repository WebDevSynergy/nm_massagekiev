import { BlogArticle } from '@/components/base';

import { BlockContentProps } from './types';

export const PostSection: React.FC<BlockContentProps> = ({ post }) => {
  return (
    <section className="section">
      <div className="container">
        <BlogArticle post={post} />
      </div>
    </section>
  );
};
