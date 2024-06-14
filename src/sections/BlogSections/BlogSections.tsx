import {
  ArrowSlider,
  BlogCard,
  ButtonLink,
  SectionTitle,
  Slider,
} from '@/components/ui';

import { getPostsWithPrioritySort } from '@/actions/sanity';

import data from '@/data/common.json';

export const BlogSections: React.FC = async () => {
  const { labelButton, title } = data.blogSection;

  const posts = await getPostsWithPrioritySort();

  return (
    <>
      {posts && (
        <section className="section bg-beige">
          <div className="container">
            <div className="md:mb-6 md:flex md:justify-between xl:mb-8 2xl:mb-10">
              <SectionTitle className="mb-4 md:mb-0">{title}</SectionTitle>

              <ArrowSlider section="blog" wrapClassName="mb-4 md:mb-0" />
            </div>

            <Slider
              section="blog"
              slidesData={posts}
              slideComponent={BlogCard}
              wrapClassName="mb-6 2xl:mb-10"
            />

            <ButtonLink
              tag="link"
              href="/blog/1"
              styleType="secondary"
              className="mx-auto"
            >
              {labelButton}
            </ButtonLink>
          </div>
        </section>
      )}
    </>
  );
};
