import { IAbout } from './types';
import styles from './styles.module.css';

export default function About({ about }: { about: IAbout }) {
  return (
    <div className={styles.about}>
      <p>{about.title}</p>
    </div>
  );
}
