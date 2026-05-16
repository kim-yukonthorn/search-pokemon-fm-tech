"use client";

import { ApolloProvider } from "@apollo/client/react";
import { makeClient } from "@/lib/apollo-client";
import { useMemo } from "react";

export default function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useMemo(() => makeClient(), []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
