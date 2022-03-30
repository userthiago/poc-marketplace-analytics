import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  padding: 112px 2rem 2rem;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.viewports.small}) {
    padding: 112px 1rem 1rem;
  }

  .cartContainer__title {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .cartContainer__finishPurchase {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    svg {
      animation: ${spinAnimation} 1s linear infinite;

      color: ${({ theme }) => theme.colors.primaryLight};
      font-size: 3rem;
    }

    .finishPurchase__phrase {
      color: ${({ theme }) => theme.colors.primaryLight};
      font-weight: 500;
      text-align: center;
    }
  }

  .cartContainer__table {
    width: 100%;

    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        @media (max-width: ${({ theme }) => theme.viewports.small}) {
          display: none;
        }
        tr {
          th {
            background-color: ${({ theme }) => theme.colors.primaryDark};
            padding: 1rem;

            color: ${({ theme }) => theme.colors.white};

            &:nth-child(1) {
              width: 50%;
            }
            &:nth-child(2) {
              width: 11%;
            }
            &:nth-child(3) {
              width: 11%;
            }
            &:nth-child(4) {
              width: 11%;
            }
            &:nth-child(5) {
              width: 6%;
            }

            &:first-child {
              border-radius: 0.5rem 0 0 0;
              text-align: start;
            }

            &:last-child {
              border-radius: 0 0.5rem 0 0;
            }
          }
        }
      }

      tbody {
        tr {
          border: solid 1px ${({ theme }) => theme.colors.gray400};

          @media (max-width: ${({ theme }) => theme.viewports.small}) {
            display: grid;
            grid-template-areas:
              'product product  delete'
              'amount  total    total';

            & + tr {
              margin-top: 0.5rem;
            }
          }

          td {
            padding: 0.5rem;

            text-align: center;

            &:nth-child(1) {
              display: flex;
              align-items: center;
              text-align: start;

              span {
                margin-left: 1rem;
                font-weight: 500;
              }
            }

            @media (max-width: ${({ theme }) => theme.viewports.small}) {
              display: flex;
              align-items: center;

              &:nth-child(1) {
                grid-area: product;
              }

              &:nth-child(2) {
                display: none;
              }

              &:nth-child(3) {
                grid-area: amount;
                justify-self: flex-start;
              }

              &:nth-child(4) {
                grid-area: total;
                justify-self: flex-end;

                font-weight: 500;

                &:after {
                  content: '/total';
                }
              }

              &:nth-child(5) {
                justify-self: flex-end;
                grid-area: delete;

                button {
                  font-size: 1.2rem;
                }
              }
            }

            .table__product-image {
              height: 50px;
              width: 40px;
              overflow: hidden;
              flex-shrink: 0;

              img {
                width: 100%;
                transform: scale(1.6);
                object-fit: cover;
              }
            }

            .table__product-amount {
              display: flex;
              align-items: center;
              justify-content: center;

              height: 1.5rem;
              border-radius: 0.2rem;
              margin: 0 auto;

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

              button:first-child {
                margin-right: 0.5rem;
              }

              button:last-child {
                margin-left: 0.5rem;
              }
            }

            .table__remove-product {
              background: transparent;
              border: 0;

              font-size: 1rem;
              line-height: 0;
            }
          }
        }
      }
    }
  }

  .cartContainer__summary {
    display: flex;
    justify-content: flex-end;

    background-color: ${({ theme }) => theme.colors.primaryDark};
    width: 100%;
    padding: 1rem;
    margin: 1.5rem 0 0.5rem;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.colors.primaryFontColor};

    tr td {
      padding: 0.5rem;

      text-align: end;

      &:first-child {
        color: ${({ theme }) => theme.colors.gray500};
      }
    }

    tr {
      &:last-child {
        font-weight: 600;

        td {
          border-top: solid 1px ${({ theme }) => theme.colors.gray600};
        }
      }
    }
  }

  .cartContainer__actions {
    width: 100%;

    button {
      width: 280px;
      margin-left: auto;

      @media (max-width: ${({ theme }) => theme.viewports.small}) {
        width: 100%;
      }
    }
  }

  .cartContainer__empytCart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray500};
    }

    p {
      margin-bottom: 1rem;

      font-weight: 500;
    }
  }
`;
