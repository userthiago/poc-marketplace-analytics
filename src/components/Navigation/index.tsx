import React from 'react';
import Link from 'next/link';
import { FiLogOut, FiShoppingBag, FiUser } from 'react-icons/fi';

import { ButtonStyled } from '../../elements/Button';

import { NavigationContainer, ProfileContainer } from './styles';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <ProfileContainer>
        <div className="profile__picture">
          <FiUser />
        </div>
        <span>Thiago Santos</span>
      </ProfileContainer>
      <nav>
        <Link href="/">
          <ButtonStyled type="button">
            <FiShoppingBag />
            <span>Produtos</span>
          </ButtonStyled>
        </Link>
      </nav>
      <ButtonStyled type="button">
        <FiLogOut />
        <span>Sair</span>
      </ButtonStyled>
    </NavigationContainer>
  );
};

export default Navigation;
