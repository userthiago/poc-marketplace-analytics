import React from 'react';

import { ProductCartItemContainer } from './styles';

type ProductCartItemContainerProps = {
  data: {
    id: string;
    name: string;
    imageUrl: string;
    amount: number;
    price: number;
  };
};

const ProductCartItem: React.FC<ProductCartItemContainerProps> = ({ data }) => {
  return (
    <ProductCartItemContainer>
      <div className="productCartItem__image">
        <img src={data.imageUrl} alt={data.name} />
      </div>
      <div className="productCartItem__content">
        <p>{data.name}</p>
        <div className="content__values">
          <div>
            Qtd.&nbsp;
            {data.amount}
          </div>
          <div>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(data.price)}
          </div>
        </div>
      </div>
    </ProductCartItemContainer>
  );
};

export default ProductCartItem;
