import styles from './styles.module.css';
import { IFooter } from './types';

export default function Footer({ footer }: { footer: IFooter }) {
  return (
    <div className={styles.footer}>
      <p>{footer.title}</p>
    </div>
  );
}
