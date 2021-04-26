import { GetStaticProps } from 'next';
import { PropsWithServerCache } from '@gqless/react';
import { prepareReactRender, useHydrateCache, useQuery } from '../gqless';
import { Layout } from '../components/layout';

interface Props extends PropsWithServerCache {}

export default function Page({ cacheSnapshot }: Props) {
  useHydrateCache({ cacheSnapshot });
  const query = useQuery();

  return (
    <Layout>
      <h1>About</h1>
      <article>{query.shop.primaryDomain.host}</article>
    </Layout>
  );
}

export const getServerSideProps: GetStaticProps<Props> = async (_ctx) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return { props: { cacheSnapshot } };
};
