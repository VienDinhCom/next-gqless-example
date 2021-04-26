import { useQuery } from '../gqless';
import { Layout } from '../components/layout';
import NoSSR from 'react-no-ssr';

function Test() {
  const query = useQuery();
  return <p>{query.shop.moneyFormat}</p>;
}

export default function Page() {
  return (
    <Layout>
      <h1>No SSR</h1>
      <NoSSR>
        <Test />
      </NoSSR>
    </Layout>
  );
}
