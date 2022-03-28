import React, { HTMLAttributes } from 'react';
import { CgSpinner } from 'react-icons/cg';

import { ButtonShopContainer } from './styles';

interface ButtonShopProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const ButtonShop: React.FC<ButtonShopProps> = ({
  loading,
  children,
  ...props
}) => {
  return (
    <ButtonShopContainer $loading={loading} disabled={loading} {...props}>
      {loading ? <CgSpinner /> : children}
    </ButtonShopContainer>
  );
};

export default ButtonShop;
