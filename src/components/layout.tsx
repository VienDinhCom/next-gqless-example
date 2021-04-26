import { ReactNode } from 'react';
import Link from 'next/link';
import { useQuery } from '../gqless';

interface Props {
  children: ReactNode;
}

export function Layout(props: Props) {
  const query = useQuery();

  return (
    <>
      <nav>
        <h1>{query.shop.name}</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <main>{props.children}</main>
    </>
  );
}
