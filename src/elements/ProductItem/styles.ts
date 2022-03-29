import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.primaryLight};
  width: 350px;
  border-radius: 0.5rem;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.viewports.medium}) {
    width: calc(50% - 0.5rem);
  }

  @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
    width: calc(50% - 0.5rem);
  }

  @media screen and (max-width: ${({ theme }) => theme.viewports.xsmall}) {
    width: 100%;
  }

  .product__image {
    display: flex;

    height: 350px;
    width: 100%;
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;

    @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
      height: 300px;
    }

    @media screen and (max-width: ${({ theme }) => theme.viewports.xsmall}) {
      height: 400px;
    }

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 0.8rem 0.8rem 0 0;
      transform: scale(1.4);
      transition: transform 0.4s ease;
    }
  }

  .product__content {
    display: flex;
    flex-direction: column;

    height: calc(100% - 350px);

    button {
      background-color: ${({ theme }) => theme.colors.primary};
      height: 2.5rem;
      border: 0;

      color: ${({ theme }) => theme.colors.primaryFontColor};
      font-weight: 500;

      transition: background-color 0.4s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
      height: calc(100% - 300px);
    }

    @media screen and (max-width: ${({ theme }) => theme.viewports.xsmall}) {
      height: calc(100% - 400px);
    }

    > span {
      flex: 1;

      padding: 1rem 0.8rem;

      color: ${({ theme }) => theme.colors.primaryFontColor};
      font-size: 1.2rem;
      font-weight: 500;
    }

    .content__value {
      padding: 0 0.8rem 1rem;

      color: ${({ theme }) => theme.colors.primaryFontColor};

      > span {
        color: ${({ theme }) => theme.colors.gray100};
        font-weight: 600;
      }
    }
  }
`;
