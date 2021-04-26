import { PropsWithServerCache } from '@gqless/react';
import { useQuery } from '../gqless';
import { Layout } from '../components/layout';

interface Props extends PropsWithServerCache {}

export default function Page({ cacheSnapshot }: Props) {
  const query = useQuery();

  return (
    <Layout>
      <h1>About</h1>
      <article>{query.shop.primaryDomain.host}</article>
    </Layout>
  );
}
