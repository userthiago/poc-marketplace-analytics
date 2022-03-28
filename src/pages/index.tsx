import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ProductItem from '../elements/Product';
import { api } from '../services/api';

import { HomeContainer, ProductsListContainer } from '../styles/Home/styles';

interface ProductData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  imageURL: string;
  value: number;
}

const Home: React.FC = () => {
  const [productsList, setProductsList] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProductList = () => {
      return api
        .get<ProductData[]>('/products')
        .then((res) => setProductsList(res.data));
    };

    fetchProductList();
  }, []);

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
          {productsList.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </ProductsListContainer>

        {/* <AddProductModalButton /> */}
      </HomeContainer>
    </>
  );
};

export default Home;
