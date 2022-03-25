/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { useCartContext } from '../../hooks/useCartContext';

import { ProductContainer } from './styles';

interface ProductItemProps {
  data: {
    id: string;
    name: string;
    shortName: string;
    description: string;
    imageURL: string;
    value: number;
  };
}
const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  const { handleProductList } = useCartContext();
  return (
    <ProductContainer>
      <div className="product__image">
        <img src={data.imageURL} alt={`${data.imageURL}`} />
      </div>
      <div className="product__content">
        <span>{data.shortName}</span>
        <div className="content__value">
          Por&nbsp;
          <span>
            R$&nbsp;
            {data.value}
          </span>
        </div>
        <button
          type="button"
          onClick={() =>
            handleProductList({
              id: data.id,
              name: data.shortName,
              imageUrl: data.imageURL,
              amount: 1,
              price: data.value,
            })
          }
        >
          Adicionar ao carrinho
        </button>
      </div>
    </ProductContainer>
  );
};

export default ProductItem;
