import React from 'react';

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
        <button type="button">Adicionar ao carrinho</button>
      </div>
    </ProductContainer>
  );
};

export default ProductItem;
