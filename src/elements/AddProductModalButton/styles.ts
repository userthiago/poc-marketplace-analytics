import styled from 'styled-components';

export const AddProductModalButtonContainer = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  height: 3rem;
  width: 3rem;
  border: 0;
  border-radius: 50%;
  transition: background-color 0.4s ease;

  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
