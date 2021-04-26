/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: 'https://graphql.myshopify.com/api/graphql',
    headers: { 'X-Shopify-Storefront-Access-Token': 'dd4d4dc146542ba7763305d71d1b3d38' },
  },
  destination: './src/gqless/index.ts',
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
