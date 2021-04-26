/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from '@gqless/react';

import { createClient, QueryFetcher } from 'gqless';
import {
  generatedSchema,
  scalarsEnumsHash,
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated';

const queryFetcher: QueryFetcher = async function (query, variables) {
  // Modify "https://graphql.myshopify.com/api/graphql" if needed
  const response = await fetch('https://graphql.myshopify.com/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': 'dd4d4dc146542ba7763305d71d1b3d38',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
  });

  const json = await response.json();

  return json;
};

export const client = createClient<GeneratedSchema, SchemaObjectTypesNames, SchemaObjectTypes>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

export const { query, mutation, mutate, subscription, resolved, refetch } = client;

export const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export * from './schema.generated';
