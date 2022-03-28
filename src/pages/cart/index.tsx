import React from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { useCartContext } from '../../hooks/useCartContext';
import { CartContainer } from '../../styles/Cart/styles';

const Cart: React.FC = () => {
  const {
    handleRemoveProductAmount,
    handleAddProductAmount,
    handleRemoveProduct,
    productList,
  } = useCartContext();

  return (
    <CartContainer>
      <div className="cartContainer__table">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr>
                <td>
                  <div className="table__product-image">
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                  <span>{product.name}</span>
                </td>
                <td>{product.price}</td>
                <td>
                  <div className="table__product-amount">
                    <button
                      type="button"
                      onClick={() => handleRemoveProductAmount(product.id)}
                      disabled={product.amount === 1}
                    >
                      <FiMinus />
                    </button>
                    <span>{product.amount.toString().padStart(2, '0')}</span>
                    <button
                      type="button"
                      onClick={() => handleAddProductAmount(product.id)}
                    >
                      <FiPlus />
                    </button>
                  </div>
                </td>
                <td>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.price * product.amount)}
                </td>
                <td>
                  <button
                    className="table__remove-product"
                    type="button"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <FiX />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CartContainer>
  );
};

export default Cart;
