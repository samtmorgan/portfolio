import React from 'react';
import ContactFrom from '@/components/ContactFrom';
import { Metadata } from 'next';
import { metaTitles, metaDescriptions } from '@/static/copy';

// this is managing meta content with the 'app router'
export const metadata: Metadata = {
  title: metaTitles.contact,
  description: metaDescriptions.contact,
};

export default function ContactPage() {
  return <ContactFrom />;
}
