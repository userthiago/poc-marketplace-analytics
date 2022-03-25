import Link from 'next/link';
import React from 'react';
import { FiShoppingBag, FiUser } from 'react-icons/fi';
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
          <button type="button">
            <FiShoppingBag />
            <span>Produtos</span>
          </button>
        </Link>
      </nav>
    </NavigationContainer>
  );
};

export default Navigation;
