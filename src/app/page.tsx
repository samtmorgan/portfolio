import React from 'react';
import { Grid } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import { ProjectType } from '@/types/types';
import { metaTitles } from '@/static/copy';
import { Metadata } from 'next';
import thisSite from '../../public/thisSite.jpg';
import recharts from '../../public/recharts.jpg';
import starWars from '../../public/starWars.jpg';
import brunswick from '../../public/brunswick.jpg';
import superPotato from '../../public/superPotato.jpg';
import styles from './page.module.css';
import './globals.css';

const PLACEHOLDER_PROJECTS: ProjectType[] = [
  {
    heading: 'Super Potato',
    description: `A very simple weather app, primarily used as a platform to explore different tooling, there are
    more features to add to this project which built with Next.js and TypeScript, styled with Tailwind.`,
    image: superPotato,
    href: 'https://super-potato-samtmorgan.vercel.app/',
  },
  {
    heading: 'My personal site',
    description: `This is my personal site built with Next.js and MUI using TypeScript, deployed 
    on Vercel.`,
    image: thisSite,
    href: 'https://samtmorgan.com/',
  },
  {
    heading: 'App for property marketing suite',
    description: `Used on a tablet to control the lighting in an interactive model of a new 
    property development which allows the user to see where different apartments are located
    in the development. The app controls the lighting via the lighting controller API. Built
    with React and React-Bootstrap, in production the app is hosted on a Apache web server
    running on a Raspberry pi.`,
    image: brunswick,
    href: 'https://samtmorgan.github.io/bm_clarion_brunswick/',
  },
  {
    heading: 'Recharts library',
    description: `Recharts is a composable open source charting library, I have used the library 
    extensively in my professional work and have previously made a modest contribution to the project
    storybook.`,
    image: recharts,
    href: 'https://recharts.org/en-US/storybook',
  },
  {
    heading: 'Star Wars quotes',
    description: `Made in a galaxy far far away as a Free Code Camp project. Built with React and 
    React-Bootstrap, deployed on GitHub Pages.`,
    image: starWars,
    href: 'https://samtmorgan.github.io/random-star-wars-quotes/',
  },
];

// this is managing meta content with the 'app router'
export const metadata: Metadata = {
  title: metaTitles.home,
};

export default function Home() {
  return (
    <article>
      <section>
        <h1>Sam T Morgan</h1>
        <p>Fullstack software engineer with a primary focus on Frontend development.</p>
        <p>
          I build responsive websites and applications using modern web technologies and frameworks including React,
          Next.js, Material-UI and Tailwind CSS.
        </p>
        <p>On this site you can find some of my projects, find out about about me and get in touch.</p>
      </section>
      <section id="projects" className={styles.projectsHomeSection}>
        <h2>Projects</h2>

        <Grid container spacing={10}>
          {PLACEHOLDER_PROJECTS.slice(0, 5).map(project => (
            <Grid item key={project.heading} xs={12} sm={12}>
              <MediaCard project={project} />
            </Grid>
          ))}
        </Grid>
      </section>
    </article>
  );
}
