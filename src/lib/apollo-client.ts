import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://graphql-pokemon2.vercel.app/",
});

export function makeClient() {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
}
