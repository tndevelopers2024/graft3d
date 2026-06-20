import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/components/sections/contact-us/ContactHero';
import ContactFormDetails from '@/components/sections/contact-us/ContactFormDetails';
import ContactLocations from '@/components/sections/contact-us/ContactLocations';

export const metadata: Metadata = {
  title: "Contact Us | Graft 3D Healthcare Solutions",
  description: "Get in touch with Graft 3D Healthcare Solutions. Reach out for sales inquiries, collaborations, or to meet us live online.",
  alternates: {
    canonical: '/contact-us',
  },
};

const ContactUsPage = () => {
  return (
    <main>
      <ContactHero />
      <ContactFormDetails />
      <ContactLocations />
    </main>
  );
};

export default ContactUsPage;