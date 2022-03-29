import styled from 'styled-components';

export const HeaderContainer = styled.header`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  flex-shrink: 0;

  background: ${({ theme }) => theme.colors.gray200};
  height: 80px;
  width: 100%;
  padding: 0 2rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray400};

  .headerContainer__logo {
    margin-right: 1rem;

    font-size: 1.8rem;
    font-weight: 900;

    &--mobile {
      display: none;
    }
  }

  .headerContainer__logo-link {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.viewports.small}) {
    padding: 0 1rem;

    .headerContainer__logo {
      font-size: 1.2rem;

      &--desktop {
        display: none;
      }

      &--mobile {
        display: block;
      }
    }
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 1.25rem;

  color: ${({ theme }) => theme.colors.primary};

  input {
    margin-left: 0.5rem;

    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 0.5rem;
    border: 0;

    color: ${({ theme }) => theme.colors.primary};

    &::placeholder {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

export const Cart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.primary};
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 1rem;
  border: 0;
  border-radius: 50%;
  transition: background-color 0.4s ease-out;

  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const CartContainer = styled.div`
  z-index: 500;
  position: relative;

  @media (max-width: ${({ theme }) => theme.viewports.small}) {
    position: initial;
  }
`;
