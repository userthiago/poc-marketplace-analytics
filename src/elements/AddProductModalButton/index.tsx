import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { AddProductModalButtonContainer } from './styles';

const AddProductModalButton: React.FC = () => {
  return (
    <AddProductModalButtonContainer type="button">
      <FiPlus />
    </AddProductModalButtonContainer>
  );
};

export default AddProductModalButton;
