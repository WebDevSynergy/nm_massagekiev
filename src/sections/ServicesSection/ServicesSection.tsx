import { client } from '@/sanity/lib/client';

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
  const services = (await client.fetch('*[_type == "service"]')) || null;

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
