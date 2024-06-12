import { getInstagramPhotos } from '@/actions/sanity';
import { InstagramCard } from '@/components/ui';

type instagramPhoto = {
  id: string;
  image: TImage;
};

export const InstagramSection: React.FC = async () => {
  const instagramPhotosData = await getInstagramPhotos();

  return (
    <>
      {instagramPhotosData && (
        <section className="section">
          <div className="container">
            InstagramSection
            <ul className="flex flex-wrap gap-8">
              {instagramPhotosData.map(({ id, image }: instagramPhoto) => {
                return (
                  <li key={id}>
                    <InstagramCard image={image} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
