import styles from './styles.module.css';
import { IPage } from './types';

//  Den här komponenten är återanvändbar och kan användas för att lägga till både footer och header på varje page. Hör kan också SEO taggar läggas till, så som title eller description
export default function Page({ children }: IPage) {
  return (
    <div>
      {/* Children är de komponenter som den här page komponenten wrappar. ex:
        <Page>
            Jag är en child ---> <Home />
        </Page>
      */}
      <div>{children}</div>
    </div>
  );
}
