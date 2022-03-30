import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

import ProductItem from '../elements/ProductItem';
import { loadProducts, ProductData } from '../services/loadProducts';

import { HomeContainer, ProductsListContainer } from '../styles/Home/styles';

interface HomeProps {
  products: ProductData[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>POC Shop</title>

        <meta
          name="description"
          content="POC about data layers for Google Analytics"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Teste */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T23BLL6');
            `}
        </Script>
      </Head>
      <HomeContainer>
        <ProductsListContainer>
          {products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </ProductsListContainer>
      </HomeContainer>
    </>
  );
};

export async function getServerSideProps() {
  const products = await loadProducts();

  return { props: { products } };
}

export default Home;
