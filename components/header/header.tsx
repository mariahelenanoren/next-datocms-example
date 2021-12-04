import { IHeader } from './types';
import styles from './styles.module.css';

export default function Header({ header }: { header: IHeader }) {
  return (
    <div className={styles.header}>
      {header.navigationLinks.map((navigationLink, index) => (
        <a key={index} href={navigationLink.slug}>
          {navigationLink.title}
        </a>
      ))}
    </div>
  );
}
