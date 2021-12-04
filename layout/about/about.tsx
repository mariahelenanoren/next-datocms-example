import { IAbout } from './types';
import styles from './styles.module.css';
import { Image, StructuredText } from 'react-datocms';
import React from 'react';

export default function About({ about }: { about: IAbout }) {
  return (
    <div className={styles.about}>
      <p>{about.title}</p>
      <Image data={about.image.responsiveImage} />
      <StructuredText data={about.body.value} />
    </div>
  );
}
