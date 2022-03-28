import Link from 'next/link';
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
      <Link href="/">
        <div className="headerContainer__logo-link">
          <div className="headerContainer__logo headerContainer__logo--desktop">
            POC SHOP
          </div>
          <div className="headerContainer__logo headerContainer__logo--mobile">
            PSHOP
          </div>
        </div>
      </Link>
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
