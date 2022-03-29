import Link from 'next/link';
import React, { useRef } from 'react';
import { FiPlus } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';
import ButtonShop from '../../elements/ButtonShop';
import ProductCartItem from '../../elements/ProductCartItem';
import { useCartContext } from '../../hooks/useCartContext';

import { CartListContainer } from './styles';

type CartListProps = {
  cartState: boolean;
  onCloseCart: () => void;
};

const CartList: React.FC<CartListProps> = ({ cartState, onCloseCart }) => {
  const { productList, CART_TOTAL_PRICE } = useCartContext();
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={cartState}
      timeout={400}
      classNames="cartContent"
      unmountOnExit
    >
      <CartListContainer ref={nodeRef}>
        <div className="cartContent__header">
          <h2>Meu carrinho</h2>
          <button type="button" onClick={onCloseCart}>
            <FiPlus />
          </button>
        </div>
        {productList.length > 0 ? (
          <div className="cartContent__cartWithProducts">
            <div className="cartWithProducts__products">
              {productList.map((product) => (
                <ProductCartItem key={product.id} data={product} />
              ))}
            </div>
            <div className="cartWithProducts__actions">
              <div className="actions__summary">
                <p>Total do pedido:</p>
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(CART_TOTAL_PRICE)}
                </span>
              </div>
              <Link href="/cart">
                <ButtonShop onClick={() => onCloseCart()}>
                  Seguir para a compra
                </ButtonShop>
              </Link>
            </div>
          </div>
        ) : (
          <div className="cartContent__cartWithoutProducts">
            <p>Não há produtos em seu carrinho :(</p>
          </div>
        )}
      </CartListContainer>
    </CSSTransition>
  );
};

export default CartList;
