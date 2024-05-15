import { TestPostList } from './TestPostList';

import { client } from '@/sanity/lib/client';

export const BlogSections: React.FC = async () => {
  const posts =
    (await client.fetch('*[_type == "post"] | order(priority desc)')) || null;

  return (
    <>
      {posts && (
        <section className="section">
          <div className="container">
            BlogSections
            <TestPostList posts={posts} />
          </div>
        </section>
      )}
    </>
  );
};
