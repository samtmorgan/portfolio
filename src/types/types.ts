import { StaticImageData } from 'next/image';

export type ProjectType = {
  heading: string;
  description: string;
  image: string | StaticImageData;
  href: string;
};

export type MetaGeneric<T> = {
  [key: string]: T;
};
