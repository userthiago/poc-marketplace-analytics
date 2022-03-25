import { AppProps } from 'next/app';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { BodyContainer } from '../styles/bodyStyles';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BodyContainer>
      <GlobalStyle />
      <Navigation />
      <Header />
      <Component className="main-container" {...pageProps} />
    </BodyContainer>
  );
}

export default MyApp;
