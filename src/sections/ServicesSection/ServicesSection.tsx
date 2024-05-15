type ServicesItem = {
  _id: string;
  title: string;
  description: string;
  for: string;
  duration: string;
  price: string;
  subscription: string;
};

export const ServicesSection: React.FC = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${BASE_URL}/api/services`, {
    next: { revalidate: 1 },
  });

  const services = await res.json();
  // console.log('services', services);
  return (
    <>
      {services && (
        <section className="section">
          <div className="container">
            ServicesSection
            <ul className="flex gap-8">
              {services.map(
                ({
                  _id,
                  title,
                  description,
                  for: forType,
                  duration,
                  price,
                  subscription,
                }: ServicesItem) => {
                  return (
                    <li key={_id} className="border border-solid p-8">
                      <p>title: {title}</p>
                      <p>description: {description}</p>
                      <p>for: {forType}</p>
                      <p>duration: {duration}</p>
                      <p>price: {price}</p>
                      <p>subscription: {subscription}</p>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
