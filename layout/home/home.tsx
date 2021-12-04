import { IHome } from './types';
import styles from './styles.module.css';

export default function Home({ home }: { home: IHome }) {
  return (
    <div className={styles.home}>
      <p>{home.title}</p>
    </div>
  );
}
