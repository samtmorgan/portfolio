import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../page.module.css';
import { PageBox } from '@/components/PageBox';
import { PageText } from '@/components/PageText';

const title = 'About Me';
const paragraphs = [
	`I am a dedicated problem solver who finds true joy in crafting technical solutions 
    and designing stunning user interfaces. This passion not only drives me to explore
    and embrace new technologies but also fuels my continuous learning journey.`,
	`During my developer career, I have garnered significant expertise in React (with hooks 
    and context) and have also gained hands-on experience across the full stack,
    encompassing Express, Node.js, MongoDB, whilst ensuring that solutions are robust
    by harnessing unit testing using Jest.`,
	`I possess self-driven learning abilities and excel in organisational, time management, 
    and communication skills, thriving in both independent work and team collaboration in
    remote and office settings, always with a keen eye on detail whilst maintaining focus
    on project priorities.`,
];

export default function AboutPage() {
	return (
		<PageBox>
			<PageText title={title} paragraphs={paragraphs} />
		</PageBox>
	);
}
