import Head from 'next/head';
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
