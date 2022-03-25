import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  background-color: #03045e;
  border-radius: 0.8rem 0.8rem 0.4rem 0.4rem;

  .product__image {
    display: flex;

    height: 350px;
    width: 350px;
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 0.8rem 0.8rem 0 0;
      transform: scale(1.4);
    }
  }

  .product__content {
    display: flex;
    flex-direction: column;

    > span {
      padding: 1rem 0.8rem;

      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .content__value {
      padding: 0 0.8rem 1rem;

      color: #ffffff;

      > span {
        color: #caf0f8;
        font-weight: 600;
      }
    }

    > button {
      background-color: #0077b6;
      height: 2.5rem;
      border: 0;
      border-radius: 0 0 0.4rem 0.4rem;

      color: #ffffff;
      font-weight: 500;

      transition: background-color 0.4s ease;

      &:hover {
        background-color: #023e8a;
      }
    }
  }
`;
