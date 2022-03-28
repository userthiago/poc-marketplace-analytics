/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { toast } from 'react-toastify';
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

  const handleAddProductToCart = () => {
    handleProductList({
      id: data.id,
      name: data.shortName,
      imageUrl: data.imageURL,
      amount: 1,
      price: data.value,
    });
    toast.success(
      `O produto ${data.shortName} foi adicionado ao seu carrinho.`,
      {
        position: 'bottom-right',
        theme: 'dark',
        toastId: `add-product-message-${data.id}`,
      },
    );
  };

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
        <button type="button" onClick={handleAddProductToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </ProductContainer>
  );
};

export default ProductItem;
