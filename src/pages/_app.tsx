import { AppProps } from 'next/app';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Navigation />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
