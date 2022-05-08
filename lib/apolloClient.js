import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { GRAPHCMS_URL, GRAPHCMS_PERMANENTAUTH_TOKEN } from '../lib/constants';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: GRAPHCMS_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${GRAPHCMS_PERMANENTAUTH_TOKEN}`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;