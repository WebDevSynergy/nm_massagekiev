import { TestPostSection } from '@/sections/TestPostSection'; //////////
//////////////////////////////ВИДАЛИТИ///////////////////////////////////

import Link from 'next/link';

import {
  HeroSection,
  BenefitsSection,
  ServicesSection,
  ReviewsSection,
  CosmeceuticalsSection,
  MasseursSection,
  ContactUsSections,
  BlogSections,
  CertificateSection,
  FAQSection,
  InstagramSection,
  ContactsSection,
} from '@/sections';

export default function Home() {
  return (
    <>
      {/* ////////////////////ВИДАЛИТИ///////////////////////// */}
      <div>
        <TestPostSection />

        <Link
          className="block text-[48px] text-accent  underline"
          href="/admin"
        >
          Go to admin panel.
        </Link>
      </div>
      {/* ////////////////////ВИДАЛИТИ///////////////////////// */}
      <HeroSection />

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
