import React from 'react';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCartContext } from '../../hooks/useCartContext';

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
  const {
    handleRemoveProductAmount,
    handleAddProductAmount,
    handleRemoveProduct,
  } = useCartContext();

  return (
    <ProductCartItemContainer>
      <div className="productCartItem__image">
        <img src={data.imageUrl} alt={data.name} />
      </div>
      <div className="productCartItem__content">
        <div className="content__header">
          <p>{data.name}</p>
          <button type="button" onClick={() => handleRemoveProduct(data.id)}>
            <FiTrash2 />
          </button>
        </div>
        <div className="content__values">
          <div className="values__amount">
            <button
              type="button"
              onClick={() => handleRemoveProductAmount(data.id)}
              disabled={data.amount === 1}
            >
              <FiMinus />
            </button>
            <span>{data.amount.toString().padStart(2, '0')}</span>
            <button
              type="button"
              onClick={() => handleAddProductAmount(data.id)}
            >
              <FiPlus />
            </button>
          </div>
          <div className="values__price">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(data.price * data.amount)}
          </div>
        </div>
      </div>
    </ProductCartItemContainer>
  );
};

export default ProductCartItem;
