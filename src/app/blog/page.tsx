import { TestPostListWithLink } from '../../components/TestPostListWithLink';

import { client } from '@/sanity/lib/client';

export default async function BlogPage() {
  const posts = (await client.fetch('*[_type == "post"]')) || null;

  return (
    <>
      {posts && (
        <section className="section">
          <div className="container">
            <h1>BlogPage</h1>
            <TestPostListWithLink posts={posts} />
          </div>
        </section>
      )}
    </>
  );
}
