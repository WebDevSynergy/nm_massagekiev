import { client } from '@/utils/client';
import { TestPostListWithLink } from '../../components/TestPostListWithLink';

export default async function BlogPage() {
  // const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  // const res = await fetch(`${BASE_URL}/api/blog`);

  // const posts = await res.json();

  const posts = (await client.fetch('*[_type == "post"]')) || null;

  //   console.log('posts', posts);
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
