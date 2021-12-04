import React from 'react';
import { Home, Page } from '../layout';
import { IHome } from '../layout/home/types';
import { getFooterData, getHeaderData, getHomepageData } from '../lib/gql';

/* Här tas home datan emot, footer och header datan hämtas upp av MyApp komponenten och hämtas därför inte här, se _app.tsx */
const Homepage = ({ home }: { home: IHome }) => {
  return (
    <Page>
      <Home home={home} />
    </Page>
  );
};

/* getStaticProps är en NextJS funktion som hämtar data medan sidan byggs, detta gör att sidan laddas in snabbare och är bättre för SEO */
export async function getStaticProps() {
  const { footer } = await getFooterData();
  const { home } = await getHomepageData();
  const { header } = await getHeaderData();
  return {
    props: { home, footer, header },
  };
}

export default Homepage;
