import React, { useRef } from 'react';
import { FiPlus } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';
import ProductCartItem from '../../elements/ProductCartItem';
import { useCartContext } from '../../hooks/useCartContext';
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';

import { CartListContainer } from './styles';

type CartListProps = {
  cartState: boolean;
  onCloseCart: () => void;
};

const CartList: React.FC<CartListProps> = ({ cartState, onCloseCart }) => {
  const { productList } = useCartContext();
  const nodeRef = useRef(null);

  useOutsideAlerter({ ref: nodeRef, action: onCloseCart });

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
        <div>
          <div className="cartContent__fullCart">
            <div className="fullCart__products">
              {productList.map((product) => (
                <ProductCartItem key={product.id} data={product} />
              ))}
            </div>
            <div className="fullCart__actions">
              <div className="actions__summary">
                <p>Total do pedido:</p>
                <span>R$ 00,00</span>
              </div>
              <button type="button" id="sc_comprar-carrinho">
                Seguir para a compra
              </button>
            </div>
          </div>
        </div>
      </CartListContainer>
    </CSSTransition>
  );
};

export default CartList;
