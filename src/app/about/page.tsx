import * as React from 'react';
import { PageBox } from '@/components/PageBox';
import { PageText } from '@/components/PageText';
import { Metadata } from 'next';
import { titles } from '@/static/copy';

// this is managing meta content with the 'app router'
export const metadata: Metadata = {
  title: titles.about,
};

const title = 'About Me';
const paragraphs = [
  `I am a dedicated problem solver who finds true joy in crafting technical solutions 
    and building stunning user interfaces. This passion not only drives me to explore
    and embrace new technologies but also fuels my continuous learning journey. I am currently
    enjoying learning and using TypeScript and Next.js.`,
  `During my developer career, I have garnered significant expertise in React (with hooks 
    and context) and have also gained hands-on experience across the full stack,
    encompassing Express, Node.js, MongoDB, whilst ensuring that solutions are robust
    by harnessing unit testing using Jest.`,
  `I possess self-driven learning abilities and excel in organisational, time management, 
    and communication skills, thriving in both independent work and team collaboration in
    remote and office settings, always with a keen eye on detail whilst maintaining focus
    on project priorities.`,
  `Outside of work I enjoy spending time with my family, engaging in various running adventures
    ranging from half marathons to mountainous ultra-marathons, exploring the art of playing jazz 
    on the guitar, baking and reading.`,
];

export default function AboutPage() {
  return (
    <PageBox>
      <PageText title={title} paragraphs={paragraphs} />
    </PageBox>
  );
}
