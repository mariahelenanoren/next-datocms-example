import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /*  PageProps innehåller data som pages tar emot från getStaticProps, se index.tsx som ett expempel på detta. Så här hämtar _app.tsx upp sidornas footerdata och skickar vidare till layout komponenten */
    <Layout footer={pageProps.footer} header={pageProps.header}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
