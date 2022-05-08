import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';
import client from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}