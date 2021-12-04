import React from 'react';
import { About, Page } from '../layout';
import { IAbout } from '../layout/about/types';
import { getAboutpageData, getFooterData, getHeaderData } from '../lib/gql';

/* Här tas home datan emot, footer och header datan hämtas upp av MyApp komponenten och hämtas därför inte här, se _app.tsx */
const Aboutpage = ({ about }: { about: IAbout }) => {
  return (
    <Page>
      <About about={about} />
    </Page>
  );
};

/* getStaticProps är en NextJS funktion som hämtar data medan sidan byggs, detta gör att sidan laddas in snabbare och är bättre för SEO */
export async function getStaticProps() {
  const { footer } = await getFooterData();
  const { about } = await getAboutpageData();
  const { header } = await getHeaderData();
  return {
    props: { about, footer, header },
  };
}

export default Aboutpage;
