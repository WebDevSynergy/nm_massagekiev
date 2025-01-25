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

export const revalidate = 0;

export default async function Home() {
  const rating = await getRating();

  return (
    <>
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
