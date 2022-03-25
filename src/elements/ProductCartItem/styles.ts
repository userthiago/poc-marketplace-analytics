import styled from 'styled-components';

export const ProductCartItemContainer = styled.div`
  display: flex;
  align-items: center;

  height: 104px;

  .productCartItem__image {
    flex-shrink: 0;

    height: 104px;
    width: 72px;
    overflow: hidden;
    border-radius: 0.2rem;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transform: scale(1.2);
      border-radius: 0.2rem;
    }
  }

  .productCartItem__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    margin-left: 0.8rem;
    padding: 0.8rem 0;

    > p {
      font-weight: 500;
    }

    .content__values {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 0.5rem;
    }
  }
`;
