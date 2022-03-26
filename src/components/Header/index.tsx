import React, { useState } from 'react';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import FullBackground from '../../elements/FullBackground';

import CartList from '../CartList';
import { Cart, CartContainer, HeaderContainer, SearchInput } from './styles';

const Header: React.FC = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const onCartButtonClick = () => {
    setCartOpen((oldState) => !oldState);
  };

  return (
    <HeaderContainer>
      <SearchInput>
        <FiSearch />
        <input placeholder="Buscar produtos e muito mais..." />
      </SearchInput>
      <CartContainer>
        <Cart onClick={onCartButtonClick}>
          <FiShoppingCart />
        </Cart>
        <CartList cartState={isCartOpen} onCloseCart={onCartButtonClick} />
      </CartContainer>
      <FullBackground
        backgroundState={isCartOpen}
        onCloseFunction={onCartButtonClick}
      />
    </HeaderContainer>
  );
};

export default Header;
