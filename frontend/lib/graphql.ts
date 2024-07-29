import { ApolloClient, InMemoryCache } from '@apollo/client';

export function getHostOrigin() {
  if (process.env.BACKEND_HOST) {
    return process.env.BACKEND_HOST;
  }

  if (process.env.GITPOD_WORKSPACE_URL) {
    const gitpodUrl = new URL(process.env.GITPOD_WORKSPACE_URL as string);
    const port = 8080;
    gitpodUrl.hostname = `${port}-${gitpodUrl.hostname}`;
    return gitpodUrl.origin;
  }

  return 'http://localhost:8000';
}

export function getGraphQLHost() {
  return `${getHostOrigin()}/api/graphql/`;
}

export const client = new ApolloClient({
  uri: getGraphQLHost(),
  cache: new InMemoryCache(),
});
