import styled, { css, keyframes } from 'styled-components';

interface ButtonShopContainerProps {
  $loading: boolean;
}

const spinAnimation = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

export const ButtonShopContainer = styled.button<ButtonShopContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primaryLight};
  height: 3rem;
  width: 100%;
  border: 0;
  border-radius: 0.4rem;

  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-weight: 500;

  transition: background-color 0.4s ease, color 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray600};
  }

  ${({ $loading }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    $loading &&
    css`
      background-color: ${({ theme }) => theme.colors.gray500};
      cursor: not-allowed;

      color: ${({ theme }) => theme.colors.white};
      font-size: 1.4rem;

      svg {
        animation: ${spinAnimation} 1s linear infinite;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray500};

        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
