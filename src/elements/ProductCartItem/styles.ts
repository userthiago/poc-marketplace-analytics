import styled from 'styled-components';

export const ProductCartItemContainer = styled.div`
  display: flex;
  align-items: center;

  height: 104px;

  .productCartItem__image {
    flex-shrink: 0;

    height: 6.5rem;
    width: 4.5rem;
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

    .content__header {
      display: flex;

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        background-color: ${({ theme }) => theme.colors.primaryLight};
        height: 1.6rem;
        width: 1.6rem;
        border: 0;
        border-radius: 50%;
        margin-left: 0.5rem;
        transition: all 0.4s ease;

        color: ${({ theme }) => theme.colors.primaryFontColor};

        &:hover {
          background-color: ${({ theme }) => theme.colors.primaryDark};
        }

        @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
          height: 2rem;
          width: 2rem;
        }
      }

      > p {
        font-weight: 500;
      }
    }

    .content__values {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 1rem;

      .values__amount {
        display: flex;
        align-items: center;

        height: 1.5rem;
        border: solid 1px ${({ theme }) => theme.colors.gray400};
        border-radius: 0.2rem;

        span {
          padding: 0 0.4rem;

          font-size: 0.9rem;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;

          background-color: ${({ theme }) => theme.colors.primaryLight};
          height: 100%;
          width: 1.6rem;
          border: 0;
          border-radius: 0.15rem;
          transition: all 0.4s ease;

          color: ${({ theme }) => theme.colors.primaryFontColor};

          &:hover {
            background-color: ${({ theme }) => theme.colors.primaryDark};
          }

          &:disabled {
            background-color: ${({ theme }) => theme.colors.disabled};
            cursor: not-allowed;

            color: ${({ theme }) => theme.colors.disabledFontColor};

            &:hover {
              background-color: ${({ theme }) => theme.colors.disabled};

              color: ${({ theme }) => theme.colors.disabledFontColor};
            }
          }
        }

        @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
          height: 1.8rem;

          button {
            width: 1.8rem;
            height: 1.8rem;
          }
        }

        button:first-child {
          margin-right: 0.5rem;
        }

        button:last-child {
          margin-left: 0.5rem;
        }
      }

      .values__price {
        color: #03045e;
        font-size: 0.9rem;
        font-weight: 500;

        @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
          font-size: 1rem;
        }
      }
    }
  }
`;
