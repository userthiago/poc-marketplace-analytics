import React from 'react';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';

import { Cart, HeaderContainer, SearchInput } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchInput>
        <FiSearch />
        <input placeholder="Buscar produtos e muito mais..." />
      </SearchInput>
      <Cart>
        <FiShoppingCart />
      </Cart>
    </HeaderContainer>
  );
};

export default Header;
