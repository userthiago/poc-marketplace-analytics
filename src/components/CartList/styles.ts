import styled from 'styled-components';

export const CartListContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: -20px;

  background: #ffffff;
  width: 23rem;
  border-radius: 10px;
  border: solid 1px #0096c7;

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    right: 1rem;

    background: #ffffff;
    height: 25px;
    width: 25px;
    transform: rotate(45deg) translateX(-50%);
    border-top: solid 1px #0096c7;
    border-left: solid 1px #0096c7;
  }

  .cartContent__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.9375rem;
    border-bottom: 1px solid #0096c7;

    h2 {
      margin: 0;

      color: #0077b6;
      font-size: 1rem;
      font-weight: 500;
    }

    button {
      background: transparent;
      border: 0;
      transform: rotate(45deg);
      transition: color 400ms ease;

      color: #0077b6;
      font-size: 1.5rem;

      &:hover {
        color: #023e8a;
      }
    }
  }

  .cartContent__fullCart {
    .fullCart__products {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      max-height: 22rem;
      padding: 0.9375rem;
      border-bottom: 1px solid #f1f1f1f1;
      overflow-y: auto;

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f1f1f1f1;
      }

      &::-webkit-scrollbar {
        width: 8px;
        background-color: #ffffff;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #0096c7;
      }
    }

    .actions__summary {
      display: flex;
      justify-content: space-between;

      font-size: 0.875rem;
      margin-bottom: 1rem;

      > p {
        color: #023e8a;
        font-weight: 700;
      }

      > span {
        color: #03045e;
        font-weight: 700;
      }
    }

    .fullCart__actions {
      padding: 0.8rem;

      background: #00b4d8;
      border-radius: 0 0 10px 10px;

      button {
        background-color: #0077b6;
        height: 3rem;
        width: 100%;
        border: 0;
        border-radius: 0.4rem;

        color: #ffffff;
        font-weight: 500;

        transition: background-color 0.4s ease;

        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }

  .cartContent__emptyCart {
    padding: 0.9375rem;

    p {
      padding: 0.8rem 0;

      color: #03045e;
      font-size: 0.8rem;
      text-align: center;
      font-weight: 700;
    }

    > button.btn-xs {
      width: 100%;
    }
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
