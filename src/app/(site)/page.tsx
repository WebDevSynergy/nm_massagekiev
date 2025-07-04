import { getRating } from '@/actions/sanity';
import {
  BenefitsSection,
  BlogSections,
  CertificateSection,
  ContactUsSections,
  ContactsSection,
  CosmeceuticalsSection,
  FAQSection,
  HeroSection,
  InstagramSection,
  MasseursSection,
  ReviewsSection,
  ServicesSection,
} from '@/sections';

import commonData from '@/data/common.json';

export const revalidate = 60 * 10;

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const {
  siteName,
  phone,
  socialLinksArr,
  addressStructured,
  googleMaps: { position },
  schedule,
} = commonData;
const { streetAddress, addressLocality, postalCode, addressCountry } =
  addressStructured;
const { dayOfWeek, opens, closes } = schedule;

export default async function Home() {
  const rating = await getRating();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            url: SITE_URL,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': `${SITE_URL}#organization`,
            name: siteName,
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/icons/logo.svg`,
              width: 187,
              height: 22,
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: phone.path,
                contactType: 'customer service',
                areaServed: 'UA',
                availableLanguage: ['Ukrainian', 'Russian'],
              },
            ],
            sameAs: socialLinksArr,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${SITE_URL}#localbusiness`,
            name: siteName,
            image: `${SITE_URL}/icons/logo.svg`,
            url: SITE_URL,
            telephone: phone.path,
            address: {
              '@type': 'PostalAddress',
              streetAddress,
              addressLocality,
              postalCode,
              addressCountry,
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: position.lat,
              longitude: position.lng,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek,
                opens,
                closes,
              },
            ],
            areaServed: [
              {
                '@type': 'Place',
                name: 'Поділ, Київ',
              },
              {
                '@type': 'Place',
                name: 'Виноградар, Київ',
              },
            ],
            sameAs: socialLinksArr,
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: rating,
            },
            parentOrganization: {
              '@id': `${SITE_URL}#organization`,
            },
          }),
        }}
      />

      <HeroSection rating={rating} />

      <BenefitsSection />

      <ServicesSection />

      <ReviewsSection />

      <CosmeceuticalsSection />

      <MasseursSection />

      <ContactUsSections />

      <BlogSections />

      <CertificateSection />

      <FAQSection />

      <InstagramSection />

      <ContactsSection />
    </>
  );
}
