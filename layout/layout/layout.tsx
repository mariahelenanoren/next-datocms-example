import { Header, Footer } from '../../components';
import styles from './styles.module.css';
import { ILayout } from './types';

//  Den här komponenten är återanvändbar och kan användas för att lägga till både footer och header på varje page
export default function Layout({ children, footer, header }: ILayout) {
  return (
    <div className={styles.page}>
      <Header header={header} />
      {/* Children är de komponenter som den här komponenten wrappar. ex:
        <Layout>
            Jag är en child ---> <Component />
        </Layout>
      */}
      <div className={styles.main}>{children}</div>
      <Footer footer={footer} />
    </div>
  );
}
