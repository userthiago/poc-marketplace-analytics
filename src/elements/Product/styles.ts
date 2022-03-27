import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 0.8rem 0.8rem 0.4rem 0.4rem;

  .product__image {
    display: flex;

    height: 350px;
    width: 350px;
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;

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

    > span {
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

    > button {
      background-color: ${({ theme }) => theme.colors.primary};
      height: 2.5rem;
      border: 0;
      border-radius: 0 0 0.4rem 0.4rem;

      color: ${({ theme }) => theme.colors.primaryFontColor};
      font-weight: 500;

      transition: background-color 0.4s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
      }
    }
  }
`;
