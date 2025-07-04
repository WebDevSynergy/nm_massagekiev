import type { Metadata } from 'next';

import meta from '@/data/meta.json';
import data from '@/data/policy.json';

export const metadata: Metadata = meta.termsOfServicePrivacyPolicy;

export default function Policy() {
  const { title, sections } = data;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: data.title,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-of-service-privacy-policy`,
            description: meta.termsOfServicePrivacyPolicy.description,
            mainEntity: {
              '@type': ['WebPage', 'PrivacyPolicy', 'TermsOfService'],
              about: data.title,
            },
          }),
        }}
      />

      <section className="section">
        <div className="container">
          <h1
            className="mb-6 text-[18px]/[1.2] font-bold tracking-[-1.12px] text-blackLight
         md:mb-14 md:text-[22px]/[1.2] xl:mb-16 xl:text-[36px]/[1.2] 2xl:mb-20"
          >
            {title}
          </h1>

          <ul>
            {sections &&
              sections.map((el, i) => (
                <li key={i} className="mb-8 md:mb-12">
                  <h2
                    className="mb-4 text-[16px]/[1.2] font-semibold uppercase tracking-[-0.32px] text-brownDark 
                  md:mb-6
                xl:mb-8 xl:text-[18px]/[1.2] xl:font-bold xl:tracking-[-0.36px]
                2xl:mb-10 2xl:text-[20px]/[1.2] 2xl:tracking-[-0.4px]"
                  >
                    {el.title}
                  </h2>

                  {}

                  <ul
                    className="text-[14px]/[1.2] tracking-[-0.28px] text-brown xl:text-[16px]/[1.4] xl:tracking-[-0.32px] 
                2xl:text-[18px]/[1.2] 2xl:tracking-[-0.36px]"
                  >
                    {el.items &&
                      el.items.map(({ number, text, subitems }, idx) => (
                        <li key={idx} className="mb-4 last:mb-0">
                          <div className="flex gap-x-2">
                            <p>{number}</p>
                            <p>{text}</p>
                          </div>

                          <ul className="ml-7">
                            {subitems &&
                              subitems.map((subitem, index) => (
                                <li
                                  key={index}
                                  className="mb-2 first:mt-2 md:mb-4 md:first:mt-4 xl:mb-6 xl:first:mt-6  2xl:mb-8 2xl:first:mt-8"
                                >
                                  <div className="flex gap-x-2">
                                    <p>{subitem.number}</p>
                                    <p>{subitem.text}</p>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
