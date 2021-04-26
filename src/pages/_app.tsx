import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import { PropsWithServerCache } from '@gqless/react';
import { prepareReactRender, useHydrateCache, useQuery } from '../gqless';

interface Props extends PropsWithServerCache<AppProps> {}

function MyApp({ Component, pageProps, cacheSnapshot }: Props) {
  useHydrateCache({ cacheSnapshot, shouldRefetch: false });

  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { cacheSnapshot } = await prepareReactRender(<MyApp {...{ ...appContext, ...appProps }} />);

  return { ...appProps, cacheSnapshot };
};

export default MyApp;
