import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  flex-shrink: 0;

  height: 80px;
  width: 100%;
  padding: 0 2rem;
  border-bottom: solid 1px #0096c7;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  background-color: #caf0f8;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 1.25rem;

  color: #023e8a;

  input {
    margin-left: 0.5rem;

    background-color: #caf0f8;
    width: 100%;
    padding: 0.5rem;
    border: 0;

    color: #023e8a;

    &::placeholder {
      color: #0096c7;
    }
  }
`;

export const Cart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: #0077b6;
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 1rem;
  border: 0;
  border-radius: 50%;
  transition: background-color 0.4s ease-out;

  color: #ffffff;
  font-size: 1rem;

  &:hover {
    background-color: #023e8a;
  }
`;

export const CartContainer = styled.div`
  position: relative;
`;
