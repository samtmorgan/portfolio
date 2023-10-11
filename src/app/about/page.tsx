import * as React from 'react';
import { Metadata } from 'next';
import { metaDescriptions, metaTitles } from '@/static/copy';
import styles from '../page.module.css';
import '../globals.css';

// this is managing meta content with the 'app router'
export const metadata: Metadata = {
  title: metaTitles.about,
  description: metaDescriptions.about,
};

export default function AboutPage() {
  return (
    <article className={styles.pageContainer}>
      <h1>About Me</h1>
      <section>
        <p>
          I am a dedicated problem solver who finds true joy in crafting technical solutions and building stunning user
          interfaces.
        </p>
        <p>
          This passion not only drives me to explore and embrace new technologies but also fuels my continuous learning
          journey. I am currently enjoying learning and using TypeScript and Next.js.
        </p>
        <p>
          During my developer career, I have garnered significant expertise in React (with hooks and context) and have
          also gained hands-on experience across the full stack, encompassing Express, Node.js, MongoDB, whilst ensuring
          that solutions are robust by harnessing unit testing using Jest.
        </p>
        <p>
          I possess self-driven learning abilities and excel in organisational, time management, and communication
          skills, thriving in both independent work and team collaboration in remote and office settings, always with a
          keen eye on detail whilst maintaining focus on project priorities.
        </p>
        <p>
          Outside of work I enjoy spending time with my family, engaging in various running adventures ranging from half
          marathons to mountainous ultra-marathons, exploring the art of playing jazz on the guitar, baking and reading.
        </p>
      </section>
    </article>
  );
}
