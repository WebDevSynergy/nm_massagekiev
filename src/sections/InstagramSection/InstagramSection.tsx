export const InstagramSection: React.FC = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${BASE_URL}/api/instagram`, {
    next: { revalidate: 3600 },
  });

  const instagramPhotosData = await res.json();

  // console.log('instagramPhotosData', instagramPhotosData);

  return (
    <>
      {instagramPhotosData && (
        <section className="section">
          <div className="container">
            InstagramSection | Якщо запит успішний то в instagramPhotosData
            прийдуть дані, якщо з помилкою прийде null. Ревалідація кешу 1
            година, для тесту можна відключити або ставити 1сек
          </div>
        </section>
      )}
    </>
  );
};
