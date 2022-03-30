import Head from 'next/head';
import React from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import ButtonShop from '../../elements/ButtonShop';
import { useCartContext } from '../../hooks/useCartContext';
import { CartContainer } from '../../styles/Cart/styles';

const Cart: React.FC = () => {
  const {
    handleRemoveProductAmount,
    handleAddProductAmount,
    handleRemoveProduct,
    productList,
    CART_TOTAL_PRICE,
  } = useCartContext();

  return (
    <>
      <Head>
        <title>POC Shop - Meu carrinho</title>
        <meta
          name="description"
          content="POC about data layers for Google Analytics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartContainer>
        <div className="cartContainer__title">
          <h2>Meu carrinho</h2>
        </div>
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
                  <td>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(product.price)}
                  </td>
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
        <div className="cartContainer__summary">
          <div className="summary__content">
            <tr className="content__subtotal">
              <td>Subtotal</td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(CART_TOTAL_PRICE)}
              </td>
            </tr>
            <tr className="content__subtotal">
              <td>Entrega</td>
              <td>Grátis</td>
            </tr>
            <tr className="content__total">
              <td>Total</td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(CART_TOTAL_PRICE)}
              </td>
            </tr>
          </div>
        </div>
        <div className="cartContainer__actions">
          <ButtonShop>Finalizar Compra</ButtonShop>
        </div>
      </CartContainer>
    </>
  );
};

export default Cart;