import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import GoogleTagManager from '../components/GoogleTagManager';
import CartContextProvider from '../context/CartContext';
import GlobalStyle from '../styles/global';
import themeLight from '../styles/themes/light';
import 'react-toastify/dist/ReactToastify.css';
import useRouteChangeGTM from '../hooks/useRouteChangeGTM';

function MyApp({ Component, pageProps }: AppProps) {
  useRouteChangeGTM();

  return (
    <>
      <ThemeProvider theme={themeLight}>
        <CartContextProvider>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer />
        </CartContextProvider>
      </ThemeProvider>
      <GoogleTagManager />
    </>
  );
}

export default MyApp;
