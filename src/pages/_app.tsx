import { AppProps } from 'next/app';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CartContextProvider from '../context/CartContext';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Header />
      <Navigation />
      <Component {...pageProps} />
      <GlobalStyle />
    </CartContextProvider>
  );
}

export default MyApp;
