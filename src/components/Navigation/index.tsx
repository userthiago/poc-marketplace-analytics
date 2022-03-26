import React from 'react';
import Link from 'next/link';
import { FiLogOut, FiShoppingBag, FiUser } from 'react-icons/fi';

import { ButtonStyled } from '../../elements/Button';

import { LogoContainer, NavigationContainer, ProfileContainer } from './styles';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <LogoContainer>
        <h1>POC Shop</h1>
      </LogoContainer>
      <nav>
        <Link href="/">
          <ButtonStyled type="button">
            <FiShoppingBag />
            <span>Produtos</span>
          </ButtonStyled>
        </Link>
      </nav>
      <ProfileContainer>
        <div className="profile__picture">
          <FiUser />
        </div>
        <span>Thiago Santos</span>
      </ProfileContainer>
      <ButtonStyled type="button">
        <FiLogOut />
        <span>Sair</span>
      </ButtonStyled>
    </NavigationContainer>
  );
};

export default Navigation;
