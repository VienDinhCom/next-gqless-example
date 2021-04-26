import { useQuery } from '../gqless';
import { Layout } from '../components/layout';

export default function Page() {
  const query = useQuery();

  return (
    <Layout>
      <h1>Home</h1>
      <p>{query.shop.name}</p>
    </Layout>
  );
}
