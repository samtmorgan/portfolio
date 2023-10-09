import React from 'react';
import ContactFrom from '@/components/ContactFrom';
import { Metadata } from 'next';
import { titles } from '@/static/copy';

// this is managing meta content with the 'app router'
export const metadata: Metadata = {
	title: titles.contact,
};

export default function ContactPage() {
	return <ContactFrom />;
}
