import { client } from '@/utils/client';
import { TestPostList } from './TestPostList';

export const BlogSections: React.FC = async () => {
  // const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  // const res = await fetch(`${BASE_URL}/api/blog?priority`);

  // const posts = await res.json();

  // console.log('posts', posts);

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
