import { PortableText } from '@portabletext/react';

import { SanityBlockImage } from '@/components/ui';

import { BlockContentProps } from './types';

import styles from './BlogArticle.module.css';

export const BlogArticle: React.FC<BlockContentProps> = ({ post }) => {
  const components = {
    types: {
      image: SanityBlockImage,
    },
  };
  return (
    <div className={`mx-auto ${styles.block}`}>
      <PortableText value={post?.body} components={components} />
    </div>
  );
};
