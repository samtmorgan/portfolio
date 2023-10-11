import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';
import { ProjectType } from '@/types/types';
import styles from './style/mediaCard.module.css';

export default function MediaCard({ project }: { project: ProjectType }) {
  return (
    <Card>
      <Link underline="none" href={project.href || ''} target="blank">
        <CardActionArea>
          <Image
            className={styles.mediaCardImage}
            alt={project.heading}
            src={project.image}
            priority={project.heading === 'Super Potato'}
            loading={project.heading === 'Super Potato' ? 'eager' : 'lazy'}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
