import styled from 'styled-components';

export const CartListContainer = styled.div`
  z-index: 500;
  position: absolute;
  top: 4rem;
  right: -20px;

  background: ${({ theme }) => theme.colors.white};
  width: 23rem;
  border-radius: 10px;

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    right: 1rem;

    background: ${({ theme }) => theme.colors.white};
    height: 25px;
    width: 25px;
    transform: rotate(45deg) translateX(-50%);
  }

  @media (max-width: ${({ theme }) => theme.viewports.small}) {
    top: 4.5rem;
    right: 0;
    left: 0;

    width: calc(100% - 1rem);
    margin: 0 0.5rem;

    &:before {
      top: 0px;
      right: 0.9rem;

      height: 1rem;
      width: 1rem;
    }
  }

  .cartContent__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.9375rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

    h2 {
      margin: 0;

      color: ${({ theme }) => theme.colors.primaryLight};
      font-size: 1rem;
      font-weight: 700;
    }

    button {
      background: transparent;
      border: 0;
      transform: rotate(45deg);
      transition: color 400ms ease;

      color: ${({ theme }) => theme.colors.primaryLight};
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }

    @media (max-width: ${({ theme }) => theme.viewports.small}) {
      h2 {
        font-size: 1.2rem;
      }
    }
  }

  .cartContent__cartWithoutProducts {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem 1rem;
  }

  .cartContent__cartWithProducts {
    .cartWithProducts__products {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      max-height: 22rem;
      padding: 0.9375rem;
      border-bottom: 1px solid #f1f1f1;
      overflow-y: auto;

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f1f1f1;
      }

      &::-webkit-scrollbar {
        width: 8px;
        background-color: #ffffff;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }

    .cartWithProducts__actions {
      padding: 0.8rem;

      background: ${({ theme }) => theme.colors.primary};
      border-radius: 0 0 10px 10px;

      .actions__summary {
        display: flex;
        justify-content: space-between;

        font-size: 0.875rem;
        margin-bottom: 1rem;

        > p {
          color: ${({ theme }) => theme.colors.primaryFontColor};
          font-weight: 700;
        }

        > span {
          color: ${({ theme }) => theme.colors.primaryFontColor};
          font-weight: 700;
        }

        @media (max-width: ${({ theme }) => theme.viewports.small}) {
          font-size: 1rem;
        }
      }
    }
  }

  .cartContent__emptyCart {
  }

  &.cartContent-enter {
    opacity: 0;
  }

  &.cartContent-enter-active {
    opacity: 1;
    transition: opacity 400ms ease;
  }

  &.cartContent-exit {
    opacity: 1;
  }

  &.cartContent-exit-active {
    opacity: 0;
    transition: opacity 400ms ease;
  }
`;
