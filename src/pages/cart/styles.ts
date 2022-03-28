import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 112px 2rem 2rem;
  overflow-y: auto;

  @media screen and (max-width: ${({ theme }) => theme.viewports.small}) {
    padding: 112px 1rem 1rem;
  }

  .cartContainer__table {
    table {
      border-collapse: collapse;

      thead {
        tr {
          th {
            background-color: ${({ theme }) => theme.colors.primaryDark};
            padding: 1rem;

            color: ${({ theme }) => theme.colors.white};

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
          td {
            padding: 0.5rem;

            text-align: center;

            &:nth-child(1) {
              display: flex;
              align-items: center;

              span {
                margin-left: 1rem;
                font-weight: 500;
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
`;
