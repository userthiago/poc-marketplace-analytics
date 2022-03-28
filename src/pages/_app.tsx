import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import CartContextProvider from '../context/CartContext';
import GlobalStyle from '../styles/global';
import themeLight from '../styles/themes/light';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeLight}>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
